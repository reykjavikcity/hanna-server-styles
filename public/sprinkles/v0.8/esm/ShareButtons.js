import "../_chunks/initHannaNamespace-f4f98843.js";
import { E } from "../_chunks/qj-1c8d4095.js";
import { O as ObjectKeys } from "../_chunks/ObjectHelpers-c82b0e19.js";
import { D as DEFAULT_LANG } from "../_chunks/i18n-a7278b6d.js";
import "../_chunks/getLang-8d69057b.js";
const shareButtonPlatforms = {
  facebook: "Facebook",
  twitter: "Twitter",
  linkedin: "LinkedIn",
  email: "E-mail"
};
const shareButtonTypes = /* @__PURE__ */ ObjectKeys(shareButtonPlatforms);
let _lastLabel;
let _lastValue = ["", ""];
const _token = "${name}";
const getShareButtonLabel = /* @__NO_SIDE_EFFECTS__ */ (type, label) => {
  if (label !== _lastLabel) {
    _lastLabel = label;
    if (!label.includes(_token)) {
      label = `${label} ${_token}`;
    }
    label = label.trim();
    const tokenIdx = label.indexOf(_token);
    _lastValue = [label.slice(0, tokenIdx), label.slice(tokenIdx + _token.length)];
  }
  return _lastValue[0] + shareButtonPlatforms[type] + _lastValue[1];
};
function getElm(selector) {
  return document.querySelector(selector) || {};
}
const getAttr = (selector, prop) => {
  const elm = document.querySelector(selector);
  return elm && elm.getAttribute(prop);
};
const shareButtonTexts = {
  is: {
    label: "Deila síðu á",
    // buttonLabel: '',
    emailSubject: "Kíktu á þetta!"
  },
  en: {
    label: "Share this page via",
    // buttonLabel: '',
    emailSubject: "Check this out!"
  },
  pl: {
    label: "Udostępnij tę stronę przez",
    // buttonLabel: '',
    emailSubject: "Spójrz na to!"
  }
};
const makeUrl = (baseUrl, paramsObj) => {
  const url = new URL(baseUrl);
  Object.entries(paramsObj).forEach(([key, value]) => {
    if (value !== void 0) {
      url.searchParams.append(key, value);
    }
  });
  return url.toString();
};
const getDocMeta = /* @__NO_SIDE_EFFECTS__ */ (cfg = {}) => {
  const url = getElm('link[rel="canonical"]').href || document.location.href.split("#")[0].replace(/[?&]fb_action_ids=.+/, "");
  const title = getAttr('meta[property="og:title"]', "content") || getElm("h1").textContent || document.title;
  const description = getAttr('meta[property="og:description"]', "content") || getAttr('meta[name="description"]', "content") || "";
  const lang = cfg.lang || document.documentElement.lang.slice(0, 2).toLowerCase() || "";
  return {
    hrefs: {
      facebook: makeUrl("https://www.facebook.com/sharer.php", {
        u: url
      }),
      twitter: makeUrl("https://twitter.com/intent/tweet", {
        url,
        text: title
      }),
      linkedin: makeUrl("https://www.linkedin.com/shareArticle?mini=true", {
        url,
        title,
        summary: description
      }),
      email: makeUrl("mailto:", {
        subject: cfg.emailSubject || (shareButtonTexts[lang] || shareButtonTexts[DEFAULT_LANG]).emailSubject,
        body: `${title}
${url}

`
      })
    },
    url,
    title,
    description,
    lang
  };
};
const openInPopup = (e) => {
  if (e.target instanceof HTMLAnchorElement) {
    e.preventDefault();
    window.open(e.target.href, void 0, "toolbar=0,status=0,width=626,height=436 ");
  }
};
const getPlatforms = (buttonTypes) => {
  const typeList = (buttonTypes || "").trim().toLowerCase().split(/\s*,\s*/).filter((token) => token);
  const platforms = shareButtonTypes.filter((type) => typeList.includes(type));
  return platforms.length ? platforms : ["facebook", "twitter"];
};
const makeShareButton = (type, href, label) => {
  const buttonText = /* @__PURE__ */ getShareButtonLabel(type, label);
  const popup = type !== "email";
  return E("li", {
    className: "ShareButtons__item"
  }, E("a", {
    className: `ShareButtons__link ShareButtons__link--${type}`,
    href,
    title: buttonText,
    rel: "noopener noreferrer",
    target: popup ? "_blank" : void 0,
    onClick: popup ? openInPopup : void 0
  }, buttonText));
};
window.Hanna.makeSprinkle({
  name: "ShareButtons",
  init: (elm) => {
    const elmData = elm.dataset;
    const emailSubject = elmData.emailsubject;
    const platforms = getPlatforms(elmData.buttonTypes);
    const docMeta = /* @__PURE__ */ getDocMeta({
      emailSubject
    });
    let label = elm.getAttribute("aria-label") || void 0;
    let buttonLabel = elmData.buttonlabel;
    if (label == null && buttonLabel == null && !emailSubject) {
      const txt = shareButtonTexts[docMeta.lang];
      if (txt) {
        label = txt.label;
        buttonLabel = txt.buttonLabel;
      }
    }
    elm.textContent = "";
    if (label) {
      elm.append(E("strong", {
        className: "ShareButtons__label"
      }, label));
    }
    const shareButtons = platforms.map((type) => makeShareButton(type, docMeta.hrefs[type], buttonLabel || ""));
    elm.append(E("ul", {
      className: "ShareButtons__list"
    }, shareButtons));
    delete elmData.buttonTypes;
    delete elmData.buttonlabel;
    delete elmData.emailsubject;
  }
});
