import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesExplorerComponent } from './notes-explorer.component';
import { ExplorerFolderComponent } from './explorer-folder/explorer-folder.component';
import { ExplorerNoteComponent } from './explorer-note/explorer-note.component';

@NgModule({
  declarations: [NotesExplorerComponent, ExplorerFolderComponent, ExplorerNoteComponent],
  imports: [CommonModule],
  exports: [NotesExplorerComponent],
})
export class NotesExplorerModule {}
