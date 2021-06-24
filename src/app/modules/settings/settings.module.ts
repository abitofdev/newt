import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexedDBService } from './indexeddb.service';
import { OpenRootsService } from './open-roots.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [IndexedDBService, OpenRootsService],
})
export class SettingsModule {}
