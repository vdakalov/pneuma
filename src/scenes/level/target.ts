import InteractiveUiNode from '../../libs/ui/interactive';
import Canvas from '../../libs/canvas';
import Color from '../../libs/color';
import Point from '../../libs/math/point';
import { PointerButton } from '../../libs/input';

export default class Target extends InteractiveUiNode {
  constructor() {
    super();
    this.body.left = Math.random();
    this.body.top = Math.random();

    const rate = this.getRandom(0.4, 4);
    this.body.width = this.getRandom(0.06, 0.2);
    this.body.height = this.body.width * rate;
  }

  private getRandom(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  protected onMouseEnter(point: Point, event: MouseEvent) {
    this.emit('enter');
  }

  protected onMouseDown(point: Point, button: PointerButton, event: MouseEvent) {
    this.emit('press');
  }

  protected onDraw(canvas: Canvas, time: number) {
    canvas
      .rectangle(this.body)
      .fill(Color.LightGreen800);
  }
}
