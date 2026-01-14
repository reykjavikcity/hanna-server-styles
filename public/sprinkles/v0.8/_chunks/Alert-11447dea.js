import { t, _, h, p, T } from "./compat.module-0843eda4.js";
import { u as useIsBrowserSide, o, m as modifiedClass } from "./jsxRuntime.module-b4e3cc20.js";
import "./getSVGtext-b918ded2.js";
import { g as getTexts } from "./i18n-a7278b6d.js";
import { B as Button } from "./_Button-bcc13c44.js";
import { i as isPreact } from "./env-e5e0e8b6.js";
import "./_useMobileMenuToggling-ec254f95.js";
import "./qj-1c8d4095.js";
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
const defaultAlertTexts = {
  en: {
    closeLabel: "Hide"
  },
  is: {
    closeLabel: "Fela"
  },
  pl: {
    closeLabel: "Ukryj"
  }
};
const alertTypes = {
  info: 1,
  success: 1,
  warning: 1,
  error: 1,
  critical: 1
};
const Alert = (props) => {
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
};
export {
  Alert as A,
  defaultAlertTexts as d
};
