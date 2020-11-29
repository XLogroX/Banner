const createBannerFormTemplare = () => {
  return (
    `<section class="banner-form">
      
    <div class="banner-form__color-selection">
       <label class="banner-form__color-caption" for="color">Выберите цвет:</label>
       <label class="banner-form__color-wrapper">
        <input class="button banner-form__color-field" class="banner-form__color-field" type="color" id="color" data-type="colorField">
       </label>
    </div>
    
     <div class="banner-form__link-selection">
       <label class="banner-form__link-caption" for="link">Добавьте ссылку на ресурс:</label>
       <input class="banner-form__link-field" type="url" id="link" data-type="link">
       <button class="button" type="button" data-type="linkButton">Добавить ссылку</button>
     </div>
    
     <div class="banner-form__image-selection">
       <label class="banner-form__image-caption" for="image">Добавьте ссылку на изображение:</label>
       <input class="banner-form__image-field" type="url" id="image" data-type="image">
       <button class="button" type="button" data-type="imageButton">Добавить изображение</button>
     </div>

     <div class="banner-form__text-form">
       <label class="banner-form__text-caption" for="content">Добавьте описание:</label>
       <textarea class="banner-form__description-field" data-type="contentField" id="content"></textarea>
     </div>

     <div class="banner-form__controls">
       <button class="button" type="button" data-type="savePNG">Сохранить png</button>
       <button class="button" type="button" data-type="copyJSON">Копировать json</button>
       <button class="button" type="button" data-type="copyHTML">Копировать html</button>
     </div>
 </section>`
  );
};

export {createBannerFormTemplare};
