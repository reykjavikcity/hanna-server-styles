import"./initHannaNamespace.js";import{h as M,a as m,q as g,E as d,c as p}from"../_chunks/qj-afc7b5d6.js";import"../_chunks/compat.module-8a0f8b99.js";import"../_chunks/useFormatMonitor-9c639f1c.js";import{g as T,a as _,b as L}from"../_chunks/utils-96e946f5.js";import"../_chunks/focus-visible-d727a811.js";const P={is:{lang:"is",homeLabel:"Fors\xED\xF0a",backToMenu:"Loka",backToMenuLong:"Til baka \xED valmynd"},en:{lang:"en",homeLabel:"Home page",backToMenu:"Close",backToMenuLong:"Close and return to menu"},pl:{lang:"pl",homeLabel:"Strona g\u0142\xF3wna",backToMenu:"Zamknij",backToMenuLong:"Zamknij i wr\xF3\u0107 do menu"}},b=T();let k;const E=({panelElm:n,titleButton:e,menuButton:a},o)=>{const i=()=>{n.classList.remove("PrimaryPanel--active"),e&&e.removeAttribute("aria-pressed")};o?i():k=setTimeout(i,1e3),a&&a.removeAttribute("aria-pressed")},B=({panelElm:n,titleButton:e,menuButton:a})=>{clearTimeout(k),n.classList.add("PrimaryPanel--active"),e&&e.setAttribute("aria-pressed","true"),a&&a.setAttribute("aria-pressed","true")},f=({escHandler:n,clickHandler:e})=>{document.addEventListener("keydown",n),document.addEventListener("click",e,!0)},v=({escHandler:n,clickHandler:e})=>{document.removeEventListener("keydown",n),document.removeEventListener("click",e,!0)},y=n=>function(e,a=!0){const{activePanel:o,backToMenuButton:i,container:r}=n;delete r.dataset.pristine,e===o&&(e=void 0);const l=document.documentElement.dataset,t=L();e?(n.container.classList.add("MainMenu__panelsWrap--active"),e.panelElm.append(i),o||(f(n),l.scrollTop=String(t.scrollTop),t.scrollTop=0,l.megaPanelActive="")):(i.remove(),n.container.classList.remove("MainMenu__panelsWrap--active"),v(n),t.scrollTop=parseInt(l.scrollTop||"")||0,delete l.scrollTop,delete l.megaPanelActive),o&&(E(o,!!e),n.activePanel=void 0),e&&(B(e),n.activePanel=e),a&&setTimeout(()=>{e?p(e.panelElm):o&&p(o.menuButton)},100)};window.Hanna.makeSprinkle({name:"MainMenu",init:n=>{const e=_({lang:M(n)},P),a=m(".MainMenu__panelsWrap",n);if(!a)return;a.dataset.pristine="true",g(".PrimaryPanel",a).forEach(t=>{const u=m(".PrimaryPanel__title",t);if(!u)return;const c=t.id&&m('a.MainMenu__link[href$="#'+t.id+'"]',n)||void 0,s={panelElm:t,titleButton:t.id?d("button",{className:"MainMenu__mega__title-toggler",onClick:()=>i(s,!1),"aria-controls":t.id},u.textContent):void 0,menuButton:c&&d("button",{className:"MainMenu__link",onClick:()=>i(s),"aria-controls":t.id,"aria-label":c.getAttribute("aria-label")},c.textContent)};s.titleButton&&(u.textContent="",u.append(s.titleButton)),c&&s.menuButton&&c.replaceWith(s.menuButton)});const o={container:a,activePanel:void 0,backToMenuButton:d("button",{className:"MainMenu__megapanel__backtomenu",onClick:()=>r(),"aria-label":e.backToMenuLong,lang:e.lang},e.backToMenu),escHandler:t=>{t.key==="Escape"&&r()},clickHandler(t){n.contains(t.target)||r()}},i=y(o),r=()=>i(void 0),l=t=>{t.leftTopmenu&&r()};return b.subscribe(l),()=>{b.unsubscribe(l),v(o)}},unmount:(n,e)=>{e&&e()}});