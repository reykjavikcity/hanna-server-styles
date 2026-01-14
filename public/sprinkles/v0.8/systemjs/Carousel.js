System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/compat.module-919773fc.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/_AbstractCarousel-8a484a2f.js", "../_chunks/jsxRuntime.module-791778ad.js", "../_chunks/addSeenEffect-212ed7c0.js", "../_chunks/i18n-5b23de04.js", "../_chunks/getLang-61538edc.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/misc-20452715.js", "../_chunks/_useMobileMenuToggling-b1fb85e8.js"], function(exports, module) {
  "use strict";
  var Cn, q, AbstractCarousel, o, autoSeenEffectWrapperProps, autoSeenEffectsRefresh;
  return {
    setters: [null, (module2) => {
      Cn = module2.C;
    }, (module2) => {
      q = module2.q;
    }, (module2) => {
      AbstractCarousel = module2.A;
    }, (module2) => {
      o = module2.o;
    }, (module2) => {
      autoSeenEffectWrapperProps = module2.a;
      autoSeenEffectsRefresh = module2.b;
    }, null, null, null, null, null],
    execute: function() {
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
    }
  };
});
