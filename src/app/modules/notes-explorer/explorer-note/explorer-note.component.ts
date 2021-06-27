import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DirectoryFolder } from '../../core/models/directory-folder';
import { DirectoryNote } from '../../core/models/directory-note';
import { DirectoryRoot } from '../../core/models/directory-root';
import { SelectedNote } from '../../core/models/selected-note';
import { AppService } from '../../core/services/app.service';

@Component({
  selector: 'app-explorer-note',
  templateUrl: './explorer-note.component.html',
  styleUrls: ['./explorer-note.component.css', '../_shared.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExplorerNoteComponent implements OnInit {
  @Input() public note?: DirectoryNote;
  @Input() public folder?: DirectoryFolder;
  @Input() public root?: DirectoryRoot;
  @Input() public level = 0;

  constructor(private readonly _appService: AppService) {}

  ngOnInit(): void {}

  public selectNote() {
    if (this.note && this.root) {
      const selectedNote = new SelectedNote(this.root, this.folder, this.note);
      this._appService.selectNote(selectedNote);
    }
  }
}
