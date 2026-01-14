System.register(["./compat.module-919773fc.js", "./jsxRuntime.module-791778ad.js", "./getSVGtext-2c45db0c.js", "./i18n-5b23de04.js", "./_Button-14554c59.js", "./env-c53cf972.js", "./_useMobileMenuToggling-b1fb85e8.js", "./qj-0ce4c6bc.js"], function(exports, module) {
  "use strict";
  var t, _, h, p, T, useIsBrowserSide, o, modifiedClass, getTexts, Button, isPreact;
  return {
    setters: [(module2) => {
      t = module2.t;
      _ = module2._;
      h = module2.h;
      p = module2.p;
      T = module2.T;
    }, (module2) => {
      useIsBrowserSide = module2.u;
      o = module2.o;
      modifiedClass = module2.m;
    }, null, (module2) => {
      getTexts = module2.g;
    }, (module2) => {
      Button = module2.B;
    }, (module2) => {
      isPreact = module2.i;
    }, null, null],
    execute: function() {
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-react/src/Alert.tsx";
      const AlertCloseTransitionDuration = 400;
      const useAutoClosing = (autoClose, props) => {
        const [temp, setTemp] = t(h(0), "temp");
        if (!autoClose) {
          return {
            autoClosing: false
          };
        }
        const thaw = (e) => {
          setTemp((temp2) => temp2 + 1);
          const handler = props[e.type.startsWith("blur") ? "onBlur" : "onMouseLeave"];
          handler && handler(e);
        };
        const freeze = (e) => {
          setTemp((temp2) => temp2 - 1);
          const handler = props[e.type.startsWith("focus") ? "onFocus" : "onMouseEnter"];
          handler && handler(e);
        };
        return {
          autoClosing: temp === 0,
          autoClosingProps: {
            onMouseEnter: freeze,
            onMouseLeave: thaw,
            onFocus: freeze,
            onBlur: thaw,
            ...isPreact && {
              onfocusin: (e) => e.currentTarget !== e.target && freeze(e),
              onfocusout: (e) => e.currentTarget !== e.target && thaw(e)
            }
          }
        };
      };
      const defaultAlertTexts = exports("d", {
        en: {
          closeLabel: "Hide"
        },
        is: {
          closeLabel: "Fela"
        },
        pl: {
          closeLabel: "Ukryj"
        }
      });
      const alertTypes = {
        info: 1,
        success: 1,
        warning: 1,
        error: 1,
        critical: 1
      };
      const Alert = exports("A", (props) => {
        const {
          type,
          childrenHTML,
          children,
          onClose,
          // eslint-disable-line deprecation/deprecation
          closeUrl,
          closable = !!(onClose || closeUrl != null),
          ssr,
          onClosed,
          instantShow,
          wrapperProps
        } = props;
        const autoClose = Math.max(props.autoClose || 0, 0);
        const closing = t(_(), "closing");
        const isBrowser = useIsBrowserSide(ssr);
        const [open, setOpen] = t(h(instantShow || !isBrowser), "open");
        const showCloseButton = closable && (isBrowser || closeUrl != null);
        const {
          closeLabel,
          closeLabelLong
        } = getTexts(props, defaultAlertTexts);
        p(() => {
          setOpen(true);
        }, []);
        const closeAlert = T((event) => {
          const ret = onClose && // @ts-expect-error  (@deprecated `event` parameter will be removed in v0.11)
          onClose(event);
          if (ret !== false) {
            setOpen(false);
            if (closing.current) {
              clearTimeout(closing.current);
              closing.current = void 0;
            }
            closing.current = setTimeout(() => {
              onClosed && onClosed();
            }, AlertCloseTransitionDuration);
          }
        }, [onClose, onClosed]);
        const {
          autoClosing,
          autoClosingProps
        } = useAutoClosing(autoClose, props);
        p(() => {
          if (autoClosing) {
            let autoCloseTimeout;
            autoCloseTimeout = setTimeout(() => {
              closeAlert();
            }, autoClose * 1e3);
            return () => {
              if (autoCloseTimeout) {
                clearTimeout(autoCloseTimeout);
                autoCloseTimeout = void 0;
              }
              if (closing.current) {
                clearTimeout(closing.current);
                closing.current = void 0;
              }
            };
          }
        }, [closeAlert, autoClosing, autoClose]);
        return o("div", {
          ...wrapperProps,
          className: modifiedClass("Alert", [!!alertTypes[type] && type, closable && "closable"], (wrapperProps || {}).className),
          role: "alert",
          hidden: !open || void 0,
          ...autoClosingProps,
          children: [childrenHTML ? o("div", {
            dangerouslySetInnerHTML: {
              __html: childrenHTML
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 9
          }, void 0) : children, " ", showCloseButton && o(Button, {
            bem: "Alert__close",
            ...closeUrl != null ? {
              href: closeUrl
            } : {
              type: "button"
            },
            onClick: (e) => {
              closeAlert(e);
            },
            "aria-label": closeLabelLong,
            title: closeLabelLong || closeLabel,
            children: closeLabel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 9
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 5
        }, void 0);
      });
    }
  };
});
