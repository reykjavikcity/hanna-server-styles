System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/addSeenEffect-212ed7c0.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/i18n-5b23de04.js", "../_chunks/getLang-61538edc.js", "../_chunks/compat.module-919773fc.js"], function(exports, module) {
  "use strict";
  var getObserver, autoSeenEffectPrepare, hasLegacySeenEffectsCSS;
  return {
    setters: [null, (module2) => {
      getObserver = module2.g;
      autoSeenEffectPrepare = module2.c;
      hasLegacySeenEffectsCSS = module2.h;
    }, null, null, null, null],
    execute: function() {
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
    }
  };
});
