System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/i18n-5b23de04.js", "../_chunks/getLang-61538edc.js"], function(exports, module) {
  "use strict";
  var qq, q, aquireId, E;
  return {
    setters: [null, (module2) => {
      qq = module2.a;
      q = module2.q;
      aquireId = module2.e;
      E = module2.E;
    }, null, null],
    execute: function() {
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
    }
  };
});
