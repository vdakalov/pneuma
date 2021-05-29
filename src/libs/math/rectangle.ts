import Point from './point';

export default class Rectangle {

  public static fromPoints(a: Point, b: Point): Rectangle {
    return new this(a.x, a.y, b.x, b.y);
  }

  public x1: number;

  public y1: number;

  public x2: number;

  public y2: number;

  public get left(): number {
    return this.x1;
  }

  public get top(): number {
    return this.y1;
  }

  public get width(): number {
    return this.x2 - this.x1;
  }

  public get height(): number {
    return this.y2 - this.y1;
  }

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = Math.min(x1, x2);
    this.y1 = Math.min(y1, y2);
    this.x2 = Math.max(x1, x2);
    this.y2 = Math.max(y1, y2);
  }

  public contains(point: Point): boolean {
    return point.x >= this.x1 && this.x2 >= point.x && point.y >= this.y1 && this.y2 >= point.y;
  }

  public hasIntersection(other: Rectangle): boolean {
    return this.x1 < other.x2 && this.x2 > other.x1 && this.y1 < other.y2 && this.y2 > other.y1;
  }

  public getIntersection(other: Rectangle): Rectangle {
    return new Rectangle(
      Math.max(this.x1, other.x1),
      Math.max(this.y1, other.y1),
      Math.min(this.x2, other.x2),
      Math.min(this.y2, other.y2));
  }
}
