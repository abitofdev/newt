import { DirectoryFolder } from './directory-folder';
import { DirectoryNote } from './directory-note';

export class DirectoryRoot extends DirectoryFolder {
  
  constructor(path: string, name: string, children?: (DirectoryFolder | DirectoryNote)[]) {
    super(path, name, children);
  }
}
