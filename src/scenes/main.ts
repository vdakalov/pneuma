import Scene from '../libs/scene';
import Canvas from '../libs/canvas';
import Color from '../libs/color';
import Point from '../libs/math/point';
import { Button } from '../libs/input';
import Rectangle from '../libs/math/rectangle';

import LevelScene from './level';

export default class MainScene extends Scene {

  private readonly buttonRect: Rectangle = new Rectangle(100, 80, 200, 120);

  protected onMouseDown(point: Point, button: Button, event: MouseEvent) {
    if (this.buttonRect.contains(point)) {
      this.context.setActiveScene(LevelScene);
    }
  }

  public destroy(): void {
  }

  public load(): void {
  }

  public unload(): void {
  }

  public draw(canvas: Canvas): void {
    canvas.background(Color.AmberA200);
    canvas
      .text(Point.createRelative(canvas, 0.5, 0.3), 'GameName!')
      .align('center')
      .baseline('middle')
      .font.size(48)
      .font.weight('bold')
      .fill(Color.BlueGray400);
    canvas
      .rectangle(this.buttonRect)
      .fill(Color.RedA100)
      .stroke(Color.Red800, 4);
    canvas
      .text(Point.createRelative(this.buttonRect, 0.5), 'Start')
      .font.size(28)
      .fill(Color.Blue900);
  }
}
