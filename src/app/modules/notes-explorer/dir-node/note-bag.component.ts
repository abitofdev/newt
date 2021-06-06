import { Component, Input, OnInit } from '@angular/core';
import { FileEntry } from '@tauri-apps/api/fs';

@Component({
  selector: '[app-note-bag]',
  templateUrl: './note-bag.component.html',
  styleUrls: ['./note-bag.component.css'],
})
export class NoteBagComponent implements OnInit {
  @Input() contents: FileEntry[] = [];

  constructor() {}

  ngOnInit(): void {}
}
