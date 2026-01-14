System.register(["../_chunks/compat.module-919773fc.js", "../_chunks/initHannaNamespace-77b40001.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/jsxRuntime.module-791778ad.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/i18n-5b23de04.js", "../_chunks/assets-7c5ecab5.js", "../_chunks/_Link-8229a97c.js", "../_chunks/_Button-14554c59.js", "../_chunks/FocusTrap-07566d12.js", "../_chunks/_useMobileMenuToggling-b1fb85e8.js", "../_chunks/misc-20452715.js", "../_chunks/InjectHTML-d11c35e3.js", "../_chunks/getLang-61538edc.js"], function(exports, module) {
  "use strict";
  var t, h, _, T, p, F, _$1, Cn, qq, q, o, useIsBrowserSide, modifiedClass, focusElement, getTexts, getIllustrationUrl, Link, Button, FocusTrap, useDomid, notNully, InjectHTML;
  return {
    setters: [(module2) => {
      t = module2.t;
      h = module2.h;
      _ = module2._;
      T = module2.T;
      p = module2.p;
      F = module2.F;
      _$1 = module2.a;
      Cn = module2.C;
    }, null, (module2) => {
      qq = module2.a;
      q = module2.q;
    }, (module2) => {
      o = module2.o;
      useIsBrowserSide = module2.u;
      modifiedClass = module2.m;
    }, (module2) => {
      focusElement = module2.f;
    }, (module2) => {
      getTexts = module2.g;
    }, (module2) => {
      getIllustrationUrl = module2.g;
    }, (module2) => {
      Link = module2.L;
    }, (module2) => {
      Button = module2.B;
    }, (module2) => {
      FocusTrap = module2.F;
    }, (module2) => {
      useDomid = module2.u;
    }, (module2) => {
      notNully = module2.n;
    }, (module2) => {
      InjectHTML = module2.I;
    }, null],
    execute: function() {
      const handleAnchorLinkClick = (e, forwardToFirstFocusable) => {
        e.preventDefault();
        const targetId = e.currentTarget.hash.slice(1);
        const targetElm = targetId && document.getElementById(targetId);
        if (!targetElm) {
          return;
        }
        focusElement(targetElm, forwardToFirstFocusable);
      };
      var _jsxFileName$3 = "/Users/maro5239/work/hanna/modules/hanna-react/src/ButtonPrimary.tsx";
      const ButtonPrimary = (props) => o(Button, {
        bem: "ButtonPrimary",
        ...props
      }, void 0, false, {
        fileName: _jsxFileName$3,
        lineNumber: 11,
        columnNumber: 3
      }, void 0);
      var _jsxFileName$2 = "/Users/maro5239/work/hanna/modules/hanna-react/src/ButtonSecondary.tsx";
      const ButtonSecondary = (props) => o(Button, {
        bem: "ButtonSecondary",
        ...props
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 12,
        columnNumber: 6
      }, void 0);
      var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/MainMenu2.tsx";
      const htmlCl = (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        typeof document !== "undefined" && document.documentElement.classList
      );
      const globalClasses = {
        // menuIsActive: '.menu-is-active',
        menuIsOpen: "menu-is-open",
        menuIsClosed: "menu-is-closed"
      };
      const defaultMainMenu2Texts = {
        is: {
          title: "Aðalvalmynd",
          homeLink: "Forsíða",
          openMenu: "Valmynd",
          openMenuLong: "Opna Aðalvalmynd",
          closeMenu: "Loka",
          closeMenuLong: "Loka Aðalvalmynd"
        },
        en: {
          title: "Main Menu",
          homeLink: "Home page",
          openMenu: "Menu",
          openMenuLong: "Open main menu",
          closeMenu: "Close",
          closeMenuLong: "Close main menu"
        },
        pl: {
          title: "Menu główne",
          homeLink: "Strona główna",
          openMenu: "Menu",
          openMenuLong: "Otwórz menu główne",
          closeMenu: "Zamknij",
          closeMenuLong: "Zamknij menu główne"
        }
      };
      const iconMap = {
        alert: "info",
        globe: void 0,
        search: "search",
        user: "user"
        // NOTE: We're temporarily coerceing `IconName` to `ButtonIcon`
        // TODO: Remove this once Hanna icons (and `ButtonIcons` sperifically)
        // have been expanded better standardised.
      };
      const getRenderers = (props) => {
        const {
          onItemClick,
          closeMenu,
          openMenu,
          isBrowser
        } = props;
        const renderItem = (classPrefix, item, opts = {}) => {
          if (!item) {
            return;
          }
          const {
            key,
            Tag = "li",
            button
          } = opts;
          if (typeof item === "function") {
            item = {
              Content: item
            };
          }
          const itemProps = {
            key,
            className: modifiedClass(`${classPrefix}item`, item.modifier),
            "aria-current": item.current || void 0
          };
          if ("Content" in item && item.Content) {
            return o(Tag, {
              "data-customitem": "",
              ...itemProps,
              children: o(item.Content, {
                closeMenu,
                openMenu
              }, void 0, false, {
                fileName: _jsxFileName$1,
                lineNumber: 228,
                columnNumber: 11
              }, void 0)
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 227,
              columnNumber: 9
            }, void 0);
          }
          const linkClassName = `${classPrefix}link`;
          const {
            label,
            labelLong,
            href,
            target,
            lang,
            controlsId,
            onClick,
            descr,
            icon
          } = item;
          const _item = item;
          const itemDescr = descr && o(_$1, {
            children: [" ", o("small", {
              className: `${linkClassName}__descr`,
              children: descr
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 243,
              columnNumber: 9
            }, void 0)]
          }, void 0);
          const ButtonTag = button ? ButtonSecondary : "button";
          const LinkTag = button ? ButtonSecondary : Link;
          const commonProps = {
            className: linkClassName,
            "data-icon": icon ? iconMap[icon] : void 0,
            "arial-label": labelLong,
            title: labelLong,
            // For auto-tooltips on desktop
            lang
          };
          const buttonCompProps = button ? {
            size: "small"
          } : void 0;
          const doRenderButton = isBrowser && (onClick || onItemClick && href == null);
          return o(Tag, {
            className: modifiedClass(`${classPrefix}item`, item.modifier),
            "aria-current": item.current || void 0,
            children: doRenderButton ? o(ButtonTag, {
              ...commonProps,
              type: "button",
              "aria-controls": controlsId,
              onClick: () => {
                const keepOpen1 = onClick && onClick(_item) === false;
                const keepOpen2 = onItemClick && onItemClick(_item) === false;
                !(keepOpen1 || keepOpen2) && closeMenu();
              },
              ...buttonCompProps,
              children: [label, " ", itemDescr]
            }, void 0, true, {
              fileName: _jsxFileName$1,
              lineNumber: 272,
              columnNumber: 11
            }, void 0) : href != null ? o(LinkTag, {
              ...commonProps,
              href,
              hrefLang: item.hrefLang,
              target,
              onClick: () => {
                const keepOpen = onItemClick && onItemClick(_item) === false;
                !keepOpen && closeMenu();
              },
              ...buttonCompProps,
              children: [label, " ", itemDescr]
            }, void 0, true, {
              fileName: _jsxFileName$1,
              lineNumber: 286,
              columnNumber: 11
            }, void 0) : null
          }, key, false, {
            fileName: _jsxFileName$1,
            lineNumber: 266,
            columnNumber: 7
          }, void 0);
        };
        const renderList = (classSuffix, items, opts = {}) => {
          if (!items || !items.length) {
            return null;
          }
          return o("ul", {
            className: `${classSuffix}items`,
            ...opts.listProps,
            children: items.map((listItem, i) => listItem && renderItem(classSuffix, listItem, {
              key: i,
              button: opts.buttons
            }))
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 313,
            columnNumber: 7
          }, void 0);
        };
        return {
          renderList,
          renderItem
        };
      };
      const MainMenu2 = (props) => {
        var _a;
        const {
          homeLink = "/",
          items,
          onItemClick,
          illustration,
          imageUrl,
          variant,
          wrapperProps = {}
        } = props;
        const domid = useDomid(wrapperProps.id);
        const isBrowser = useIsBrowserSide(props.ssr);
        const [isMenuOpen, setIsMenuOpen] = t(h(false), "isMenuOpen");
        const _wrapperRef = t(_(null), "_wrapperRef");
        const wrapperRef = wrapperProps.ref || _wrapperRef;
        const escHandler = T(
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          (e) => e.key === "Escape" && closeMenu(),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          []
        );
        const openMenu = () => {
          htmlCl.add(globalClasses.menuIsOpen);
          htmlCl.remove(globalClasses.menuIsClosed);
          setIsMenuOpen(true);
          document.addEventListener("keydown", escHandler);
        };
        const closeMenu = () => {
          var _a2;
          htmlCl.remove(globalClasses.menuIsOpen);
          htmlCl.add(globalClasses.menuIsClosed);
          setIsMenuOpen(false);
          setActiveSubmenu(defaultActive);
          (_a2 = wrapperRef.current) == null ? void 0 : _a2.scrollTo(0, 0);
          document.removeEventListener("keydown", escHandler);
        };
        p(() => {
          if (!isBrowser) {
            return;
          }
          htmlCl.add(globalClasses.menuIsClosed);
          return () => {
            htmlCl.remove(globalClasses.menuIsClosed);
            closeMenu();
          };
        }, [isBrowser]);
        const {
          mainItems,
          defaultActive
        } = t(F(() => {
          if (!items.main || !items.main.length) {
            return {
              mainItems: void 0,
              defaultActive: -1
            };
          }
          const mainItems2 = items.main.map((item) => {
            var _a2;
            if (!("title" in item) || "current" in item) {
              return item;
            }
            const current = (_a2 = item.subItems.find((subItem) => !!(subItem && "current" in subItem && !!subItem.current))) == null ? void 0 : _a2.current;
            return {
              ...item,
              current
            };
          });
          let defaultActive2 = mainItems2.findIndex((item) => "current" in item && item.current);
          if (defaultActive2 < 0 && "subItems" in (mainItems2[0] || {})) {
            defaultActive2 = 0;
          }
          return {
            mainItems: mainItems2,
            defaultActive: defaultActive2
          };
        }, [items.main]), "mainItems");
        const [activeSubmenu, setActiveSubmenu] = t(h(defaultActive), "activeSubmenu");
        const lastDefaultActive = t(_(defaultActive), "lastDefaultActive");
        if (defaultActive !== lastDefaultActive.current) {
          lastDefaultActive.current = defaultActive;
          setActiveSubmenu(defaultActive);
        }
        const txt = getTexts(props, defaultMainMenu2Texts);
        const {
          renderItem,
          renderList
        } = getRenderers({
          onItemClick,
          closeMenu,
          openMenu,
          isBrowser
        });
        const homeLinkItem = {
          ...typeof homeLink === "string" ? {
            href: homeLink,
            label: txt.homeLink
          } : homeLink,
          modifier: "home"
        };
        const menuImageUrl = imageUrl || illustration && getIllustrationUrl(illustration);
        const menuId = `${domid}-menu`;
        return o("nav", {
          ...props.wrapperProps,
          className: modifiedClass("MainMenu2", [isBrowser && (isMenuOpen ? "open" : "closed"), variant && variant !== "default" ? `variant--${variant}` : void 0], wrapperProps.className),
          style: menuImageUrl ? {
            ...wrapperProps.style,
            "--menu-image": `url(${menuImageUrl})`
          } : wrapperProps.style,
          ref: wrapperRef,
          "aria-label": txt.title,
          "data-sprinkled": isBrowser,
          id: menuId,
          children: [isMenuOpen && o(FocusTrap, {
            atTop: true
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 512,
            columnNumber: 22
          }, void 0), o("div", {
            className: "MainMenu2__content",
            children: [o("h2", {
              className: "MainMenu2__title",
              children: txt.title
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 514,
              columnNumber: 9
            }, void 0), isBrowser ? o(ButtonPrimary, {
              className: "MainMenu2__toggler",
              size: "small",
              type: "button",
              "aria-pressed": isMenuOpen,
              "aria-controls": menuId,
              ...isMenuOpen ? {
                onClick: closeMenu,
                "aria-label": txt.closeMenuLong,
                title: txt.closeMenuLong,
                children: txt.closeMenu
              } : {
                onClick: openMenu,
                "aria-label": txt.openMenuLong,
                title: txt.openMenuLong,
                children: txt.openMenu
              }
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 516,
              columnNumber: 11
            }, void 0) : o(ButtonPrimary, {
              className: "MainMenu2__toggler",
              size: "small",
              href: `#${menuId}`,
              onClick: handleAnchorLinkClick,
              "aria-hidden": "true",
              children: txt.title
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 537,
              columnNumber: 11
            }, void 0), mainItems && o("div", {
              className: modifiedClass("MainMenu2__main", activeSubmenu < 0 && "noneActive"),
              children: [renderItem("MainMenu2__main__", homeLinkItem, {
                Tag: "div"
              }), mainItems.map((mainItem, i) => {
                if ("title" in mainItem) {
                  const submenuId = `${domid}-submenu-${i}`;
                  const isActive = i === activeSubmenu;
                  return o(_$1, {
                    children: [o("div", {
                      className: "MainMenu2__main__item",
                      "aria-current": mainItem.current || void 0,
                      children: isBrowser ? o("button", {
                        className: "MainMenu2__main__link",
                        type: "button",
                        onClick: () => setActiveSubmenu(i),
                        "aria-controls": submenuId,
                        "aria-pressed": isActive,
                        children: mainItem.title
                      }, void 0, false, {
                        fileName: _jsxFileName$1,
                        lineNumber: 568,
                        columnNumber: 25
                      }, void 0) : o("strong", {
                        className: "MainMenu2__main__link",
                        children: mainItem.title
                      }, void 0, false, {
                        fileName: _jsxFileName$1,
                        lineNumber: 578,
                        columnNumber: 25
                      }, void 0)
                    }, void 0, false, {
                      fileName: _jsxFileName$1,
                      lineNumber: 563,
                      columnNumber: 21
                    }, void 0), renderList("MainMenu2__main__sub__", mainItem.subItems, isBrowser && {
                      listProps: {
                        id: submenuId,
                        hidden: !isActive
                      }
                    })]
                  }, i, true, {
                    fileName: _jsxFileName$1,
                    lineNumber: 562,
                    columnNumber: 19
                  }, void 0);
                }
                return renderItem("MainMenu2__main__", mainItem, {
                  key: i,
                  Tag: "div"
                });
              })]
            }, void 0, true, {
              fileName: _jsxFileName$1,
              lineNumber: 549,
              columnNumber: 11
            }, void 0), renderList("MainMenu2__hot__", (_a = items.hot) == null ? void 0 : _a.map((i) => {
              if (i && "redhot" in i) {
                return {
                  ...i,
                  modifier: i.modifier ? [i.modifier, "redhot"] : "redhot"
                };
              }
              return i;
            }), {
              buttons: true
            }), renderList("MainMenu2__extra__", items.extra, {
              buttons: true
            }), items.related && items.related.length > 0 && o("div", {
              className: "MainMenu2__related",
              children: [items.relatedTitle && o("h3", {
                className: "MainMenu2__related__title",
                children: items.relatedTitle
              }, void 0, false, {
                fileName: _jsxFileName$1,
                lineNumber: 619,
                columnNumber: 15
              }, void 0), renderList("MainMenu2__related__", items.related)]
            }, void 0, true, {
              fileName: _jsxFileName$1,
              lineNumber: 617,
              columnNumber: 11
            }, void 0)]
          }, void 0, true, {
            fileName: _jsxFileName$1,
            lineNumber: 513,
            columnNumber: 7
          }, void 0), isMenuOpen && o(FocusTrap, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 625,
            columnNumber: 22
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 489,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/MainMenu2.tsx";
      const variants = {
        default: void 0,
        light: "light"
      };
      const parseTextDataAttr = (elm) => {
        try {
          const texts = JSON.parse(elm.dataset.propsTexts || "{}");
          if (typeof texts.title === "string" && typeof texts.openMenu === "string" && typeof texts.closeMenu === "string") {
            texts.openMenuLong = texts.openMenuLong || texts.openMenu;
            texts.closeMenuLong = texts.closeMenuLong || texts.closeMenu;
            texts.homeLink = texts.homeLink || "";
            return texts;
          }
        } catch (error) {
        }
        return;
      };
      const parseItem = (itemElm) => {
        var _a;
        if (!itemElm) {
          return;
        }
        const modifier = (_a = itemElm.className.match(/[a-zA-Z0-9]__item--(.+?)(?: |$)/g)) == null ? void 0 : _a.map((m) => m.slice(m.indexOf("--") + 2));
        const current = itemElm.getAttribute("aria-current") === "true";
        if (itemElm.hasAttribute("data-customitem")) {
          const nodes = itemElm.childNodes;
          nodes.forEach((node) => node.remove());
          return {
            modifier,
            current: itemElm.getAttribute("aria-current") === "true",
            Content: () => {
              const ref = t(_(null), "ref");
              p(() => {
                const spanElm = ref.current;
                if (!spanElm) {
                  return;
                }
                spanElm.parentNode.append(...nodes);
                spanElm.remove();
              }, []);
              return o("span", {
                ref
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 16
              }, globalThis);
            }
          };
        }
        const linkElm = q("a[href]", itemElm);
        if (!linkElm) {
          return;
        }
        const descrElm = q(".MainMenu2__main__sub__link__descr", itemElm);
        descrElm == null ? void 0 : descrElm.remove();
        const descr = descrElm == null ? void 0 : descrElm.textContent.trim();
        const isStringLabel = linkElm.getElementsByTagName("*").length === 0;
        const label = isStringLabel ? linkElm.textContent.trim() : o(InjectHTML, {
          html: linkElm.innerHTML
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 5
        }, globalThis);
        const href = linkElm.getAttribute("href");
        const target = linkElm.getAttribute("target") || void 0;
        const lang = linkElm.getAttribute("lang") || void 0;
        const hrefLang = linkElm.getAttribute("hreflang") || void 0;
        const labelLong = linkElm.getAttribute("aria-label") || linkElm.title || void 0;
        const icon = linkElm.dataset.icon;
        return {
          label,
          labelLong,
          href,
          target,
          lang,
          hrefLang,
          modifier,
          current,
          descr,
          icon
        };
      };
      const getPropsFromSSRMainMenu2 = (elm) => {
        var _a;
        const items = {
          main: qq(".MainMenu2__main__item:not(.MainMenu2__main__item--home)", elm).map((elm2) => {
            const subItemsElm = elm2.nextElementSibling;
            if (!(subItemsElm == null ? void 0 : subItemsElm.classList.contains("MainMenu2__main__sub__items"))) {
              return parseItem(elm2);
            }
            return {
              title: elm2.textContent.trim(),
              current: elm2.getAttribute("aria-current") === "true",
              subItems: qq(".MainMenu2__main__sub__item", subItemsElm).map(parseItem).filter(notNully)
            };
          }).filter(notNully),
          hot: qq(".MainMenu2__hot__item", elm).map(parseItem).filter(notNully),
          extra: qq(".MainMenu2__extra__item", elm).map(parseItem).filter(notNully),
          relatedTitle: (_a = q(".MainMenu2__related__title", elm)) == null ? void 0 : _a.textContent.trim(),
          related: qq(".MainMenu2__related__item", elm).map(parseItem).filter(notNully)
        };
        let homeLink = parseItem(q(".MainMenu2__main__item--home", elm));
        if (typeof homeLink === "function" || homeLink && "Content" in homeLink) {
          homeLink = void 0;
        }
        if (homeLink) {
          delete homeLink.modifier;
          delete homeLink.controlsId;
          delete homeLink.descr;
        }
        const imageUrl = elm.style.getPropertyValue("--menu-image").trim().replace(/^url\((.+)\)$/, "$1");
        const variantMatch = elm.className.match(/(?:^|\s)MainMenu2--variant--([^\s]+)/) || [];
        const variant = variants[variantMatch[1] || ""];
        const texts = parseTextDataAttr(elm);
        return {
          items,
          homeLink,
          imageUrl,
          texts,
          variant
        };
      };
      window.Hanna.makeSprinkle({
        name: "MainMenu2",
        init: (elm) => {
          const props = getPropsFromSSRMainMenu2(elm);
          const root = elm;
          elm.getAttributeNames().forEach((attrName) => {
            elm.removeAttribute(attrName);
          });
          Cn.render(o(MainMenu2, {
            ...props,
            ssr: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
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
