import Application from './libs/application';
import Canvas from './libs/canvas';
import Input from './libs/input';

const element = window.document.createElement('canvas');
const context = element.getContext('2d');

if (context) {
  const application = new Application(new Canvas(context), new Input(element));
  element.tabIndex = 0;
  // element.style.cursor = 'none';
  window.document.body.appendChild(element);
}

