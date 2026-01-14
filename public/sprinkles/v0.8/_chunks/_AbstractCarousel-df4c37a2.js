import { t, h, F, _, p } from "./compat.module-8e5010ff.js";
import { t as throttle, d as debounce, b as focusElm } from "./qj-1c8d4095.js";
import { o, m as modifiedClass, u as useIsBrowserSide } from "./jsxRuntime.module-dc826c75.js";
import "./getSVGtext-b918ded2.js";
import { n as notNully } from "./misc-d1570401.js";
import "./i18n-a7278b6d.js";
import "./_useMobileMenuToggling-9332c9ef.js";
var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/CarouselStepper.tsx";
const defaultTexts = {
  prefix: ""
};
const array = new Array(50).join(" ").split("");
const CarouselStepper = (props) => {
  const {
    current,
    itemCount,
    setCurrent,
    texts = defaultTexts,
    wrapperProps
  } = props;
  const labelPrefix = texts.prefix ? `${texts.prefix} ` : "";
  return o("div", {
    ...wrapperProps,
    className: modifiedClass("CarouselStepper", null, (wrapperProps || {}).className),
    children: array.slice(0, itemCount).map((_2, i) => {
      const isCurrent = current === i || void 0;
      const label = labelPrefix + (i + 1);
      return o("button", {
        className: "CarouselStepper__button",
        type: "button",
        disabled: isCurrent,
        "aria-pressed": isCurrent,
        "aria-controls": props["aria-controls"],
        onClick: () => setCurrent(i),
        "aria-label": label,
        title: label,
        children: label
      }, i, false, {
        fileName: _jsxFileName$1,
        lineNumber: 36,
        columnNumber: 11
      }, void 0);
    })
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 28,
    columnNumber: 5
  }, void 0);
};
var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-react/src/_abstract/_AbstractCarousel.tsx";
const scrollXBy = (elm, deltaX) => {
  const left = elm.scrollLeft + deltaX;
  elm.scrollTo(left, elm.scrollTop);
};
const AbstractCarousel = (props) => {
  const {
    title,
    items = [],
    Component,
    ComponentProps,
    childrenHTML,
    bem = "Carousel",
    modifier,
    ssr,
    className,
    wrapperProps
  } = props;
  const isBrowser = useIsBrowserSide(ssr);
  const children = !props.children ? void 0 : Array.isArray(props.children) ? props.children.filter(notNully) : [props.children];
  const [leftOffset, setLeftOffset] = t(h(), "leftOffset");
  const htmlChildrenCount = t(F(() => {
    if (!(childrenHTML == null ? void 0 : childrenHTML.trim())) {
      return;
    }
    if (!isBrowser) {
      return 1;
    }
    const div = document.createElement("div");
    div.innerHTML = childrenHTML;
    return div.children.length;
  }, [childrenHTML, isBrowser]), "htmlChildrenCount");
  const itemCount = props.itemCount != null ? props.itemCount : childrenHTML ? htmlChildrenCount : (children || items).length;
  const listRef = t(_(null), "listRef");
  const [activeItem, setActiveItem] = t(h(0), "activeItem");
  const listElm = isBrowser && listRef.current;
  p(() => {
    if (!listElm) {
      return;
    }
    const calcLeftOffset = () => {
      var _a;
      setLeftOffset((_a = listElm.parentElement) == null ? void 0 : _a.getBoundingClientRect().left);
      scrollXBy(listElm, 0);
    };
    const calcActiveItem = throttle(() => {
      const {
        scrollLeft,
        children: children2
      } = listElm;
      Array.from(children2).find((item, i) => {
        if (scrollLeft <= item.offsetLeft + item.offsetWidth / 2) {
          setActiveItem(i);
          return true;
        }
      });
    }, 300, true);
    calcLeftOffset();
    listElm.addEventListener("scroll", calcActiveItem, {
      passive: true
    });
    window.addEventListener("resize", calcLeftOffset, {
      passive: true
    });
    return () => {
      listElm.removeEventListener("scroll", calcActiveItem);
      window.removeEventListener("resize", calcLeftOffset);
    };
  }, [listElm]);
  const scrollToItem = (newActive) => {
    const listElm2 = listRef.current;
    const newItem = listElm2.children[newActive];
    if (!newItem) {
      return;
    }
    setActiveItem(newActive);
    listElm2.scrollLeft = newItem.offsetLeft || 1;
    setTimeout(() => focusElm.focusElm(newItem), 500);
  };
  const {
    delayedScrollLeft,
    delayedScrollRight
  } = t(F(() => {
    const delayedScrollLeft2 = debounce((currentActive) => {
      scrollToItem(currentActive - 1);
      setTimeout(() => delayedScrollLeft2(currentActive - 1), 0);
    }, 1e3);
    const delayedScrollRight2 = debounce((currentActive) => {
      scrollToItem(currentActive + 1);
      setTimeout(() => delayedScrollRight2(currentActive + 1), 0);
    }, 1e3);
    return {
      delayedScrollLeft: delayedScrollLeft2,
      delayedScrollRight: delayedScrollRight2
    };
  }, []), "delayedScrollLeft");
  if (!itemCount) {
    return null;
  }
  const itemList = o("div", {
    className: `${bem}__itemlist`,
    style: leftOffset ? {
      "--Carousel--leftOffset": `${leftOffset}px`
    } : void 0,
    "data-scroll-snapping": leftOffset ? "true" : void 0,
    ref: listRef,
    dangerouslySetInnerHTML: childrenHTML ? {
      __html: childrenHTML
    } : void 0,
    children: childrenHTML ? void 0 : children || items.map((item, i) => (
      // @ts-expect-error  (Can't be arsed...)
      o(Component, {
        ...ComponentProps,
        ...item
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }, void 0)
    ))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 5
  }, void 0);
  return o("div", {
    ...wrapperProps,
    className: modifiedClass(
      bem,
      modifier,
      // Prefer `className` over `wrapperProps.className`
      className || (wrapperProps || {}).className
    ),
    "data-sprinkled": isBrowser,
    children: [title && o("h2", {
      className: `${bem}__title`,
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 17
    }, void 0), isBrowser ? o("div", {
      className: `${bem}__itemlist-wrapper`,
      children: [itemList, activeItem > 0 && o("div", {
        className: `${bem}__itemlist-goLeft`,
        onClick: () => {
          delayedScrollLeft.cancel();
          scrollToItem(activeItem - 1);
        },
        onMouseOver: () => delayedScrollLeft(activeItem),
        onMouseOut: () => delayedScrollLeft.cancel()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }, void 0), activeItem < itemCount - 1 && o("div", {
        className: `${bem}__itemlist-goRight`,
        onClick: () => {
          delayedScrollRight.cancel();
          scrollToItem(activeItem + 1);
        },
        onMouseOver: () => delayedScrollRight(activeItem),
        onMouseOut: () => delayedScrollRight.cancel()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }, void 0)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }, void 0) : itemList, isBrowser && o(CarouselStepper, {
      itemCount,
      setCurrent: scrollToItem,
      current: activeItem
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }, void 0)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 5
  }, void 0);
};
export {
  AbstractCarousel as A
};
