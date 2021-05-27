import SceneConstructor from './scene';
import Drawable from './drawable';
import Canvas from './canvas';
import Input from './input';

export default class ApplicationContext implements Drawable {

  public readonly input: Input;

  private readonly instances: Record<string, SceneConstructor> = {};

  private active: SceneConstructor | undefined = undefined;

  constructor(input: Input) {
    this.input = input;
  }

  public destroy(): void {
    this.unsetActiveScene();
    for (const instance of Object.values(this.instances)) {
      instance.destroy();
    }
  }

  public setActiveScene(Scene: typeof SceneConstructor): void {
    const instance = this.instances.hasOwnProperty(Scene.name)
      ? this.instances[Scene.name]
      : this.instances[Scene.name] = new (Scene as any)(this);
    if (this.active !== instance) {
      if (this.active !== undefined) {
        this.active.unload();
      }
      this.active = instance;
      instance.load();
    }
  }

  public unsetActiveScene(): void {
    this.active = undefined;
  }

  public draw(canvas: Canvas, time: number): void {
    if (this.active !== undefined) {
      canvas.save();
      canvas.clear();
      this.active.draw(canvas, time);
      canvas.restore();
    }
  }
}
