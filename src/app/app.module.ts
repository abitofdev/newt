import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeBridgeService } from './modules/global/native-bridge.service';
import { NotesExplorerModule } from './modules/notes-explorer/notes-explorer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NotesExplorerModule],
  providers: [NativeBridgeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
