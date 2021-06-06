import { Injectable } from '@angular/core';
import { FileEntry, FsDirOptions, readDir } from '@tauri-apps/api/fs';

@Injectable()
export class NativeBridgeService {
  constructor() {}

  readDir(path: string, options?: FsDirOptions): Promise<FileEntry[]> {
    return readDir(path, options);
  }
}
