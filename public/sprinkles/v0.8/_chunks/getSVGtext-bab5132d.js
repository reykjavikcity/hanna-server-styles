import{v as c}from"./qj-b9335549.js";const t=s=>/\.svg(?:$|\?|#)/i.test(s),o=(s,i)=>s&&t(s)?c(s).then(e=>{const r=e.search(/<svg/i);return r===-1?"":(r>0&&(e=e.slice(r)),i&&(e=e.replace(/<title[^]*?>[^]*?<\/title>/i,"").replace(/>/,`><title>${i}</title>`)),e)}).catch(e=>(console.error(e),"")):Promise.resolve("");o.isSvgUrl=t;export{o as g};