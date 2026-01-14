System.register(["./jsxRuntime.module-00dbfc50.js", "./getSVGtext-2c45db0c.js", "./i18n-5b23de04.js", "./_Link-e1ecd1ed.js"], function(exports, module) {
  "use strict";
  var modifiedClass, o, Link;
  return {
    setters: [(module2) => {
      modifiedClass = module2.m;
      o = module2.o;
    }, null, null, (module2) => {
      Link = module2.L;
    }],
    execute: function() {
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-react/src/_abstract/_Button.tsx";
      const sizes = {
        normal: "",
        small: "small",
        wide: "wide"
      };
      const variants = {
        normal: "",
        destructive: "destructive"
      };
      const navigationFlags = {
        none: "",
        "go-back": "go--back",
        "go-forward": "go--forward"
      };
      const icons = {
        // TODO: insert icons
        edit: "edit"
      };
      const Button = exports("B", (props) => {
        const {
          as: CustomTag,
          bem,
          small,
          // eslint-disable-line deprecation/deprecation
          size = small ? "small" : "normal",
          modifier,
          children,
          variant = "normal",
          icon = "none",
          label = children,
          ...buttonProps
        } = props;
        const className = bem && modifiedClass(bem, [modifier, variants[variant], sizes[size], navigationFlags[icon]], props.className);
        const iconProp = icons[icon] && {
          "data-icon": icons[icon]
        };
        if (CustomTag) {
          return o(CustomTag, {
            ...buttonProps,
            className,
            ...iconProp,
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 7
          }, void 0);
        }
        if (buttonProps.href != null) {
          return o(Link, {
            ...buttonProps,
            className,
            ...iconProp,
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 7
          }, void 0);
        } else {
          return o("button", {
            type: "button",
            ...buttonProps,
            className,
            ...iconProp,
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, void 0);
        }
      });
    }
  };
});
