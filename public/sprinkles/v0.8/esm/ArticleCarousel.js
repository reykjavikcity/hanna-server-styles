import "../_chunks/initHannaNamespace-f4f98843.js";
import { C as Cn } from "../_chunks/compat.module-0843eda4.js";
import { a as qq, q } from "../_chunks/qj-1c8d4095.js";
import { A as AbstractCarousel } from "../_chunks/_AbstractCarousel-2d75e66d.js";
import { g as getIllustrationUrl } from "../_chunks/assets-a74434cf.js";
import { I as Image } from "../_chunks/_Image-17c5e1ff.js";
import { L as Link } from "../_chunks/_Link-980948f0.js";
import "../_chunks/hannavars-d2690bca.js";
import "../_chunks/getSVGtext-b918ded2.js";
import "../_chunks/i18n-a7278b6d.js";
import { o } from "../_chunks/jsxRuntime.module-b4e3cc20.js";
import { a as autoSeenEffectWrapperProps, b as autoSeenEffectsRefresh } from "../_chunks/addSeenEffect-3eaf41e0.js";
import "../_chunks/getLang-8d69057b.js";
import "../_chunks/misc-d1570401.js";
import "../_chunks/_useMobileMenuToggling-ec254f95.js";
import "../_chunks/ObjectHelpers-c82b0e19.js";
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
