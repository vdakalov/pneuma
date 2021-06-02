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

  public readonly body: Rectangle = new Rectangle(0.5, 0.5, 1, 1);

  protected onBeforeDraw(canvas: Canvas): void {
  }

  protected onAfterDraw(canvas: Canvas): void {
  }

  protected onDraw(canvas: Canvas, time: number): void {
  }

  public draw(canvas: Canvas, time: number): void {
    if (this.drawable) {
      canvas.save();
      const rotatePoint = this.body.createRotatePoint();
      canvas.translate(rotatePoint);
      canvas.rotate(this.body.angle);
      canvas.translate(rotatePoint.scale(-1));
      this.onBeforeDraw(canvas);
      this.onDraw(canvas, time);
      for (const child of this.children) {
        if (child instanceof DrawableUiNode) {
          child.draw(canvas, time);
        }
      }
      this.onAfterDraw(canvas);
      canvas.restore();
    }
  }
}
