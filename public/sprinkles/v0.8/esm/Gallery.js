import"./initHannaNamespace.js";import{a as J,q as w,C as f,h as O,p as Q,_ as Y}from"../_chunks/compat.module-8a0f8b99.js";import{g as j,r as Z,e as K,i as tt,o as et,j as D,h as nt,q as ot,a as N}from"../_chunks/qj-afc7b5d6.js";import{a as st}from"../_chunks/utils-96e946f5.js";import{A as rt}from"../_chunks/_AbstractCarousel-66a5b8bf.js";import{B as it}from"../_chunks/_Button-c2359514.js";import{I as k}from"../_chunks/_Image-e2649f70.js";import{o as d,g as R}from"../_chunks/jsxRuntime.module-6c429607.js";import{r as _}from"../_chunks/useFormatMonitor-9c639f1c.js";import"../_chunks/focus-visible-d727a811.js";import"../_chunks/seenEffect-ca174ea8.js";import"../_chunks/_Link-74f07e43.js";const S=J({}),at=n=>{const{caption:r,description:o,largeImageSrc:t,...e}=n,{setCurrentImage:s}=w(S);return d("figure",{className:"GalleryItem",children:[d("figcaption",{className:"GalleryItem__caption",children:r}),t?d(it,{bem:"GalleryItem__button",href:t,onClick:i=>{i.preventDefault(),s({...e,caption:r,description:o,largeImageSrc:t})},children:[" ",d(k,{className:"GalleryItem__image",...e})," "]}):d(k,{className:"GalleryItem__image",...e}),o&&d("div",{className:"GalleryItem__description",children:o})]})};function I(){return I=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},I.apply(this,arguments)}function A(n,r){if(n==null)return{};var o={},t=Object.keys(n),e,s;for(s=0;s<t.length;s++)e=t[s],!(r.indexOf(e)>=0)&&(o[e]=n[e]);return o}function M(n,r){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},M(n,r)}function B(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,M(n,r)}function lt(n,r){return n.classList?!!r&&n.classList.contains(r):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+r+" ")!==-1}function ct(n,r){n.classList?n.classList.add(r):lt(n,r)||(typeof n.className=="string"?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r))}function U(n,r){return n.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function pt(n,r){n.classList?n.classList.remove(r):typeof n.className=="string"?n.className=U(n.className,r):n.setAttribute("class",U(n.className&&n.className.baseVal||"",r))}const W={disabled:!1},$=f.createContext(null);var F=function(n){return n.scrollTop},y="unmounted",v="exited",E="entering",x="entered",L="exiting",h=function(n){B(r,n);function r(t,e){var s;s=n.call(this,t,e)||this;var i=e,a=i&&!i.isMounting?t.enter:t.appear,l;return s.appearStatus=null,t.in?a?(l=v,s.appearStatus=E):l=x:t.unmountOnExit||t.mountOnEnter?l=y:l=v,s.state={status:l},s.nextCallback=null,s}r.getDerivedStateFromProps=function(t,e){var s=t.in;return s&&e.status===y?{status:v}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(t){var e=null;if(t!==this.props){var s=this.state.status;this.props.in?s!==E&&s!==x&&(e=E):(s===E||s===x)&&(e=L)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var t=this.props.timeout,e,s,i;return e=s=i=t,t!=null&&typeof t!="number"&&(e=t.exit,s=t.enter,i=t.appear!==void 0?t.appear:s),{exit:e,enter:s,appear:i}},o.updateStatus=function(t,e){if(t===void 0&&(t=!1),e!==null)if(this.cancelNextCallback(),e===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:f.findDOMNode(this);s&&F(s)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:y})},o.performEnter=function(t){var e=this,s=this.props.enter,i=this.context?this.context.isMounting:t,a=this.props.nodeRef?[i]:[f.findDOMNode(this),i],l=a[0],c=a[1],u=this.getTimeouts(),p=i?u.appear:u.enter;if(!t&&!s||W.disabled){this.safeSetState({status:x},function(){e.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:E},function(){e.props.onEntering(l,c),e.onTransitionEnd(p,function(){e.safeSetState({status:x},function(){e.props.onEntered(l,c)})})})},o.performExit=function(){var t=this,e=this.props.exit,s=this.getTimeouts(),i=this.props.nodeRef?void 0:f.findDOMNode(this);if(!e||W.disabled){this.safeSetState({status:v},function(){t.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:L},function(){t.props.onExiting(i),t.onTransitionEnd(s.exit,function(){t.safeSetState({status:v},function(){t.props.onExited(i)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},o.setNextCallback=function(t){var e=this,s=!0;return this.nextCallback=function(i){s&&(s=!1,e.nextCallback=null,t(i))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},o.onTransitionEnd=function(t,e){this.setNextCallback(e);var s=this.props.nodeRef?this.props.nodeRef.current:f.findDOMNode(this),i=t==null&&!this.props.addEndListener;if(!s||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],l=a[0],c=a[1];this.props.addEndListener(l,c)}t!=null&&setTimeout(this.nextCallback,t)},o.render=function(){var t=this.state.status;if(t===y)return null;var e=this.props,s=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var i=A(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement($.Provider,{value:null},typeof s=="function"?s(t,i):f.cloneElement(f.Children.only(s),i))},r}(f.Component);h.contextType=$,h.propTypes={};function b(){}h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},h.UNMOUNTED=y,h.EXITED=v,h.ENTERING=E,h.ENTERED=x,h.EXITING=L;const ut=h;var dt=function(n,r){return n&&r&&r.split(" ").forEach(function(o){return ct(n,o)})},G=function(n,r){return n&&r&&r.split(" ").forEach(function(o){return pt(n,o)})},P=function(n){B(r,n);function r(){for(var t,e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return t=n.call.apply(n,[this].concat(s))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(a,l){var c=t.resolveArguments(a,l),u=c[0],p=c[1];t.removeClasses(u,"exit"),t.addClass(u,p?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(a,l)},t.onEntering=function(a,l){var c=t.resolveArguments(a,l),u=c[0],p=c[1],m=p?"appear":"enter";t.addClass(u,m,"active"),t.props.onEntering&&t.props.onEntering(a,l)},t.onEntered=function(a,l){var c=t.resolveArguments(a,l),u=c[0],p=c[1],m=p?"appear":"enter";t.removeClasses(u,m),t.addClass(u,m,"done"),t.props.onEntered&&t.props.onEntered(a,l)},t.onExit=function(a){var l=t.resolveArguments(a),c=l[0];t.removeClasses(c,"appear"),t.removeClasses(c,"enter"),t.addClass(c,"exit","base"),t.props.onExit&&t.props.onExit(a)},t.onExiting=function(a){var l=t.resolveArguments(a),c=l[0];t.addClass(c,"exit","active"),t.props.onExiting&&t.props.onExiting(a)},t.onExited=function(a){var l=t.resolveArguments(a),c=l[0];t.removeClasses(c,"exit"),t.addClass(c,"exit","done"),t.props.onExited&&t.props.onExited(a)},t.resolveArguments=function(a,l){return t.props.nodeRef?[t.props.nodeRef.current,a]:[a,l]},t.getClassNames=function(a){var l=t.props.classNames,c=typeof l=="string",u=c&&l?l+"-":"",p=c?""+u+a:l[a],m=c?p+"-active":l[a+"Active"],C=c?p+"-done":l[a+"Done"];return{baseClassName:p,activeClassName:m,doneClassName:C}},t}var o=r.prototype;return o.addClass=function(t,e,s){var i=this.getClassNames(e)[s+"ClassName"],a=this.getClassNames("enter"),l=a.doneClassName;e==="appear"&&s==="done"&&l&&(i+=" "+l),s==="active"&&t&&F(t),i&&(this.appliedClasses[e][s]=i,dt(t,i))},o.removeClasses=function(t,e){var s=this.appliedClasses[e],i=s.base,a=s.active,l=s.done;this.appliedClasses[e]={},i&&G(t,i),a&&G(t,a),l&&G(t,l)},o.render=function(){var t=this.props;t.classNames;var e=A(t,["classNames"]);return f.createElement(ut,I({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(f.Component);P.defaultProps={classNames:""},P.propTypes={};const mt=P;var T=_,ft=R,ht={next:"Next",prev:"Previous"},vt=function(n){var r=n.bem,o=r===void 0?"CarouselPaging":r,t=n.modifier,e=n.current,s=n.itemCount,i=n.setCurrent,a=n.texts,l=a===void 0?ht:a,c=l.next,u=l.prev,p=l.unit,m=p===void 0?"":p;return T.createElement("div",{className:ft(o,t)},T.createElement("button",{className:o+"__button "+o+"__button--next",type:"button",disabled:e>=s-1,onClick:function(){return i(e+1)},"aria-controls":n["aria-controls"],"aria-label":c+" "+m,title:c+" "+m},c)," ",T.createElement("button",{className:o+"__button "+o+"__button--prev",type:"button",disabled:e===0,onClick:function(){return i(e-1)},"aria-controls":n["aria-controls"],"aria-label":u+" "+m,title:u+" "+m},u))},Et=vt;const gt=j(Et);var V={};(function(n){/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var r=function(e,s){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,a){i.__proto__=a}||function(i,a){for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l])},r(e,s)};function o(e,s){r(e,s);function i(){this.constructor=e}e.prototype=s===null?Object.create(s):(i.prototype=s.prototype,new i)}n.__assign=function(){return n.__assign=Object.assign||function(e){for(var s=arguments,i,a=1,l=arguments.length;a<l;a++){i=s[a];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c])}return e},n.__assign.apply(this,arguments)};function t(e,s){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&s.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)s.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(i[a[l]]=e[a[l]]);return i}n.__extends=o,n.__rest=t})(V);var q=_,xt=_,bt=Z;function yt(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var Ct=yt(bt),Nt=function(){var n=document.createElement("div");return document.body.appendChild(n),n},_t=function(n){var r=n.getRoot,o=n.children,t=q.useState(null),e=t[0],s=t[1];return q.useEffect(function(){return s((r||Nt)()),function(){e&&Ct.default(e)}},[]),e?xt.createPortal(o,e):null},Ot=_t,kt=V,g=_,X=R,St=K,It=Ot,Mt=tt;function H(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var Lt=H(St),Gt=H(Mt),Pt={closeButton:"Close",closeButtonLabel:"Close this window"},Tt=function(n){kt.__extends(r,n);function r(o){var t=n.call(this,o)||this;return t.close=t.close.bind(t),t.closeModalOnCurtainClick=t.closeModalOnCurtainClick.bind(t),t.closeModalOnEsc=t.closeModalOnEsc.bind(t),t.state={open:!!o.startOpen&&o.open!==!1,domid:"Modal"},t}return r.prototype.componentDidMount=function(){this.setState({domid:this.state.domid+Lt.default()}),document.addEventListener("keydown",this.closeModalOnEsc),(this.props.open||this.state.open)&&this.open()},r.prototype.componentDidUpdate=function(o){var t=this.props.open;t!==o.open&&(t?this.open():this.close())},r.prototype.componentWillUnmount=function(){document.removeEventListener("keydown",this.closeModalOnEsc),document.documentElement.classList.remove("modal-open")},r.prototype.open=function(){var o=this;document.documentElement.classList.add("modal-open"),this.state.open||setTimeout(function(){o.setState({open:!0}),o.props.onOpen&&o.props.onOpen(),o.modalElm&&Gt.default(o.modalElm)},100)},r.prototype.close=function(){var o=this;this.state.open&&(this.setState({open:!1}),document.documentElement.classList.remove("modal-open"),this.props.onClose&&this.props.onClose(),this.props.onClosed&&setTimeout(function(){o.props.onClosed()},this.props.closeDelay))},r.prototype.closeModalOnCurtainClick=function(o){o.target===o.currentTarget&&this.close()},r.prototype.closeModalOnEsc=function(o){this.props.fickle!==!1&&o.key==="Esc"&&this.close()},r.prototype.render=function(){var o=this,t=this.props,e=this.state.open,s=this.state.domid,i=t.bem||"Modal",a=t.fickle!==!1||void 0,l=t.texts||Pt,c=l.closeButton,u=l.closeButtonLabel,p=u===void 0?l.closeButton:u,m=t.portal?It:g.Fragment,C=t.render?t.render({closeModal:function(){return o.close()}}):t.children;return g.createElement(m,null,g.createElement("div",{className:X(i+"wrapper",t.modifier),hidden:!e,role:"dialog",onClick:a&&this.closeModalOnCurtainClick,id:s},g.createElement("div",{className:X(i,t.modifier),ref:function(z){o.modalElm=z}},t.bodyWrap?g.createElement("div",{className:i+"__body"},C):C,g.createElement("button",{className:i+"__closebutton",type:"button",onClick:this.close,"aria-label":p,"aria-controls":s,title:p},c))))},r.defaultProps={closeDelay:1e3,open:!0,portal:!0},r}(g.Component),wt=Tt;const jt=j(wt),Dt=n=>{const{caption:r,description:o,...t}=n;return d("div",{className:"GalleryModalItem",children:[(r||o)&&d("div",{className:"GalleryModalItem__text",children:[d("div",{className:"GalleryModalItem__caption",children:r}),d("div",{className:"GalleryModalItem__description",children:o})]}),d(k,{className:"GalleryModalItem__image",src:t.largeImageSrc||t.src})]})},Rt=n=>{const{texts:r}=n,{currentImage:o,items:t,setCurrentImage:e}=w(S),[s,i]=O(o),[a,l]=O(!1),c=p=>{l(!a),setTimeout(()=>{e(t[p])},200)};if(Q(()=>{if(s!==o){const p=o?.largeImageSrc||o?.src;if(p){const m=new window.Image;m.src=p,m.onload=()=>{i(o)}}else i(void 0)}},[s,o]),!s)return null;const u=t.findIndex(p=>et(D(s),D(p)));return d(jt,{open:!0,onClosed:()=>{e(void 0)},startOpen:!1,bem:"GalleryModal",texts:{closeButton:r.modalCloseLabel},children:d(Y,{children:[d(mt,{in:a,timeout:200,onEntered:()=>{l(!a)},classNames:"GalleryModalItem--",children:d(Dt,{...s})}),d(gt,{bem:"GalleryModalPager",itemCount:t.length,current:u,setCurrent:c,texts:{next:r.modalNextLabel,prev:r.modalPrevLabel}})]})})},At={en:{modalNextLabel:"Next image",modalPrevLabel:"Previous image",modalCloseLabel:"Back to article"},is:{modalNextLabel:"N\xE6sta mynd",modalPrevLabel:"Fyrri mynd",modalCloseLabel:"Til baka \xED grein"}},Bt=n=>{const{items:r,ssr:o,startSeen:t}=n,e=st(n,At),[s,i]=O(void 0);return d(S.Provider,{value:{items:r,setCurrentImage:i,currentImage:s},children:[d(rt,{bem:"Gallery",items:r,Component:at,ssr:o,startSeen:t}),d(Rt,{...s,texts:e})]})},Ut=n=>{const r=nt();return{items:ot(".GalleryItem",n).map(o=>{var t,e,s;const i=N(".GalleryItem__image img",o),a=((t=N(".GalleryItem__caption",o))==null?void 0:t.textContent)||void 0,l=((e=N(".GalleryItem__description",o))==null?void 0:e.textContent)||void 0,c=((s=N("a.GalleryItem__button",o))==null?void 0:s.href)||void 0;return{altText:i?i.alt:void 0,src:i?i.src:void 0,caption:a,largeImageSrc:c,description:l}}),lang:r}};window.Hanna.makeSprinkle({name:"Gallery",init:n=>{const r=Ut(n),o=document.createElement("div");f.render(d(Bt,{...r,ssr:!1}),o,()=>{n.replaceWith(o)})}});