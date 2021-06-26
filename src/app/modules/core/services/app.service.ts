import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DirectoryFolder } from '../models/directory-folder';
import { DirectoryNote } from '../models/directory-note';
import { DirectoryRoot } from '../models/directory-root';
import { SelectedNote } from '../models/selected-note';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly _selectedNote = new BehaviorSubject<SelectedNote | undefined>(undefined);

  constructor() {
    const root = new DirectoryRoot('C:\\temp\\', 'temp', undefined);
    const folder = new DirectoryFolder('', '', undefined);
    const note = new DirectoryNote('note1');
    this._selectedNote.next(new SelectedNote(root, folder, note));
  }

  public get selectedNote$() {
    return this._selectedNote.asObservable();
  }
}
