import SceneConstructor from './scene';
import Drawable from './drawable';
import Canvas from './canvas';
import Input from './input';
import UiGroup from './ui/group';

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
      : this.instances[Scene.name] = new (Scene as any)(this) as SceneConstructor;
    if (this.active !== instance) {
      this.unsetActiveScene();
      console.log(new Date().toISOString(), 'ApplicationContext: set active scene', instance.constructor.name);
      this.active = instance;
      this.input.attach(instance.ui);
      instance.onLoad();
    }
  }

  public unsetActiveScene(): void {
    if (this.active !== undefined) {
      console.log(new Date().toISOString(), 'ApplicationContext: unset active scene', this.active.constructor.name);
      this.active.onUnload();
      this.input.detach(this.active.ui);
      this.active = undefined;
    }
  }

  public draw(canvas: Canvas, time: number): void {
    if (this.active !== undefined) {
      canvas.save();
      this.active.draw(canvas, time);
      canvas.restore();
    }
  }
}
