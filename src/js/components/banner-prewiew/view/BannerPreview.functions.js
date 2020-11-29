import {ROWS_LIMIT, textContainerStyle} from '../../../utils/const';

const isRowsCountSatisfies = (spanObject, textDataArray, rowsLimit) => {
  return spanObject.getClientRects().length - (textDataArray.length - 1) > rowsLimit;
};

let handleText = () => {
  let container;
  let span;
  let lengthLimitation;
  return (data, banner) => {
    if (!container) {
      container = document.createElement('p');

      Object.keys(textContainerStyle).forEach((key) => {
        container.style[key] = textContainerStyle[key];
      });

      span = document.createElement('span');
      container.append(span);
      banner.append(container);
    }
    let rows = data.trim().split('\n').length > ROWS_LIMIT ?
      data.trim().split('\n').slice(0, ROWS_LIMIT) :
      data.trim().split('\n');

    if (lengthLimitation && rows.join('<br>').length > lengthLimitation) {
      return;
    } else {
      lengthLimitation = null;
    }

    if (!data.trim() && container) {
      container.remove();
      container = null;
      span = null;
      return;
    }

    span.innerHTML = rows.join('<br>');

    while (isRowsCountSatisfies(span, rows, ROWS_LIMIT)) {
      const lastElementIndex = rows.length - 1;
      if (rows[lastElementIndex].lastIndexOf(' ') !== -1) {
        const index = rows[lastElementIndex].lastIndexOf(' ');
        rows[lastElementIndex] = rows[lastElementIndex].slice(0, index);
        span.innerHTML = rows.join('<br>');
      } else if (rows[lastElementIndex].lastIndexOf(' ') === -1) {
        rows = rows.slice(0, lastElementIndex);
        span.innerHTML = rows.join('<br>');
      } else {
        break;
      }
      lengthLimitation = rows.join('<br>').length;
    }
  };
};

handleText = handleText();

export {handleText};
