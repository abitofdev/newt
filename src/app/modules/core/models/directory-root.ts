import { FileEntry } from '@tauri-apps/api/fs';
import { DirectoryFolder } from './directory-folder';
import { DirectoryNote } from './directory-note';

export class DirectoryRoot extends DirectoryFolder {
  constructor(path: string, name: string, children?: (DirectoryFolder | DirectoryNote)[]) {
    super(path, name, children);
  }

  public static fromFileEntries(path: string, name: string, fileEntries: FileEntry[]): DirectoryRoot {
    return new DirectoryRoot(path, name, this.buildChildrenFromFileEntries(fileEntries));
  }

  private static buildChildrenFromFileEntries(childEntries: FileEntry[], path?: string): (DirectoryFolder | DirectoryNote)[] {
    const contents: (DirectoryFolder | DirectoryNote)[] = [];

    for (const fileEntry of childEntries) {
      if (fileEntry?.children) {
        const relativePath = `${path ?? ''}${fileEntry.name}\\`; // the path relative to the DirectoryRoot
        const childFileEntries = this.buildChildrenFromFileEntries(fileEntry.children, relativePath);
        contents.push(new DirectoryFolder(relativePath, fileEntry.name ?? 'Unknown', childFileEntries));
      } else {
        contents.push(new DirectoryNote(fileEntry.name ?? 'Unknown'));
      }
    }

    return contents;
  }
}
