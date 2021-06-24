import { DirectoryNote } from './directory-note';

export class DirectoryFolder {
  public readonly path: string;
  public readonly name: string;

  private readonly _children?: (DirectoryFolder | DirectoryNote)[];
  private _childFolders?: DirectoryFolder[];
  private _childNotes?: DirectoryNote[];

  constructor(path: string, name: string, children?: (DirectoryFolder | DirectoryNote)[]) {
    this.path = path;
    this.name = name ?? 'Unknown';

    this._children = children;
    this.computeChildren();
  }

  public get childFolders() {
    return this._childFolders;
  }

  public get childNotes() {
    return this._childNotes;
  }

  private computeChildren() {
    if (!this._children) {
      this._childFolders = undefined;
      this._childNotes = undefined;
      return;
    }

    const childFolders: DirectoryFolder[] = [];
    const childNotes: DirectoryNote[] = [];

    for (const child of this._children) {
      if (child instanceof DirectoryFolder) {
        childFolders.push(child);
      } else {
        childNotes.push(child);
      }
    }

    this._childFolders = childFolders;
    this._childNotes = childNotes;
  }
}
