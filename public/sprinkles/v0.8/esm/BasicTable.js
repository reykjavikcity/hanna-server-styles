import "../_chunks/initHannaNamespace-f4f98843.js";
import { c as autoSeenEffectPrepare, b as autoSeenEffectsRefresh } from "../_chunks/addSeenEffect-3eaf41e0.js";
import { t as throttle } from "../_chunks/qj-1c8d4095.js";
import "../_chunks/i18n-a7278b6d.js";
import "../_chunks/getLang-8d69057b.js";
import "../_chunks/compat.module-0843eda4.js";
const tolerance = 5;
const throttleMs = 100;
const detectEdgeScroll = (opts) => {
  const {
    axis,
    scrollerElm,
    classedElm,
    bem,
    onChange,
    setClasses = true
    // eslint-disable-line deprecation/deprecation
  } = opts;
  let at = {
    start: true,
    end: true
  };
  const bemAt = bem ? `${bem}--at` : "at";
  const doClasses = !onChange || setClasses;
  const toggleClassNames = (at2) => {
    const elmClasses = (classedElm || scrollerElm).classList;
    elmClasses[at2.start ? "add" : "remove"](`${bemAt}--start`);
    elmClasses[at2.end ? "add" : "remove"](`${bemAt}--end`);
  };
  const setAt = !onChange ? toggleClassNames : setClasses ? (at2) => {
    onChange(at2);
    toggleClassNames(at2);
  } : onChange;
  const checkScroll = throttle(() => {
    let scroll, offsetSize, totalSize;
    if (axis === "horizontal") {
      scroll = scrollerElm.scrollLeft;
      offsetSize = scrollerElm.offsetWidth;
      totalSize = scrollerElm.scrollWidth;
    } else {
      scroll = scrollerElm.scrollTop;
      offsetSize = scrollerElm.offsetHeight;
      totalSize = scrollerElm.scrollHeight;
    }
    const start = scroll < tolerance;
    const end = totalSize - (offsetSize + scroll) < tolerance;
    if (at.start === start && at.end === end) {
      return;
    }
    at = {
      start,
      end
    };
    setAt(at);
  }, throttleMs);
  checkScroll();
  if (doClasses) {
    (classedElm || scrollerElm).classList.add(bemAt);
    toggleClassNames(at);
  }
  scrollerElm.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  return {
    checkScroll,
    unmount: () => {
      if (doClasses) {
        toggleClassNames({
          start: false,
          end: false
        });
        (classedElm || scrollerElm).classList.remove(bemAt);
      }
      scrollerElm.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    }
  };
};
const normalizeWrappingMarkup = (tableElm) => {
  tableElm.classList.add("BasicTable");
  const parentElm = tableElm.parentElement;
  if (parentElm.classList.contains("TableWrapper__scroller") || parentElm.classList.contains("TableWrapper--at")) {
    return;
  }
  let wrapperElm = parentElm;
  if (!wrapperElm.classList.contains("TableWrapper")) {
    wrapperElm = document.createElement("div");
    wrapperElm.className = "TableWrapper";
    tableElm.before(wrapperElm);
    wrapperElm.append(tableElm);
  }
  wrapperElm.classList.add("TableWrapper--BasicTable");
  return wrapperElm;
};
window.Hanna.makeSprinkle({
  name: "BasicTable",
  selector: "table",
  init: (tableElm) => {
    const wrapperElm = normalizeWrappingMarkup(tableElm);
    if (!wrapperElm) {
      return;
    }
    const {
      unmount
      /* , checkScroll */
    } = detectEdgeScroll({
      axis: "horizontal",
      scrollerElm: wrapperElm,
      classedElm: wrapperElm,
      bem: "TableWrapper"
    });
    autoSeenEffectPrepare(wrapperElm);
    autoSeenEffectsRefresh();
    return unmount;
  },
  unmount: (_, unmount) => {
    unmount && unmount();
    autoSeenEffectsRefresh();
  }
});
