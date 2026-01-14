System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/compat.module-919773fc.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/i18n-5b23de04.js", "../_chunks/_AbstractCarousel-8a484a2f.js", "../_chunks/_Button-14554c59.js", "../_chunks/_Image-1382ad99.js", "../_chunks/jsxRuntime.module-791778ad.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/FocusTrap-07566d12.js", "../_chunks/_useMobileMenuToggling-b1fb85e8.js", "../_chunks/useCallbackOnEsc-bd9f753c.js", "../_chunks/index-a8aaa585.js", "../_chunks/addSeenEffect-212ed7c0.js", "../_chunks/getLang-61538edc.js", "../_chunks/misc-20452715.js", "../_chunks/_Link-8229a97c.js"], function(exports, module) {
  "use strict";
  var F, q, Cn, t, h, p, z, _, _$1, F$1, focusElm, objectIsSame_1, objectClean_1, q$1, qq, getTexts, AbstractCarousel, Button, Image, o, useIsBrowserSide, modifiedClass, FocusTrap, useDomid, useCallbackOnEsc, PropTypes, autoSeenEffectWrapperProps, autoSeenEffectsRefresh, getLang;
  return {
    setters: [null, (module2) => {
      F = module2.b;
      q = module2.q;
      Cn = module2.C;
      t = module2.t;
      h = module2.h;
      p = module2.p;
      z = module2.z;
      _ = module2._;
      _$1 = module2.a;
      F$1 = module2.F;
    }, (module2) => {
      focusElm = module2.b;
      objectIsSame_1 = module2.o;
      objectClean_1 = module2.c;
      q$1 = module2.q;
      qq = module2.a;
    }, (module2) => {
      getTexts = module2.g;
    }, (module2) => {
      AbstractCarousel = module2.A;
    }, (module2) => {
      Button = module2.B;
    }, (module2) => {
      Image = module2.I;
    }, (module2) => {
      o = module2.o;
      useIsBrowserSide = module2.u;
      modifiedClass = module2.m;
    }, null, (module2) => {
      FocusTrap = module2.F;
    }, (module2) => {
      useDomid = module2.u;
    }, (module2) => {
      useCallbackOnEsc = module2.u;
    }, (module2) => {
      PropTypes = module2.P;
    }, (module2) => {
      autoSeenEffectWrapperProps = module2.a;
      autoSeenEffectsRefresh = module2.b;
    }, (module2) => {
      getLang = module2.g;
    }, null, null],
    execute: function() {
      const GalleryModalContext = F({});
      var _jsxFileName$6 = "/Users/maro5239/work/hanna/modules/hanna-react/src/Gallery/_GalleryItem.tsx";
      const GalleryItem = (props) => {
        const {
          caption,
          description,
          largeImageSrc,
          ...image
        } = props;
        const {
          setCurrentImage
        } = q(GalleryModalContext);
        return o("figure", {
          className: "GalleryItem",
          children: [o("figcaption", {
            className: "GalleryItem__caption",
            children: caption
          }, void 0, false, {
            fileName: _jsxFileName$6,
            lineNumber: 22,
            columnNumber: 7
          }, void 0), largeImageSrc ? o(Button, {
            bem: "GalleryItem__button",
            href: largeImageSrc,
            onClick: (e) => {
              e.preventDefault();
              setCurrentImage({
                ...image,
                caption,
                description,
                largeImageSrc
              });
            },
            children: [" ", o(Image, {
              bem: "GalleryItem__image",
              ...image
            }, void 0, false, {
              fileName: _jsxFileName$6,
              lineNumber: 33,
              columnNumber: 11
            }, void 0), " "]
          }, void 0, true, {
            fileName: _jsxFileName$6,
            lineNumber: 24,
            columnNumber: 9
          }, void 0) : o(Image, {
            bem: "GalleryItem__image",
            ...image
          }, void 0, false, {
            fileName: _jsxFileName$6,
            lineNumber: 36,
            columnNumber: 9
          }, void 0), description && o("div", {
            className: "GalleryItem__description",
            children: description
          }, void 0, false, {
            fileName: _jsxFileName$6,
            lineNumber: 38,
            columnNumber: 23
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$6,
          lineNumber: 21,
          columnNumber: 5
        }, void 0);
      };
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      function _setPrototypeOf(o2, p2) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
          o3.__proto__ = p3;
          return o3;
        };
        return _setPrototypeOf(o2, p2);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function hasClass(element, className) {
        if (element.classList)
          return !!className && element.classList.contains(className);
        return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
      }
      function addClass(element, className) {
        if (element.classList)
          element.classList.add(className);
        else if (!hasClass(element, className))
          if (typeof element.className === "string")
            element.className = element.className + " " + className;
          else
            element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
      }
      function replaceClassName(origClass, classToRemove) {
        return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
      }
      function removeClass$1(element, className) {
        if (element.classList) {
          element.classList.remove(className);
        } else if (typeof element.className === "string") {
          element.className = replaceClassName(element.className, className);
        } else {
          element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
        }
      }
      const config = {
        disabled: false
      };
      var timeoutsShape = PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
        enter: PropTypes.number,
        exit: PropTypes.number,
        appear: PropTypes.number
      }).isRequired]);
      var classNamesShape = PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
        enter: PropTypes.string,
        exit: PropTypes.string,
        active: PropTypes.string
      }), PropTypes.shape({
        enter: PropTypes.string,
        enterDone: PropTypes.string,
        enterActive: PropTypes.string,
        exit: PropTypes.string,
        exitDone: PropTypes.string,
        exitActive: PropTypes.string
      })]);
      const TransitionGroupContext = Cn.createContext(null);
      var forceReflow = function forceReflow2(node) {
        return node.scrollTop;
      };
      var UNMOUNTED = "unmounted";
      var EXITED = "exited";
      var ENTERING = "entering";
      var ENTERED = "entered";
      var EXITING = "exiting";
      var Transition = /* @__PURE__ */ function(_React$Component) {
        _inheritsLoose(Transition2, _React$Component);
        function Transition2(props, context) {
          var _this;
          _this = _React$Component.call(this, props, context) || this;
          var parentGroup = context;
          var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
          var initialStatus;
          _this.appearStatus = null;
          if (props.in) {
            if (appear) {
              initialStatus = EXITED;
              _this.appearStatus = ENTERING;
            } else {
              initialStatus = ENTERED;
            }
          } else {
            if (props.unmountOnExit || props.mountOnEnter) {
              initialStatus = UNMOUNTED;
            } else {
              initialStatus = EXITED;
            }
          }
          _this.state = {
            status: initialStatus
          };
          _this.nextCallback = null;
          return _this;
        }
        Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
          var nextIn = _ref.in;
          if (nextIn && prevState.status === UNMOUNTED) {
            return {
              status: EXITED
            };
          }
          return null;
        };
        var _proto = Transition2.prototype;
        _proto.componentDidMount = function componentDidMount() {
          this.updateStatus(true, this.appearStatus);
        };
        _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
          var nextStatus = null;
          if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
              if (status !== ENTERING && status !== ENTERED) {
                nextStatus = ENTERING;
              }
            } else {
              if (status === ENTERING || status === ENTERED) {
                nextStatus = EXITING;
              }
            }
          }
          this.updateStatus(false, nextStatus);
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
          this.cancelNextCallback();
        };
        _proto.getTimeouts = function getTimeouts() {
          var timeout = this.props.timeout;
          var exit, enter, appear;
          exit = enter = appear = timeout;
          if (timeout != null && typeof timeout !== "number") {
            exit = timeout.exit;
            enter = timeout.enter;
            appear = timeout.appear !== void 0 ? timeout.appear : enter;
          }
          return {
            exit,
            enter,
            appear
          };
        };
        _proto.updateStatus = function updateStatus(mounting, nextStatus) {
          if (mounting === void 0) {
            mounting = false;
          }
          if (nextStatus !== null) {
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var node = this.props.nodeRef ? this.props.nodeRef.current : Cn.findDOMNode(this);
                if (node)
                  forceReflow(node);
              }
              this.performEnter(mounting);
            } else {
              this.performExit();
            }
          } else if (this.props.unmountOnExit && this.state.status === EXITED) {
            this.setState({
              status: UNMOUNTED
            });
          }
        };
        _proto.performEnter = function performEnter(mounting) {
          var _this2 = this;
          var enter = this.props.enter;
          var appearing = this.context ? this.context.isMounting : mounting;
          var _ref2 = this.props.nodeRef ? [appearing] : [Cn.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
          var timeouts = this.getTimeouts();
          var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
          if (!mounting && !enter || config.disabled) {
            this.safeSetState({
              status: ENTERED
            }, function() {
              _this2.props.onEntered(maybeNode);
            });
            return;
          }
          this.props.onEnter(maybeNode, maybeAppearing);
          this.safeSetState({
            status: ENTERING
          }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
              _this2.safeSetState({
                status: ENTERED
              }, function() {
                _this2.props.onEntered(maybeNode, maybeAppearing);
              });
            });
          });
        };
        _proto.performExit = function performExit() {
          var _this3 = this;
          var exit = this.props.exit;
          var timeouts = this.getTimeouts();
          var maybeNode = this.props.nodeRef ? void 0 : Cn.findDOMNode(this);
          if (!exit || config.disabled) {
            this.safeSetState({
              status: EXITED
            }, function() {
              _this3.props.onExited(maybeNode);
            });
            return;
          }
          this.props.onExit(maybeNode);
          this.safeSetState({
            status: EXITING
          }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
              _this3.safeSetState({
                status: EXITED
              }, function() {
                _this3.props.onExited(maybeNode);
              });
            });
          });
        };
        _proto.cancelNextCallback = function cancelNextCallback() {
          if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
          }
        };
        _proto.safeSetState = function safeSetState(nextState, callback) {
          callback = this.setNextCallback(callback);
          this.setState(nextState, callback);
        };
        _proto.setNextCallback = function setNextCallback(callback) {
          var _this4 = this;
          var active = true;
          this.nextCallback = function(event) {
            if (active) {
              active = false;
              _this4.nextCallback = null;
              callback(event);
            }
          };
          this.nextCallback.cancel = function() {
            active = false;
          };
          return this.nextCallback;
        };
        _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
          this.setNextCallback(handler);
          var node = this.props.nodeRef ? this.props.nodeRef.current : Cn.findDOMNode(this);
          var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
          if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
          }
          if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
          }
          if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
          }
        };
        _proto.render = function render() {
          var status = this.state.status;
          if (status === UNMOUNTED) {
            return null;
          }
          var _this$props = this.props, children = _this$props.children;
          _this$props.in;
          _this$props.mountOnEnter;
          _this$props.unmountOnExit;
          _this$props.appear;
          _this$props.enter;
          _this$props.exit;
          _this$props.timeout;
          _this$props.addEndListener;
          _this$props.onEnter;
          _this$props.onEntering;
          _this$props.onEntered;
          _this$props.onExit;
          _this$props.onExiting;
          _this$props.onExited;
          _this$props.nodeRef;
          var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
          return (
            // allows for nested Transitions
            /* @__PURE__ */ Cn.createElement(TransitionGroupContext.Provider, {
              value: null
            }, typeof children === "function" ? children(status, childProps) : Cn.cloneElement(Cn.Children.only(children), childProps))
          );
        };
        return Transition2;
      }(Cn.Component);
      Transition.contextType = TransitionGroupContext;
      Transition.propTypes = {
        /**
         * A React reference to DOM element that need to transition:
         * https://stackoverflow.com/a/51127130/4671932
         *
         *   - When `nodeRef` prop is used, `node` is not passed to callback functions
         *      (e.g. `onEnter`) because user already has direct access to the node.
         *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
         *     `nodeRef` need to be provided to `Transition` with changed `key` prop
         *     (see
         *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
         */
        nodeRef: PropTypes.shape({
          current: typeof Element === "undefined" ? PropTypes.any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return PropTypes.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
          }
        }),
        /**
         * A `function` child can be used instead of a React element. This function is
         * called with the current transition status (`'entering'`, `'entered'`,
         * `'exiting'`, `'exited'`), which can be used to apply context
         * specific props to a component.
         *
         * ```jsx
         * <Transition in={this.state.in} timeout={150}>
         *   {state => (
         *     <MyComponent className={`fade fade-${state}`} />
         *   )}
         * </Transition>
         * ```
         */
        children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
        /**
         * Show the component; triggers the enter or exit states
         */
        in: PropTypes.bool,
        /**
         * By default the child component is mounted immediately along with
         * the parent `Transition` component. If you want to "lazy mount" the component on the
         * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
         * mounted, even on "exited", unless you also specify `unmountOnExit`.
         */
        mountOnEnter: PropTypes.bool,
        /**
         * By default the child component stays mounted after it reaches the `'exited'` state.
         * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
         */
        unmountOnExit: PropTypes.bool,
        /**
         * By default the child component does not perform the enter transition when
         * it first mounts, regardless of the value of `in`. If you want this
         * behavior, set both `appear` and `in` to `true`.
         *
         * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
         * > only adds an additional enter transition. However, in the
         * > `<CSSTransition>` component that first enter transition does result in
         * > additional `.appear-*` classes, that way you can choose to style it
         * > differently.
         */
        appear: PropTypes.bool,
        /**
         * Enable or disable enter transitions.
         */
        enter: PropTypes.bool,
        /**
         * Enable or disable exit transitions.
         */
        exit: PropTypes.bool,
        /**
         * The duration of the transition, in milliseconds.
         * Required unless `addEndListener` is provided.
         *
         * You may specify a single timeout for all transitions:
         *
         * ```jsx
         * timeout={500}
         * ```
         *
         * or individually:
         *
         * ```jsx
         * timeout={{
         *  appear: 500,
         *  enter: 300,
         *  exit: 500,
         * }}
         * ```
         *
         * - `appear` defaults to the value of `enter`
         * - `enter` defaults to `0`
         * - `exit` defaults to `0`
         *
         * @type {number | { enter?: number, exit?: number, appear?: number }}
         */
        timeout: function timeout(props) {
          var pt = timeoutsShape;
          if (!props.addEndListener)
            pt = pt.isRequired;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return pt.apply(void 0, [props].concat(args));
        },
        /**
         * Add a custom transition end trigger. Called with the transitioning
         * DOM node and a `done` callback. Allows for more fine grained transition end
         * logic. Timeouts are still used as a fallback if provided.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * ```jsx
         * addEndListener={(node, done) => {
         *   // use the css transitionend event to mark the finish of a transition
         *   node.addEventListener('transitionend', done, false);
         * }}
         * ```
         */
        addEndListener: PropTypes.func,
        /**
         * Callback fired before the "entering" status is applied. An extra parameter
         * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * @type Function(node: HtmlElement, isAppearing: bool) -> void
         */
        onEnter: PropTypes.func,
        /**
         * Callback fired after the "entering" status is applied. An extra parameter
         * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * @type Function(node: HtmlElement, isAppearing: bool)
         */
        onEntering: PropTypes.func,
        /**
         * Callback fired after the "entered" status is applied. An extra parameter
         * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * @type Function(node: HtmlElement, isAppearing: bool) -> void
         */
        onEntered: PropTypes.func,
        /**
         * Callback fired before the "exiting" status is applied.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * @type Function(node: HtmlElement) -> void
         */
        onExit: PropTypes.func,
        /**
         * Callback fired after the "exiting" status is applied.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * @type Function(node: HtmlElement) -> void
         */
        onExiting: PropTypes.func,
        /**
         * Callback fired after the "exited" status is applied.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed
         *
         * @type Function(node: HtmlElement) -> void
         */
        onExited: PropTypes.func
      };
      function noop() {
      }
      Transition.defaultProps = {
        in: false,
        mountOnEnter: false,
        unmountOnExit: false,
        appear: false,
        enter: true,
        exit: true,
        onEnter: noop,
        onEntering: noop,
        onEntered: noop,
        onExit: noop,
        onExiting: noop,
        onExited: noop
      };
      Transition.UNMOUNTED = UNMOUNTED;
      Transition.EXITED = EXITED;
      Transition.ENTERING = ENTERING;
      Transition.ENTERED = ENTERED;
      Transition.EXITING = EXITING;
      const Transition$1 = Transition;
      var _addClass = function addClass$1(node, classes) {
        return node && classes && classes.split(" ").forEach(function(c) {
          return addClass(node, c);
        });
      };
      var removeClass = function removeClass2(node, classes) {
        return node && classes && classes.split(" ").forEach(function(c) {
          return removeClass$1(node, c);
        });
      };
      var CSSTransition = /* @__PURE__ */ function(_React$Component) {
        _inheritsLoose(CSSTransition2, _React$Component);
        function CSSTransition2() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
          _this.appliedClasses = {
            appear: {},
            enter: {},
            exit: {}
          };
          _this.onEnter = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
            _this.removeClasses(node, "exit");
            _this.addClass(node, appearing ? "appear" : "enter", "base");
            if (_this.props.onEnter) {
              _this.props.onEnter(maybeNode, maybeAppearing);
            }
          };
          _this.onEntering = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
            var type = appearing ? "appear" : "enter";
            _this.addClass(node, type, "active");
            if (_this.props.onEntering) {
              _this.props.onEntering(maybeNode, maybeAppearing);
            }
          };
          _this.onEntered = function(maybeNode, maybeAppearing) {
            var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
            var type = appearing ? "appear" : "enter";
            _this.removeClasses(node, type);
            _this.addClass(node, type, "done");
            if (_this.props.onEntered) {
              _this.props.onEntered(maybeNode, maybeAppearing);
            }
          };
          _this.onExit = function(maybeNode) {
            var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
            _this.removeClasses(node, "appear");
            _this.removeClasses(node, "enter");
            _this.addClass(node, "exit", "base");
            if (_this.props.onExit) {
              _this.props.onExit(maybeNode);
            }
          };
          _this.onExiting = function(maybeNode) {
            var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
            _this.addClass(node, "exit", "active");
            if (_this.props.onExiting) {
              _this.props.onExiting(maybeNode);
            }
          };
          _this.onExited = function(maybeNode) {
            var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
            _this.removeClasses(node, "exit");
            _this.addClass(node, "exit", "done");
            if (_this.props.onExited) {
              _this.props.onExited(maybeNode);
            }
          };
          _this.resolveArguments = function(maybeNode, maybeAppearing) {
            return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
          };
          _this.getClassNames = function(type) {
            var classNames = _this.props.classNames;
            var isStringClassNames = typeof classNames === "string";
            var prefix = isStringClassNames && classNames ? classNames + "-" : "";
            var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
            var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
            var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
            return {
              baseClassName,
              activeClassName,
              doneClassName
            };
          };
          return _this;
        }
        var _proto = CSSTransition2.prototype;
        _proto.addClass = function addClass2(node, type, phase) {
          var className = this.getClassNames(type)[phase + "ClassName"];
          var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
          if (type === "appear" && phase === "done" && doneClassName) {
            className += " " + doneClassName;
          }
          if (phase === "active") {
            if (node)
              forceReflow(node);
          }
          if (className) {
            this.appliedClasses[type][phase] = className;
            _addClass(node, className);
          }
        };
        _proto.removeClasses = function removeClasses(node, type) {
          var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
          this.appliedClasses[type] = {};
          if (baseClassName) {
            removeClass(node, baseClassName);
          }
          if (activeClassName) {
            removeClass(node, activeClassName);
          }
          if (doneClassName) {
            removeClass(node, doneClassName);
          }
        };
        _proto.render = function render() {
          var _this$props = this.props;
          _this$props.classNames;
          var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
          return /* @__PURE__ */ Cn.createElement(Transition$1, _extends({}, props, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
          }));
        };
        return CSSTransition2;
      }(Cn.Component);
      CSSTransition.defaultProps = {
        classNames: ""
      };
      CSSTransition.propTypes = _extends({}, Transition$1.propTypes, {
        /**
         * The animation classNames applied to the component as it appears, enters,
         * exits or has finished the transition. A single name can be provided, which
         * will be suffixed for each stage, e.g. `classNames="fade"` applies:
         *
         * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
         * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
         * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
         *
         * A few details to note about how these classes are applied:
         *
         * 1. They are _joined_ with the ones that are already defined on the child
         *    component, so if you want to add some base styles, you can use
         *    `className` without worrying that it will be overridden.
         *
         * 2. If the transition component mounts with `in={false}`, no classes are
         *    applied yet. You might be expecting `*-exit-done`, but if you think
         *    about it, a component cannot finish exiting if it hasn't entered yet.
         *
         * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
         *    allows you to define different behavior for when appearing is done and
         *    when regular entering is done, using selectors like
         *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
         *    an epic entrance animation when element first appears in the DOM using
         *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
         *    simply use `fade-enter-done` for defining both cases.
         *
         * Each individual classNames can also be specified independently like:
         *
         * ```js
         * classNames={{
         *  appear: 'my-appear',
         *  appearActive: 'my-active-appear',
         *  appearDone: 'my-done-appear',
         *  enter: 'my-enter',
         *  enterActive: 'my-active-enter',
         *  enterDone: 'my-done-enter',
         *  exit: 'my-exit',
         *  exitActive: 'my-active-exit',
         *  exitDone: 'my-done-exit',
         * }}
         * ```
         *
         * If you want to set these classes using CSS Modules:
         *
         * ```js
         * import styles from './styles.css';
         * ```
         *
         * you might want to use camelCase in your CSS file, that way could simply
         * spread them instead of listing them one by one:
         *
         * ```js
         * classNames={{ ...styles }}
         * ```
         *
         * @type {string | {
         *  appear?: string,
         *  appearActive?: string,
         *  appearDone?: string,
         *  enter?: string,
         *  enterActive?: string,
         *  enterDone?: string,
         *  exit?: string,
         *  exitActive?: string,
         *  exitDone?: string,
         * }}
         */
        classNames: classNamesShape,
        /**
         * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
         * applied.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * @type Function(node: HtmlElement, isAppearing: bool)
         */
        onEnter: PropTypes.func,
        /**
         * A `<Transition>` callback fired immediately after the 'enter-active' or
         * 'appear-active' class is applied.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * @type Function(node: HtmlElement, isAppearing: bool)
         */
        onEntering: PropTypes.func,
        /**
         * A `<Transition>` callback fired immediately after the 'enter' or
         * 'appear' classes are **removed** and the `done` class is added to the DOM node.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed.
         *
         * @type Function(node: HtmlElement, isAppearing: bool)
         */
        onEntered: PropTypes.func,
        /**
         * A `<Transition>` callback fired immediately after the 'exit' class is
         * applied.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed
         *
         * @type Function(node: HtmlElement)
         */
        onExit: PropTypes.func,
        /**
         * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed
         *
         * @type Function(node: HtmlElement)
         */
        onExiting: PropTypes.func,
        /**
         * A `<Transition>` callback fired immediately after the 'exit' classes
         * are **removed** and the `exit-done` class is added to the DOM node.
         *
         * **Note**: when `nodeRef` prop is passed, `node` is not passed
         *
         * @type Function(node: HtmlElement)
         */
        onExited: PropTypes.func
      });
      const CSSTransition$1 = CSSTransition;
      const defaultGetRoot = () => {
        const rootElm = document.createElement("div");
        document.body.appendChild(rootElm);
        return rootElm;
      };
      const Portal = ({
        getRoot,
        children
      }) => {
        const [rootElm, setRootElm] = t(h(null), "rootElm");
        p(() => {
          const newRoot = (getRoot || defaultGetRoot)();
          setRootElm(newRoot);
          return () => newRoot.remove();
        }, []);
        return rootElm && z(children, rootElm);
      };
      var _jsxFileName$5 = "/Users/maro5239/work/hanna/modules/hanna-react/src/_abstract/_AbstractModal.tsx";
      const MODAL_OPEN_CLASS = "modal-open";
      const win = typeof window !== "undefined" ? window : void 0;
      const modalStack = win ? win.$$modalStack || (win.$$modalStack = []) : [];
      const addToModalStack = (domid) => {
        document.documentElement.classList.add(MODAL_OPEN_CLASS);
        modalStack.unshift(domid);
      };
      const removeFromModalStack = (domid) => {
        const stackPos = modalStack.indexOf(domid);
        if (stackPos > -1) {
          modalStack.splice(stackPos, 1);
        }
        if (modalStack.length <= 0) {
          document.documentElement.classList.remove(MODAL_OPEN_CLASS);
        }
      };
      const defaultAbstractModalTexts = {
        is: {
          closeButton: "Loka",
          closeButtonLabel: "Loka þessum glugga"
        },
        en: {
          closeButton: "Close",
          closeButtonLabel: "Close this window"
        },
        pl: {
          closeButton: "Zamknij",
          closeButtonLabel: "Zamknij to okno"
        }
      };
      const AbstractModal = (props) => {
        const {
          bem,
          modifier,
          closeDelay = 500,
          wrapperProps = {},
          ssr
        } = props;
        const isFickle = !(props.stable ?? props.fickle === false) || void 0;
        const txt = getTexts(props, defaultAbstractModalTexts);
        const openProp = props.open !== false;
        const isBrowser = useIsBrowserSide(ssr);
        const privateDomId = useDomid();
        const domid = wrapperProps.id || privateDomId;
        const modalElmRef = t(_(null), "modalElmRef");
        const [open, setOpen] = t(h(() => !!props.startOpen && openProp), "open");
        const [visible, setVisible] = t(h(open), "visible");
        const openModal = () => {
          if (!open) {
            addToModalStack(privateDomId);
            setVisible(true);
            setTimeout(() => {
              setOpen(true);
              focusElm.focusElm(modalElmRef.current, {
                delay: 50
              });
              props.onOpen && props.onOpen();
            }, 50);
          }
        };
        const closeModal = () => {
          if (open) {
            setOpen(false);
            removeFromModalStack(privateDomId);
            props.onClose && props.onClose();
            setTimeout(() => {
              setVisible(false);
              props.onClosed();
            }, closeDelay);
          }
        };
        const lastPropsOpen = t(_(openProp), "lastPropsOpen");
        if (openProp !== lastPropsOpen.current && openProp !== open) {
          lastPropsOpen.current = openProp;
          openProp ? openModal() : closeModal();
        }
        lastPropsOpen.current = openProp;
        const closeOnCurtainClick = isFickle && ((e) => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        });
        useCallbackOnEsc(isFickle && (() => {
          if (modalStack[0] === domid) {
            closeModal();
          }
        }));
        p(
          () => {
            if (open) {
              addToModalStack(privateDomId);
            } else if (openProp) {
              openModal();
            }
            return () => removeFromModalStack(privateDomId);
          },
          []
          // eslint-disable-line react-hooks/exhaustive-deps
        );
        const PortalOrFragment = props.portal !== false ? Portal : _$1;
        const closeButtonLabel = txt.closeButtonLabel || txt.closeButton;
        const {
          onClick,
          className
        } = wrapperProps;
        return o(PortalOrFragment, {
          children: visible && o("div", {
            ...wrapperProps,
            className: modifiedClass(`${bem}wrapper`, [modifier, className]),
            hidden: !open,
            role: "dialog",
            onClick: closeOnCurtainClick && onClick ? (e) => {
              closeOnCurtainClick(e);
              onClick(e);
            } : closeOnCurtainClick || onClick,
            id: domid,
            children: [isBrowser && o(FocusTrap, {
              atTop: true
            }, void 0, false, {
              fileName: _jsxFileName$5,
              lineNumber: 286,
              columnNumber: 25
            }, void 0), o("div", {
              className: modifiedClass(bem, modifier),
              ref: modalElmRef,
              children: [props.render ? props.render({
                closeModal
              }) : props.children, isBrowser && !props.noCloseButton && o("button", {
                className: `${bem}__closebutton`,
                type: "button",
                onClick: closeModal,
                "aria-label": closeButtonLabel,
                "aria-controls": domid,
                title: closeButtonLabel,
                children: txt.closeButton
              }, void 0, false, {
                fileName: _jsxFileName$5,
                lineNumber: 290,
                columnNumber: 15
              }, void 0)]
            }, void 0, true, {
              fileName: _jsxFileName$5,
              lineNumber: 287,
              columnNumber: 11
            }, void 0), isBrowser && o(FocusTrap, {}, void 0, false, {
              fileName: _jsxFileName$5,
              lineNumber: 302,
              columnNumber: 25
            }, void 0)]
          }, void 0, true, {
            fileName: _jsxFileName$5,
            lineNumber: 271,
            columnNumber: 9
          }, void 0)
        }, void 0, false, {
          fileName: _jsxFileName$5,
          lineNumber: 269,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName$4 = "/Users/maro5239/work/hanna/modules/hanna-react/src/_abstract/_CarouselPaging.tsx";
      const CarouselPaging = (props) => {
        const {
          bem = "CarouselPaging",
          modifier,
          current,
          itemCount,
          setCurrent
        } = props;
        const {
          next,
          prev,
          unit = ""
        } = props.texts;
        return o("div", {
          className: modifiedClass(bem, modifier),
          children: [o("button", {
            className: `${bem}__button ${bem}__button--next`,
            type: "button",
            disabled: current >= itemCount - 1,
            onClick: () => setCurrent(current + 1),
            "aria-controls": props["aria-controls"],
            "aria-label": `${next} ${unit}`,
            title: `${next} ${unit}`,
            children: next
          }, void 0, false, {
            fileName: _jsxFileName$4,
            lineNumber: 24,
            columnNumber: 7
          }, void 0), " ", o("button", {
            className: `${bem}__button ${bem}__button--prev`,
            type: "button",
            disabled: current === 0,
            onClick: () => setCurrent(current - 1),
            "aria-controls": props["aria-controls"],
            "aria-label": `${prev} ${unit}`,
            title: `${prev} ${unit}`,
            children: prev
          }, void 0, false, {
            fileName: _jsxFileName$4,
            lineNumber: 35,
            columnNumber: 7
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$4,
          lineNumber: 23,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName$3 = "/Users/maro5239/work/hanna/modules/hanna-react/src/Gallery/_GalleryModalItem.tsx";
      const GalleryModalItem = (props) => {
        const {
          caption,
          description,
          ...image
        } = props;
        return o("div", {
          className: "GalleryModalItem",
          children: [(caption || description) && o("div", {
            className: "GalleryModalItem__text",
            children: [o("div", {
              className: "GalleryModalItem__caption",
              children: caption
            }, void 0, false, {
              fileName: _jsxFileName$3,
              lineNumber: 14,
              columnNumber: 11
            }, void 0), o("div", {
              className: "GalleryModalItem__description",
              children: description
            }, void 0, false, {
              fileName: _jsxFileName$3,
              lineNumber: 15,
              columnNumber: 11
            }, void 0)]
          }, void 0, true, {
            fileName: _jsxFileName$3,
            lineNumber: 13,
            columnNumber: 9
          }, void 0), o(Image, {
            bem: "GalleryModalItem__image",
            src: image.largeImageSrc || image.src
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 18,
            columnNumber: 7
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$3,
          lineNumber: 11,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName$2 = "/Users/maro5239/work/hanna/modules/hanna-react/src/Gallery/_GalleryModal.tsx";
      const GalleryModal = (props) => {
        const {
          texts
        } = props;
        const {
          currentImage,
          items,
          setCurrentImage
        } = q(GalleryModalContext);
        const [image, setImage] = t(h(currentImage), "image");
        const [animated, setAnimated] = t(h(false), "animated");
        const updateImage = (index) => {
          setAnimated(!animated);
          setTimeout(() => {
            setCurrentImage(items[index]);
          }, 200);
        };
        p(() => {
          if (image !== currentImage) {
            const imgSource = (currentImage == null ? void 0 : currentImage.largeImageSrc) || (currentImage == null ? void 0 : currentImage.src);
            if (imgSource) {
              const imageToLoad = new window.Image();
              imageToLoad.src = imgSource;
              imageToLoad.onload = () => {
                setImage(currentImage);
              };
            } else {
              setImage(void 0);
            }
          }
        }, [image, currentImage]);
        if (!image) {
          return null;
        }
        const imageIndex = items.findIndex((item) => (
          // FIXME: This if weirdly inefficient. Either memoize,
          // or do a simpler single-property comparison.
          objectIsSame_1(objectClean_1(image), objectClean_1(item))
        ));
        return o(AbstractModal, {
          open: true,
          onClosed: () => {
            setCurrentImage(void 0);
          },
          startOpen: false,
          bem: "GalleryModal",
          texts: {
            closeButton: texts.modalCloseLabel
          },
          children: [o(CSSTransition$1, {
            in: animated,
            timeout: 200,
            onEntered: () => {
              setAnimated(!animated);
            },
            classNames: "GalleryModalItem--",
            children: o(GalleryModalItem, {
              ...image
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 70,
              columnNumber: 9
            }, void 0)
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 62,
            columnNumber: 7
          }, void 0), o(CarouselPaging, {
            bem: "GalleryModalPager",
            itemCount: items.length,
            current: imageIndex,
            setCurrent: updateImage,
            texts: {
              next: texts.modalNextLabel,
              prev: texts.modalPrevLabel
            }
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 73,
            columnNumber: 7
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$2,
          lineNumber: 53,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/Gallery.tsx";
      const defaultTexts = {
        is: {
          modalNextLabel: "Næsta mynd",
          modalPrevLabel: "Fyrri mynd",
          modalCloseLabel: "Loka mynd"
        },
        en: {
          modalNextLabel: "Next image",
          modalPrevLabel: "Previous image",
          modalCloseLabel: "Close image"
        },
        pl: {
          modalNextLabel: "Następne zdjęcie",
          modalPrevLabel: "Poprzednie zdjęcie",
          modalCloseLabel: "Zamknij zdjęcie"
        }
      };
      const Gallery = (props) => {
        const {
          items,
          ssr
        } = props;
        const texts = getTexts(props, defaultTexts);
        const [currentImage, setCurrentImage] = t(h(void 0), "currentImage");
        const galleryState = t(F$1(() => ({
          items,
          setCurrentImage,
          currentImage
        }), [items, currentImage]), "galleryState");
        return o(GalleryModalContext.Provider, {
          value: galleryState,
          children: [o(AbstractCarousel, {
            bem: "Gallery",
            items,
            Component: GalleryItem,
            ssr,
            wrapperProps: props.wrapperProps
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 60,
            columnNumber: 7
          }, void 0), o(GalleryModal, {
            ...currentImage,
            texts
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 67,
            columnNumber: 7
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 59,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/Gallery.tsx";
      const getGalleryData = (elm) => {
        const lang = getLang(elm);
        const items = qq(".GalleryItem", elm).map((itemElm) => {
          var _a, _b, _c;
          const img = q$1(".GalleryItem__image img", itemElm);
          const caption = ((_a = q$1(".GalleryItem__caption", itemElm)) == null ? void 0 : _a.textContent) || void 0;
          const description = ((_b = q$1(".GalleryItem__description", itemElm)) == null ? void 0 : _b.textContent) || void 0;
          const largeImageSrc = ((_c = q$1("a.GalleryItem__button", itemElm)) == null ? void 0 : _c.href) || void 0;
          return {
            altText: img ? img.alt : void 0,
            src: img ? img.src : void 0,
            caption,
            largeImageSrc,
            description
          };
        });
        return {
          props: {
            items,
            lang
          },
          contextual: q$1(".Gallery__contextual", elm),
          itemsContextuals: qq(".GalleryItem", elm).map((itemElm) => q$1(".GalleryItem__contextual", itemElm))
        };
      };
      window.Hanna.makeSprinkle({
        name: "Gallery",
        init: (elm) => {
          const {
            props,
            contextual,
            itemsContextuals
          } = getGalleryData(elm);
          const root = elm;
          elm.getAttributeNames().forEach((attrName) => {
            elm.removeAttribute(attrName);
          });
          Cn.render(o(Gallery, {
            ...props,
            ssr: false,
            wrapperProps: autoSeenEffectWrapperProps(elm)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, globalThis), root, () => autoSeenEffectsRefresh());
          if (contextual) {
            q$1(".Gallery", root).insertAdjacentElement("afterbegin", contextual);
          }
          const galleryItems = qq(".GalleryItem", root);
          itemsContextuals.forEach((contextual2, idx) => {
            if (contextual2) {
              galleryItems[idx].insertAdjacentElement("afterbegin", contextual2);
            }
          });
          return root;
        },
        unmount: (elm, root) => {
          Cn.unmountComponentAtNode(root);
        }
      });
    }
  };
});
