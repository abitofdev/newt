import { DirectoryFolder } from './directory-folder';
import { DirectoryNote } from './directory-note';
import { DirectoryRoot } from './directory-root';

export class SelectedNote {
  private readonly _root: DirectoryRoot;
  private readonly _folder: DirectoryFolder;
  private readonly _note: DirectoryNote;

  constructor(root: DirectoryRoot, folder: DirectoryFolder, note: DirectoryNote) {
    this._root = root;
    this._folder = folder;
    this._note = note;
  }

  public get noteFilePath(): string {
    return `${this._root.path}${this._folder?.path ?? ''}${this._note.name}${DirectoryNote.extension}`;
  }
}
