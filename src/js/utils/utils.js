import html2canvas from 'html2canvas';
import canvas2image from 'canvas2image-2';
import he from 'he';
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

  if (container instanceof Abstract) {
    container = container.createComponentElement();
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

const remove = (component) => {
  if (!component) {
    return;
  }

  if (!(component instanceof Abstract)) {
    throw new Error(`Can't remove`);
  }

  component.createComponentElement().remove();
  component.removeElement();
};

const copyInClipboard = (data, onSuccess, onError) => {
  return navigator.clipboard.writeText(data).then(onSuccess).catch(onError);
};

const convertHtmlToCanvas = (html, onSuccess, onError, optionsObj) => {
  return html2canvas(html, optionsObj).then(onSuccess).catch(onError);
};

const saveHtmlImage = (canvas, width, height, imgType, fileName) => {
  canvas2image.saveAsImage(canvas, width, height, imgType, fileName);
};

const encodeData = (data) => {
  return he.encode(data);
};

export {createElement, render, copyInClipboard, convertHtmlToCanvas, saveHtmlImage, encodeData, remove};
