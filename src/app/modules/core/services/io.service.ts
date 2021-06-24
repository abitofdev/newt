import { Injectable } from '@angular/core';
import { DirectoryRoot } from '../models/directory-root';
import { DirectoryRootLocation } from '../models/directory-root-location';
import { Note } from '../models/note.interface';
import { SelectedNote } from '../models/selected-note';
import { NativeBridgeService } from './native-bridge.service';

@Injectable({
  providedIn: 'root',
})
export class IOService {
  constructor(private readonly _bridge: NativeBridgeService) {}

  public async saveNoteAsync({ noteFilePath }: SelectedNote, note: Note): Promise<void> {
    const serialized = JSON.stringify(note);
    await this._bridge.writeFileAsync(noteFilePath, serialized);
  }

  public async loadNoteAsync({ noteFilePath }: SelectedNote): Promise<Note> {
    const rawFileContent = await this._bridge.readFileAsync(noteFilePath);
    const deserialized: Note = JSON.parse(rawFileContent);
    return deserialized;
  }

  public async readRootDirectory(directoryRoot: DirectoryRootLocation): Promise<DirectoryRoot> {
    const dirContents = await this._bridge.readDir(directoryRoot.path, { recursive: true });
    return DirectoryRoot.fromFileEntries(directoryRoot.path, directoryRoot.name, dirContents);
  }
}
