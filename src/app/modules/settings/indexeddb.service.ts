import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { DbRootDirectory } from './db-root.interface';

enum TableNames {
  OpenRoots = 'openRoots',
}

@Injectable()
export class IndexedDBService extends Dexie {
  public readonly openRoots: Table<DbRootDirectory, number>;

  constructor() {
    super('newt');

    this.version(1).stores({
      [TableNames.OpenRoots]: '&path',
    });

    this.openRoots = this.table(TableNames.OpenRoots);
  }
}
