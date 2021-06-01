import UiNode from '../ui-node';
import Drawable from '../drawable';
import Canvas from '../canvas';
import Point from '../math/point';
import Rectangle from '../math/rectangle';

export default abstract class DrawableUiNode<
  C extends UiNode<any, any> = UiNode<any, any>,
  P extends UiNode<any, any> = UiNode<any, any>
  > extends UiNode<C, P> implements Drawable {

  public drawable: boolean = true;

  public angle: number = 0;

  public get degree(): number {
    return this.angle * Point.Radian2Degree;
  }

  public set degree(value: number) {
    this.angle = value * Point.Degree2Radian;
  }

  public readonly body: Rectangle = new Rectangle(0.5, 0.5, 1, 1);

  protected onBeforeDraw(canvas: Canvas): void {
    canvas.save();
    canvas.rotate(this.angle);
  }

  protected onAfterDraw(canvas: Canvas): void {
    canvas.restore();
  }

  protected onDraw(canvas: Canvas, time: number): void {
  }

  public draw(canvas: Canvas, time: number): void {
    if (this.drawable) {
      this.onBeforeDraw(canvas);
      this.onDraw(canvas, time);
      for (const child of this.children) {
        if (child instanceof DrawableUiNode) {
          child.draw(canvas, time);
        }
      }
      this.onAfterDraw(canvas);
    }
  }
}
