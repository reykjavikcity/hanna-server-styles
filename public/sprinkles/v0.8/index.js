"use strict";
(() => {
  // src/index.js
  ((c, n) => {
    c.add(n);
    setTimeout(() => c.remove(n), 6e3);
  })(document.documentElement.classList, "before-sprinkling");
  !window.Hanna && (() => {
    let path = "";
    let import_;
    const fallbackSprinklesUrl = new URL("/dist/", document.location.href);
    const scriptElm = document.currentScript;
    if (scriptElm) {
      let src = scriptElm.src;
      src = src ? `${src.split("?")[0].replace(/\/(?:index\.js)$/, "")}/` : fallbackSprinklesUrl;
      path = new URL(".", src).href;
    }
    try {
      import_ = new Function("url", "return import(url)");
      import_("").catch(() => void 0);
      path = `${path || "./"}esm/`;
    } catch (e) {
      path = `${path || fallbackSprinklesUrl}systemjs/`;
      const sjs = new Promise((resolve) => {
        const s = document.createElement("script");
        s.onload = s.onerror = resolve;
        s.src = "https://unpkg.com/systemjs@6/dist/s.min.js";
        document.head.append(s);
      });
      import_ = (url) => sjs.then(() => window.System.import(url));
    }
    const Hanna = window.Hanna = {
      version: "0.8.61",
      sprinkles: {},
      refresh: () => Object.values(Hanna.sprinkles).forEach((sprinkle) => sprinkle()),
      import: (...args) => Promise.all(
        args.map(
          (module) => import_(
            /^(?:\.|\/|https?:\/\/)/.test(module) ? module : path + module + (/\.js(?:$|\?)/.test(module) ? "" : ".js")
          )
        )
      )
    };
    Hanna.loadSprinkles = Hanna.import;
  })();
})();
