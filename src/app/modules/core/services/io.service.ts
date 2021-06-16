import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { NativeBridgeService } from './native-bridge.service';

@Injectable({
  providedIn: 'root',
})
export class IOService {
  private readonly _testPath = 'c:\\temp\\note1.json';

  constructor(private readonly _bridge: NativeBridgeService) {}

  public async saveNoteAsync(note: Note): Promise<void> {
    const serialized = JSON.stringify(note);
    await this._bridge.writeFileAsync(this._testPath, serialized);
  }

  public async loadNoteAsync(): Promise<Note> {
    const rawFileContent = await this._bridge.readFileAsync(this._testPath);
    const deserialized: Note = JSON.parse(rawFileContent);
    return deserialized;
  }
}
