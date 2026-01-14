import "../_chunks/initHannaNamespace-f4f98843.js";
import { C as Cn } from "../_chunks/compat.module-0843eda4.js";
import { q } from "../_chunks/qj-1c8d4095.js";
import { A as AbstractCarousel } from "../_chunks/_AbstractCarousel-2d75e66d.js";
import { o } from "../_chunks/jsxRuntime.module-b4e3cc20.js";
import { a as autoSeenEffectWrapperProps, b as autoSeenEffectsRefresh } from "../_chunks/addSeenEffect-3eaf41e0.js";
import "../_chunks/i18n-a7278b6d.js";
import "../_chunks/getLang-8d69057b.js";
import "../_chunks/getSVGtext-b918ded2.js";
import "../_chunks/misc-d1570401.js";
import "../_chunks/_useMobileMenuToggling-ec254f95.js";
var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/Carousel.tsx";
const Carousel = (props) => o(AbstractCarousel, {
  ...props,
  bem: void 0,
  modifier: void 0,
  title: void 0
}, void 0, false, {
  fileName: _jsxFileName$1,
  lineNumber: 13,
  columnNumber: 3
}, void 0);
var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/Carousel.tsx";
const getCarouselData = (elm) => {
  const itemlistElm = q(".Carousel__itemlist", elm);
  if (!itemlistElm) {
    return;
  }
  return {
    childrenHTML: itemlistElm.innerHTML
  };
};
window.Hanna.makeSprinkle({
  name: "Carousel",
  init: (elm) => {
    const props = getCarouselData(elm);
    if (!props) {
      return;
    }
    const root = elm;
    elm.getAttributeNames().forEach((attrName) => {
      elm.removeAttribute(attrName);
    });
    Cn.render(o(Carousel, {
      ...props,
      ssr: false,
      wrapperProps: autoSeenEffectWrapperProps(elm)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, globalThis), root, () => autoSeenEffectsRefresh());
    return root;
  },
  unmount: (elm, root) => {
    root && Cn.unmountComponentAtNode(root);
  }
});
