import"../_chunks/initHannaNamespace-21359965.js";import{E as r}from"../_chunks/qj-0db0624e.js";import{D as k}from"../_chunks/i18n-45294c51.js";import"../_chunks/getLang-c224bf02.js";const S=e=>Object.keys(e),d={facebook:"Facebook",twitter:"Twitter",linkedin:"LinkedIn",email:"E-mail"},g=S(d);let h,m=["",""];const s="${name}",j=(e,t)=>{if(t!==h){h=t,t.includes(s)||(t=`${t} ${s}`),t=t.trim();const n=t.indexOf(s);m=[t.slice(0,n),t.slice(n+s.length)]}return m[0]+d[e]+m[1]};function f(e){return document.querySelector(e)||{}}const p=(e,t)=>{const n=document.querySelector(e);return n&&n.getAttribute(t)},b={is:{label:"Deila s\xED\xF0u \xE1",emailSubject:"K\xEDktu \xE1 \xFEetta!"},en:{label:"Share this page via",emailSubject:"Check this out!"},pl:{label:"Udost\u0119pnij t\u0119 stron\u0119 przez",emailSubject:"Sp\xF3jrz na to!"}},c=(e,t)=>{const n=new URL(e);return Object.entries(t).forEach(([o,a])=>{a!==void 0&&n.searchParams.append(o,a)}),n.toString()},_=(e={})=>{const t=f('link[rel="canonical"]').href||document.location.href.split("#")[0].replace(/[?&]fb_action_ids=.+/,""),n=p('meta[property="og:title"]',"content")||f("h1").textContent||document.title,o=p('meta[property="og:description"]',"content")||p('meta[name="description"]',"content")||"",a=e.lang||document.documentElement.lang.slice(0,2).toLowerCase()||"";return{hrefs:{facebook:c("https://www.facebook.com/sharer.php",{u:t}),twitter:c("https://twitter.com/intent/tweet",{url:t,text:n}),linkedin:c("https://www.linkedin.com/shareArticle?mini=true",{url:t,title:n,summary:o}),email:c("mailto:",{subject:e.emailSubject||(b[a]||b[k]).emailSubject,body:`${n}
${t}

`})},url:t,title:n,description:o,lang:a}},y=e=>{e.target instanceof HTMLAnchorElement&&(e.preventDefault(),window.open(e.target.href,void 0,"toolbar=0,status=0,width=626,height=436 "))},v=e=>{const t=(e||"").trim().toLowerCase().split(/\s*,\s*/).filter(o=>o),n=g.filter(o=>t.includes(o));return n.length?n:["facebook","twitter"]},B=(e,t,n)=>{const o=j(e,n),a=e!=="email";return r("li",{className:"ShareButtons__item"},r("a",{className:`ShareButtons__link ShareButtons__link--${e}`,href:t,title:o,rel:"noopener noreferrer",target:a?"_blank":void 0,onClick:a?y:void 0},o))};window.Hanna.makeSprinkle({name:"ShareButtons",init:e=>{const t=e.dataset,n=t.emailsubject,o=v(t.buttonTypes),a=_({emailSubject:n});let l=e.getAttribute("aria-label")||void 0,u=t.buttonlabel;if(l==null&&u==null&&!n){const i=b[a.lang];i&&(l=i.label,u=i.buttonLabel)}e.textContent="",l&&e.append(r("strong",{className:"ShareButtons__label"},l));const w=o.map(i=>B(i,a.hrefs[i],u||""));e.append(r("ul",{className:"ShareButtons__list"},w)),delete t.buttonTypes,delete t.buttonlabel,delete t.emailsubject}});
