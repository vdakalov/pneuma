
export default class Point {

  public static readonly Radian2Degree: number = 180 / Math.PI;

  public static readonly Degree2Radian: number = Math.PI / 180;

  public static readonly PiDouble: number = Math.PI * 2;

  public static readonly PiHalf: number = Math.PI * 0.5;

  public static readonly PiQuarter: number = Math.PI * 0.25;

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

  public multiply(other: Point | number, y?: number): this {
    const [vx, vy] = other instanceof Point
      ? [other.x, other.y]
      : [other, y === undefined ? other : y];
    this.x *= vx;
    this.y *= vy;
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
