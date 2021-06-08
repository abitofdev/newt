import { Component, OnInit } from '@angular/core';
import { FileEntry } from '@tauri-apps/api/fs';
import { NativeBridgeService } from '../global/native-bridge.service';

interface NestedFileEntry extends FileEntry {
  level: number;
}

@Component({
  selector: 'app-notes-explorer',
  templateUrl: './notes-explorer.component.html',
  styleUrls: ['./notes-explorer.component.css'],
})
export class NotesExplorerComponent implements OnInit {
  private _contents: NestedFileEntry[] = [];

  constructor(private readonly _bridge: NativeBridgeService) {}

  ngOnInit(): void {
    this._bridge.readDir('../src', { recursive: true }).then((files) => {
      this._contents = this.buildStructureLevels(files);
    });
  }

  private buildStructureLevels(files?: FileEntry[], level: number = 1): NestedFileEntry[] {
    const result: NestedFileEntry[] = [];

    if (!files) {
      return result;
    }

    for (const file of files) {
      result.push({ ...file, level });
      result.push(...this.buildStructureLevels(file.children, level + 1));
    }

    return result;
  }

  public get contents(): NestedFileEntry[] {
    return this._contents;
  }
}
