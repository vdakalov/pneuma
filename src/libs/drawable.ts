import Canvas from './canvas';

export default interface Drawable {
  draw(canvas: Canvas, time: number): void;
}
