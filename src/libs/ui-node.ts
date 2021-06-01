import { EventEmitter } from 'events';

export default abstract class UiNode<
  C extends UiNode<any, any> = UiNode<any, any>,
  P extends UiNode<any, any> = UiNode<any, any>
  > extends EventEmitter {

  public readonly children: Readonly<C[]>;

  public get parent(): P | undefined {
    return this._parent;
  }

  private readonly _children: C[];

  private _parent: P | undefined;

  constructor() {
    super();
    this._children = this.children = [];
  }

  public appendChild(node: C): void {
    this._children.push(node);
    node._parent = this;
  }

  public removeChild(node: C): void {
    const index = this._children.indexOf(node);
    if (index !== -1) {
      this._children.splice(index, 1);
      node._parent = undefined;
    }
  }
}
