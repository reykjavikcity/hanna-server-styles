System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/compat.module-919773fc.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/_AbstractCarousel-8a484a2f.js", "../_chunks/assets-7c5ecab5.js", "../_chunks/_Image-1382ad99.js", "../_chunks/_Link-8229a97c.js", "../_chunks/hannavars-0e03a23c.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/i18n-5b23de04.js", "../_chunks/jsxRuntime.module-791778ad.js", "../_chunks/addSeenEffect-212ed7c0.js", "../_chunks/getLang-61538edc.js", "../_chunks/misc-20452715.js", "../_chunks/_useMobileMenuToggling-b1fb85e8.js", "../_chunks/ObjectHelpers-a9c65074.js"], function(exports, module) {
  "use strict";
  var Cn, qq, q, AbstractCarousel, getIllustrationUrl, Image, Link, o, autoSeenEffectWrapperProps, autoSeenEffectsRefresh;
  return {
    setters: [null, (module2) => {
      Cn = module2.C;
    }, (module2) => {
      qq = module2.a;
      q = module2.q;
    }, (module2) => {
      AbstractCarousel = module2.A;
    }, (module2) => {
      getIllustrationUrl = module2.g;
    }, (module2) => {
      Image = module2.I;
    }, (module2) => {
      Link = module2.L;
    }, null, null, null, (module2) => {
      o = module2.o;
    }, (module2) => {
      autoSeenEffectWrapperProps = module2.a;
      autoSeenEffectsRefresh = module2.b;
    }, null, null, null, null],
    execute: function() {
      const colorFamilies$1 = {
        esja: "esja",
        faxafloi: "faxafloi",
        nautholsvik: "nautholsvik",
        heidmork: "heidmork",
        ellidaardalur: "ellidaardalur",
        blafjoll: "blafjoll",
        sund: "sund",
        rokkur: "rokkur",
        suld: "suld"
      };
      const colorThemes = {
        trustworthy: "trustworthy",
        dependable: "dependable",
        friendly: "friendly",
        lively: "lively",
        colorful: "colorful"
      };
      const colorFamilies = Object.assign(["esja", "faxafloi", "nautholsvik", "heidmork", "ellidaardalur", "blafjoll", "sund", "rokkur", "suld"], colorFamilies$1, {
        /** @deprecated  This is a typo  (Will be removed in v0.11) */
        ellidarardalur: "ellidaardalur"
      });
      const themeOptions = Object.assign(["trustworthy", "dependable", "friendly", "lively", "colorful"], colorThemes);
      var _jsxFileName$2 = "/Users/maro5239/work/hanna/modules/hanna-react/src/ArticleCarousel/_ArticleCarouselCard.tsx";
      const ArticleCarouselCard = (props) => {
        const {
          date,
          title,
          summary,
          href,
          target,
          moreLabel,
          color,
          theme,
          illustration,
          image
        } = props;
        const photo = image == null ? void 0 : image.photo;
        const imageProps = illustration ? {
          src: getIllustrationUrl(illustration)
        } : image;
        return o("div", {
          className: "ArticleCarouselCard",
          "data-color": color && colorFamilies[color],
          "data-color-theme": !color ? theme && themeOptions[theme] : void 0,
          children: [o(Link, {
            className: "ArticleCarouselCard__link",
            href,
            target,
            children: [" ", o(Image, {
              bem: "ArticleCarouselCard__illustration",
              modifier: photo && "photo",
              placeholder: true,
              ...imageProps
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 60,
              columnNumber: 9
            }, void 0), o("h3", {
              className: "ArticleCarouselCard__title",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 66,
              columnNumber: 9
            }, void 0), " "]
          }, void 0, true, {
            fileName: _jsxFileName$2,
            lineNumber: 58,
            columnNumber: 7
          }, void 0), " ", date && o("span", {
            className: "ArticleCarouselCard__date",
            children: date
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 68,
            columnNumber: 16
          }, void 0), o("div", {
            className: "ArticleCarouselCard__summary",
            children: summary
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 69,
            columnNumber: 7
          }, void 0), moreLabel && o(Link, {
            className: "ArticleCarouselCard__morelink",
            href,
            target,
            "aria-label": title,
            children: [" ", moreLabel, " "]
          }, void 0, true, {
            fileName: _jsxFileName$2,
            lineNumber: 71,
            columnNumber: 9
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$2,
          lineNumber: 53,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/ArticleCarousel.tsx";
      const ArticleCarousel = (props) => {
        const {
          title,
          items,
          moreLabel,
          ssr
        } = props;
        return o(AbstractCarousel, {
          bem: "ArticleCarousel",
          title,
          items,
          Component: ArticleCarouselCard,
          ComponentProps: {
            moreLabel
          },
          ssr,
          wrapperProps: props.wrapperProps
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 25,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/ArticleCarousel.tsx";
      const getArticleCarouselData = (elm) => {
        var _a, _b;
        const moreLabel = ((_a = q(".ArticleCarouselCard__morelink", elm)) == null ? void 0 : _a.textContent) || "";
        const title = ((_b = q(".ArticleCarousel__title", elm)) == null ? void 0 : _b.textContent) || "";
        const items = qq(".ArticleCarouselCard", elm).map((itemElm) => {
          var _a2, _b2, _c;
          const img = q(".ArticleCarouselCard__illustration img", itemElm);
          const photo = !!q(".ArticleCarouselCard__illustration--photo", itemElm);
          const image = img && {
            src: img.src,
            altText: img.alt,
            photo
          };
          const color = itemElm.dataset.color;
          const theme = !color ? itemElm.dataset.colorTheme : void 0;
          const linkElm = q(".ArticleCarouselCard__link", itemElm);
          const href = (linkElm == null ? void 0 : linkElm.href) || "";
          const target = (linkElm == null ? void 0 : linkElm.target) || void 0;
          const title2 = ((_a2 = q(".ArticleCarouselCard__title", itemElm)) == null ? void 0 : _a2.textContent) || "";
          const date = ((_b2 = q(".ArticleCarouselCard__date", itemElm)) == null ? void 0 : _b2.textContent) || void 0;
          const summary = ((_c = q(".ArticleCarouselCard__summary", itemElm)) == null ? void 0 : _c.textContent) || "";
          return {
            href,
            target,
            title: title2,
            date,
            summary,
            image,
            color,
            theme
          };
        });
        return {
          props: {
            title,
            items,
            moreLabel
          },
          itemContextuals: qq(".ArticleCarouselCard", elm).map((itemElm) => q(".ArticleCarouselCard__contextual", itemElm))
        };
      };
      window.Hanna.makeSprinkle({
        name: "ArticleCarousel",
        init: (elm) => {
          const {
            props,
            itemContextuals
          } = getArticleCarouselData(elm);
          const root = elm;
          elm.getAttributeNames().forEach((attrName) => {
            elm.removeAttribute(attrName);
          });
          Cn.render(o(ArticleCarousel, {
            ...props,
            ssr: false,
            wrapperProps: autoSeenEffectWrapperProps(elm)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, globalThis), root, () => autoSeenEffectsRefresh());
          const galleryItems = qq(".ArticleCarouselCard", root);
          itemContextuals.forEach((contextual, idx) => {
            if (contextual) {
              galleryItems[idx].insertAdjacentElement("afterbegin", contextual);
            }
          });
          return root;
        },
        unmount: (elm, root) => {
          Cn.unmountComponentAtNode(root);
        }
      });
    }
  };
});
