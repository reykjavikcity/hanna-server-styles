import "./getSVGtext-b918ded2.js";
import { O as ObjectKeys } from "./ObjectHelpers-c82b0e19.js";
import "./i18n-a7278b6d.js";
import { s as styleServerUrl } from "./assets-a74434cf.js";
const IS_PRINTER = Symbol();
const DEFAULT_NAME_RE = /^[a-z0-9_-]+$/i;
const DEFAULT_NAME_MAPPER = (name) => name;
const makeVariablePrinter = (name) => {
  const cssName = `--${name}`;
  const varString = `var(${cssName})`;
  const toString = () => varString;
  return {
    cssName,
    or: (defaultValue) => defaultValue ? varString.replace(/\)$/, `, ${defaultValue})`) : varString,
    [IS_PRINTER]: true,
    toString,
    toJSON: toString,
    getName: toString
  };
};
const makeDeclarations = (vars, allowed) => {
  return Object.entries(vars).map(([key, value]) => {
    const printer = allowed[key];
    if (!printer || value == null || value === false) {
      return "";
    }
    return `${printer.cssName}: ${String(value).trim()};
`;
  }).join("");
};
const assertValidNameRe = (nameRe) => {
  if (nameRe && !/^\/\^.+\$\/[igm]*$/.test(String(nameRe))) {
    throw new Error("Custom variable name RegExp must check the whole name (i.e. start with a `^` and end with a `$`)");
  }
};
const assertValidName = (name, nameRe = DEFAULT_NAME_RE) => {
  if (!name || !nameRe.test(name)) {
    throw new Error(`Only CSS variable names matching ${nameRe} are allowed.
Disallowed name: ${name}`);
  }
};
const makeVariables = /* @__NO_SIDE_EFFECTS__ */ (variableTokens, options = {}) => {
  assertValidNameRe(options.nameRe);
  const { nameRe, toCSSName = DEFAULT_NAME_MAPPER } = options;
  const namespace = (options.namespace || "").replace(/[\s{};@():[\]]/g, "");
  const vars = Object.fromEntries(variableTokens.map((name) => {
    assertValidName(name, nameRe);
    return [name, makeVariablePrinter(namespace + toCSSName(name))];
  }));
  return {
    vars,
    declare: (declarations) => makeDeclarations(declarations, vars),
    override: (overrides) => makeDeclarations(overrides, vars)
  };
};
makeVariables.isVar = (value) => typeof value === "function" && IS_PRINTER in value;
makeVariables.join = (...varDatas) => {
  const vars = Object.assign({}, ...varDatas.map((d) => d.vars));
  return {
    vars,
    declare: (declarations) => makeDeclarations(declarations, vars),
    override: (overrides) => makeDeclarations(overrides, vars)
  };
};
const majorCssVersion = "0.8";
const targetCssVersion = majorCssVersion;
const variableOptions = {
  nameRe: /^[a-z0-9$_-]+$/i,
  // .Tabs$$tab__borderWidth  -->  var(--Tabs__tab--borderWidth)
  toCSSName: (name) => name.replace(/_/g, "-").replace(/\$/g, "_"),
  // NOTE: Set the namespace to 'hanna--' before next MAJOR release
  // namespace: 'hanna--',
  namespace: ""
};
const buildVariables = /* @__NO_SIDE_EFFECTS__ */ (input, namespace) => {
  let options = variableOptions;
  if (namespace) {
    namespace = namespace.trim().replace(/-+$/, "").replace(/_+$/, "__");
    if (!/_$/.test(namespace)) {
      namespace += "--";
    }
    options = {
      ...options,
      namespace: variableOptions.namespace + namespace
    };
  }
  return /* @__PURE__ */ makeVariables(input, options);
};
const {
  isVar,
  join
} = makeVariables;
buildVariables.isVar = isVar;
buildVariables.join = join;
const cssCurrentVersionFolder = styleServerUrl.indexOf("://localhost") === -1 ? `dev-v${targetCssVersion}` : "dev";
const getCssBundleUrl = /* @__NO_SIDE_EFFECTS__ */ (cssTokens, options) => {
  options = options || {};
  const host = (options.testingServer || styleServerUrl).replace(/\/$/, "");
  const versionFolder = options.version || cssCurrentVersionFolder;
  const tokens = typeof cssTokens === "string" ? cssTokens : cssTokens.join(",");
  return `${host}/bundle/${versionFolder}?m=${tokens.replace(/\s/g, "")}`;
};
const iconfonttokens = {
  "icon__alert": "",
  "icon__arrow_left_long": "",
  "icon__arrow_left": "",
  "icon__arrow_right": "",
  "icon__arrow_up_long": "",
  "icon__calendar": "",
  "icon__chat": "",
  "icon__checkmark": "",
  "icon__chevron_down": "",
  "icon__chevron_left": "",
  "icon__chevron_right": "",
  "icon__chevron_soft_right": "",
  "icon__chevron_up": "",
  "icon__close_thin": "",
  "icon__close": "",
  "icon__dash": "",
  "icon__data": "",
  "icon__document": "",
  "icon__edit": "",
  "icon__error": "",
  "icon__external": "",
  "icon__facebook": "",
  "icon__fatchevron_up": "",
  "icon__file_pdf": "",
  "icon__home": "",
  "icon__info": "",
  "icon__link": "",
  "icon__location": "",
  "icon__menu": "",
  "icon__pen": "",
  "icon__radioball": "",
  "icon__search": "",
  "icon__text": "",
  "icon__time": "",
  "icon__twitter": "",
  "icon__user": "",
  "icon__warning": ""
};
/* @__PURE__ */ buildVariables([.../* @__PURE__ */ ObjectKeys(iconfonttokens), "icon_size__small", "icon_size__normal", "icon_size__large"]);
export {
  getCssBundleUrl as g
};
