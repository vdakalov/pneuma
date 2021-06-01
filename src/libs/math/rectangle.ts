import Point from './point';

export default class Rectangle {

  public static fromPoints(a: Point, b: Point): Rectangle {
    return new this(a.x, a.y, b.x, b.y);
  }

  /**
   * Left for pivot point
   */
  public left: number;

  /**
   * Top for pivot point
   */
  public top: number;

  /**
   * Rectangle width
   */
  public width: number;

  /**
   * Rectangle height
   */
  public height: number;

  /**
   * Pivot of left
   */
  public pivotLeft: number;

  /**
   * Pivot of top
   */
  public pivotTop: number;

  /**
   * Absolute left
   */
  public get x1(): number {
    return this.left - this.width * this.pivotLeft;
  }

  /**
   * Absolute top
   */
  public get y1(): number {
    return this.top - this.height * this.pivotTop;
  }

  /**
   * Absolute right
   */
  public get x2(): number {
    return this.left + this.width * this.pivotLeft;
  }

  /**
   * Absolute bottom
   */
  public get y2(): number {
    return this.top + this.height * this.pivotTop;
  }

  constructor(left: number,
              top: number,
              width: number,
              height: number,
              pivotLeft: number = 0.5,
              pivotTop: number = 0.5) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.pivotLeft = pivotLeft;
    this.pivotTop = pivotTop;
  }

  public clone(): Rectangle {
    return new Rectangle(this.left, this.top, this.width, this.height, this.pivotLeft, this.pivotTop);
  }

  public setTo(other: Rectangle, withPivot: boolean = true): void {
    other.left = this.left;
    other.top = this.top;
    other.width = this.width;
    other.height = this.height;
    if (withPivot) {
      other.pivotLeft = this.pivotLeft;
      other.pivotTop = this.pivotTop;
    }
  }

  public setFrom(other: Rectangle, withPivot: boolean = true): void {
    other.setTo(this, withPivot);
  }

  public createTopLeftPoint(): Point {
    return new Point(this.x1, this.y1);
  }

  public createTopRightPoint(): Point {
    return new Point(this.x2, this.y1);
  }

  public createBottomLeftPoint(): Point {
    return new Point(this.x1, this.y2);
  }

  public createBottomRightPoint(): Point {
    return new Point(this.x2, this.y2);
  }

  public createCenterPoint(): Point {
    return new Point(this.x1 + this.width / 2, this.y1 + this.height / 2);
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
