System.register(["./Bling.js", "./ShareButtons.js", "../_chunks/initHannaNamespace-77b40001.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/i18n-5b23de04.js", "../_chunks/getLang-61538edc.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/assets-7c5ecab5.js", "../_chunks/ObjectHelpers-a9c65074.js"], function(exports, module) {
  "use strict";
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function() {
      const {
        makeSprinkle,
        sprinkles
      } = window.Hanna;
      const alias = () => {
        sprinkles.Bling();
        sprinkles.ShareButtons();
      };
      makeSprinkle({
        name: "NewsHero",
        init: alias,
        refresh: alias,
        unmount: alias
      });
    }
  };
});
