import InteractiveUiNode from '../interactive';
import Rectangle from '../../math/rectangle';
import Canvas from '../../canvas';

export default class Text extends InteractiveUiNode {

  public text: string;

  public fontSize: number = 0.1;

  constructor(text: string, body: Rectangle) {
    super();
    this.text = text;
    this.body.setFrom(body);
  }

  protected onDraw(canvas: Canvas, time: number) {

  }
}
