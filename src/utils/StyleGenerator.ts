import Stylis, { Options } from "@emotion/stylis";

export class StyleGenerator {
  private className: string;

  private stylis: Stylis;

  constructor(className: string, options?: Options) {
    this.className = className;
    this.stylis = new Stylis(options);
  }

  generateStyle(styles: string) {
    return this.stylis(this.className, styles);
  }
}
