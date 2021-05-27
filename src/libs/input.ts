import Point from './math/point';
import { EventEmitter } from 'events';

export enum Button {
  Left,
  Middle,
  Right
}

export default class Input extends EventEmitter {

  public scrollScale: number = 0.1;

  private readonly element: HTMLElement;

  private readonly mouse: [number, number, number] = [-1, -1, -1];

  constructor(element: HTMLElement) {
    super();
    this.element = element;
    this.element.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.element.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.element.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.element.addEventListener('contextmenu', this.onContextMenu.bind(this));
    this.element.addEventListener('wheel', this.onMouseWheel.bind(this));
    this.element.addEventListener('keydown', this.onKeyDown.bind(this));
    this.element.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  private createPointFromMouseEvent(event: MouseEvent): Point {
    return new Point(
      event.x - this.element.offsetLeft,
      event.y - this.element.offsetTop);
  }

  private onMouseMove(event: MouseEvent): void {
    const point = this.createPointFromMouseEvent(event);
    this.mouse[0] = point.x;
    this.mouse[1] = point.y;
    this.emit('mousemove', point, event);
  }

  private onMouseDown(event: MouseEvent): void {
    const point = this.createPointFromMouseEvent(event);
    this.mouse[2] = event.button;
    this.emit('mousedown', point, event.button, event);
  }

  private onMouseUp(event: MouseEvent): void {
    const point = this.createPointFromMouseEvent(event);
    this.mouse[2] = -1;
    this.emit('mouseup', point, event.button, event);
  }

  private onContextMenu(event: MouseEvent): void {
    event.preventDefault();
  }

  private onMouseWheel(event: WheelEvent): void {
    const point = this.createPointFromMouseEvent(event);
    this.emit('wheel', point, event.deltaY * this.scrollScale, event);
  }

  private onKeyDown(event: KeyboardEvent): void {
    this.emit('keydown', event);
  }

  private onKeyUp(event: KeyboardEvent): void {
    this.emit('keyup', event);
  }

  public createMousePosition(): Point {
    return new Point(this.mouse[0], this.mouse[1]);
  }

  public isMouseButtonPressed(button: Button): boolean {
    return button !== -1 && this.mouse[2] === button;
  }
}
