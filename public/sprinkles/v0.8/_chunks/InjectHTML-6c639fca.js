import { t, _, p } from "./compat.module-0843eda4.js";
import { o } from "./jsxRuntime.module-b4e3cc20.js";
var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/_/InjectHTML.tsx";
const InjectHTML = ({
  html
}) => {
  const ref = t(_(null), "ref");
  p(() => {
    if (!ref.current) {
      return;
    }
    ref.current.outerHTML = ref.current.innerHTML;
  }, []);
  return o("span", {
    ref,
    dangerouslySetInnerHTML: {
      __html: html
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, void 0);
};
export {
  InjectHTML as I
};
