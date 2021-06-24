import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from './modules/editor/editor.module';
import { NativeBridgeService } from './modules/core/services/native-bridge.service';
import { NotesExplorerModule } from './modules/notes-explorer/notes-explorer.module';
import { SideNavModule } from './modules/side-nav/side-nav.module';
import { SettingsModule } from './modules/settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NotesExplorerModule, SideNavModule, EditorModule, SettingsModule],
  providers: [NativeBridgeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
