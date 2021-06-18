import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill, { DeltaStatic } from 'quill';
import hljs from 'highlight.js';
import { IOService } from '../core/services/io.service';
import { Observable } from 'rxjs';
import { AppService } from '../core/services/app.service';
import { SelectedNote } from '../core/models/selected-note';
import { debounceTime } from 'rxjs/operators';

const Delta = Quill.import('delta');

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') private _editorElement?: ElementRef;

  private _quill?: Quill;
  private _selectedNote?: SelectedNote;

  constructor(private readonly _io: IOService, private readonly _appService: AppService) {}

  ngOnInit(): void {
    // var icons = Quill.import('ui/icons');
    // icons['bold'] = '<span>B</span>';

    this._appService.selectedNote$.subscribe((selectedNote) => {
      this._selectedNote = selectedNote;
      if (selectedNote) {
        this._io.loadNoteAsync(selectedNote).then((note) => {
          if (note?.content) {
            const newDelta = new Delta(note.content);
            this._quill?.setContents(newDelta, 'api');
          }
        });
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

      this.onTextChange()
        .pipe(debounceTime(500))
        .subscribe((x) => {
          if (this._selectedNote) {
            const delta = this._quill?.getContents().ops;
            this._io.saveNoteAsync(this._selectedNote, { content: delta });
          }
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
