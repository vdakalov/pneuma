import ApplicationContext from './application-context';
import InteractiveUiNode from './ui/interactive';

export default abstract class Scene extends InteractiveUiNode {

  protected readonly application: ApplicationContext;

  constructor(context: ApplicationContext) {
    super();
    this.application = context;
    setTimeout(this.onCreate.bind(this), 0);
  }

  protected onCreate(): void {
  }

  public onLoad(): void {
  }

  public onUnload(): void {
  }
}
