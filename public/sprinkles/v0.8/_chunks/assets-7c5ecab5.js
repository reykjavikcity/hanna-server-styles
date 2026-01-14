System.register([], function(exports, module) {
  "use strict";
  return {
    execute: function() {
      const testServer = "https://styles.test.thon.is";
      const _defaultStyleServerUrl = typeof _NPM_PUB_ !== "undefined" ? testServer : "http://localhost:4000";
      let styleServerUrl = exports("s", _defaultStyleServerUrl);
      const getAssetUrl = /* @__NO_SIDE_EFFECTS__ */ (filePath) => `${styleServerUrl}/assets/${filePath}`;
      const getIllustrationUrl = exports("g", /* @__NO_SIDE_EFFECTS__ */ (illustration, variant) => {
        const subFolder = variant === "thumb" ? "thumb/" : "";
        return /* @__PURE__ */ getAssetUrl(`illustrations/${subFolder}${illustration}.png`);
      });
      const getBlingUrl = exports("a", /* @__NO_SIDE_EFFECTS__ */ (blingType) => /* @__PURE__ */ getAssetUrl(`bling/${blingType}.svg`));
    }
  };
});
