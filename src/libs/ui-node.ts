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

  protected onDestroy(): void {
  }

  public destroy(): void {
    this.onDestroy();
    if (this.parent) {
      this.parent.removeChild(this);
    }
    for (const child of this._children) {
      child.destroy();
    }
  }

  public appendChild(child: C): this {
    this._children.push(child);
    child._parent = this;
    return this;
  }

  public removeChild(child: C): this {
    const index = this._children.indexOf(child);
    if (index !== -1) {
      this._children.splice(index, 1);
      child._parent = undefined;
    }
    return this;
  }

  public appendTo(parent: P): this {
    parent.appendChild(this);
    return this;
  }
}
