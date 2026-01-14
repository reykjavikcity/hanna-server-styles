System.register(["./qj-0ce4c6bc.js", "./getSVGtext-2c45db0c.js", "./i18n-5b23de04.js", "./assets-7c5ecab5.js"], function(exports, module) {
  "use strict";
  var qq, styleServerUrl;
  return {
    setters: [(module2) => {
      qq = module2.a;
    }, null, null, (module2) => {
      styleServerUrl = module2.s;
    }],
    execute: function() {
      const majorCssVersion = "0.8";
      const targetCssVersion = majorCssVersion;
      const cssCurrentVersionFolder = styleServerUrl.indexOf("://localhost") === -1 ? `dev-v${targetCssVersion}` : "dev";
      const getCssBundleUrl = /* @__NO_SIDE_EFFECTS__ */ (cssTokens, options) => {
        options = options || {};
        const host = (options.testingServer || styleServerUrl).replace(/\/$/, "");
        const versionFolder = options.version || cssCurrentVersionFolder;
        const tokens = typeof cssTokens === "string" ? cssTokens : cssTokens.join(",");
        return `${host}/bundle/${versionFolder}?m=${tokens.replace(/\s/g, "")}`;
      };
      const ensureCSS = exports("e", (...tokens) => {
        const cssBundleUrlPrefix = /* @__PURE__ */ getCssBundleUrl("");
        const cssBundleLinks = qq(`link[href^="${cssBundleUrlPrefix}"]`);
        const bundleUrls = cssBundleLinks.flatMap((elm) => elm.href.slice(cssBundleUrlPrefix.length).split(",")).filter((n) => !!n);
        const missingTokens = tokens.filter((token) => !bundleUrls.includes(token));
        if (missingTokens.length) {
          return new Promise((resolve) => {
            const linkElm = document.createElement("link");
            linkElm.rel = "stylesheet";
            linkElm.onload = linkElm.onerror = () => resolve();
            linkElm.href = /* @__PURE__ */ getCssBundleUrl(missingTokens);
            document.head.append(linkElm);
          });
        }
        return Promise.resolve();
      });
    }
  };
});
