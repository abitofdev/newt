import { Component, OnInit } from '@angular/core';
import { FileEntry } from '@tauri-apps/api/fs';
import { NativeBridgeService } from '../global/native-bridge.service';

@Component({
  selector: 'app-notes-explorer',
  templateUrl: './notes-explorer.component.html',
  styleUrls: ['./notes-explorer.component.css'],
})
export class NotesExplorerComponent implements OnInit {
  private _contents: FileEntry[] = [];

  constructor(private readonly _bridge: NativeBridgeService) {}

  ngOnInit(): void {
    this._bridge.readDir('../src', { recursive: true }).then((files) => {
      this._contents = files;
    });
  }

  public get contents() {
    return this._contents;
  }
}
