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
   * Angle in radians
   */
  public angle: number;

  /**
   * Angle in degrees
   */
  public get degree(): number {
    return this.angle * Point.Radian2Degree;
  }

  /**
   * Angle in degrees
   */
  public set degree(value: number) {
    this.angle = value * Point.Degree2Radian;
  }

  /**
   * Position pivot of left
   */
  public positionPivotLeft: number;

  /**
   * Position pivot of top
   */
  public positionPivotTop: number;

  /**
   * Rotation pivot of left
   */
  public rotatePivotLeft: number;

  /**
   * Rotation pivot of top
   */
  public rotatePivotTop: number;

  /**
   * Absolute left
   */
  public get x1(): number {
    return this.left - this.width * this.positionPivotLeft;
  }

  /**
   * Absolute top
   */
  public get y1(): number {
    return this.top - this.height * this.positionPivotTop;
  }

  /**
   * Absolute right
   */
  public get x2(): number {
    return this.left + this.width * (1 - this.positionPivotLeft);
  }

  /**
   * Absolute bottom
   */
  public get y2(): number {
    return this.top + this.height * (1 - this.positionPivotTop);
  }

  constructor(left: number,
              top: number,
              width: number,
              height: number,
              angle: number = 0,
              positionPivotLeft: number = 0.5,
              positionPivotTop: number = 0.5,
              rotatePivotLeft: number = 0,
              rotatePivotTop: number = 0) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.positionPivotLeft = positionPivotLeft;
    this.positionPivotTop = positionPivotTop;
    this.rotatePivotLeft = rotatePivotLeft;
    this.rotatePivotTop = rotatePivotTop;
  }

  public clone(): Rectangle {
    return new Rectangle(
      this.left,
      this.top,
      this.width,
      this.height,
      this.angle,
      this.positionPivotLeft,
      this.positionPivotTop,
      this.rotatePivotLeft,
      this.rotatePivotTop);
  }

  public setTo(other: Rectangle): void {
    other.left = this.left;
    other.top = this.top;
    other.width = this.width;
    other.height = this.height;
    other.positionPivotLeft = this.positionPivotLeft;
    other.positionPivotTop = this.positionPivotTop;
    other.rotatePivotLeft = this.rotatePivotLeft;
    other.rotatePivotTop = this.rotatePivotTop;
  }

  public setFrom(other: Rectangle): void {
    other.setTo(this);
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

  public createRotatePoint(): Point {
    return this.createCenterPoint()
      .add(new Point(this.width * this.rotatePivotLeft, this.height * this.rotatePivotTop))
  }

  public contains(point: Point): boolean {
    // todo resolve the problem of this algorithm
    const center = this.createRotatePoint();
    point = center
      .clone()
      .sub(point)
      .rotate(-this.angle)
      .add(center);
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
