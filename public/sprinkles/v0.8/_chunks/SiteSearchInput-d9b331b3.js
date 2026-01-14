System.register(["./compat.module-fe631ce3.js", "./jsxRuntime.module-00dbfc50.js", "./getSVGtext-2c45db0c.js", "./i18n-5b23de04.js", "./env-208f2026.js", "./_useMobileMenuToggling-eaed9893.js", "./qj-0ce4c6bc.js"], function(exports, module) {
  "use strict";
  var t, h, T, useIsBrowserSide, o, modifiedClass, DEFAULT_LANG, isPreact, useDomid;
  return {
    setters: [(module2) => {
      t = module2.t;
      h = module2.h;
      T = module2.T;
    }, (module2) => {
      useIsBrowserSide = module2.u;
      o = module2.o;
      modifiedClass = module2.m;
    }, null, (module2) => {
      DEFAULT_LANG = module2.D;
    }, (module2) => {
      isPreact = module2.i;
    }, (module2) => {
      useDomid = module2.u;
    }, null],
    execute: function() {
      var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/FormField.tsx";
      const inputClassNames = {
        bem: "FormField",
        input: "FormField__input",
        options: "FormField__options",
        control: "FormField__control"
      };
      const defaultReqText = {
        is: "Þarf að fylla út",
        en: "Required",
        pl: "Wymagane"
      };
      const FormField = (props) => {
        const {
          extraClassName,
          className,
          small,
          group,
          LabelTag = group ? "h4" : void 0,
          label,
          assistText,
          hideLabel,
          empty,
          filled,
          readOnly,
          disabled,
          invalid,
          errorMessage,
          required,
          reqText,
          // TODO: i18n
          renderInput,
          id,
          ssr,
          wrapperProps
        } = props;
        const isBrowser = useIsBrowserSide(ssr);
        const isInvalid = invalid || !!errorMessage || void 0;
        const domid = useDomid(id);
        const [focused, setFocused] = t(h(false), "focused");
        const addFocusProps = T((ownProps) => {
          const {
            onFocus,
            onBlur
          } = ownProps || {};
          const focusHandler = (e) => {
            if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
              setFocused(true);
            }
            onFocus && onFocus(e);
          };
          const blurHandler = (e) => {
            if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
              setFocused(false);
            }
            onBlur && onBlur(e);
          };
          const focusProps = {
            ...ownProps,
            onFocus: focusHandler,
            onBlur: blurHandler
          };
          if (isPreact) {
            const focusinHandler = (e) => {
              e.currentTarget !== e.target && focusHandler(e);
            };
            const focusoutHandler = (e) => {
              e.currentTarget !== e.target && blurHandler(e);
            };
            focusProps.onfocusin = focusinHandler;
            focusProps.onfocusout = focusoutHandler;
          }
          return focusProps;
        }, []);
        const errorId = errorMessage ? `error:${domid}` : void 0;
        const assistTextId = assistText ? `assist:${domid}` : void 0;
        const labelId = LabelTag ? `label:${domid}` : void 0;
        const reqStar = required && reqText !== false && o("abbr", {
          className: "FormField__label__reqstar",
          title: `${reqText || defaultReqText[DEFAULT_LANG]}: `,
          children: "*"
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 222,
          columnNumber: 5
        }, void 0);
        const inputProps = {
          id: domid,
          disabled,
          required,
          readOnly,
          "aria-invalid": isInvalid,
          "aria-describedby": assistTextId && errorId ? `${assistTextId} ${errorId}` : assistTextId || errorId,
          "aria-labelledby": labelId
          // undefined if normalLabel
        };
        return o("div", {
          ref: props.wrapperRef,
          ...wrapperProps,
          className: modifiedClass(
            "FormField",
            [small && "small", hideLabel && "nolabel", isInvalid && "invalid", disabled && "disabled", readOnly && "readonly", isBrowser && empty && "empty", isBrowser && filled && "filled", isBrowser && focused && "focused"],
            // Prefer `className` over `wrapperProps.className`
            (className || (wrapperProps || {}).className || "") + (extraClassName ? ` ${extraClassName}` : "")
          ),
          children: [LabelTag ? o(LabelTag, {
            className: "FormField__label",
            "data-inputlabel": group === "inputlike" || void 0,
            id: labelId,
            children: [" ", reqStar, " ", label, " "]
          }, void 0, true, {
            fileName: _jsxFileName$1,
            lineNumber: 264,
            columnNumber: 9
          }, void 0) : o("label", {
            className: "FormField__label",
            htmlFor: domid,
            children: [" ", reqStar, " ", label, " "]
          }, void 0, true, {
            fileName: _jsxFileName$1,
            lineNumber: 273,
            columnNumber: 9
          }, void 0), " ", renderInput(inputClassNames, inputProps, addFocusProps, isBrowser), assistText && o("div", {
            id: assistTextId,
            className: "FormField__assist",
            children: assistText
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 280,
            columnNumber: 9
          }, void 0), errorMessage && o("div", {
            id: errorId,
            className: "FormField__error",
            children: errorMessage
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 285,
            columnNumber: 9
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 243,
          columnNumber: 5
        }, void 0);
      };
      const getFormFieldWrapperProps = (props) => {
        const {
          wrapperProps,
          label,
          hideLabel,
          LabelTag,
          required,
          reqText,
          disabled,
          readOnly,
          assistText,
          invalid,
          errorMessage,
          id,
          small,
          ssr,
          className,
          wrapperRef
          // eslint-disable-line deprecation/deprecation
        } = props;
        return {
          wrapperProps,
          label,
          LabelTag,
          hideLabel,
          required,
          reqText,
          disabled: disabled === true,
          readOnly,
          assistText,
          invalid,
          errorMessage,
          id,
          small,
          ssr,
          className,
          wrapperRef
        };
      };
      const groupFormFieldWrapperProps = (props) => {
        const {
          wrapperProps,
          label,
          hideLabel,
          LabelTag,
          required,
          reqText,
          disabled,
          readOnly,
          assistText,
          invalid,
          errorMessage,
          id,
          small,
          ssr,
          className,
          wrapperRef,
          // eslint-disable-line deprecation/deprecation
          ...rest
        } = props;
        return {
          fieldWrapperProps: getFormFieldWrapperProps(props),
          ...rest
        };
      };
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-react/src/SiteSearchInput.tsx";
      const SiteSearchInput = exports("S", (props) => {
        const {
          onChange,
          inputRef,
          buttonText = "Leita",
          onSubmit,
          onButtonClick = props.onSubmit,
          button,
          onKeyDown,
          placeholder = typeof props.label === "string" ? props.label : void 0,
          fieldWrapperProps,
          ...inputElementProps
        } = groupFormFieldWrapperProps(props);
        const {
          value,
          defaultValue
        } = inputElementProps;
        const [hasValue, setHasValue] = t(h(void 0), "hasValue");
        const filled = !!(value ?? hasValue ?? !!defaultValue);
        const empty = !filled && !placeholder;
        const _onChange = value != null ? onChange : (e) => {
          setHasValue(!!e.target.value);
          onChange && onChange(e);
        };
        const showButton = button !== false;
        return o(FormField, {
          extraClassName: "SiteSearchInput",
          empty,
          filled,
          ...fieldWrapperProps,
          renderInput: (className, inputProps, addFocusProps) => o("div", {
            className: className.input,
            ...addFocusProps(),
            children: [o("input", {
              className: "SiteSearchInput__input",
              onChange: _onChange,
              ...inputProps,
              placeholder,
              onKeyDown: onSubmit ? (e) => {
                if (e.key === "Enter" && onSubmit(e.currentTarget.value) !== true) {
                  e.preventDefault();
                }
                onKeyDown && onKeyDown(e);
              } : onKeyDown,
              ...inputElementProps,
              ref: inputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 11
            }, void 0), " ", showButton && o("button", {
              className: "SiteSearchInput__button",
              type: "submit",
              onClick: onButtonClick && ((e) => onButtonClick(e.currentTarget.value) !== true && e.preventDefault()),
              title: buttonText,
              children: buttonText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 13
            }, void 0)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 9
          }, void 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }, void 0);
      });
    }
  };
});
