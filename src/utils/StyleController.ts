interface Controller {
  incrementMountCount: () => void;
  decrementMountCount: () => void;
}

export class StyleController implements Controller {
  private customDataName: string;

  private mountCount: number;

  private css: string;

  constructor(customDataName: string, css: string) {
    this.customDataName = `data-${customDataName}`;
    this.mountCount = 0;
    this.css = css;
  }

  private activate(): void {
    const style = document.createElement("style");
    style.type = "text/css";
    style.setAttribute(this.customDataName, "");
    style.innerHTML = this.css;

    document.head.appendChild(style);
  }

  private deactivate(): void {
    const style = document.head.querySelector(`[${this.customDataName}]`);

    if (style) {
      style.remove();
    }
  }

  incrementMountCount(): void {
    if (this.mountCount === 0) {
      this.activate();
    }

    this.mountCount += 1;
  }

  decrementMountCount(): void {
    this.mountCount -= 1;

    if (this.mountCount === 0) {
      this.deactivate();
    }
  }
}
