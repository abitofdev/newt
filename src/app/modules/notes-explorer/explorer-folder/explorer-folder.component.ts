import { Component, Input, OnInit } from '@angular/core';
import { DirectoryFolder } from '../../core/models/directory-folder';

@Component({
  selector: 'app-explorer-folder',
  templateUrl: './explorer-folder.component.html',
  styleUrls: ['./explorer-folder.component.css', '../_shared.css'],
})
export class ExplorerFolderComponent implements OnInit {
  @Input() public folder?: DirectoryFolder;
  @Input() public level = 0;

  private _expanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleExpanded() {
    this._expanded = !this.expanded;
  }

  public get expanded() {
    return this._expanded;
  }

  public get hasContent() {
    return this.folder?.hasContents ?? false;
  }
}
