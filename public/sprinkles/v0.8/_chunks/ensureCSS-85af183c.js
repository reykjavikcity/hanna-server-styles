import { a as qq } from "./qj-1c8d4095.js";
import "./getSVGtext-b918ded2.js";
import "./i18n-a7278b6d.js";
import { s as styleServerUrl } from "./assets-a74434cf.js";
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
const ensureCSS = (...tokens) => {
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
};
export {
  ensureCSS as e
};
