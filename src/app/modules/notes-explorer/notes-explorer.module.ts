import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesExplorerComponent } from './notes-explorer.component';

@NgModule({
  declarations: [NotesExplorerComponent],
  imports: [CommonModule],
  exports: [NotesExplorerComponent],
})
export class NotesExplorerModule {}
