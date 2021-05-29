import Scene from '../libs/scene';
import Canvas from '../libs/canvas';
import Color from '../libs/color';
import Point from '../libs/math/point';
import { Button } from '../libs/input';

import MainScene from './main';

export default class LevelScene extends Scene {

  private readonly points: Point[] = [];

  private max: number = 0;

  public destroy(): void {
  }

  protected onMouseDown(point: Point, button: Button, event: MouseEvent) {
    if (this.points.length >= this.max) {
      this.context.setActiveScene(MainScene);
      return;
    }
    this.points.push(point);
  }

  public draw(canvas: Canvas, time: number): void {
    canvas.background(Color.Gray400);
    const bg = Color.LightGreen800;
    const bd = Color.Red800;
    for (const point of this.points) {
      canvas.circle(point, 4)
        .fill(bg)
        .stroke(bd, 1);
    }
  }

  public load(): void {
    this.max += 2;
  }

  public unload(): void {
  }
}
