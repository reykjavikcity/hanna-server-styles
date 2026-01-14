import "./Bling.js";
import "./ShareButtons.js";
import "../_chunks/initHannaNamespace-f4f98843.js";
import "../_chunks/qj-1c8d4095.js";
import "../_chunks/i18n-a7278b6d.js";
import "../_chunks/getLang-8d69057b.js";
import "../_chunks/getSVGtext-b918ded2.js";
import "../_chunks/assets-a74434cf.js";
import "../_chunks/ObjectHelpers-c82b0e19.js";
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
