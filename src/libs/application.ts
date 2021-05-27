import Canvas from './canvas';
import ApplicationContext from './application-context';
import MainScene from '../scenes/main';
import Input from './input';

export default class Application {

  private readonly canvas: Canvas;

  private readonly context: ApplicationContext;

  private readonly bindLoop: FrameRequestCallback = this.loop.bind(this);

  private raf: number = 0;

  private lastAf: number = 0;

  constructor(canvas: Canvas, input: Input) {
    this.canvas = canvas;
    this.context = new ApplicationContext(input);
    this.context.setActiveScene(MainScene);
    this.loop();
  }

  private loop(): void {
    const now = window.performance.now();
    const time = this.lastAf === 0 ? 0 : now - this.lastAf;
    this.lastAf = now;
    this.draw(time);
    this.raf = window.requestAnimationFrame(this.bindLoop);
  }

  private draw(time: number): void {
    this.context.draw(this.canvas, time);
  }

  public destroy(): void {
    return undefined;
  }

  public pause(): void {
    if (this.raf !== 0) {
      window.cancelAnimationFrame(this.raf);
      this.raf = 0;
    }
  }

  public resume(): void {
    if (this.raf === 0) {
      this.loop();
    }
  }
}
