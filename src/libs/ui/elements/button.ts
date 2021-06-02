import InteractiveUiNode from '../interactive';
import Rectangle from '../../math/rectangle';
import Canvas, { FontSizeMeasure } from '../../canvas';
import Color from '../../color';
import Point from '../../math/point';
import { PointerButton } from '../../input';

export default interface Button {
  on(eventName: 'pressed', listener: () => unknown): this;
}

export default class Button extends InteractiveUiNode {

  public text: string;

  public fontSize: number = 0.1;

  public fontSizeMeasure: FontSizeMeasure | undefined = undefined;

  public borderColor: Color = Color.Red900;

  public borderWidth: number = 0.01;

  public backgroundColor: Color = Color.Red400;

  public foregroundColor: Color = Color.Blue900;

  constructor(text: string, body: Rectangle) {
    super();
    this.text = text;
    this.body.setFrom(body);
  }

  protected onMouseEnter(point: Point, event: MouseEvent) {
    this.backgroundColor = Color.Red200;
    this.borderColor = Color.Red600;
  }

  protected onMouseLeave(point: Point, event: MouseEvent) {
    this.backgroundColor = Color.Red400;
    this.borderColor = Color.Red900;
  }

  protected onMouseClick(point: Point, button: PointerButton, event: MouseEvent) {
    if (button === PointerButton.Left) {
      this.emit('pressed');
    }
  }

  protected onDraw(canvas: Canvas, time: number) {
    canvas
      .rectangle(this.body)
      .fill(this.backgroundColor)
      .stroke(this.borderColor, this.borderWidth);
    canvas
      .text(this.body.createCenterPoint(), this.text)
      .align('center')
      .baseline('middle')
      .font.size(this.fontSize, this.fontSizeMeasure)
      .fill(this.foregroundColor);
  }
}
