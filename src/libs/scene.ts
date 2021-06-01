import Drawable from './drawable';
import ApplicationContext from './application-context';
import Canvas from './canvas';
import { EventEmitter } from 'events';
import UiNode from './ui-node';

export default abstract class Scene extends EventEmitter implements Drawable {

  public abstract ui: UiNode;

  protected readonly application: ApplicationContext;

  constructor(context: ApplicationContext) {
    super();
    this.application = context;
  }

  public abstract onLoad(): void;

  public abstract onUnload(): void;

  public abstract destroy(): void;

  public abstract draw(canvas: Canvas, time: number): void;
}
