import Scene from '../libs/scene';
import Canvas from '../libs/canvas';
import Color from '../libs/color';
import Point from '../libs/math/point';
import Rectangle from '../libs/math/rectangle';
import Button from '../libs/ui/elements/button';

export default class MainScene extends Scene {

  private readonly buttonStart: Button = new Button('Start', new Rectangle(0.5, 0.7, 0.20, 0.14))
    .on('pressed', this.onButtonStartPressed.bind(this))
    .appendTo(this);

  private onButtonStartPressed(): void {
    console.log('PRESSED!');
  }

  protected onCreate() {
    // this.buttonStart.degree = 45;
  }

  protected onDraw(canvas: Canvas): void {
    canvas.background(Color.AmberA200);
    canvas
      .text(new Point(0.5, 0.25), 'Game!')
      .align('center')
      .baseline('middle')
      .font.size(0.3)
      .font.weight('bold')
      .fill(Color.LightGreen800)
    ;
  }
}
