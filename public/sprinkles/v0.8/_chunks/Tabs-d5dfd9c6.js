import{h as k}from"./compat.module-edfc5ce4.js";import{m as C,f as O}from"./qj-f5658347.js";import{u as B,o as I}from"./jsxRuntime.module-53ce29b9.js";import"./useFormatMonitor-6ee15356.js";import"./utils-ed8ff0d8.js";const K={ArrowUp:-1,ArrowLeft:-1,ArrowDown:1,ArrowRight:1},L=(c,e,n)=>{const{label:_,badge:p,href:b,type:o,longLabel:m}=c,{activeIdx:d,activateTab:f,focusedIdx:w,setFocusedIdx:T,tabRole:l,listAriaControls:r,isBrowser:s}=n,g=s&&(A=>{A.preventDefault(),f(e),A.currentTarget.focus()}),h=s&&(()=>T(e)),u=d===e||void 0,v=b&&!l?"a":"button",F=v==="button"?{role:l,type:o||"button",tabIndex:l?w===e?0:-1:void 0,"aria-controls":c["aria-controls"]||l&&O.getFrag(b)||r}:{href:b};return[I(v,{className:"Tabs__tab","data-active":u,...F,onClick:g,onFocus:h,"aria-label":m,title:m,children:[_," ",p!=null&&I("small",{className:"Tabs__tab__badge",children:["(",p,")"]})]},e)," "]},N=c=>{const{tabs:e,role:n,"aria-label":_,"aria-labelledby":p,"aria-controls":b,wrapperProps:o={},id:m=o.id,activeIdx:d,onSetActive:f,activateOnFocus:w,ssr:T,vertical:l,subTabs:r}=c,s=B(T),[g,h]=k(d||0),u=s&&n==="tablist"?"tab":void 0,v=a=>{const t=e[a];if(a===d||!t)return;const x=t.onActivated&&t.onActivated.call(null);f&&x!==!1&&f(a,t)},F=u&&(a=>{var t,x;const y=K[a.key];if(y){a.stopPropagation();let i=(g||0)+y;const D=e.length-1;i=i<0?D:i>D?0:i,(t=a.currentTarget.querySelectorAll(".Tabs__tab")[i])==null||t.focus(),w&&v(i),(x=o.onKeyDown)==null||x.call(o,a)}}),A={activeIdx:d,activateTab:v,focusedIdx:g,setFocusedIdx:h,tabRole:u,listAriaControls:b,isBrowser:s};return I("div",{...c.wrapperProps,className:C("Tabs",l&&"vertical",o.className),role:u&&n,id:m,"aria-label":_,"aria-labelledby":p,onKeyDown:F,"data-sprinkled":s,children:[e.map((a,t)=>L(a,t,A)),r&&I(N,{...r,role:"role"in r?r.role:n,activateOnFocus:r.activateOnFocus??w,ssr:T,vertical:void 0,subTabs:void 0})]})};export{N as T};