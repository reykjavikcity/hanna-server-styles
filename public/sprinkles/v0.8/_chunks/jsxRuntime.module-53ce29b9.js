import{h as c,p as i,l as u}from"./compat.module-edfc5ce4.js";let f=!1;const p=!0;let d=p;const y=(n,l,r=d)=>{const _=c(()=>r==="ssr-only"||r&&!f?n:l);return i(()=>{f=!0,r!=="ssr-only"&&_[1](l)},[]),_},h=n=>y(!1,!0,n)[0]||void 0;var k=0;function m(n,l,r,_,v,a){var s,o,t={};for(o in l)o=="ref"?s=l[o]:t[o]=l[o];var e={type:n,props:t,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--k,__source:v,__self:a};if(typeof n=="function"&&(s=n.defaultProps))for(o in s)t[o]===void 0&&(t[o]=s[o]);return u.vnode&&u.vnode(e),e}export{m as o,h as u};