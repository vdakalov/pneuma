import Color from './color';
import Point from './math/point';
import Rectangle from './math/rectangle';

type FontGlobalValues = 'inherit' | 'initial' | 'unset';
type FontStyle = FontGlobalValues | 'normal' | 'italic' | 'oblique';
type FontVariant = '' | 'normal' | 'small-caps';
type FontWeight = FontGlobalValues
  | 'normal'
  | 'bold'
  | 'lighter'
  | 'bolder'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
type FontSizeMeasure = 'cap'
  | 'ch'
  | 'em'
  | 'ex'
  | 'ic'
  | 'lh'
  | 'rem'
  | 'rlh'
  | 'vh'
  | 'vw'
  | 'vi'
  | 'vb'
  | 'vmin'
  | 'vmax'
  | 'px'
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'pt'
  ;
type LineHeight = FontGlobalValues | number;
type FontFamily = FontGlobalValues
  | 'serif'
  | 'sans-serif'
  | 'monospace'
  | 'cursive'
  | 'fantasy'
  | 'system-ui'
  | 'ui-serif'
  | 'ui-sans-serif'
  | 'ui-monospace'
  | 'ui-rounded'
  | 'emoji'
  | 'math'
  | 'fangsong'
  | string;

class Font {

  private _style: FontStyle | undefined = undefined;

  private _variant: FontVariant | undefined = undefined;

  private _weight: FontWeight | undefined = undefined;

  private _size: string = '10px';

  private _lineHeight: LineHeight | undefined = undefined;

  private _family: FontFamily = 'sans-serif';

  private _value: string | undefined = undefined;

  private readonly shape: TextShape;

  constructor(shape: TextShape) {
    this.shape = shape;
  }

  public style(value: FontStyle): TextShape {
    this._style = value;
    return this.shape;
  }

  public variant(value: FontVariant): TextShape {
    this._variant = value;
    return this.shape;
  }

  public weight(value: FontWeight): TextShape {
    this._weight = value;
    return this.shape;
  }

  public size(value: number, measure: FontSizeMeasure = 'px'): TextShape {
    this._size = `${value}${measure}`;
    return this.shape;
  }

  public lineHeight(value: LineHeight): TextShape {
    this._lineHeight = value;
    return this.shape;
  }

  public family(value: FontFamily): TextShape {
    this._family = value;
    return this.shape;
  }

  public value(value: string | undefined): TextShape {
    this._value = value;
    return this.shape;
  }

  public toString(): string {
    if (this._value !== undefined) {
      return this._value;
    }
    let result: string[] = [];
    if (this._style !== undefined) {
      result.push(this._style);
    }
    if (this._variant !== undefined) {
      result.push(this._variant);
    }
    if (this._weight !== undefined) {
      result.push(this._weight);
    }
    if (this._size !== undefined) {
      result.push(this._size);
    }
    if (this._lineHeight !== undefined) {
      result.push(this._lineHeight.toString());
    }
    if (this._family !== undefined) {
      result.push(this._family);
    }
    return result.join(' ');
  }
}

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

class TextShape extends Shape {

  private readonly point: Point;

  private readonly value: string;

  private maxWidthValue: number | undefined = undefined;

  public readonly font: Font = new Font(this);

  constructor(context: CanvasRenderingContext2D, point: Point, value: string) {
    super(context);
    this.point = point;
    this.value = value;
  }

  public align(value: CanvasTextAlign): this {
    this.context.textAlign = value;
    return this;
  }

  public baseline(value: CanvasTextBaseline): this {
    this.context.textBaseline = value;
    return this;
  }

  public maxWidth(value: number | undefined): this {
    this.maxWidthValue = value;
    return this;
  }

  public fill(color: Color): this {
    this.context.font = this.font.toString();
    this.context.fillStyle = color.toString();
    this.context.fillText(this.value, this.point.x, this.point.y, this.maxWidthValue);
    return this;
  }

  public stroke(color: Color, width: number = this.context.lineWidth): this {
    this.context.font = this.font.toString();
    this.context.strokeStyle = color.toString();
    this.context.strokeText(this.value, this.point.x, this.point.y, this.maxWidthValue);
    return this;
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

  public translate(point: Point): this {
    this.context.translate(point.x, point.y);
    return this;
  }

  public rotate(rad: number): this {
    this.context.rotate(rad);
    return this;
  }

  public save(): this {
    this.context.save();
    return this;
  }

  public restore(): this {
    this.context.restore();
    return this;
  }

  public clear(): this {
    this.context.clearRect(0, 0, this.width, this.height);
    return this;
  }

  public background(color: Color): this {
    this.context.fillStyle = color.toString();
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fill();
    return this;
  }

  public circle(point: Point, radius: number): CircleShape {
    return new CircleShape(this.context, point, radius);
  }

  public rectangle(rectangle: Rectangle): RectangleShape {
    return new RectangleShape(this.context, rectangle);
  }

  public text(point: Point, value: string): TextShape {
    return new TextShape(this.context, point, value);
  }
}
