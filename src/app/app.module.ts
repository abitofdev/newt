import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from './modules/editor/editor.module';
import { NativeBridgeService } from './modules/global/native-bridge.service';
import { NotesExplorerModule } from './modules/notes-explorer/notes-explorer.module';
import { SideNavModule } from './modules/side-nav/side-nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NotesExplorerModule, SideNavModule, EditorModule],
  providers: [NativeBridgeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
