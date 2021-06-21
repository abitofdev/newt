export class DirectoryNote {
  public static readonly extension = '.note';

  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
