System.register(["./compat.module-f329784f.js","./qj-d717b116.js","./jsxRuntime.module-6df2baee.js","./_useMobileMenuToggling-0b192f4e.js","./getSVGtext-1c46d1d7.js","./i18n-6c3e4ded.js"],function(K,R){"use strict";var F,C,S,k,i;return{setters:[a=>{F=a.h},a=>{C=a.m,S=a.f},a=>{k=a.u,i=a.o},null,null,null],execute:function(){const a={ArrowUp:-1,ArrowLeft:-1,ArrowDown:1,ArrowRight:1},L=(b,e,u)=>{const{label:j,badge:T,href:d,type:o,longLabel:m}=b,{activeIdx:v,activateTab:y,focusedIdx:h,setFocusedIdx:w,tabRole:r,listAriaControls:l,isBrowser:n}=u,A=n&&(I=>{I.preventDefault(),y(e),I.currentTarget.focus()}),p=n&&(()=>w(e)),f=v===e||void 0,g=d&&!r?"a":"button",x=g==="button"?{role:r,type:o||"button",tabIndex:r?h===e?0:-1:void 0,"aria-controls":b["aria-controls"]||r&&S.getFrag(d)||l}:{href:d};return[i(g,{className:"Tabs__tab","data-active":f,...x,onClick:A,onFocus:p,"aria-label":m,title:m,children:[j," ",T!=null&&i("small",{className:"Tabs__tab__badge",children:["(",T,")"]})]},e)," "]},N=K("T",b=>{const{tabs:e,role:u,"aria-label":j,"aria-labelledby":T,"aria-controls":d,wrapperProps:o={},id:m=o.id,activeIdx:v,onSetActive:y,activateOnFocus:h,ssr:w,vertical:r,subTabs:l}=b,n=k(w),[A,p]=F(v||0),f=n&&u==="tablist"?"tab":void 0,g=t=>{const s=e[t];if(t===v||!s)return;const _=s.onActivated&&s.onActivated.call(null);y&&_!==!1&&y(t,s)},x=f&&(t=>{var _,B;const s=a[t.key];if(s){t.stopPropagation();let c=(A||0)+s;const D=e.length-1;c=c<0?D:c>D?0:c,(_=t.currentTarget.querySelectorAll(".Tabs__tab")[c])==null||_.focus(),h&&g(c),(B=o.onKeyDown)==null||B.call(o,t)}}),I={activeIdx:v,activateTab:g,focusedIdx:A,setFocusedIdx:p,tabRole:f,listAriaControls:d,isBrowser:n};return i("div",{...b.wrapperProps,className:C("Tabs",r&&"vertical",o.className),role:f&&u,id:m,"aria-label":j,"aria-labelledby":T,onKeyDown:x,"data-sprinkled":n,children:[e.map((t,s)=>L(t,s,I)),l&&i(N,{...l,role:"role"in l?l.role:u,activateOnFocus:l.activateOnFocus??h,ssr:w,vertical:void 0,subTabs:void 0})]})})}}});