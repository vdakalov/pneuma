
export default class Color {

  public r: number;

  public g: number;

  public b: number;

  public a: number;

  constructor(r: number, g: number = r, b: number = r, a: number = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  public toRgbString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  public toRgbaString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  public toHexString(): string {
    const r = this.r.toString(16);
    const g = this.r.toString(16);
    const b = this.r.toString(16);
    return `#${(r.length === 1 ? '0' : '') + r
    }${(g.length === 1 ? '0' : '') + g
    }${(b.length === 1 ? '0' : '') + b}`
  }

  public toString(): string {
    return this.toHexString();
  }
}
