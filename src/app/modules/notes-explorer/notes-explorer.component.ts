import { Component, OnInit } from '@angular/core';
import { FileEntry } from '@tauri-apps/api/fs';
import { v4 as uuidv4 } from 'uuid';
import { IOService } from '../core/services/io.service';
import { NativeBridgeService } from '../core/services/native-bridge.service';
import { OpenRootsService } from '../settings/open-roots.service';

interface NestedFileEntry extends FileEntry {
  id: string;
  parentId?: string;

  level: number;

  hasChildren: boolean;
  isExpanded: boolean;
}

@Component({
  selector: 'app-notes-explorer',
  templateUrl: './notes-explorer.component.html',
  styleUrls: ['./notes-explorer.component.css'],
})
export class NotesExplorerComponent implements OnInit {
  private _contents: NestedFileEntry[] = [];
  private _fileEntries: NestedFileEntry[] = [];

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
      this._fileEntries = this.buildStructureLevels(files);
      this._contents = JSON.parse(JSON.stringify(this._fileEntries));

      //Only show top level items to start with.
      this._contents = this._contents.filter((c) => !c.parentId);
    });
  }

  public shouldShowNode(node: NestedFileEntry): boolean {
    if (node.parentId) {
      const directParent = this.contents.find((nfe) => nfe.id === node.parentId);
      const topParent = this.findTopLevelParent(node);

      if (topParent && directParent) {
        return topParent.isExpanded && directParent.isExpanded;
      }

      return true;
    }

    return true;
  }

  public expand(node: NestedFileEntry): void {
    node.isExpanded = !node.isExpanded;

    const nodes = this._fileEntries.filter((fe) => fe.parentId && fe.parentId === node.id);
    const index = this._contents.findIndex((c) => c.id === node.id);

    if (!node.isExpanded) {
      this._contents.splice(index + 1, nodes.length);
    } else {
      this._contents.splice(index + 1, 0, ...nodes);
    }
  }

  private buildStructureLevels(files?: FileEntry[], level: number = 1, parentId?: string): NestedFileEntry[] {
    const result: NestedFileEntry[] = [];

    if (!files) {
      return result;
    }

    for (const file of files) {
      const id = uuidv4();

      result.push({
        id,
        ...file,
        level,
        hasChildren: file.children && file.children.length > 0 ? true : false,
        parentId,
        isExpanded: false,
      });

      result.push(...this.buildStructureLevels(file.children, level + 1, id));
    }

    return result;
  }

  private findTopLevelParent(node: NestedFileEntry): NestedFileEntry {
    if (node.parentId) {
      let parent = this._contents.find((nfe) => nfe.id === node.parentId);

      if (parent) {
        parent = this.findTopLevelParent(parent);

        return parent;
      }
    }

    return node;
  }

  public get contents(): NestedFileEntry[] {
    return this._contents;
  }
}
