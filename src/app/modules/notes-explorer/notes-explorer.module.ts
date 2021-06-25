import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesExplorerComponent } from './notes-explorer.component';
import { ExplorerFolderComponent } from './explorer-folder/explorer-folder.component';
import { ExplorerNoteComponent } from './explorer-note/explorer-note.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [NotesExplorerComponent, ExplorerFolderComponent, ExplorerNoteComponent],
  imports: [CommonModule, IconsModule],
  exports: [NotesExplorerComponent],
})
export class NotesExplorerModule {}
