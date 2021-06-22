import { Injectable } from '@angular/core';
import { IndexedDBService } from './indexeddb.service';

@Injectable()
export class OpenRootsService {
  constructor(private readonly indexedDB: IndexedDBService) {}

  public async getAllAsync(): Promise<string[]> {
    const openRoots = await this.indexedDB.openRoots.toArray();
    return openRoots.map((root) => root.path);
  }

  public async addAsync(path: string) {
    const exists = await this.existsAsync(path);
    if (!exists) {
      await this.indexedDB.openRoots.add({ path });
    }
  }

  public async removeAsync(path: string) {
    await this.indexedDB.openRoots.where('path').equalsIgnoreCase(path).delete();
  }

  private existsAsync(path: string) {
    return this.indexedDB.openRoots.get({ path: path });
  }
}
