import Abstract from '../Abstract';
import {RENDER_POSITION} from './const';

const createElement = (template) => {
  const container = document.createElement('div');
  container.innerHTML = template;
  return container.firstChild;
};

const render = (element, container, renderPosition) => {
  if (element instanceof Abstract) {
    element = element.createComponentElement();
  }

  switch (renderPosition) {
    case RENDER_POSITION.BEFOREEND:
      container.append(element);
      break;
    case RENDER_POSITION.BEFOREBEGIN:
      container.before(element);
      break;
    case RENDER_POSITION.AFTERBEGIN:
      container.prepend(element);
      break;
    case RENDER_POSITION.AFTEREND:
      container.after(element);
  }
};

export {createElement, render};
