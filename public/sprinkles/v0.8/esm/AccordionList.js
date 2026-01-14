import "../_chunks/initHannaNamespace-f4f98843.js";
import { a as qq, q, e as aquireId, E } from "../_chunks/qj-1c8d4095.js";
import "../_chunks/i18n-a7278b6d.js";
import "../_chunks/getLang-8d69057b.js";
const getItems = (elm) => qq(".AccordionList__item", elm);
const initializeItem = (itemElm) => {
  const titleElm = q(".AccordionList__title", itemElm);
  const contentElm = q(".AccordionList__content", itemElm);
  if (titleElm && contentElm) {
    let open = itemElm.dataset.startOpen === "true";
    aquireId(contentElm);
    contentElm.hidden = !open;
    itemElm.dataset.sprinkled = "true";
    const disabled = itemElm.classList.contains("AccordionList__item--disabled");
    const buttonElm = E("button", {
      className: "AccordionList__button",
      "aria-controls": contentElm.id,
      "aria-expanded": open || void 0,
      disabled,
      onClick: () => {
        open = !disabled && !open;
        if (open) {
          buttonElm.setAttribute("aria-expanded", "true");
        } else {
          buttonElm.removeAttribute("aria-expanded");
        }
        contentElm.hidden = !open;
      }
    }, titleElm.childNodes);
    titleElm.textContent = "";
    titleElm.append(buttonElm);
  }
};
window.Hanna.makeSprinkle({
  name: "AccordionList",
  init: (elm) => {
    getItems(elm).forEach(initializeItem);
  },
  refresh: (elm) => {
    const newItems = getItems(elm).filter((elm2) => !elm2.dataset.sprinkled);
    newItems.forEach(initializeItem);
  }
});
