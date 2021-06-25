import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DirectoryNote } from '../../core/models/directory-note';

@Component({
  selector: 'app-explorer-note',
  templateUrl: './explorer-note.component.html',
  styleUrls: ['./explorer-note.component.css', '../_shared.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExplorerNoteComponent implements OnInit {
  @Input() public note?: DirectoryNote;
  @Input() public level = 0;

  constructor() {}

  ngOnInit(): void {}
}
