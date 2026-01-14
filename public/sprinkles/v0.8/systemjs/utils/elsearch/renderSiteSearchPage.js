System.register(["../../../_chunks/compat.module-919773fc.js", "../../../_chunks/initHannaNamespace-77b40001.js", "../../../_chunks/qj-0ce4c6bc.js", "../../../_chunks/jsxRuntime.module-791778ad.js", "../../../_chunks/getSVGtext-2c45db0c.js", "../../../_chunks/i18n-5b23de04.js", "../../../_chunks/_Image-1382ad99.js", "../../../_chunks/_Link-8229a97c.js", "../../../_chunks/_useMobileMenuToggling-b1fb85e8.js", "../../../_chunks/Alert-349b2825.js", "../../../_chunks/Tabs-ebeffc47.js", "../../../_chunks/SiteSearchInput-7551fae8.js", "../../../_chunks/ensureCSS-cc708e92.js", "../../../_chunks/getLang-61538edc.js", "./reykjavik.is.js", "../../../_chunks/_Button-14554c59.js", "../../../_chunks/env-c53cf972.js", "../../../_chunks/hannavars-0e03a23c.js", "../../../_chunks/ObjectHelpers-a9c65074.js", "../../../_chunks/assets-7c5ecab5.js"], function(exports, module) {
  "use strict";
  var _, h, T, p, y, k, _$1, t, F, Cn, range, debounce, makeQueryString, o, modifiedClass, DEFAULT_LANG, getTexts, Image, Link, useDomid, Alert, Tabs, SiteSearchInput, ensureCSS, getLang, searchResultsPageQuery, postQuery;
  return {
    setters: [(module2) => {
      _ = module2._;
      h = module2.h;
      T = module2.T;
      p = module2.p;
      y = module2.d;
      k = module2.k;
      _$1 = module2.a;
      t = module2.t;
      F = module2.F;
      Cn = module2.C;
    }, null, (module2) => {
      range = module2.r;
      debounce = module2.d;
      makeQueryString = module2.m;
    }, (module2) => {
      o = module2.o;
      modifiedClass = module2.m;
    }, null, (module2) => {
      DEFAULT_LANG = module2.D;
      getTexts = module2.g;
    }, (module2) => {
      Image = module2.I;
    }, (module2) => {
      Link = module2.L;
    }, (module2) => {
      useDomid = module2.u;
    }, (module2) => {
      Alert = module2.A;
    }, (module2) => {
      Tabs = module2.T;
    }, (module2) => {
      SiteSearchInput = module2.S;
    }, (module2) => {
      ensureCSS = module2.e;
    }, (module2) => {
      getLang = module2.g;
    }, (module2) => {
      searchResultsPageQuery = module2.searchResultsPageQuery;
      postQuery = module2.postQuery;
    }, null, null, null, null, null],
    execute: function() {
      const monthsByLang = {
        is: ["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"],
        en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octóber", "November", "December"],
        // Polish months in genitive form
        // only to be used in dates — not standalone
        pl: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
      };
      const printDate = /* @__NO_SIDE_EFFECTS__ */ (date, lang) => {
        date = typeof date === "string" ? new Date(date) : date;
        const d = date.getUTCDate();
        const months = monthsByLang[lang || DEFAULT_LANG] || monthsByLang[DEFAULT_LANG];
        const mmm = months[date.getUTCMonth()];
        const yyyy = date.getUTCFullYear();
        return months === monthsByLang.en ? `${mmm} ${d}, ${yyyy}` : `${d}. ${mmm} ${yyyy}`;
      };
      function _extends() {
        _extends = Object.assign || function(target) {
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
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o2, p2) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
          o3.__proto__ = p3;
          return o3;
        };
        return _setPrototypeOf(o2, p2);
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
      var observerMap = /* @__PURE__ */ new Map();
      var RootIds = /* @__PURE__ */ new WeakMap();
      var rootId = 0;
      var unsupportedValue = void 0;
      function getRootId(root) {
        if (!root)
          return "0";
        if (RootIds.has(root))
          return RootIds.get(root);
        rootId += 1;
        RootIds.set(root, rootId.toString());
        return RootIds.get(root);
      }
      function optionsToId(options) {
        return Object.keys(options).sort().filter(function(key) {
          return options[key] !== void 0;
        }).map(function(key) {
          return key + "_" + (key === "root" ? getRootId(options.root) : options[key]);
        }).toString();
      }
      function createObserver(options) {
        var id = optionsToId(options);
        var instance = observerMap.get(id);
        if (!instance) {
          var elements = /* @__PURE__ */ new Map();
          var thresholds;
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              var _elements$get;
              var inView = entry.isIntersecting && thresholds.some(function(threshold) {
                return entry.intersectionRatio >= threshold;
              });
              if (options.trackVisibility && typeof entry.isVisible === "undefined") {
                entry.isVisible = inView;
              }
              (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach(function(callback) {
                callback(inView, entry);
              });
            });
          }, options);
          thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
          instance = {
            id,
            observer,
            elements
          };
          observerMap.set(id, instance);
        }
        return instance;
      }
      function observe(element, callback, options, fallbackInView) {
        if (options === void 0) {
          options = {};
        }
        if (fallbackInView === void 0) {
          fallbackInView = unsupportedValue;
        }
        if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
          var bounds = element.getBoundingClientRect();
          callback(fallbackInView, {
            isIntersecting: fallbackInView,
            target: element,
            intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
            time: 0,
            boundingClientRect: bounds,
            intersectionRect: bounds,
            rootBounds: bounds
          });
          return function() {
          };
        }
        var _createObserver = createObserver(options), id = _createObserver.id, observer = _createObserver.observer, elements = _createObserver.elements;
        var callbacks = elements.get(element) || [];
        if (!elements.has(element)) {
          elements.set(element, callbacks);
        }
        callbacks.push(callback);
        observer.observe(element);
        return function unobserve() {
          callbacks.splice(callbacks.indexOf(callback), 1);
          if (callbacks.length === 0) {
            elements["delete"](element);
            observer.unobserve(element);
          }
          if (elements.size === 0) {
            observer.disconnect();
            observerMap["delete"](id);
          }
        };
      }
      var _excluded = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];
      function isPlainChildren(props) {
        return typeof props.children !== "function";
      }
      var InView = /* @__PURE__ */ function(_React$Component) {
        _inheritsLoose(InView2, _React$Component);
        function InView2(props) {
          var _this;
          _this = _React$Component.call(this, props) || this;
          _this.node = null;
          _this._unobserveCb = null;
          _this.handleNode = function(node) {
            if (_this.node) {
              _this.unobserve();
              if (!node && !_this.props.triggerOnce && !_this.props.skip) {
                _this.setState({
                  inView: !!_this.props.initialInView,
                  entry: void 0
                });
              }
            }
            _this.node = node ? node : null;
            _this.observeNode();
          };
          _this.handleChange = function(inView, entry) {
            if (inView && _this.props.triggerOnce) {
              _this.unobserve();
            }
            if (!isPlainChildren(_this.props)) {
              _this.setState({
                inView,
                entry
              });
            }
            if (_this.props.onChange) {
              _this.props.onChange(inView, entry);
            }
          };
          _this.state = {
            inView: !!props.initialInView,
            entry: void 0
          };
          return _this;
        }
        var _proto = InView2.prototype;
        _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
          if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
            this.unobserve();
            this.observeNode();
          }
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
          this.unobserve();
          this.node = null;
        };
        _proto.observeNode = function observeNode() {
          if (!this.node || this.props.skip)
            return;
          var _this$props = this.props, threshold = _this$props.threshold, root = _this$props.root, rootMargin = _this$props.rootMargin, trackVisibility = _this$props.trackVisibility, delay = _this$props.delay, fallbackInView = _this$props.fallbackInView;
          this._unobserveCb = observe(this.node, this.handleChange, {
            threshold,
            root,
            rootMargin,
            // @ts-ignore
            trackVisibility,
            // @ts-ignore
            delay
          }, fallbackInView);
        };
        _proto.unobserve = function unobserve() {
          if (this._unobserveCb) {
            this._unobserveCb();
            this._unobserveCb = null;
          }
        };
        _proto.render = function render() {
          if (!isPlainChildren(this.props)) {
            var _this$state = this.state, inView = _this$state.inView, entry = _this$state.entry;
            return this.props.children({
              inView,
              entry,
              ref: this.handleNode
            });
          }
          var _this$props2 = this.props, children = _this$props2.children, as = _this$props2.as, props = _objectWithoutPropertiesLoose(_this$props2, _excluded);
          return /* @__PURE__ */ y(as || "div", _extends({
            ref: this.handleNode
          }, props), children);
        };
        return InView2;
      }(k);
      InView.displayName = "InView";
      InView.defaultProps = {
        threshold: 0,
        triggerOnce: false,
        initialInView: false
      };
      function useInView(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, threshold = _ref.threshold, delay = _ref.delay, trackVisibility = _ref.trackVisibility, rootMargin = _ref.rootMargin, root = _ref.root, triggerOnce = _ref.triggerOnce, skip = _ref.skip, initialInView = _ref.initialInView, fallbackInView = _ref.fallbackInView;
        var unobserve = _();
        var _React$useState = h({
          inView: !!initialInView
        }), state = _React$useState[0], setState = _React$useState[1];
        var setRef = T(
          function(node) {
            if (unobserve.current !== void 0) {
              unobserve.current();
              unobserve.current = void 0;
            }
            if (skip)
              return;
            if (node) {
              unobserve.current = observe(node, function(inView, entry) {
                setState({
                  inView,
                  entry
                });
                if (entry.isIntersecting && triggerOnce && unobserve.current) {
                  unobserve.current();
                  unobserve.current = void 0;
                }
              }, {
                root,
                rootMargin,
                threshold,
                // @ts-ignore
                trackVisibility,
                // @ts-ignore
                delay
              }, fallbackInView);
            }
          },
          // We break the rule here, because we aren't including the actual `threshold` variable
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [
            // If the threshold is an array, convert it to a string so it won't change between renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            Array.isArray(threshold) ? threshold.toString() : threshold,
            root,
            rootMargin,
            triggerOnce,
            skip,
            trackVisibility,
            fallbackInView,
            delay
          ]
        );
        p(function() {
          if (!unobserve.current && state.entry && !triggerOnce && !skip) {
            setState({
              inView: !!initialInView
            });
          }
        });
        var result = [setRef, state.inView, state.entry];
        result.ref = result[0];
        result.inView = result[1];
        result.entry = result[2];
        return result;
      }
      var _jsxFileName$2 = "/Users/maro5239/work/hanna/modules/hanna-react/src/SearchResults/_SearchResultsItem.tsx";
      const SearchResultsItem = (props) => {
        const {
          highlight,
          title,
          summary,
          href,
          meta,
          image
        } = props;
        const bem = highlight ? "SearchResultsHighlightItem" : "SearchResultsItem";
        const metaArr = Array.isArray(meta) ? meta : [meta];
        return o("li", {
          className: bem,
          children: o(Link, {
            className: `${bem}__link`,
            href,
            children: [o("h3", {
              className: `${bem}__title`,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 32,
              columnNumber: 9
            }, void 0), metaArr.length > 0 && o("span", {
              className: `${bem}__meta`,
              children: metaArr.map((item, i) => typeof item === "function" ? item() : item && o("span", {
                children: item
              }, i, false, {
                fileName: _jsxFileName$2,
                lineNumber: 36,
                columnNumber: 61
              }, void 0))
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 34,
              columnNumber: 11
            }, void 0), highlight && image && o(Image, {
              bem: `${bem}__image`,
              src: image
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 40,
              columnNumber: 32
            }, void 0), o("div", {
              className: `${bem}__summary`,
              dangerouslySetInnerHTML: {
                __html: summary
              }
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 41,
              columnNumber: 9
            }, void 0)]
          }, void 0, true, {
            fileName: _jsxFileName$2,
            lineNumber: 31,
            columnNumber: 7
          }, void 0)
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 30,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/SearchResults.tsx";
      const _fmts = {};
      const formatNumber = (num, lang) => {
        let fmt = _fmts[lang];
        if (!fmt) {
          fmt = _fmts[lang] = new Intl.NumberFormat(lang);
        }
        return fmt.format(num);
      };
      const renderDefaultErrorText = () => o(_$1, {
        children: ["Úps, það hefur komið upp villa. Má bjóða þér að prófa aftur að leita?", o("br", {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 28,
          columnNumber: 5
        }, void 0), "Ef ekkert lát er á villunni þá kunnum við að meta að þú látir okkur vita."]
      }, void 0);
      const defaultTexts$1 = {
        en: {
          lang: "en",
          loadQueryTitle: "Loading results...",
          resultsTitle: "results found for",
          noResultsTitle: "No results were found for",
          loadMore: "Load more"
          // loadingMore: 'Loading...',
        },
        is: {
          lang: "is",
          loadQueryTitle: "Sæki niðurstöður...",
          resultsTitle: "leitarniðurstöður fyrir",
          noResultsTitle: "Engar leitarniðurstöður fundust fyrir",
          loadMore: "Sækja fleiri"
          // loadingMore: 'Sæki fleiri...',
        },
        pl: {
          lang: "pl",
          loadQueryTitle: "Ładowanie wyników...",
          resultsTitle: "wyniki wyszukiwania dla",
          noResultsTitle: "Nie znaleziono wyników dla",
          loadMore: "Załaduj więcej"
          // loadingMore: 'Ładowanie...',
        }
      };
      const SearchResults_Tabs = (props) => {
        const {
          domid,
          filters,
          activeIdx,
          setFilter,
          lang
        } = props;
        const tabs = t(F(() => (filters || []).map(({
          label,
          count
        }) => ({
          label,
          badge: count && formatNumber(count, lang)
        })), [filters, lang]), "tabs: Array<TabItemProps>");
        return tabs.length ? o(Tabs, {
          role: "tablist",
          "aria-controls": domid,
          tabs,
          activeIdx: activeIdx || 0,
          onSetActive: (i) => setFilter && setFilter(i)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 91,
          columnNumber: 5
        }, void 0) : null;
      };
      const LoadingScaffold = (props) => props.count ? o("ol", {
        className: "SearchResults__list SearchResults__list--loading",
        children: range(1, props.count).map((item, i) => o(SearchResultsItem, {
          title: "...",
          summary: "",
          href: ""
        }, i, false, {
          fileName: _jsxFileName$1,
          lineNumber: 109,
          columnNumber: 9
        }, void 0))
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 107,
        columnNumber: 5
      }, void 0) : null;
      const NUM_AUTOLOADS = 2;
      const SearchResults__loadmore = (props) => {
        const {
          status,
          hits,
          numItems,
          loadMore,
          pageSize,
          texts
        } = props;
        const {
          lang
        } = texts;
        const moreCount = (hits || 0) - (numItems || 0);
        const autoLoadCount = t(_(0), "autoLoadCount");
        const skip = !loadMore || autoLoadCount.current >= NUM_AUTOLOADS;
        const [refFn, theEndIsNigh] = useInView({
          rootMargin: "150px 0px 0px 0px",
          skip
          // disable after two clicks
        });
        p(() => {
          if (theEndIsNigh && loadMore) {
            autoLoadCount.current = autoLoadCount.current + 1;
            loadMore();
          }
        }, [theEndIsNigh, loadMore]);
        const moreAvailable = status === "results" && moreCount && loadMore;
        return status === "loadingmore" ? o(LoadingScaffold, {
          count: Math.min(pageSize, moreCount)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 151,
          columnNumber: 5
        }, void 0) : moreAvailable ? o("button", {
          ref: refFn,
          className: "SearchResults__loadmore",
          type: "button",
          onClick: loadMore,
          children: [texts.loadMore, " ", o("span", {
            className: "SearchResults__loadmore__count",
            children: ["(", formatNumber(moreCount, lang), ")"]
          }, void 0, true, {
            fileName: _jsxFileName$1,
            lineNumber: 160,
            columnNumber: 7
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 153,
          columnNumber: 5
        }, void 0) : null;
      };
      const renderTitle = (props, texts) => {
        const {
          status,
          totalHits,
          query
        } = props;
        return o("h2", {
          className: "SearchResults__title",
          children: [status === "loadingquery" ? texts.loadQueryTitle : totalHits ? `${formatNumber(totalHits, texts.lang)} ${texts.resultsTitle}` : texts.noResultsTitle, o("span", {
            className: "SearchResults__query",
            children: query
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 177,
            columnNumber: 7
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 171,
          columnNumber: 5
        }, void 0);
      };
      const renderResults = (props) => {
        const {
          status,
          pageSize,
          items,
          hits
        } = props;
        if (status === "loadingquery" || status === "loadingfilter") {
          return o(LoadingScaffold, {
            count: Math.min(pageSize, hits || 999)
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 188,
            columnNumber: 12
          }, void 0);
        }
        return items && items.length ? o("ol", {
          className: "SearchResults__list",
          children: items.map((item, i) => o(SearchResultsItem, {
            ...item
          }, i, false, {
            fileName: _jsxFileName$1,
            lineNumber: 194,
            columnNumber: 9
          }, void 0))
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 192,
          columnNumber: 5
        }, void 0) : null;
      };
      const renderLoadMore = (props, texts) => {
        const {
          hits,
          items,
          status,
          pageSize,
          loadMore
        } = props;
        return o(SearchResults__loadmore, {
          hits,
          numItems: items && items.length,
          status,
          pageSize,
          loadMore,
          texts
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 206,
          columnNumber: 5
        }, void 0);
      };
      const SearchResults = (props) => {
        const {
          filters,
          activeFilterIdx,
          setFilter,
          status,
          errorText,
          wrapperProps
        } = props;
        const texts = getTexts(props, defaultTexts$1);
        const domid = useDomid();
        return o("div", {
          ...wrapperProps,
          className: modifiedClass("SearchResults", status !== "results" && status, (wrapperProps || {}).className),
          children: [renderTitle(props, texts), o(SearchResults_Tabs, {
            domid,
            filters,
            activeIdx: activeFilterIdx,
            setFilter,
            lang: texts.lang
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 272,
            columnNumber: 7
          }, void 0), o("div", {
            className: "SearchResults__results",
            id: domid,
            children: [renderResults(props), status === "error" && o(Alert, {
              type: "error",
              children: errorText || renderDefaultErrorText()
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 283,
              columnNumber: 11
            }, void 0), renderLoadMore(props, texts)]
          }, void 0, true, {
            fileName: _jsxFileName$1,
            lineNumber: 280,
            columnNumber: 7
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 262,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/utils/elsearch/renderSiteSearchPage.tsx";
      const log = (...args) => console.error("renderSiteSearchPage: ", ...args);
      const div = document.createElement("div");
      const _stripTitle = (text, title) => {
        text = text.trim();
        return text.indexOf(title) === 0 ? text.slice(title.length).trim() : text;
      };
      const tidyUpResultSummary = (summaryHtml, title) => {
        if (!summaryHtml) {
          return "";
        }
        div.innerHTML = summaryHtml;
        div.textContent = _stripTitle(div.textContent, title);
        return div.innerHTML;
      };
      const valueFromField = (field) => field && field[0] != null ? field[0].value : "";
      const hitsToItems = (hits, lang) => hits.map((hit) => {
        const {
          label,
          url_alias,
          url_internal,
          field_date,
          field_summary,
          // news items
          rendered_search_result
          // other document types
          // content, // ...of last resort
        } = hit;
        const meta = [];
        const date = valueFromField(field_date);
        if (date) {
          meta.push(/* @__PURE__ */ printDate(date, lang));
        }
        return {
          title: label,
          meta: meta.length ? meta : void 0,
          summary: valueFromField(field_summary) || tidyUpResultSummary(rendered_search_result, label),
          // || tidyUpContent(content, label),
          href: url_alias || url_internal
          // image: 'image_url'
        };
      });
      const filtersToTabs = (filters, aggregationResult) => {
        const {
          aggregateData = {},
          totalHits
        } = aggregationResult || {};
        return filters.map(({
          name,
          label
        }) => ({
          name,
          label,
          count: (name ? aggregateData[name] : totalHits) || 0
        })).filter((tab) => tab.count > 0);
      };
      const makeFilters = (filters) => Object.entries({
        "": "Allt",
        ...filters
      }).map(([key, label]) => ({
        name: key || "",
        label
      }));
      const DEFAULT_PAGE_SIZE = 10;
      const MIN_QUERY_LENGTH = 2;
      const defaultTexts = {
        en: {
          searchInputLabel: "Enter your search query",
          searchPlaceholder: "Enter your search query",
          searchButtonText: "Search"
        },
        is: {
          searchInputLabel: "Sláðu inn leitarorð",
          searchPlaceholder: "Sláðu inn leitarorð",
          searchButtonText: "Leita"
        },
        pl: {
          searchInputLabel: "Wpisz wyszukiwane słowa",
          searchPlaceholder: "Wpisz wyszukiwane słowa",
          searchButtonText: "Szukaj"
        }
      };
      const MiniRouter = {
        push: (query, replace) => {
          const method = replace ? "replaceState" : "pushState";
          const queryString = makeQueryString(query);
          const url = queryString ? `?${queryString}` : "";
          history[method](null, "", url);
          window.dispatchEvent(new Event("minirouting"));
        },
        replace: (query) => MiniRouter.push(query, true)
      };
      const getUrlParams = (last = {}) => {
        const p2 = new URLSearchParams(window.location.search);
        const q = p2.get("q") || void 0;
        const type = p2.get("type") || void 0;
        return q !== last.q || type !== last.type ? {
          q,
          type
        } : last;
      };
      const useSearchState = (apiUri, bundleLabels, pageSize, lang) => {
        const filters = t(F(() => makeFilters(bundleLabels), [bundleLabels]), "filters");
        const [params, _setParams] = t(h(getUrlParams), "params");
        const lastParams = t(_({}), "lastParams");
        const setParams = T(() => {
          _setParams((params2) => {
            lastParams.current = params2;
            return getUrlParams(params2);
          });
        }, []);
        const [, setCurrentPage] = t(h(0), "setCurrentPage");
        p(() => {
          window.addEventListener("popstate", setParams);
          window.addEventListener("minirouting", setParams);
          return () => {
            window.removeEventListener("popstate", setParams);
            window.removeEventListener("minirouting", setParams);
          };
        }, [setParams]);
        const [searchResults, setSearchResults] = t(h({
          items: []
        }), "searchResults");
        const abortFetch = t(_(), "abortFetch");
        const performSearch = T((fromPage = 0) => {
          const {
            q,
            type
          } = params;
          const last = lastParams.current;
          const status = q !== last.q ? "loadingquery" : type !== last.type ? "loadingfilter" : fromPage > 0 ? "loadingmore" : void 0;
          if (!status) {
            return;
          }
          if (!q || q.length < MIN_QUERY_LENGTH) {
            return;
          }
          setSearchResults((state) => {
            var _a, _b;
            return {
              status,
              totalHits: status === "loadingquery" ? void 0 : state.totalHits,
              hits: status === "loadingquery" ? void 0 : (_b = (_a = state.filters) == null ? void 0 : _a.find((tabData) => tabData.name === type)) == null ? void 0 : _b.count,
              items: status === "loadingmore" ? state.items : [],
              filters: status === "loadingquery" ? filters.slice(0, 1) : state.filters
            };
          });
          const abortCtrl = new AbortController();
          const eQuery = searchResultsPageQuery({
            value: q,
            filter: type && filters.find((f) => f.name === type) ? [{
              term: {
                bundle: type
              }
            }] : void 0,
            from: fromPage * pageSize,
            size: pageSize
          });
          postQuery(apiUri, eQuery, abortCtrl.signal).then((data) => {
            const [aggregateResults, elasticResult] = data;
            if (!aggregateResults || !elasticResult) {
              throw new Error("query returned incomplete results");
            }
            const items = hitsToItems(elasticResult.items, lang);
            setSearchResults((state) => {
              return {
                status: "results",
                totalHits: aggregateResults.totalHits,
                hits: type ? elasticResult.totalHits : aggregateResults.totalHits,
                items: status === "loadingmore" ? state.items.concat(items) : items,
                filters: filtersToTabs(filters, aggregateResults)
              };
            });
            setParams();
            abortFetch.current = void 0;
          }).catch((error) => {
            if (!abortCtrl.signal.aborted) {
              abortFetch.current = void 0;
              log(error);
              setSearchResults((state) => ({
                ...state,
                status: "error"
              }));
            }
          });
          return () => abortCtrl.abort();
        }, [params, filters, pageSize, apiUri, setParams, lang]);
        p(() => {
          setCurrentPage(0);
          abortFetch.current && abortFetch.current();
          abortFetch.current = performSearch();
          return () => {
            abortFetch.current && abortFetch.current();
          };
        }, [performSearch]);
        const loadMore = T(() => {
          if (!abortFetch.current) {
            setCurrentPage((currentPage) => {
              const nextPage = currentPage + 1;
              abortFetch.current = performSearch(nextPage);
              return nextPage;
            });
          }
        }, [performSearch]);
        return {
          params,
          searchResults,
          loadMore
        };
      };
      const useDebouncer = () => {
        const [debouncer] = t(h(() => debounce.d(500)), "debouncer");
        p(
          () => debouncer.cancel,
          []
          // eslint-disable-line react-hooks/exhaustive-deps
        );
        return debouncer;
      };
      const SiteSearchPage = (props) => {
        const {
          lang,
          apiUri,
          bundleLabels = {},
          pageSize = DEFAULT_PAGE_SIZE
        } = props;
        const texts = getTexts(props, defaultTexts);
        const {
          params,
          searchResults,
          loadMore
        } = useSearchState(apiUri, bundleLabels, pageSize, lang);
        const [inputValue, setInputValue] = t(h(params.q || ""), "inputValue");
        const debcouncer = useDebouncer();
        const updateQ = (q) => {
          debcouncer.cancel();
          q = q.trim();
          if ((!q || q.length >= MIN_QUERY_LENGTH) && q !== params.q) {
            debcouncer(() => {
              MiniRouter.replace({
                q: q || void 0
              });
            }, 500);
          }
        };
        const {
          filters,
          status,
          items,
          hits,
          totalHits
        } = searchResults;
        const updateFilter = filters && ((index) => {
          var _a;
          MiniRouter.replace({
            q: params.q,
            type: (_a = filters[index]) == null ? void 0 : _a.name
          });
        });
        const activeFilterIdx = filters && Math.max(0, filters.findIndex((filter) => params.type === filter.name));
        return o(_$1, {
          children: [o(SiteSearchInput, {
            label: texts.searchInputLabel,
            placeholder: texts.searchPlaceholder,
            buttonText: texts.searchButtonText,
            value: inputValue,
            onChange: (e) => {
              const value = e.currentTarget.value;
              setInputValue(value);
              updateQ(value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 7
          }, void 0), status && params.q && o(SearchResults, {
            status,
            items,
            totalHits,
            hits,
            pageSize,
            query: params.q,
            activeFilterIdx,
            filters,
            setFilter: updateFilter,
            loadMore,
            lang
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 9
          }, void 0)]
        }, void 0);
      };
      const renderSiteSearchPage = exports("default", (props) => {
        const {
          insertAt,
          apiUri,
          bundleLabels,
          pageSize
        } = props;
        if (!apiUri || !bundleLabels) {
          !apiUri && log("`apiUri` missing");
          !bundleLabels && log("`bundleLabels` missing");
          return;
        }
        const insertionElm = document.querySelector(insertAt);
        if (!insertionElm) {
          log(`Insertion point "${insertAt}" not found`);
          return;
        }
        ensureCSS("SearchResults", "SiteSearchInput").then(() => {
          const rootElm = document.createElement("div");
          rootElm.className = "SiteSearchPage";
          Cn.render(o(SiteSearchPage, {
            apiUri,
            bundleLabels,
            pageSize,
            lang: getLang(insertionElm)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 7
          }, void 0), rootElm, () => {
            insertionElm.replaceWith(rootElm);
          });
        });
      });
    }
  };
});
