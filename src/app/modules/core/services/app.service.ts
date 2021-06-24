import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DirectoryFolder } from '../models/directory-folder';
import { DirectoryNote } from '../models/directory-note';
import { SelectedNote } from '../models/selected-note';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly _selectedNote = new BehaviorSubject<SelectedNote | undefined>(undefined);

  constructor() {
    const folder = new DirectoryFolder('C:\\temp', 'temp', undefined);
    const note = new DirectoryNote('note1');
    this._selectedNote.next(new SelectedNote(folder, note));
  }

  public get selectedNote$() {
    return this._selectedNote.asObservable();
  }
}
