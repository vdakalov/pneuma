import Scene from '../libs/scene';
import Canvas from '../libs/canvas';
import Color from '../libs/color';
import Point from '../libs/math/point';
import { Button } from '../libs/input';

export default class MainScene extends Scene {

  private readonly points: Point[] = [];

  protected onMouseDown(point: Point, button: Button, event: MouseEvent) {
    this.points.push(point);
  }

  public destroy(): void {
  }

  public load(): void {
  }

  public unload(): void {
  }

  public draw(canvas: Canvas): void {
    canvas.background(new Color(255, 0, 0));
    const bg = new Color(120);
    const bd = new Color(255);
    for (const point of this.points) {
      canvas.circle(point, 4)
        .fill(bg)
        .stroke(bd, 1);
    }
  }
}
