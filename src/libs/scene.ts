import Drawable from './drawable';
import ApplicationContext from './application-context';
import Canvas from './canvas';
import Point from './math/point';
import { Button } from './input';

export default abstract class Scene implements Drawable {

  protected readonly context: ApplicationContext;

  constructor(context: ApplicationContext) {
    this.context = context;
    this.context.input.on('mousemove', this.onMouseMove.bind(this));
    this.context.input.on('mousedown', this.onMouseDown.bind(this));
    this.context.input.on('mouseup', this.onMouseUp.bind(this));
    this.context.input.on('wheel', this.onMouseWheel.bind(this));
    this.context.input.on('keydown', this.onKeyDown.bind(this));
    this.context.input.on('keyup', this.onKeyUp.bind(this));
  }

  protected onMouseMove(point: Point, event: MouseEvent): void {}

  protected onMouseDown(point: Point, button: Button, event: MouseEvent): void {}

  protected onMouseUp(point: Point, button: Button, event: MouseEvent): void {}

  protected onMouseWheel(point: Point, scroll: number, event: WheelEvent): void {}

  protected onKeyDown(event: KeyboardEvent): void {}

  protected onKeyUp(event: KeyboardEvent): void {}

  public abstract load(): void;

  public abstract unload(): void;

  public abstract destroy(): void;

  public abstract draw(canvas: Canvas, time: number): void;
}
