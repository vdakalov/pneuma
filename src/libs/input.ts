import Point from './math/point';

export interface InputTarget {
  onMouseMove(point: Point, event: MouseEvent): void;
  onMouseDown(point: Point, button: PointerButton, event: MouseEvent): void;
  onMouseUp(point: Point, button: PointerButton, event: MouseEvent): void;
  onMouseWheel(point: Point, value: number, event: WheelEvent): void;
  onKeyDown(key: KeyboardButton, event: KeyboardEvent): void;
  onKeyUp(key: KeyboardButton, event: KeyboardEvent): void;
}

export enum PointerButton {
  Left,
  Middle,
  Right
}

export enum KeyboardButton {
  Escape = 'Escape',
  Digit1 = 'Digit1',
  Digit2 = 'Digit2',
  Digit3 = 'Digit3',
  Digit4 = 'Digit4',
  Digit5 = 'Digit5',
  Digit6 = 'Digit6',
  Digit7 = 'Digit7',
  Digit8 = 'Digit8',
  Digit9 = 'Digit9',
  Digit0 = 'Digit0',
  Minus = 'Minus',
  Equal = 'Equal',
  Backspace = 'Backspace',
  Tab = 'Tab',
  KeyQ = 'KeyQ',
  KeyW = 'KeyW',
  KeyE = 'KeyE',
  KeyR = 'KeyR',
  KeyT = 'KeyT',
  KeyY = 'KeyY',
  KeyU = 'KeyU',
  KeyI = 'KeyI',
  KeyO = 'KeyO',
  KeyP = 'KeyP',
  BracketLeft = 'BracketLeft',
  BracketRight = 'BracketRight',
  Enter = 'Enter',
  ControlLeft = 'ControlLeft',
  KeyA = 'KeyA',
  KeyS = 'KeyS',
  KeyD = 'KeyD',
  KeyF = 'KeyF',
  KeyG = 'KeyG',
  KeyH = 'KeyH',
  KeyJ = 'KeyJ',
  KeyK = 'KeyK',
  KeyL = 'KeyL',
  Semicolon = 'Semicolon',
  Quote = 'Quote',
  Backquote = 'Backquote',
  ShiftLeft = 'ShiftLeft',
  Backslash = 'Backslash',
  KeyZ = 'KeyZ',
  KeyX = 'KeyX',
  KeyC = 'KeyC',
  KeyV = 'KeyV',
  KeyB = 'KeyB',
  KeyN = 'KeyN',
  KeyM = 'KeyM',
  Comma = 'Comma',
  Period = 'Period',
  Slash = 'Slash',
  ShiftRight = 'ShiftRight',
  NumpadMultiply = 'NumpadMultiply',
  AltLeft = 'AltLeft',
  Space = 'Space',
  CapsLock = 'CapsLock',
  F1 = 'F1',
  F2 = 'F2',
  F3 = 'F3',
  F4 = 'F4',
  F5 = 'F5',
  F6 = 'F6',
  F7 = 'F7',
  F8 = 'F8',
  F9 = 'F9',
  F10 = 'F10',
  NumLock = 'NumLock',
  ScrollLock = 'ScrollLock',
  Numpad7 = 'Numpad7',
  Numpad8 = 'Numpad8',
  Numpad9 = 'Numpad9',
  NumpadSubtract = 'NumpadSubtract',
  Numpad4 = 'Numpad4',
  Numpad5 = 'Numpad5',
  Numpad6 = 'Numpad6',
  NumpadAdd = 'NumpadAdd',
  Numpad1 = 'Numpad1',
  Numpad2 = 'Numpad2',
  Numpad3 = 'Numpad3',
  Numpad0 = 'Numpad0',
  NumpadDecimal = 'NumpadDecimal',
  IntlBackslash = 'IntlBackslash',
  F11 = 'F11',
  F12 = 'F12',
  IntlRo = 'IntlRo',
  Convert = 'Convert',
  KanaMode = 'KanaMode',
  NonConvert = 'NonConvert',
  NumpadEnter = 'NumpadEnter',
  ControlRight = 'ControlRight',
  NumpadDivide = 'NumpadDivide',
  PrintScreen = 'PrintScreen',
  AltRight = 'AltRight',
  Home = 'Home',
  ArrowUp = 'ArrowUp',
  PageUp = 'PageUp',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  End = 'End',
  ArrowDown = 'ArrowDown',
  PageDown = 'PageDown',
  Insert = 'Insert',
  Delete = 'Delete',
  AudioVolumeMute = 'AudioVolumeMute',
  AudioVolumeDown = 'AudioVolumeDown',
  AudioVolumeUp = 'AudioVolumeUp',
  NumpadEqual = 'NumpadEqual',
  Pause = 'Pause',
  IntlYen = 'IntlYen',
  OSLeft = 'OSLeft',
  OSRight = 'OSRight',
  ContextMenu = 'ContextMenu',
  Undo = 'Undo',
  Copy = 'Copy',
  Paste = 'Paste',
  Cut = 'Cut',
  Help = 'Help',
  BrowserBack = 'BrowserBack',
  BrowserForward = 'BrowserForward',
  BrowserRefresh = 'BrowserRefresh'
}

export default class Input {

  public pointerScrollScale: number = 0.1;

  private readonly element: HTMLElement;

  private readonly pointer: [number, number, number] = [-1, -1, -1];

  private readonly keys: KeyboardButton[] = [];

  private readonly targets: InputTarget[] = [];

  constructor(element: HTMLElement) {
    this.element = element;
    this.element.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.element.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.element.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.element.addEventListener('contextmenu', this.onContextMenu.bind(this));
    this.element.addEventListener('wheel', this.onMouseWheel.bind(this));
    this.element.addEventListener('keydown', this.onKeyDown.bind(this));
    this.element.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  private emit<T extends keyof InputTarget>(name: T, ...args: Parameters<InputTarget[T]>): void {
    if (name !== 'onMouseMove') {
      console.log(new Date().toISOString(),
        'Input: before emit', name, this.targets.map(target => target.constructor.name));
    }
    for (const target of this.targets.slice(0, this.targets.length)) {
      // @ts-ignore
      target[name](...args);
    }
  }

  private createPointFromPointerEvent(event: MouseEvent): Point {
    return new Point(
      event.x - this.element.offsetLeft,
      event.y - this.element.offsetTop);
  }

  private onMouseMove(event: MouseEvent): void {
    const point = this.createPointFromPointerEvent(event);
    this.pointer[0] = point.x;
    this.pointer[1] = point.y;
    this.emit('onMouseMove', point, event);
  }

  private onMouseDown(event: MouseEvent): void {
    const point = this.createPointFromPointerEvent(event);
    this.pointer[2] = event.button;
    this.emit('onMouseDown', point, event.button, event);
  }

  private onMouseUp(event: MouseEvent): void {
    const point = this.createPointFromPointerEvent(event);
    this.pointer[2] = -1;
    this.emit('onMouseUp', point, event.button, event);
  }

  private onContextMenu(event: MouseEvent): void {
    event.preventDefault();
  }

  private onMouseWheel(event: WheelEvent): void {
    const point = this.createPointFromPointerEvent(event);
    this.emit('onMouseWheel', point, event.deltaY * this.pointerScrollScale, event);
  }

  private onKeyDown(event: KeyboardEvent): void {
    const button = event.code as KeyboardButton;
    if (this.keys.indexOf(button) === -1) {
      this.keys.push(button);
    }
    this.emit('onKeyDown', button, event);
  }

  private onKeyUp(event: KeyboardEvent): void {
    const button = event.code as KeyboardButton;
    let index;
    while ((index = this.keys.indexOf(button)) !== -1) {
      this.keys.splice(index, 1);
    }
    this.emit('onKeyUp', button, event);
  }

  public destroy(): void {
    // todo unbind all event listeners that bind in constructor
  }

  public attach(target: InputTarget): void {
    if (this.targets.indexOf(target) === -1) {
      this.targets.push(target);
    }
  }

  public detach(target: InputTarget): void {
    const index = this.targets.indexOf(target);
    if (index !== -1) {
      this.targets.splice(index, 1);
    }
  }

  public createPointerPosition(): Point {
    return new Point(this.pointer[0], this.pointer[1]);
  }

  public isPointerButtonPressed(button: PointerButton): boolean {
    return button !== -1 && this.pointer[2] === button;
  }

  public isKeyboardButtonPressed(button: KeyboardButton): boolean {
    return this.keys.indexOf(button) !== -1;
  }
}
