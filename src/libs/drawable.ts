import Canvas from './canvas';

export default interface Drawable {
  draw(context: Canvas, time: number): void;
}
