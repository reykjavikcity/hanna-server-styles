import{_ as B,h as C,p as v,T as F}from"./compat.module-6d0944a1.js";import{m as H}from"./qj-b9335549.js";import{g as P}from"./i18n-45294c51.js";import{B as k}from"./_Button-3fca7562.js";import{i as w}from"./env-dad6c8ea.js";import{u as x,o as d}from"./jsxRuntime.module-98db1a52.js";import"./_useMobileMenuToggling-5fde4833.js";import"./getSVGtext-bab5132d.js";const E=400,N=(a,i)=>{const[u,c]=C(0);if(!a)return{autoClosing:!1};const r=o=>{c(n=>n+1);const s=i[o.type.startsWith("blur")?"onBlur":"onMouseLeave"];s&&s(o)},e=o=>{c(n=>n-1);const s=i[o.type.startsWith("focus")?"onFocus":"onMouseEnter"];s&&s(o)};return{autoClosing:u===0,autoClosingProps:{onMouseEnter:e,onMouseLeave:r,onFocus:e,onBlur:r,...w&&{onfocusin:o=>o.currentTarget!==o.target&&e(o),onfocusout:o=>o.currentTarget!==o.target&&r(o)}}}},M={en:{closeLabel:"Hide"},is:{closeLabel:"Fela"},pl:{closeLabel:"Ukryj"}},I={info:1,success:1,warning:1,error:1,critical:1},U=a=>{const{type:i,childrenHTML:u,children:c,onClose:r,closeUrl:e,closable:o=!!(r||e!=null),ssr:s,onClosed:n,wrapperProps:f}=a,m=Math.max(a.autoClose||0,0),l=B(),g=x(s),[y,b]=C(!g),_=o&&(g||e!=null),{closeLabel:h,closeLabelLong:L}=P(a,M);v(()=>{b(!0)},[]);const p=F(t=>{(r&&r(t))!==!1&&(b(!1),l.current&&(clearTimeout(l.current),l.current=void 0),l.current=setTimeout(()=>{n&&n()},E))},[r,n]),{autoClosing:T,autoClosingProps:A}=N(m,a);return v(()=>{if(T){let t;return t=setTimeout(()=>{p()},m*1e3),()=>{t&&(clearTimeout(t),t=void 0),l.current&&(clearTimeout(l.current),l.current=void 0)}}},[p,T,m]),d("div",{...f,className:H("Alert",[!!I[i]&&i,o&&"closable"],(f||{}).className),role:"alert",hidden:!y||void 0,...A,children:[u?d("div",{dangerouslySetInnerHTML:{__html:u}}):c," ",_&&d(k,{bem:"Alert__close",...e!=null?{href:e}:{type:"button"},onClick:t=>{p(t)},"aria-label":L,title:L||h,children:h})]})};export{U as A,M as d};