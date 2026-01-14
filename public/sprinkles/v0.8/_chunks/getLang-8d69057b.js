import { D as DEFAULT_LANG } from "./i18n-a7278b6d.js";
const langs = {
  is: "is",
  en: "en",
  pl: "pl"
};
const getLang = (elm) => {
  let elmLang = ((elm == null ? void 0 : elm.closest("[lang]")) || document.documentElement).lang;
  elmLang = elmLang.slice(0, 2).toLowerCase();
  return langs[elmLang] || DEFAULT_LANG;
};
export {
  getLang as g
};
