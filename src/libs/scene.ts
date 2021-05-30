import Drawable from './drawable';
import ApplicationContext from './application-context';
import Canvas from './canvas';
import Point from './math/point';
import { InputTarget, PointerButton, KeyboardButton } from './input';

export default abstract class Scene implements Drawable, InputTarget {

  protected readonly application: ApplicationContext;

  constructor(context: ApplicationContext) {
    this.application = context;
  }

  public onMouseMove(point: Point, event: MouseEvent): void {}

  public onMouseDown(point: Point, button: PointerButton, event: MouseEvent): void {}

  public onMouseUp(point: Point, button: PointerButton, event: MouseEvent): void {}

  public onMouseWheel(point: Point, scroll: number, event: WheelEvent): void {}

  public onKeyDown(button: KeyboardButton, event: KeyboardEvent): void {}

  public onKeyUp(button: KeyboardButton, event: KeyboardEvent): void {}

  public abstract onLoad(): void;

  public abstract onUnload(): void;

  public abstract destroy(): void;

  public abstract draw(canvas: Canvas, time: number): void;
}
