System.register(["../_chunks/initHannaNamespace-87f099a9.js","../_chunks/compat.module-f329784f.js","../_chunks/qj-d717b116.js","../_chunks/_AbstractCarousel-a868ed14.js","../_chunks/jsxRuntime.module-6df2baee.js","../_chunks/addSeenEffect-00c08965.js","../_chunks/i18n-6c3e4ded.js","../_chunks/getLang-b0f6fe19.js","../_chunks/getSVGtext-1c46d1d7.js","../_chunks/misc-c537bf75.js","../_chunks/_useMobileMenuToggling-0b192f4e.js"],function(_,f){"use strict";var t,r,o,u,i,a;return{setters:[null,e=>{t=e.C},e=>{r=e.q},e=>{o=e.A},e=>{u=e.o},e=>{i=e.a,a=e.b},null,null,null,null,null],execute:function(){const e=n=>u(o,{...n,bem:void 0,modifier:void 0,title:void 0}),l=n=>{const s=r(".Carousel__itemlist",n);if(s)return{childrenHTML:s.innerHTML}};window.Hanna.makeSprinkle({name:"Carousel",init:n=>{const s=l(n);if(!s)return;const c=n;return n.getAttributeNames().forEach(m=>{n.removeAttribute(m)}),t.render(u(e,{...s,ssr:!1,wrapperProps:i(n)}),c,()=>a()),c},unmount:(n,s)=>{s&&t.unmountComponentAtNode(s)}})}}});