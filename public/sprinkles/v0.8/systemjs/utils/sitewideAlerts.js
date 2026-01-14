System.register(["../../_chunks/compat.module-919773fc.js", "../../_chunks/qj-0ce4c6bc.js", "../../_chunks/ensureCSS-cc708e92.js", "../../_chunks/getLang-61538edc.js", "./sitewideAlerts.component.js", "../../_chunks/jsxRuntime.module-791778ad.js", "../../_chunks/hannavars-0e03a23c.js", "../../_chunks/getSVGtext-2c45db0c.js", "../../_chunks/ObjectHelpers-a9c65074.js", "../../_chunks/i18n-5b23de04.js", "../../_chunks/assets-7c5ecab5.js", "../../_chunks/Alert-349b2825.js", "../../_chunks/_Button-14554c59.js", "../../_chunks/_Link-8229a97c.js", "../../_chunks/env-c53cf972.js", "../../_chunks/_useMobileMenuToggling-b1fb85e8.js"], function(exports, module) {
  "use strict";
  var Cn, q, qq, ensureCSS, getLang, SiteWideAlerts, o;
  return {
    setters: [(module2) => {
      Cn = module2.C;
    }, (module2) => {
      q = module2.q;
      qq = module2.a;
    }, (module2) => {
      ensureCSS = module2.e;
    }, (module2) => {
      getLang = module2.g;
    }, (module2) => {
      SiteWideAlerts = module2.SiteWideAlerts;
    }, (module2) => {
      o = module2.o;
    }, null, null, null, null, null, null, null, null, null, null],
    execute: function() {
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/utils/sitewideAlerts.tsx";
      const makeEmptyDivInside = (container) => {
        const div = document.createElement("div");
        container.append(div);
        return div;
      };
      const resolveRoot = (rootElm, Layout) => {
        if (typeof rootElm === "string") {
          const selectedElm = q(rootElm);
          if (selectedElm) {
            return selectedElm;
          }
        } else if (rootElm) {
          return rootElm;
        }
        const existingAlertsContainer = q(`.${Layout}__alerts`);
        if (existingAlertsContainer) {
          return makeEmptyDivInside(existingAlertsContainer);
        }
        const newAlertsContainer = document.createElement("div");
        newAlertsContainer.className = `${Layout}__alerts`;
        const layoutElm = qq(`.${Layout}, body`).slice(-1)[0];
        layoutElm.prepend(newAlertsContainer);
        return makeEmptyDivInside(newAlertsContainer);
      };
      const sitewideAlerts = exports("default", (props) => {
        const Layout = props.layoutName || "Layout";
        const rootElm = resolveRoot(props.rootElm, Layout);
        ensureCSS("Alert").then(() => {
          Cn.render(o(SiteWideAlerts, {
            alertsUri: props.alertsUri,
            baseUrl: props.baseUrl,
            refreshInterval: props.refreshInterval,
            lang: getLang()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, void 0), rootElm);
        });
      });
    }
  };
});
