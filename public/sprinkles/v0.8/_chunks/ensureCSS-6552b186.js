import { a as qq } from "./qj-1c8d4095.js";
import { g as getCssBundleUrl } from "./hannavars-d2690bca.js";
import "./getSVGtext-b918ded2.js";
import "./i18n-a7278b6d.js";
const ensureCSS = (...tokens) => {
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
};
export {
  ensureCSS as e
};
