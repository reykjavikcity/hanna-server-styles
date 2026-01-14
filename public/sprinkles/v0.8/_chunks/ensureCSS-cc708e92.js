System.register(["./qj-0ce4c6bc.js", "./hannavars-0e03a23c.js", "./getSVGtext-2c45db0c.js", "./i18n-5b23de04.js"], function(exports, module) {
  "use strict";
  var qq, getCssBundleUrl;
  return {
    setters: [(module2) => {
      qq = module2.a;
    }, (module2) => {
      getCssBundleUrl = module2.g;
    }, null, null],
    execute: function() {
      const ensureCSS = exports("e", (...tokens) => {
        const cssBundleUrlPrefix = getCssBundleUrl("");
        const cssBundleLinks = qq(`link[href^="${cssBundleUrlPrefix}"]`);
        const bundleUrls = cssBundleLinks.flatMap((elm) => elm.href.slice(cssBundleUrlPrefix.length).split(",")).filter((n) => !!n);
        const missingTokens = tokens.filter((token) => !bundleUrls.includes(token));
        if (missingTokens.length) {
          return new Promise((resolve) => {
            const linkElm = document.createElement("link");
            linkElm.rel = "stylesheet";
            linkElm.onload = linkElm.onerror = () => resolve();
            linkElm.href = getCssBundleUrl(missingTokens);
            document.head.append(linkElm);
          });
        }
        return Promise.resolve();
      });
    }
  };
});
