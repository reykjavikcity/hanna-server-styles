import{h as E,T as A,C as G}from"./compat.module-8a0f8b99.js";import{h as M}from"./useFormatMonitor-9c639f1c.js";import{o as r,a as H}from"./jsxRuntime.module-6c429607.js";import{i as J}from"./env-7ef80a23.js";import"./utils-96e946f5.js";import"./qj-afc7b5d6.js";const P={bem:"FormField",input:"FormField__input",options:"FormField__options",control:"FormField__control"},Q=b=>{const{className:S,small:d,group:I,LabelTag:l=I?"h4":void 0,label:c,assistText:n,hideLabel:u,empty:F,filled:m,readOnly:_,disabled:p,invalid:h,errorMessage:s,required:f,reqText:v,renderInput:g,id:C,ssr:w}=b,a=M.useIsBrowserSide(w),y=h||!!s||void 0,t=M.useDomid(C),[i,D]=E(!1),V=A(L=>{const{onFocus:K,onBlur:O}=L||{},R=e=>{(!e.relatedTarget||!e.currentTarget.contains(e.relatedTarget))&&D(!0),K&&K(e)},k=e=>{(!e.relatedTarget||!e.currentTarget.contains(e.relatedTarget))&&D(!1),O&&O(e)},B={...L,onFocus:R,onBlur:k};if(J){const e=o=>{o.currentTarget!==o.target&&R(o)},z=o=>{o.currentTarget!==o.target&&k(o)};B.onfocusin=e,B.onfocusout=z}return B},[]),T=s?"error:"+t:void 0,N=n?"assist:"+t:void 0,q=l?"label:"+t:void 0,x=f&&v!==!1&&r("abbr",{className:"FormField__label__reqstar",title:(v||"\xDEarf a\xF0 fylla \xFAt")+": ",children:"*"}),j={id:t,disabled:p,required:f,readOnly:_,"aria-invalid":y,"aria-describedby":N&&T?N+" "+T:N||T,"aria-labelledby":q};return r("div",{className:H("FormField",[d&&"small",u&&"nolabel",y&&"invalid",p&&"disabled",_&&"readonly",a&&F&&"empty",a&&m&&"filled",a&&i&&"focused"],S),ref:b.wrapperRef,children:[l?r(l,{className:"FormField__label",id:q,children:[" ",x," ",c," "]}):r("label",{className:"FormField__label",htmlFor:t,children:[" ",x," ",c," "]})," ",g(P,j,V,a),n&&r("div",{id:N,className:"FormField__assist",children:n}),s&&r("div",{id:T,className:"FormField__error",children:s})]})},U=G.forwardRef((b,S)=>{const{label:d,id:I,onChange:l,placeholder:c=typeof d=="string"?d:void 0,buttonText:n="Leita",onSubmit:u,onButtonClick:F=u,onKeyDown:m,ssr:_,...p}=b,{value:h,defaultValue:s}=p,[f,v]=E(void 0),g=!!(h??f??!!s),C=!g&&!c,w=h!=null?l:a=>{v(!!a.target.value),l&&l(a)};return r(Q,{className:"SiteSearchInput",ssr:_,label:d,empty:C,filled:g,id:I,renderInput:(a,y,t)=>r("div",{className:a.input,...t(),children:[r("input",{className:"SiteSearchInput__input",onChange:w,...y,placeholder:c,onKeyDown:u?i=>{i.key==="Enter"&&u()!==!0&&i.preventDefault(),m&&m(i)}:m,...p,ref:S})," ",r("button",{className:"SiteSearchInput__button",type:"submit",onClick:F&&(i=>!F()&&i.preventDefault()),title:n,children:n})]})})});export{U as S};