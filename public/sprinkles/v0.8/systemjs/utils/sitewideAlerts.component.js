System.register(["../../_chunks/compat.module-919773fc.js", "../../_chunks/qj-0ce4c6bc.js", "../../_chunks/Alert-349b2825.js", "../../_chunks/jsxRuntime.module-791778ad.js", "../../_chunks/getSVGtext-2c45db0c.js", "../../_chunks/i18n-5b23de04.js", "../../_chunks/_Button-14554c59.js", "../../_chunks/_Link-8229a97c.js", "../../_chunks/env-c53cf972.js", "../../_chunks/_useMobileMenuToggling-b1fb85e8.js"], function(exports, module) {
  "use strict";
  var t, h, p, _, SECOND_1, MINUTE_1, DAY_1, Alert, o;
  return {
    setters: [(module2) => {
      t = module2.t;
      h = module2.h;
      p = module2.p;
      _ = module2.a;
    }, (module2) => {
      SECOND_1 = module2.S;
      MINUTE_1 = module2.M;
      DAY_1 = module2.D;
    }, (module2) => {
      Alert = module2.A;
    }, (module2) => {
      o = module2.o;
    }, null, null, null, null, null, null],
    execute: function() {
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/utils/sitewideAlerts.component.tsx";
      const DISMISSAL_KEY_PREFIX = "alert-dismissed-";
      const MAX_AGE = 14 * DAY_1;
      const gcDismissed = () => {
        if (Math.random() > 0.1) {
          return;
        }
        const expirySec = Math.floor((Date.now() - MAX_AGE) / SECOND_1);
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith(DISMISSAL_KEY_PREFIX) && Number(localStorage.getItem(key)) < expirySec) {
            localStorage.removeItem(key);
          }
        }
      };
      const shouldShowOnThisPage = (currentPath, baseUrl) => (alert) => {
        const pages = alert.showOnPages || [];
        if (pages.length === 0) {
          return true;
        }
        const negate = alert.negateShowOnPages ?? true;
        let pagePathMatches = false;
        for (let i = 0; i < pages.length; i++) {
          const page = baseUrl.replace(/\/$/, "") + pages[i];
          if (page.charAt(page.length - 1) === "*") {
            if (currentPath.startsWith(page.substring(0, page.length - 1))) {
              pagePathMatches = true;
              break;
            }
          } else if (page === currentPath) {
            pagePathMatches = true;
            break;
          }
        }
        return negate ? !pagePathMatches : pagePathMatches;
      };
      const isNotDismissed = (alert) => {
        const isDismissed = alert.dismissible && (Number(localStorage.getItem(DISMISSAL_KEY_PREFIX + alert.uuid)) || -1) >= (alert.dismissalIgnoreBefore || 0);
        return !isDismissed;
      };
      const fetchAlerts = (alertsUri, currentPath, baseUrl) => fetch(alertsUri).then((res) => res.json()).then((res) => {
        const newAlerts = res.sitewideAlerts;
        const nowSec = Math.ceil(Date.now() / SECOND_1);
        newAlerts.forEach((alert) => {
          if (!alert.dismissible) {
            delete alert.dismissalIgnoreBefore;
          } else if ((alert.dismissalIgnoreBefore || 0) > nowSec) {
            alert.dismissible = false;
          }
        });
        return newAlerts.filter(isNotDismissed).filter(shouldShowOnThisPage(currentPath, baseUrl));
      }).catch((e) => {
        console.error("Site wide alerts failed loading", e);
        return [];
      });
      const updatedismissibleState = (alerts) => {
        const nowSec = Math.ceil(Date.now() / SECOND_1);
        let changed = false;
        const newAlerts = alerts.map((alert) => {
          if (alert.dismissible || alert.dismissalIgnoreBefore || 0 > nowSec) {
            return alert;
          }
          changed = true;
          return {
            ...alert,
            dismissible: true
          };
        });
        return changed ? newAlerts : alerts;
      };
      const getNextUpdateDismissalTime = (alerts) => {
        const nowSec = Math.floor(Date.now() / SECOND_1);
        const nextRefreshTime = alerts.filter((alert) => (alert.dismissalIgnoreBefore || -1) > nowSec).reduce((time, {
          dismissalIgnoreBefore = 0
        }) => time ? Math.min(time, dismissalIgnoreBefore) : dismissalIgnoreBefore, 0);
        const diffSec = nextRefreshTime - nowSec;
        return diffSec > 0 ? diffSec : null;
      };
      const sitewideAlertTypes = {
        "alert-warning": "critical",
        "alert-attention": "warning",
        "alert-success": "success",
        "alert-info": "info"
      };
      const minRefreshInterval = 10 * SECOND_1;
      const defaultRefreshInterval = 2 * MINUTE_1;
      const SiteWideAlerts = exports("SiteWideAlerts", (props) => {
        const {
          alertsUri,
          baseUrl = "/",
          lang
        } = props;
        const refreshInterval = Math.max(props.refreshInterval || defaultRefreshInterval, minRefreshInterval);
        const [alerts, setAlerts] = t(h([]), "alerts");
        p(gcDismissed, []);
        const currentPath = typeof window !== "undefined" && window.location.pathname;
        p(() => {
          const _fetchAlerts = () => {
            fetchAlerts(
              alertsUri,
              currentPath,
              // currentPath is always defined when useEffect runs
              baseUrl
            ).then((newAlerts) => {
              setAlerts((alerts2) => {
                const changed = alerts2.length !== newAlerts.length || JSON.stringify(alerts2) !== JSON.stringify(newAlerts);
                return changed ? newAlerts : alerts2;
              });
            });
          };
          _fetchAlerts();
          const nextFetch = setInterval(_fetchAlerts, refreshInterval);
          return () => {
            clearInterval(nextFetch);
          };
        }, [currentPath, alertsUri, baseUrl, refreshInterval]);
        p(() => {
          const nextRefreshTime = getNextUpdateDismissalTime(alerts) || 0;
          if (nextRefreshTime > 0) {
            const nextRefresh = setTimeout(() => {
              setAlerts(updatedismissibleState);
            }, (nextRefreshTime + 2) * SECOND_1);
            return () => {
              clearTimeout(nextRefresh);
            };
          }
        }, [alerts]);
        const dismissAlert = ({
          uuid
        }) => {
          window.localStorage.setItem(DISMISSAL_KEY_PREFIX + uuid, String(Math.round(Date.now() / SECOND_1)));
          setTimeout(() => {
            setAlerts((alerts2) => {
              const newAlerts = alerts2.filter((alert) => alert.uuid !== uuid);
              return newAlerts.length < alerts2.length ? newAlerts : alerts2;
            });
          }, 2e3);
        };
        return o(_, {
          children: alerts.map((alert) => {
            const type = sitewideAlertTypes[alert.styleClass] || "info";
            return o(Alert, {
              type,
              childrenHTML: alert.renderedAlert,
              onClose: alert.dismissible ? () => dismissAlert(alert) : void 0,
              lang
            }, alert.uuid, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 11
            }, void 0);
          })
        }, void 0);
      });
    }
  };
});
