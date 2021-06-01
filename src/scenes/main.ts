import Scene from '../libs/scene';
import Canvas from '../libs/canvas';
import Color from '../libs/color';
import Point from '../libs/math/point';
import { PointerButton } from '../libs/input';
import Rectangle from '../libs/math/rectangle';

import LevelScene from './level';
import InteractiveUiNode from '../libs/ui/interactive';

class SceneUi extends InteractiveUiNode {

  public readonly body: Rectangle = new Rectangle(0, 0, 1, 1);

  protected onDraw(context: Canvas, time: number): void {
  }
}

export default class MainScene extends Scene {

  public readonly ui: InteractiveUiNode = new SceneUi();

  private readonly buttonRect: Rectangle = new Rectangle(100, 80, 200, 120);

  public onMouseDown(point: Point, button: PointerButton, event: MouseEvent) {
    if (this.buttonRect.contains(point)) {
      console.log(new Date().toISOString(), 'MainScene: onMouseDown: load LevelScene');
      this.application.setActiveScene(LevelScene);
    }
  }

  public destroy(): void {
  }

  public onLoad(): void {
  }

  public onUnload(): void {
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
