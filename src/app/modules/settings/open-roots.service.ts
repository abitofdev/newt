import { Injectable } from '@angular/core';
import { DirectoryRootLocation } from '../core/models/directory-root-location';
import { IndexedDBService } from './indexeddb.service';

@Injectable()
export class OpenRootsService {
  constructor(private readonly indexedDB: IndexedDBService) {}

  public async getAllAsync(): Promise<DirectoryRootLocation[]> {
    const openRoots = await this.indexedDB.openRoots.toArray();
    return openRoots.map((root) => new DirectoryRootLocation(root.path, root.name));
  }

  public async addAsync(path: string, name: string) {
    const exists = await this.existsAsync(path);
    if (!exists) {
      await this.indexedDB.openRoots.add({ path, name });
    }
  }

  public async removeAsync(path: string) {
    await this.indexedDB.openRoots.where('path').equalsIgnoreCase(path).delete();
  }

  private existsAsync(path: string) {
    return this.indexedDB.openRoots.get({ path: path });
  }
}
