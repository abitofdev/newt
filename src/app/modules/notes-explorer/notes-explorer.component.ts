import { Component, OnInit } from '@angular/core';
import { FileEntry } from '@tauri-apps/api/fs';
import { IOService } from '../core/services/io.service';
import { NativeBridgeService } from '../core/services/native-bridge.service';
import { OpenRootsService } from '../settings/open-roots.service';

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

  constructor(
    private readonly _bridge: NativeBridgeService,
    private readonly _io: IOService,
    private readonly _openRoots: OpenRootsService
  ) {
    this._openRoots.addAsync('c:\\temp\\', 'temp').then(async () => {
      const roots = await this._openRoots.getAllAsync();
      const dir = await this._io.readRootDirectory(roots[0]);
      console.log(dir);
    });
  }

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
