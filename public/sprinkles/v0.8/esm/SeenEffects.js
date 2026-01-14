import "../_chunks/initHannaNamespace-f4f98843.js";
import { g as getObserver, c as autoSeenEffectPrepare, h as hasLegacySeenEffectsCSS } from "../_chunks/addSeenEffect-3eaf41e0.js";
import "../_chunks/qj-1c8d4095.js";
import "../_chunks/i18n-a7278b6d.js";
import "../_chunks/getLang-8d69057b.js";
import "../_chunks/compat.module-0843eda4.js";
const noop = () => void 0;
const legacySelectors = !hasLegacySeenEffectsCSS ? "" : `, .${[
  // block-level components
  "AccordionList",
  "ActionCards",
  "ArticleCarousel",
  "CityBlock",
  "ExtraLinks",
  "FeatureList",
  "Gallery",
  "GridBlocks",
  "HeroBlock",
  "ImageCards",
  "InfoBlock",
  "IslandBlock",
  "IslandPageBlock",
  "LabeledTextBlock",
  "NewsHero",
  "PageFilter",
  "RowBlock",
  "ContentArticle",
  // low-level ??
  "TableWrapper--BasicTable",
  "PageHeading",
  "SubHeading",
  "TextBlock",
  "Tabs"
].join(", .")}`;
window.Hanna.makeSprinkle({
  name: "SeenEffects",
  selector: `[data-seen-effect]${legacySelectors}`,
  dataAttr: getObserver.DATA_ATTR_NAME,
  init: (component) => {
    autoSeenEffectPrepare(component);
    return getObserver(component) || noop;
  },
  unmount: (elm, unobserve) => {
    unobserve();
  }
});
