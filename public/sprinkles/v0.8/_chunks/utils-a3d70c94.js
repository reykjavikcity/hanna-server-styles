import{l as F,h as L,t as z,q as N}from"./qj-c3d9a20d.js";const S=e=>setTimeout(()=>{const s=typeof e=="string"?document.querySelector(e):e;s&&s.focus()},0);var I={};/* FormatChange  -- (c) 2012-2022 Hugsmiðjan ehf.   @license MIT/GPL */var M=Object.create||function(e){var s=function(){};return s.prototype=e,new s},x=e=>!!(e&&e.getComputedStyle),f=function(e,s){var t=this;if(!(this instanceof f))return new f(e,s);s=s||{},t.win=s.win||t.win,t.elm=s.elm,s.elmTagName&&(t.elmTagName=s.elmTagName),s.elmId&&(t.elmId=s.elmId),"manual"in s&&(t.manual=s.manual),"defer"in s&&(t.defer=s.defer),t.formatGroups=e||M(t.formatGroups),t.media={},t._callbacks=[],t._check=function(){t.check()},!t.defer&&t.start()};f.prototype={elmTagName:"del",elmId:"mediaformat",manual:!1,defer:!1,win:typeof window<"u"?window:void 0,formatGroups:{},isRunning:function(){return this._on},start:function(e){if(!(this._on||!x(this.win))){if(!this.elm){var s=this.win.document,t=this.elmId||"mediaformat",r=this.elm=s.getElementById(t);if(!r){r=this.elm=s.createElement(this.elmTagName||"del");var i=r.style;i.position="absolute",i.visibility=i.overflow="hidden",i.border=i.padding=i.margin=i.width=i.height=0,r.id=t,r._isMine=!0,s.body.appendChild(r)}}this._on=!0,this.manual||this.win.addEventListener("resize",this._check),this.refresh(e)}},stop:function(){var e=this.elm;this._on&&(this.manual||this.win.removeEventListener("resize",this._check),e._isMine&&(e.parentNode.removeChild(e),delete this.elm),this._on=!1)},refresh:function(e){return e&&(this.oldFormat=null),this._on&&!this.check()&&this._updateFlags(),this._on},subscribe:function(e,s){e&&(this.unsubscribe(e),this._callbacks.push(e),s!==!1&&this._on&&!this._triggering&&e(this.media))},unsubscribe:function(e){if(e){for(var s=0,t;t=this._callbacks[s];s++)if(t===e){this._callbacks.splice(s,1);break}}},_on:!1,_updateFlags:function(){var e=this,s=e.media,t=e.formatGroups;for(var r in t){var i=t[r],a=!!(i&&i[s.is]),o=!!(i&&i[s.was]);s["is"+r]=a,s["was"+r]=o,s["became"+r]=a&&!o,s["left"+r]=!a&&o,!i&&delete t[r]}},check:function(){if(this._on){var e=this.media,s=this.oldFormat,t=this.win.getComputedStyle(this.elm,"::after").content||"";t=t.replace(/['"]/g,"");var r=t!==s;if(r){e.is=e.format=t,e.was=e.lastFormat=s,this.oldFormat=t,this._updateFlags(),this._triggering=!0;for(var i=0,a;a=this._callbacks[i];i++)a(e);this._triggering=!1}return r}}};var D=I.FormatChange=f;const G={Hamburger:{phone:!0,phablet:!0,tablet:!0},Topmenu:{netbook:!0,wide:!0}};let g;const O=()=>(g||(g=new D(G)),g),y=e=>/\.svg(?:$|\?|#)/i.test(e),_=(e,s)=>e&&y(e)?F(e).then(t=>{const r=t.search(/<svg/i);return r===-1?"":(r>0&&(t=t.slice(r)),s&&(t=t.replace(/<title[^]*?>[^]*?<\/title>/i,"").replace(/>/,`><title>${s}</title>`)),t)}).catch(t=>(console.error(t),"")):Promise.resolve("");_.isSvgUrl=y;const U=e=>e!=null,J=e=>Object.keys(e),P="is";let l=P;const q=(e,s)=>(console.error(`language '${e}' not supported`),s),A=(e,s)=>{const t=e.lang||l;return e.texts||s[t]||q(t,s[l])},v={is:["jan\xFAar","febr\xFAar","mars","apr\xEDl","ma\xED","j\xFAn\xED","j\xFAl\xED","\xE1g\xFAst","september","okt\xF3ber","n\xF3vember","desember"],en:["January","February","March","April","May","June","July","August","September","Oct\xF3ber","November","December"],pl:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze\u015Bnia","pa\u017Adziernika","listopada","grudnia"]},H=(e,s)=>{e=typeof e=="string"?new Date(e):e;const t=e.getUTCDate(),r=v[s||l]||v[l],i=r[e.getUTCMonth()],a=e.getUTCFullYear();return r===v.en?`${i} ${t}, ${a}`:`${t}. ${i} ${a}`},W="https://styles.reykjavik.is";let $=W;const j=e=>$+"/assets/"+e,B=(e,s)=>j("illustrations/"+(s==="thumb"?"thumb/":"")+e+".png"),R=e=>j("bling/"+e+".svg"),Y={is:"is",en:"en",pl:"pl"},K=e=>Y[L(e)||l]||l,E=5,Q=100,V=e=>{const{axis:s,scrollerElm:t,classedElm:r,bem:i,onChange:a,setClasses:o=!0}=e;let h={start:!0,end:!0};const m=i?i+"--at":"at",b=!a||o,u=n=>{const d=(r||t).classList;d[n.start?"add":"remove"](m+"--start"),d[n.end?"add":"remove"](m+"--end")},C=a?o?n=>{a(n),u(n)}:a:u,c=z(()=>{let n,d,p;s==="horizontal"?(n=t.scrollLeft,d=t.offsetWidth,p=t.scrollWidth):(n=t.scrollTop,d=t.offsetHeight,p=t.scrollHeight);const w=n<E,k=p-(d+n)<E;h.start===w&&h.end===k||(h={start:w,end:k},C(h))},Q);return c(),b&&((r||t).classList.add(m),u(h)),t.addEventListener("scroll",c),window.addEventListener("resize",c),{checkScroll:c,unmount:()=>{b&&(u({start:!1,end:!1}),(r||t).classList.remove(m)),t.removeEventListener("scroll",c),window.removeEventListener("resize",c)}}},X="0.8",Z=X,ee="v"+Z,T=(e,s)=>{s=s||{};const t=(s.testingServer||$).replace(/\/$/,""),r=s.version||ee,i=typeof e=="string"?e:e.join(",");return`${t}/bundle/${r}?m=${i.replace(/\s/g,"")}`},te={esja:"esja",faxafloi:"faxafloi",nautholsvik:"nautholsvik",heidmork:"heidmork",ellidaardalur:"ellidaardalur",blafjoll:"blafjoll",sund:"sund",rokkur:"rokkur",suld:"suld"},se={trustworthy:"trustworthy",dependable:"dependable",friendly:"friendly",lively:"lively",colorful:"colorful"},ie=(...e)=>{const s=T(""),t=N(`link[href^="${s}"]`).flatMap(i=>i.href.slice(s.length).split(",")).filter(i=>!!i),r=e.filter(i=>!t.includes(i));return r.length?new Promise(i=>{const a=document.createElement("link");a.rel="stylesheet",a.onload=a.onerror=()=>i(),a.href=T(r),document.head.append(a)}):Promise.resolve()};export{l as D,J as O,R as a,A as b,K as c,V as d,ie as e,O as f,_ as g,S as h,te as i,se as j,B as k,U as n,H as p};