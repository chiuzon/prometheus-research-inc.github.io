function B(){}function en(n,t){for(const e in t)n[e]=t[e];return n}function L(n){return n()}function S(){return Object.create(null)}function m(n){n.forEach(L)}function T(n){return typeof n=="function"}function cn(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let y;function rn(n,t){return y||(y=document.createElement("a")),y.href=t,n===y.href}function D(n){return Object.keys(n).length===0}function ln(n){const t={};for(const e in n)e[0]!=="$"&&(t[e]=n[e]);return t}let b=!1;function z(){b=!0}function F(){b=!1}function H(n,t,e,l){for(;n<t;){const r=n+(t-n>>1);e(r)<=l?n=r+1:t=r}return n}function I(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const i=[];for(let o=0;o<t.length;o++){const s=t[o];s.claim_order!==void 0&&i.push(s)}t=i}const e=new Int32Array(t.length+1),l=new Int32Array(t.length);e[0]=-1;let r=0;for(let i=0;i<t.length;i++){const o=t[i].claim_order,s=(r>0&&t[e[r]].claim_order<=o?r+1:H(1,r,p=>t[e[p]].claim_order,o))-1;l[i]=e[s]+1;const f=s+1;e[f]=i,r=Math.max(f,r)}const u=[],c=[];let a=t.length-1;for(let i=e[r]+1;i!=0;i=l[i-1]){for(u.push(t[i-1]);a>=i;a--)c.push(t[a]);a--}for(;a>=0;a--)c.push(t[a]);u.reverse(),c.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<c.length;i++){for(;o<u.length&&c[i].claim_order>=u[o].claim_order;)o++;const s=o<u.length?u[o]:null;n.insertBefore(c[i],s)}}function P(n,t){if(b){for(I(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function on(n,t,e){b&&!e?P(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function W(n){n.parentNode.removeChild(n)}function an(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function G(n){return document.createElement(n)}function v(n){return document.createTextNode(n)}function un(){return v(" ")}function fn(){return v("")}function sn(n,t,e,l){return n.addEventListener(t,e,l),()=>n.removeEventListener(t,e,l)}function dn(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function J(n){return Array.from(n.childNodes)}function K(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function M(n,t,e,l,r=!1){K(n);const u=(()=>{for(let c=n.claim_info.last_index;c<n.length;c++){const a=n[c];if(t(a)){const i=e(a);return i===void 0?n.splice(c,1):n[c]=i,r||(n.claim_info.last_index=c),a}}for(let c=n.claim_info.last_index-1;c>=0;c--){const a=n[c];if(t(a)){const i=e(a);return i===void 0?n.splice(c,1):n[c]=i,r?i===void 0&&n.claim_info.last_index--:n.claim_info.last_index=c,a}}return l()})();return u.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,u}function Q(n,t,e,l){return M(n,r=>r.nodeName===t,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const a=r.attributes[c];e[a.name]||u.push(a.name)}u.forEach(c=>r.removeAttribute(c))},()=>l(t))}function _n(n,t,e){return Q(n,t,e,G)}function R(n,t){return M(n,e=>e.nodeType===3,e=>{const l=""+t;if(e.data.startsWith(l)){if(e.data.length!==l.length)return e.splitText(l.length)}else e.data=l},()=>v(t),!0)}function hn(n){return R(n," ")}function mn(n,t,e){n.classList[e?"add":"remove"](t)}let j;function h(n){j=n}const _=[],C=[],x=[],q=[],V=Promise.resolve();let k=!1;function X(){k||(k=!0,V.then(O))}function w(n){x.push(n)}const E=new Set;let g=0;function O(){const n=j;do{for(;g<_.length;){const t=_[g];g++,h(t),Y(t.$$)}for(h(null),_.length=0,g=0;C.length;)C.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while(_.length);for(;q.length;)q.pop()();k=!1,E.clear(),h(n)}function Y(n){if(n.fragment!==null){n.update(),m(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(w)}}const $=new Set;let d;function pn(){d={r:0,c:[],p:d}}function yn(){d.r||m(d.c),d=d.p}function Z(n,t){n&&n.i&&($.delete(n),n.i(t))}function gn(n,t,e,l){if(n&&n.o){if($.has(n))return;$.add(n),d.c.push(()=>{$.delete(n),l&&(e&&n.d(1),l())}),n.o(t)}}function xn(n,t){const e={},l={},r={$$scope:1};let u=n.length;for(;u--;){const c=n[u],a=t[u];if(a){for(const i in c)i in a||(l[i]=1);for(const i in a)r[i]||(e[i]=a[i],r[i]=1);n[u]=a}else for(const i in c)r[i]=1}for(const c in l)c in e||(e[c]=void 0);return e}function $n(n){return typeof n=="object"&&n!==null?n:{}}function bn(n){n&&n.c()}function En(n,t){n&&n.l(t)}function U(n,t,e,l){const{fragment:r,on_mount:u,on_destroy:c,after_update:a}=n.$$;r&&r.m(t,e),l||w(()=>{const i=u.map(L).filter(T);c?c.push(...i):m(i),n.$$.on_mount=[]}),a.forEach(w)}function nn(n,t){const e=n.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function tn(n,t){n.$$.dirty[0]===-1&&(_.push(n),X(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function kn(n,t,e,l,r,u,c,a=[-1]){const i=j;h(n);const o=n.$$={fragment:null,ctx:null,props:u,update:B,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:S(),dirty:a,skip_bound:!1,root:t.target||i.$$.root};c&&c(o.root);let s=!1;if(o.ctx=e?e(n,t.props||{},(f,p,...A)=>{const N=A.length?A[0]:p;return o.ctx&&r(o.ctx[f],o.ctx[f]=N)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](N),s&&tn(n,f)),p}):[],o.update(),s=!0,m(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){z();const f=J(t.target);o.fragment&&o.fragment.l(f),f.forEach(W)}else o.fragment&&o.fragment.c();t.intro&&Z(n.$$.fragment),U(n,t.target,t.anchor,t.customElement),F(),O()}h(i)}class wn{$destroy(){nn(this,1),this.$destroy=B}$on(t,e){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(e),()=>{const r=l.indexOf(e);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{yn as A,Z as B,nn as C,en as D,ln as E,pn as F,wn as S,J as a,R as b,_n as c,W as d,G as e,dn as f,mn as g,on as h,kn as i,P as j,un as k,hn as l,rn as m,B as n,sn as o,an as p,bn as q,m as r,cn as s,v as t,fn as u,En as v,U as w,xn as x,$n as y,gn as z};