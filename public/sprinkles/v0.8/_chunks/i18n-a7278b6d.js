const _BASE_DEFAULT_LANG = "is";
const _BASE_FALLBACK_LANG = "en";
const langs = /* @__PURE__ */ new Set(["is", "en", "pl"]);
let DEFAULT_LANG = _BASE_DEFAULT_LANG;
const _history = [];
const setDefaultLanguage = (newLang) => {
  if (newLang === DEFAULT_LANG) {
    return;
  }
  DEFAULT_LANG = !newLang ? _BASE_DEFAULT_LANG : langs.has(newLang) ? newLang : _BASE_FALLBACK_LANG;
  _history[0] = DEFAULT_LANG;
};
setDefaultLanguage.push = (newLang) => {
  _history.unshift(DEFAULT_LANG);
  setDefaultLanguage(newLang);
};
setDefaultLanguage.pop = () => {
  _history.shift();
  DEFAULT_LANG = _history[0] || _BASE_DEFAULT_LANG;
};
const langMissing = /* @__NO_SIDE_EFFECTS__ */ (lang, defaultTexts) => {
  return defaultTexts;
};
const getTexts = /* @__NO_SIDE_EFFECTS__ */ (props, defaultTexts) => {
  const lang = props.lang || DEFAULT_LANG;
  return props.texts || defaultTexts[lang] || /* @__PURE__ */ langMissing(lang, defaultTexts[DEFAULT_LANG]);
};
export {
  DEFAULT_LANG as D,
  getTexts as g,
  setDefaultLanguage as s
};
