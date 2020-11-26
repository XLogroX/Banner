const createBannerFormTemplare = () => {
  return (
    `<section class="banner-form">
      <label>
        <span>Выберите цвет</span>
        <input type="color" id="color">
      </label>
      <label>
        <span>Добавьте ссылку на ресурс</span>
        <input type="text" class="text" id="link">
      </label>
      <label>
        <span>Добавьте описание</span>
        <textarea></textarea>
      </label>
      <label>
        <span>Добавьте ссылку на изображение</span>
        <input type="url">
      </label>
      <a download='banner'></a>
    </section>`
  );
};

export {createBannerFormTemplare};
