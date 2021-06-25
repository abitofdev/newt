import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

const DEFAULT_ICON_CLASS_NAME = 'app-icon';

@Component({
  selector: 'app-icon',
  template: `<svg-icon [src]="src" [svgClass]="classList"></svg-icon>`,
  styles: [''],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent implements OnInit, OnChanges {
  @Input() public name: string = 'UNKNOWN';
  @Input() public iconClass: string = '';

  private _classList = DEFAULT_ICON_CLASS_NAME;

  constructor() {}

  ngOnChanges(_: SimpleChanges): void {
    this.buildClassList();
  }

  ngOnInit(): void {
    this.buildClassList();
  }

  public get classList() {
    return this._classList;
  }

  public get src() {
    return `assets/svg/${this.name}.svg`;
  }

  private buildClassList() {
    if (this.iconClass) {
      this._classList = `${DEFAULT_ICON_CLASS_NAME} ${this.iconClass}`;
    } else {
      this._classList = DEFAULT_ICON_CLASS_NAME;
    }
  }
}
