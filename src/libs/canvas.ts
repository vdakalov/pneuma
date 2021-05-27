import Color from './color';
import Point from './math/point';
import Rectangle from './math/rectangle';

abstract class Shape {

  protected readonly context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.context.beginPath();
  }

  public fill(color: Color): this {
    this.context.fillStyle = color.toRgbaString();
    this.context.fill();
    this.context.closePath();
    return this;
  }

  public stroke(color: Color, width: number = this.context.lineWidth): this {
    this.context.strokeStyle = color.toRgbaString();
    this.context.lineWidth = width;
    this.context.stroke();
    this.context.closePath();
    return this;
  }
}

class CircleShape extends Shape {
  constructor(context: CanvasRenderingContext2D, point: Point, radius: number) {
    super(context);
    context.arc(point.x, point.y, radius, 0, Point.PI2);
  }
}

class RectangleShape extends Shape {
  constructor(context: CanvasRenderingContext2D, rectangle: Rectangle) {
    super(context);
    context.rect(rectangle.x1, rectangle.y1, rectangle.width, rectangle.height);
  }
}

export default class Canvas {

  public get element(): HTMLCanvasElement {
    return this.context.canvas;
  }

  public get width(): number {
    return this.context.canvas.width;
  }

  public get height(): number {
    return this.context.canvas.height;
  }

  public set width(value: number) {
    this.context.canvas.width = value;
  }

  public set height(value: number) {
    this.context.canvas.height = value;
  }

  private readonly context: CanvasRenderingContext2D;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.context = renderingContext;
  }

  public save(): void {
    this.context.save();
  }

  public restore(): void {
    this.context.restore();
  }

  public clear(): void {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  public background(color: Color): void {
    this.context.fillStyle = color.toRgbaString();
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fill();
  }

  public circle(point: Point, radius: number): Shape {
    return new CircleShape(this.context, point, radius);
  }

  public rectangle(rectangle: Rectangle): Shape {
    return new RectangleShape(this.context, rectangle);
  }
}
