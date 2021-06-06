import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesExplorerComponent } from './notes-explorer.component';
import { NoteBagComponent } from './dir-node/note-bag.component';

@NgModule({
  declarations: [NotesExplorerComponent, NoteBagComponent],
  imports: [CommonModule],
  exports: [NotesExplorerComponent],
})
export class NotesExplorerModule {}
