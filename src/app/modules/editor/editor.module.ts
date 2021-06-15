import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [EditorComponent],
  exports: [EditorComponent],
  imports: [CommonModule],
})
export class EditorModule {}
