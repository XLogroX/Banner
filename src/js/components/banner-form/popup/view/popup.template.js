const createPopupTemplate = (message) => {
  return (
    `<section class="popup" data-popup="popup">
      <button class="button popup__close" type="button" data-popup="close">X</button>
      <p>${message}</p>
    </section>`
  );
};

export {createPopupTemplate};
