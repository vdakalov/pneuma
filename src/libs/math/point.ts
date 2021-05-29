interface Sizeable {
  left?: number;
  top?: number;
  width: number;
  height: number;
}

export default class Point {

  public static Deg2Rad: number = Math.PI / 180;

  public static PI2: number = Math.PI * 2;

  public static createRelative(rect: Sizeable, wp: number, hp: number = wp): Point {
    const left = rect.left !== undefined ? rect.left : 0;
    const top = rect.top !== undefined ? rect.top : 0;
    return new this(left + rect.width * wp, top + rect.height * hp);
  }

  public x: number;

  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public clone(): Point {
    return new Point(this.x, this.y);
  }

  public set(other: Point): this {
    this.x = other.x;
    this.y = other.y;
    return this;
  }

  public sub(other: Point): this {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  public add(other: Point): this {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  public scale(value: number): this {
    this.x *= value;
    this.y *= value;
    return this;
  }

  public length(): number {
    return Math.sqrt(this.x * this.x + this.y + this.y);
  }

  public normalize(): this {
    const length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  }

  public rotate(rad: number): this {
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const x = this.x * cos - this.y * sin;
    const y = this.x * sin + this.y * cos;
    this.x = x;
    this.y = y;
    return this;
  }

  public angleTo(other: Point): number {
    return Math.atan2(other.y * this.x - other.x * this.y, other.x * this.x + other.y * this.y);
  }

  public distanceTo(other: Point): number {
    return Math.abs(this.clone().sub(other).length());
  }

  public toString(): string {
    return `${this.x.toFixed(3)},${this.y.toFixed(3)}`;
  }
}
