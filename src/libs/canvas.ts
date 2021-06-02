import Color from './color';
import Point from './math/point';
import Rectangle from './math/rectangle';

export enum Cursor {
  Alias = 'alias',
  AllScroll = 'all-scroll',
  Auto = 'auto',
  Cell = 'cell',
  ContextMenu = 'context-menu',
  ColResize = 'col-resize',
  Copy = 'copy',
  CrossHair = 'crosshair',
  Default = 'default',
  EResize = 'e-resize',
  EWResize = 'ew-resize',
  Grab = 'grab',
  Grabbing = 'grabbing',
  Help = 'help',
  Move = 'move',
  NResize = 'n-resize',
  NEResize = 'ne-resize',
  NESWResize = 'nesw-resize',
  NSResize = 'ns-resize',
  NWResize = 'nw-resize',
  NWSEResize = 'nwse-resize',
  NoDrop = 'no-drop',
  None = 'none',
  NotAllowed = 'not-allowed',
  Pointer = 'pointer',
  Progress = 'progress',
  RowResize = 'row-resize',
  SResize = 's-resize',
  SEResize = 'se-resize',
  SWResize = 'sw-resize',
  Text = 'text',
  WResize = 'w-resize',
  Wait = 'wait',
  ZoomIn = 'zoom-in',
  ZoomOut = 'zoom-out'
}

export type FontGlobalValues = 'inherit' | 'initial' | 'unset';
export type FontStyle = FontGlobalValues | 'normal' | 'italic' | 'oblique';
export type FontVariant = '' | 'normal' | 'small-caps';
export type FontWeight = FontGlobalValues
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
export type FontSizeMeasure = 'cap'
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
export type LineHeight = FontGlobalValues | number;
export type FontFamily = FontGlobalValues
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

  private _sizeValue: number | undefined = undefined;

  private _sizeMeasure: FontSizeMeasure | undefined = undefined;

  private _lineHeight: LineHeight | undefined = undefined;

  private _family: FontFamily = 'sans-serif';

  private _value: string | undefined = undefined;

  private readonly shape: TextShape;

  private readonly abs: number;

  constructor(shape: TextShape, abs: number) {
    this.shape = shape;
    this.abs = abs;
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

  public size(value: number, measure?: FontSizeMeasure): TextShape {
    this._sizeValue = value;
    this._sizeMeasure = measure;
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
    if (this._sizeValue !== undefined) {
      const size = this._sizeMeasure === undefined
        ? `${this.abs * this._sizeValue}px`
        : `${this._sizeValue}${this._sizeMeasure}`;
      result.push(size);
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

  protected readonly abs: number;

  constructor(context: CanvasRenderingContext2D, abs: number) {
    this.context = context;
    this.abs = abs;
    this.context.beginPath();
  }

  public fill(color: Color): this {
    this.context.fillStyle = color.toRgbaString();
    this.context.fill();
    this.context.closePath();
    return this;
  }

  public stroke(color: Color, width?: number): this {
    this.context.strokeStyle = color.toRgbaString();
    if (width !== undefined) {
      this.context.lineWidth = this.abs * width;
    }
    this.context.stroke();
    this.context.closePath();
    return this;
  }
}

class CircleShape extends Shape {
  constructor(context: CanvasRenderingContext2D, abs: number, x: number, y: number, radius: number) {
    super(context, abs);
    context.arc(x, y, radius, 0, Point.PiDouble);
  }
}

class RectangleShape extends Shape {
  constructor(context: CanvasRenderingContext2D,
              abs: number,
              x: number,
              y: number,
              width: number,
              height: number) {
    super(context, abs);
    context.rect(x, y, width, height);
  }
}

class TextShape extends Shape {

  private readonly x: number;

  private readonly y: number;

  private readonly value: string;

  private maxWidthValue: number | undefined = undefined;

  public readonly font: Font;

  constructor(context: CanvasRenderingContext2D, abs: number, x: number, y: number, value: string) {
    super(context, abs);
    this.x = x;
    this.y = y;
    this.value = value;
    this.font = new Font(this, abs);
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
    this.context.fillText(this.value, this.x, this.y, this.maxWidthValue);
    return this;
  }

  public stroke(color: Color, width: number = this.context.lineWidth): this {
    this.context.font = this.font.toString();
    this.context.strokeStyle = color.toString();
    this.context.strokeText(this.value, this.x, this.y, this.maxWidthValue);
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

  public get cursor(): Cursor {
    return this.element.style.cursor as Cursor || Cursor.Auto;
  }

  public set cursor(value: Cursor) {
    this.element.style.cursor = value;
  }

  private readonly context: CanvasRenderingContext2D;

  private get abs(): number {
    return Math.min(this.width, this.height);
  }

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.context = renderingContext;
  }

  private createAbsolutePoint(point: Point): Point {
    return new Point(this.width * point.x, this.height * point.y);
  }

  public createPixelPoint(): Point {
    return new Point(1 / this.width, 1 / this.height);
  }

  public translate(point: Point): this {
    this.context.translate(this.width * point.x, this.height * point.y);
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
    const x = this.width * point.x;
    const y = this.height * point.y;
    return new CircleShape(this.context, this.abs, x, y, this.abs * radius);
  }

  public rectangle(rectangle: Rectangle): RectangleShape {
    const x = this.width * rectangle.x1;
    const y = this.height * rectangle.y1;
    const width = this.width * rectangle.width;
    const height = this.height * rectangle.height;
    return new RectangleShape(this.context, this.abs, x, y, width, height);
  }

  public line(a: Point, b: Point, color?: Color, lineWidth?: number): this {
    a = this.createAbsolutePoint(a);
    b = this.createAbsolutePoint(b);

    this.context.beginPath();
    this.context.moveTo(a.x, a.y);
    this.context.lineTo(b.x, b.y);
    if (color !== undefined) {
      this.context.strokeStyle = color.toString();
    }
    if (lineWidth !== undefined) {
      this.context.lineWidth = lineWidth * this.abs;
    }
    this.context.stroke();
    this.context.closePath();
    return this;
  }

  public text(point: Point, value: string): TextShape {
    const height = Math.min(this.width, this.height);
    return new TextShape(this.context, height, this.width * point.x, this.height * point.y, value);
  }
}
