import { DeltaOperation } from 'quill';

export interface Note {
  content?: DeltaOperation[];
}
