import"./initHannaNamespace.js";import{C as y}from"../_chunks/compat.module-8a0f8b99.js";import{a as o,q as N}from"../_chunks/qj-afc7b5d6.js";import{A as j}from"../_chunks/_AbstractCarousel-66a5b8bf.js";import{o as l,a as L}from"../_chunks/jsxRuntime.module-6c429607.js";import{h as w,i as S,j as O}from"../_chunks/utils-96e946f5.js";import{I as T}from"../_chunks/_Image-e2649f70.js";import{L as v}from"../_chunks/_Link-74f07e43.js";import"../_chunks/focus-visible-d727a811.js";import"../_chunks/useFormatMonitor-9c639f1c.js";import"../_chunks/seenEffect-ca174ea8.js";const q=Object.assign(["esja","faxafloi","nautholsvik","heidmork","ellidaardalur","blafjoll","sund","rokkur","suld"],w,{ellidarardalur:"ellidaardalur"}),I=Object.assign(["trustworthy","dependable","friendly","lively","colorful"],S),P=r=>{const{date:a,title:t,summary:m,href:s,target:n,moreLabel:e,color:d,theme:c,illustration:u,image:i}=r,_=i?.photo,h=u?{src:O(u)}:i;return l("div",{className:"ArticleCarouselCard","data-color":d&&q[d],"data-color-theme":d?void 0:c&&I[c],children:[l(v,{className:"ArticleCarouselCard__link",href:s,target:n,children:[" ",l(T,{placeholder:!0,className:L("ArticleCarouselCard__illustration",_&&"photo"),...h}),l("h3",{className:"ArticleCarouselCard__title",children:t})," "]})," ",a&&l("span",{className:"ArticleCarouselCard__date",children:a}),l("div",{className:"ArticleCarouselCard__summary",children:m}),e&&l(v,{className:"ArticleCarouselCard__morelink",href:s,target:n,"aria-label":t,children:[" ",e," "]})]})},B=r=>{const{title:a,items:t,moreLabel:m,ssr:s,startSeen:n}=r;return l(j,{bem:"ArticleCarousel",title:a,items:t,Component:P,ComponentProps:{moreLabel:m},ssr:s,startSeen:n})},E=r=>{var a,t;const m=((a=o(".ArticleCarouselCard__morelink",r))==null?void 0:a.textContent)||"",s=((t=o(".ArticleCarousel__title",r))==null?void 0:t.textContent)||"",n=N(".ArticleCarouselCard",r).map(e=>{var d,c,u;const i=o(".ArticleCarouselCard__illustration img",e),_=!!o(".ArticleCarouselCard__illustration--photo",e),h=i&&{src:i.src,altText:i.alt,photo:_},p=e.dataset.color,A=p?void 0:e.dataset.colorTheme,C=o(".ArticleCarouselCard__link",e),f=C?.href||"",b=C?.target||void 0,g=((d=o(".ArticleCarouselCard__title",e))==null?void 0:d.textContent)||"",k=((c=o(".ArticleCarouselCard__date",e))==null?void 0:c.textContent)||void 0,x=((u=o(".ArticleCarouselCard__summary",e))==null?void 0:u.textContent)||"";return{href:f,target:b,title:g,date:k,summary:x,image:h,color:p,theme:A}});return{title:s,items:n,moreLabel:m}};window.Hanna.makeSprinkle({name:"ArticleCarousel",init:r=>{const a=E(r),t=document.createElement("div");y.render(l(B,{...a,ssr:!1}),t,()=>{r.replaceWith(t)})}});