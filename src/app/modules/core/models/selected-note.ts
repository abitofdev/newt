import { DirectoryFolder } from './directory-folder';
import { DirectoryNote } from './directory-note';

export class SelectedNote {
  private readonly _folder: DirectoryFolder;
  private readonly _note: DirectoryNote;

  constructor(folder: DirectoryFolder, note: DirectoryNote) {
    this._folder = folder;
    this._note = note;
  }

  public get noteFilePath(): string {
    return `${this._folder.path}\\${this._note.name}${DirectoryNote.extension}`;
  }
}
