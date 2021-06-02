import Scene from '../../libs/scene';
import Canvas, { Cursor } from '../../libs/canvas';
import Color from '../../libs/color';
import { KeyboardButton } from '../../libs/input';

import MainScene from '../main';
import Target from './target';

export default class LevelScene extends Scene {

  private timer: any = undefined;

  private addTarget(): void {
    const timeout = Math.floor(Math.random() * 4e3);
    this.timer = setTimeout(() => {
      const target = new Target().appendTo(this);
      target
        .on('press', this.onTargetPress.bind(this, target))
        .on('enter', this.onTargetEnter.bind(this, target));
    }, timeout);
  }

  private onTargetPress(target: Target): void {
    target.destroy();
    this.addTarget();
  }

  private onTargetEnter(target: Target): void {
    console.log('Enter');
  }

  protected onKeyDown(key: KeyboardButton, event: KeyboardEvent) {
    if (key === KeyboardButton.Escape) {
      this.application.setActiveScene(MainScene);
    }
  }

  protected onAfterDraw(canvas: Canvas): void {
    canvas
      .circle(this.application.input.createPointerPosition(), 0.01)
      .fill(Color.Red300);
  }

  public onDraw(canvas: Canvas, time: number): void {
    canvas.background(Color.Gray400);
    canvas.cursor = Cursor.None;
  }

  public onLoad(): void {
    this.addTarget();
  }

  public onUnload(): void {
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }
}
