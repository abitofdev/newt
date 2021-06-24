import { Injectable } from '@angular/core';
import { FileEntry, FsDirOptions, readDir, readTextFile, writeFile } from '@tauri-apps/api/fs';

@Injectable()
export class NativeBridgeService {
  constructor() {}

  readDir(path: string, options?: FsDirOptions): Promise<FileEntry[]> {
    return readDir(path, options);
  }

  public writeFileAsync(path: string, contents: string): Promise<void> {
    return writeFile({ path, contents });
  }

  public readFileAsync(path: string): Promise<string> {
    return readTextFile(path);
  }
}
