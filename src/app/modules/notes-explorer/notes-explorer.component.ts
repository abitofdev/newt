import { Component, OnInit } from '@angular/core';
import { DirectoryRoot } from '../core/models/directory-root';
import { IOService } from '../core/services/io.service';
import { OpenRootsService } from '../settings/open-roots.service';

@Component({
  selector: 'app-notes-explorer',
  templateUrl: './notes-explorer.component.html',
  styleUrls: ['./notes-explorer.component.css'],
})
export class NotesExplorerComponent implements OnInit {
  public _roots: DirectoryRoot[] = [];

  constructor(private readonly _io: IOService, private readonly _openRoots: OpenRootsService) {
    // this._openRoots.addAsync('c:\\temp\\', 'temp').then(async () => {
    //   const roots = await this._openRoots.getAllAsync();
    //   const dir = await this._io.readRootDirectory(roots[0]);
    //   console.log(dir);
    // });
  }

  ngOnInit(): void {
    this._openRoots.getAllAsync().then(async (openRoots) => {
      this._roots = await Promise.all(openRoots.map((root) => this._io.readRootDirectory(root)));
    });
  }

  public get roots() {
    return this._roots;
  }
}
