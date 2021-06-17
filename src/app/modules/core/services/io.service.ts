import { Injectable } from '@angular/core';
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
}
