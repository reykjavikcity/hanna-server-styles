System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/compat.module-919773fc.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/jsxRuntime.module-791778ad.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/i18n-5b23de04.js", "../_chunks/_Link-8229a97c.js", "../_chunks/_useMobileMenuToggling-b1fb85e8.js", "../_chunks/misc-20452715.js", "../_chunks/getLang-61538edc.js"], function(exports, module) {
  "use strict";
  var t, h, _, F, p, Cn, focusElm, q, qq, o, useIsBrowserSide, modifiedClass, getTexts, Link, useDomid, notNully, getLang;
  return {
    setters: [null, (module2) => {
      t = module2.t;
      h = module2.h;
      _ = module2._;
      F = module2.F;
      p = module2.p;
      Cn = module2.C;
    }, (module2) => {
      focusElm = module2.b;
      q = module2.q;
      qq = module2.a;
    }, (module2) => {
      o = module2.o;
      useIsBrowserSide = module2.u;
      modifiedClass = module2.m;
    }, null, (module2) => {
      getTexts = module2.g;
    }, (module2) => {
      Link = module2.L;
    }, (module2) => {
      useDomid = module2.u;
    }, (module2) => {
      notNully = module2.n;
    }, (module2) => {
      getLang = module2.g;
    }],
    execute: function() {
      var _jsxFileName$2 = "/Users/maro5239/work/hanna/modules/hanna-react/src/_abstract/breakOnNL.tsx";
      const breakOnNL = (text) => text && text.trim().replace(/(?:\n\s*)+/g, "\n\n").split(/\n/).map((bit, i) => bit || o("br", {}, i, false, {
        fileName: _jsxFileName$2,
        lineNumber: 9,
        columnNumber: 29
      }, void 0));
      var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/ContactBubble.tsx";
      const defaultTexts = {
        is: {
          openBtn: "Hafa samband",
          closeBtn: "Loka",
          closeBtnLong: "Loka valmynd"
        },
        en: {
          openBtn: "Contact us",
          closeBtn: "Close",
          closeBtnLong: "Close bubble"
        },
        pl: {
          openBtn: "Skontaktuj się z nami",
          closeBtn: "Zamknąć",
          closeBtnLong: "Zamknąć pęcherzyk"
        }
      };
      const icons = {
        suggestions: 1,
        phone: 1,
        faq: 1,
        livechat: 1,
        other: 0
      };
      const ensureIcon = (maybeIcon) => maybeIcon && icons[maybeIcon] ? maybeIcon : void 0;
      const ContactBubble = (props) => {
        const {
          title,
          links,
          onToggle,
          alwaysShow,
          wrapperProps = {}
        } = props;
        const txt = getTexts(props, defaultTexts);
        const openLabel = props.openBtnLabel || txt.openBtn;
        const openLabelLong = !props.openBtnLabel ? txt.openBtnLong : void 0;
        const useLocalState = props.open == null;
        const [localOpen, setLocalOpen] = t(h(false), "localOpen");
        const open = useLocalState ? localOpen : props.open;
        const isBrowser = useIsBrowserSide(props.ssr);
        const domid = useDomid();
        const _wrapperRef = t(_(null), "_wrapperRef");
        const wrapperRef = wrapperProps.ref || _wrapperRef;
        const {
          openBubble,
          closeBubble
        } = t(F(
          () => ({
            openBubble: () => {
              useLocalState && setLocalOpen(true);
              onToggle && onToggle(true);
            },
            closeBubble: (setFocus) => {
              useLocalState && setLocalOpen(false);
              onToggle && onToggle(false);
              setFocus !== false && focusElm.focusElm(wrapperRef.current);
            }
          }),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [useLocalState, onToggle]
        ), "openBubble");
        p(
          () => {
            const wrapperElm = wrapperRef.current;
            if (!wrapperElm) {
              return;
            }
            if (alwaysShow) {
              wrapperElm.dataset.show = "true";
              return;
            }
            let pending = 0;
            const checkScroll = () => {
              if (!pending) {
                pending = requestAnimationFrame(() => {
                  const {
                    scrollTop,
                    scrollHeight,
                    clientHeight
                  } = document.documentElement;
                  const scrollLength = scrollHeight - clientHeight;
                  const f = 1;
                  const show = scrollTop > f * 130 && // minimum distance from the top
                  scrollLength - scrollTop > f * 200;
                  wrapperElm.dataset.show = String(show);
                  !show && closeBubble(false);
                  pending = 0;
                });
              }
            };
            checkScroll();
            document.addEventListener("scroll", checkScroll);
            document.documentElement.addEventListener("scroll", checkScroll);
            return () => {
              document.removeEventListener("scroll", checkScroll);
              document.documentElement.removeEventListener("scroll", checkScroll);
            };
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [
            isBrowser,
            alwaysShow,
            closeBubble
            /* , wrapperRef */
          ]
        );
        p(
          () => {
            const escHandler = (e) => e.key === "Escape" && closeBubble();
            const outsideClickHandler = (e) => {
              var _a;
              if (open && !((_a = wrapperRef.current) == null ? void 0 : _a.contains(e.target))) {
                closeBubble(false);
              }
            };
            document.addEventListener("keydown", escHandler);
            document.addEventListener("click", outsideClickHandler, true);
            const htmlDataset = document.documentElement.dataset;
            if (open) {
              htmlDataset.contactBubble = "true";
            } else {
              delete htmlDataset.contactBubble;
            }
            return () => {
              delete htmlDataset.contactBubble;
              document.removeEventListener("keydown", escHandler);
              document.removeEventListener("click", outsideClickHandler, true);
            };
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [
            open,
            closeBubble
            /* , wrapperRef */
          ]
        );
        if (links.length === 0) {
          return null;
        }
        const menu = o("div", {
          ...props.wrapperProps,
          className: modifiedClass("ContactBubble", null, wrapperProps.className),
          id: isBrowser && domid,
          hidden: isBrowser && !open,
          "data-label-openbtn": props.openBtnLabel,
          "data-always-show": alwaysShow || void 0,
          "data-sprinkled": isBrowser,
          children: [o("h2", {
            className: "ContactBubble__title",
            children: title || openLabel
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 232,
            columnNumber: 7
          }, void 0), o("ul", {
            className: "ContactBubble__list",
            children: links.map((linkInfo, i) => {
              const {
                href,
                label,
                extraLabel,
                target,
                onClick
              } = linkInfo;
              const icon = ensureIcon(linkInfo.icon);
              const itemClass = modifiedClass("ContactBubble__item", icon && `type--${icon}`);
              const onClickHandler = (e) => {
                if (onClick) {
                  const doPreventDefault = onClick() !== true;
                  if (doPreventDefault) {
                    e.preventDefault();
                  }
                }
                closeBubble(false);
              };
              const content = [" ", label, "\n", extraLabel && o("small", {
                children: breakOnNL(extraLabel)
              }, "🤡", false, {
                fileName: _jsxFileName$1,
                lineNumber: 252,
                columnNumber: 27
              }, void 0), "\n"];
              return o("li", {
                className: itemClass,
                children: href && href !== "#" ? o(Link, {
                  className: "ContactBubble__link",
                  href,
                  onClick: onClickHandler,
                  target,
                  children: content
                }, void 0, false, {
                  fileName: _jsxFileName$1,
                  lineNumber: 259,
                  columnNumber: 17
                }, void 0) : o("button", {
                  className: "ContactBubble__link",
                  onClick: onClickHandler,
                  type: "button",
                  children: content
                }, void 0, false, {
                  fileName: _jsxFileName$1,
                  lineNumber: 268,
                  columnNumber: 17
                }, void 0)
              }, i, false, {
                fileName: _jsxFileName$1,
                lineNumber: 257,
                columnNumber: 13
              }, void 0);
            })
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 233,
            columnNumber: 7
          }, void 0), "\n\n", isBrowser && o("button", {
            className: "ContactBubble__closebtn",
            "aria-controls": domid,
            "aria-label": txt.closeBtnLong,
            onClick: () => closeBubble(),
            type: "button",
            children: txt.closeBtn
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 282,
            columnNumber: 9
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 223,
          columnNumber: 5
        }, void 0);
        return isBrowser ? o("div", {
          className: "ContactBubble__wrapper",
          ref: wrapperRef,
          children: [o("button", {
            className: "ContactBubble__openbtn",
            "aria-controls": domid,
            "aria-expanded": open,
            "aria-label": openLabelLong,
            onClick: open ? () => closeBubble() : openBubble,
            type: "button",
            children: openLabel
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 297,
            columnNumber: 7
          }, void 0), "\n\n", menu]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 296,
          columnNumber: 5
        }, void 0) : menu;
      };
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/ContactBubble.tsx";
      const itemTypeRe = /(?:^| )ContactBubble__item--type--(.+?)(?: |$)/;
      const getContactBubbleData = (elm) => {
        var _a;
        const alwaysShow = elm.dataset.alwaysShow === "true";
        const openBtnLabel = elm.dataset.labelOpenbtn;
        const lang = getLang(elm);
        const title = ((_a = q(".ContactBubble__title", elm)) == null ? void 0 : _a.textContent) || void 0;
        const links = qq(".ContactBubble__item", elm).map((itemElm, i) => {
          const linkElm = q(".ContactBubble__link", itemElm);
          if (!linkElm) {
            return;
          }
          const smallElm = q("small", linkElm);
          smallElm == null ? void 0 : smallElm.remove();
          const label = linkElm.textContent || `Link ${i + 1}`;
          const extraLabel = (smallElm == null ? void 0 : smallElm.textContent) || void 0;
          const href = linkElm.getAttribute("href") || "";
          const target = linkElm.target || void 0;
          const maybeIcon = (itemElm.className.match(itemTypeRe) || [])[1];
          return {
            icon: ensureIcon(maybeIcon),
            extraLabel,
            href,
            label,
            target
          };
        }).filter(notNully);
        return {
          title,
          links,
          alwaysShow,
          openBtnLabel,
          lang
        };
      };
      window.Hanna.makeSprinkle({
        name: "ContactBubble",
        init: (elm) => {
          const props = getContactBubbleData(elm);
          const root = elm;
          elm.getAttributeNames().forEach((attrName) => {
            elm.removeAttribute(attrName);
          });
          Cn.render(o(ContactBubble, {
            ...props,
            ssr: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, globalThis), root);
          return root;
        },
        unmount: (elm, root) => {
          Cn.unmountComponentAtNode(root);
        }
      });
    }
  };
});
