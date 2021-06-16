import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill, { DeltaStatic } from 'quill';
import hljs from 'highlight.js';
import { IOService } from '../core/services/io.service';
import { Observable } from 'rxjs';

const Delta = Quill.import('delta');

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') private _editorElement?: ElementRef;

  private _quill?: Quill;

  constructor(private readonly _io: IOService) {}

  ngOnInit(): void {
    // var icons = Quill.import('ui/icons');
    // icons['bold'] = '<span>B</span>';

    this._io.loadNoteAsync().then((note) => {
      if (note?.content) {
        const newDelta = new Delta(note.content);
        this._quill?.setContents(newDelta, 'api');
      }
    });
  }

  ngAfterViewInit() {
    if (this._editorElement) {
      this._quill = new Quill(this._editorElement.nativeElement, {
        bounds: this._editorElement.nativeElement,
        modules: {
          syntax: {
            highlight: (text: string) => hljs.highlightAuto(text).value,
          },
          history: {
            delay: 1000,
            maxStack: 500,
            userOnly: true,
          },
          toolbar: '.newt-editor .toolbar',
        },
        theme: 'snow',
      });

      this.onTextChange().subscribe((x) => {
        const delta = this._quill?.getContents().ops;
        this._io.saveNoteAsync({ content: delta });
      });
    }
  }

  private onTextChange(): Observable<DeltaStatic> {
    return new Observable((observer) => {
      this._quill?.on('text-change', (value) => {
        observer.next(value);
      });
    });
  }
}
