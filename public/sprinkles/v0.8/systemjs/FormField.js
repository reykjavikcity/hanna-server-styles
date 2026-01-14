System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/i18n-5b23de04.js", "../_chunks/getLang-61538edc.js"], function(exports, module) {
  "use strict";
  var getDefaultExportFromCjs;
  return {
    setters: [null, (module2) => {
      getDefaultExportFromCjs = module2.g;
    }, null, null],
    execute: function() {
      var selectybox = { exports: {} };
      /* Selectybox 1.0  -- (c) 2012-2015 Hugsmiðjan ehf. - MIT/GPL   @preserve */
      selectybox.exports;
      (function(module2) {
        (function() {
          var win = window;
          var w3cEvents = !!win.addEventListener;
          var emptyDiv;
          var events = function(widget, action) {
            var doAdd = action === "add";
            var method = w3cEvents ? (doAdd ? "add" : "remove") + "EventListener" : (doAdd ? "at" : "de") + "tachEvent";
            var on = w3cEvents ? "" : "on";
            var select = widget.select;
            select[method](on + "change", widget._$refresh);
            select[method](on + "keyup", widget._$refresh);
            select[method](on + "focus", widget._$focus);
            select[method](on + "blur", widget._$blur);
          };
          var setStyles = function(element, styles, doClear) {
            for (var cssProp in styles) {
              element.style[cssProp] = doClear ? "" : styles[cssProp];
            }
          };
          var optionPropNames = "templ getButton focusClass disabledClass emptyClass emptyVal text selectCSS".split(" ");
          var widgetInstanceProps = "_$refresh _$focus _$blur select container button".split(" ");
          var Selectybox2 = function(select, options) {
            var widget = this;
            var existingWidget = Selectybox2.getWidget(select);
            if (existingWidget) {
              existingWidget.destroy();
              widget = existingWidget;
            }
            if (!(widget instanceof Selectybox2)) {
              return new Selectybox2(select, options);
            } else {
              if (options) {
                var i = 0;
                var prop;
                while (prop = optionPropNames[i++]) {
                  if (options[prop] != null) {
                    widget[prop] = options[prop];
                  }
                }
                options = null;
              }
              emptyDiv = emptyDiv || document.createElement("div");
              emptyDiv.innerHTML = widget.templ.replace(/^[^<]+/, "");
              var container = widget.container = emptyDiv.firstChild;
              container.style.position = "relative";
              widget.button = widget.getButton();
              widget.select = select;
              select.parentNode.insertBefore(container, select);
              container.insertBefore(select, widget.button.nextSibling);
              select.style.opacity = 1e-4;
              setStyles(select, widget.selectCSS);
              widget._$refresh = function() {
                setTimeout(function() {
                  widget.refresh();
                }, 0);
              };
              var containerClass = container.classList;
              widget._$blur = function() {
                containerClass.remove(widget.focusClass);
              };
              widget._$focus = function() {
                containerClass.add(widget.focusClass);
              };
              var _disabled = false;
              widget._$able = function() {
                if (select.disabled !== _disabled) {
                  _disabled = select.disabled;
                  containerClass[_disabled ? "add" : "remove"](widget.disabledClass);
                }
              };
              events(widget, "add");
              widget._isEmpty = false;
              widget.refresh();
              select.$selectybox = widget;
              if (existingWidget) {
                return widget;
              }
            }
          };
          Selectybox2.prototype = {
            // Default options/properties
            templ: '<span class="selecty"><span class="selecty-button"/></span>',
            getButton: function() {
              return this.container.firstChild;
            },
            focusClass: "focused",
            disabledClass: "disabled",
            emptyClass: "emptyvalue",
            emptyVal: "     ",
            text: function(txt) {
              return txt;
            },
            // <-- it's OK to add HTML markup
            selectCSS: {
              // set necessary styles
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // unset existing styles
              top: "auto",
              right: "auto",
              margin: 0,
              padding: 0,
              border: 0
            },
            // Methods
            refresh: function() {
              this._$able();
              this.val();
            },
            val: function(val) {
              var widget = this;
              var select = widget.select;
              if (val != null) {
                val += "";
                var i = 0;
                var option;
                while (option = select.options[i++]) {
                  if (option.value === val) {
                    option.selected = true;
                    break;
                  }
                }
              }
              var selectedOption = select.options[select.selectedIndex];
              var isEmpty = !selectedOption.value;
              if (isEmpty !== widget._isEmpty) {
                widget._isEmpty = isEmpty;
                widget.container.classList[isEmpty ? "add" : "remove"](widget.emptyClass);
              }
              widget.button.textContent = widget.text(selectedOption.textContent) || widget.emptyVal;
            },
            disable: function(disabled) {
              this.select.disabled = disabled !== false;
              this._$able();
            },
            destroy: function() {
              var widget = this;
              var select = widget.select;
              var container = widget.container;
              var containerParent = container.parentNode;
              containerParent.insertBefore(select, container);
              containerParent.removeChild(container);
              events(widget, "remove");
              select.style.opacity = "";
              setStyles(select, widget.selectCSS, true);
              select.$selectybox = "";
              var props = optionPropNames.concat(widgetInstanceProps);
              var i = props.length;
              while (i--) {
                delete widget[props[i]];
              }
            }
          };
          Selectybox2.jQueryPlugin = function($) {
            $.fn.selectybox = function(options, value) {
              var selects = this;
              if (selects[0]) {
                if (typeof options === "string") {
                  if (options === "widget") {
                    return Selectybox2.getWidget(selects[0]);
                  } else if (/^(?:refresh|val|destroy|disable)$/.test(options)) {
                    selects.each(function() {
                      var widget = Selectybox2.getWidget(this);
                      if (widget) {
                        widget[options](value);
                      }
                    });
                  }
                } else {
                  options = options || {};
                  options.text = options.text || function(text) {
                    $(this.container).toggleClass("selecty-empty", !$(this.select).val());
                    return text;
                  };
                  return selects.pushStack(
                    selects.filter("select").map(function(i, select) {
                      return Selectybox2(select, options).container;
                    })
                  );
                }
              }
              return selects;
            };
          };
          Selectybox2.getWidget = function(select) {
            return select.$selectybox;
          };
          if (module2.exports) {
            module2.exports = Selectybox2;
          } else {
            win.Selectybox = Selectybox2;
          }
          var jQuery = win.jQuery;
          jQuery && !jQuery.fn.selectybox && Selectybox2.jQueryPlugin(jQuery);
        })();
      })(selectybox);
      var selectyboxExports = selectybox.exports;
      const Selectybox = /* @__PURE__ */ getDefaultExportFromCjs(selectyboxExports);
      const log = (...args) => console.info("FormField sprinkle: ", ...args);
      const initSelectybox = (elm) => {
        const selectElm = elm.querySelector("select");
        if (!selectElm) {
          log("No <select/> found for", elm);
          return;
        }
        new Selectybox(selectElm, {
          templ: '<span class="FormField__input"><span class="selecty-button"/></span>',
          focusClass: "FormField__input--focused",
          disabledClass: "FormField__input--disabled",
          emptyClass: "FormField__input--empty"
        });
      };
      const flag = (elm, modifier, add) => {
        elm.classList[add ? "add" : "remove"](`FormField--${modifier}`);
      };
      const setStateClasses = (elm) => {
        const input = elm.querySelector("select, input, textarea");
        if (!input || !input.closest(".FormField__input")) {
          log("No input/select field found for", elm);
          return;
        }
        flag(elm, "disabled", input.disabled);
        flag(elm, "readonly", "readOnly" in input && input.readOnly);
        const noValue = !input.value;
        const noVisibleContent = noValue && !(input instanceof HTMLSelectElement ? input.options[input.selectedIndex].text.trim() : input.placeholder.trim());
        flag(elm, "filled", !noValue);
        flag(elm, "empty", noVisibleContent);
      };
      const bindFocusEvents = (elm) => {
        const inputWrap = elm.querySelector(".FormField__input");
        if (!inputWrap) {
          throw new Error("`FormField__input` not found");
        }
        inputWrap.addEventListener("focusin", () => {
          elm.classList.add("FormField--focused");
        });
        inputWrap.addEventListener("focusout", () => {
          elm.classList.remove("FormField--focused");
          setStateClasses(elm);
        });
        inputWrap.addEventListener("change", () => {
          setStateClasses(elm);
        });
        elm.setStateClasses = () => setStateClasses(elm);
      };
      window.Hanna.makeSprinkle({
        name: "FormField",
        selector: ".FormField",
        init: (elm) => {
          if (!elm.querySelector("label.FormField__label")) {
            return;
          }
          if (elm.classList.contains("Selectbox")) {
            initSelectybox(elm);
          }
          bindFocusEvents(elm);
          setStateClasses(elm);
        },
        refresh: setStateClasses
      });
    }
  };
});
