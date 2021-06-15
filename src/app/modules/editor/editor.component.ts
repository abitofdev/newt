import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill from 'quill';
import hljs from 'highlight.js';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') private _editorElement?: ElementRef;

  private _quill?: Quill;

  constructor() {}

  ngOnInit(): void {
    // var icons = Quill.import('ui/icons');
    // icons['bold'] = '<span>B</span>';
  }

  ngAfterViewInit() {
    if (this._editorElement) {
      this._quill = new Quill(this._editorElement.nativeElement, {
        bounds: this._editorElement.nativeElement,
        modules: {
          syntax: {
            highlight: (text: string) => hljs.highlightAuto(text).value,
          },
          toolbar: '.newt-editor .toolbar',
        },
        theme: 'snow',
      });
    }
  }
}
