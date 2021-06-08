import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { NotesExplorerModule } from '../notes-explorer/notes-explorer.module';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, NotesExplorerModule],
  exports: [SideNavComponent],
})
export class SideNavModule {}
