import{q as o}from"../../_chunks/qj-afc7b5d6.js";import{c as l}from"../../_chunks/utils-96e946f5.js";const c=(t,n)=>{o(t,n).filter(e=>!e.dataset.sprinkled).forEach(e=>{e.tagName==="IMG"&&(e.dataset.sprinkled="true",e.style.visibility="hidden",l(e.src).then(s=>{if(s){const i=e.parentElement;if(i&&i.nodeName==="PICTURE"){const a=i.className,r=a?` class="${a}"`:"";i.outerHTML=`<span${r}>${s}</span>`}else e.outerHTML=s}e.style.visibility=""}))})};export{c as inlineSVG};