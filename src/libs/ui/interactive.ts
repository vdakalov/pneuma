import { Event, InputReceiver, KeyboardButton, PointerButton } from '../input';
import Point from '../math/point';
import Rectangle from '../math/rectangle';
import UiNode from '../ui-node';
import DrawableUiNode from './drawable';

export default abstract class InteractiveUiNode<
  C extends UiNode<any, any> = UiNode<any, any>,
  P extends UiNode<any, any> = UiNode<any, any>
  > extends DrawableUiNode<C, P> implements InputReceiver {

  public interactive: boolean = true;

  private mouseWasOnBody: boolean = false;

  constructor() {
    super();
    this
      .on(Event.MouseMove, this.onInputMouseMove.bind(this))
      .on(Event.MouseDown, this.onInputMouseDown.bind(this))
      .on(Event.MouseUp, this.onInputMouseUp.bind(this))
      .on(Event.MouseClick, this.onInputMouseClick.bind(this))
      .on(Event.MouseWheel, this.onInputMouseWheel.bind(this))
      .on(Event.KeyDown, this.onInputKeyDown.bind(this))
      .on(Event.KeyUp, this.onInputKeyUp.bind(this));
  }

  protected onInputMouseMove(point: Point, event: MouseEvent): void {
    if (this.interactive) {
      if (this.body.contains(point)) {
        if (!this.mouseWasOnBody) {
          this.mouseWasOnBody = true;
          this.onMouseEnter(point, event);
        }
        this.onMouseMove(point, event);
        for (const child of this.children) {
          if (child instanceof InteractiveUiNode) {
            child.onInputMouseMove(point, event);
          }
        }
      } else if (this.mouseWasOnBody) {
        this.mouseWasOnBody = false;
        this.onMouseLeave(point, event);
      }
    }
  }

  protected onInputMouseDown(point: Point, button: PointerButton, event: MouseEvent): void {
    if (this.interactive && this.body.contains(point)) {
      this.onMouseDown(point, button, event);
      for (const child of this.children) {
        if (child instanceof InteractiveUiNode) {
          child.onInputMouseDown(point, button, event);
        }
      }
    }
  }

  protected onInputMouseUp(point: Point, button: PointerButton, event: MouseEvent): void {
    if (this.interactive && this.body.contains(point)) {
      this.onMouseUp(point, button, event);
      for (const child of this.children) {
        if (child instanceof InteractiveUiNode) {
          child.onInputMouseUp(point, button, event);
        }
      }
    }
  }

  protected onInputMouseClick(point: Point, button: PointerButton, event: MouseEvent): void {
    if (this.interactive && this.body.contains(point)) {
      this.onMouseClick(point, button, event);
      for (const child of this.children) {
        if (child instanceof InteractiveUiNode) {
          child.onInputMouseClick(point, button, event);
        }
      }
    }
  }

  protected onInputMouseWheel(point: Point, value: number, event: WheelEvent): void {
    if (this.interactive && this.body.contains(point)) {
      this.onMouseWheel(point, value, event);
      for (const child of this.children) {
        if (child instanceof InteractiveUiNode) {
          child.onMouseWheel(point, value, event);
        }
      }
    }
  }

  protected onInputKeyDown(key: KeyboardButton, event: KeyboardEvent): void {
    if (this.interactive) {
      this.onKeyDown(key, event);
      for (const child of this.children) {
        if (child instanceof InteractiveUiNode) {
          child.onInputKeyDown(key, event);
        }
      }
    }
  }

  protected onInputKeyUp(key: KeyboardButton, event: KeyboardEvent): void {
    if (this.interactive) {
      this.onKeyUp(key, event);
      for (const child of this.children) {
        if (child instanceof InteractiveUiNode) {
          child.onInputKeyUp(key, event);
        }
      }
    }
  }

  protected onMouseMove(point: Point, event: MouseEvent): void {
  }

  protected onMouseEnter(point: Point, event: MouseEvent): void {
  }

  protected onMouseLeave(point: Point, event: MouseEvent): void {
  }

  protected onMouseDown(point: Point, button: PointerButton, event: MouseEvent): void {
  }

  protected onMouseUp(point: Point, button: PointerButton, event: MouseEvent): void {
  }

  protected onMouseClick(point: Point, button: PointerButton, event: MouseEvent): void {
  }

  protected onMouseWheel(point: Point, value: number, event: WheelEvent): void {
  }

  protected onKeyDown(key: KeyboardButton, event: KeyboardEvent): void {
  }

  protected onKeyUp(key: KeyboardButton, event: KeyboardEvent): void {
  }
}
