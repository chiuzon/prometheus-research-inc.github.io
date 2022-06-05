import{S as ue,i as fe,s as _e,e as d,t as x,c as v,a as g,b as A,d as u,f as i,g as se,h as M,j as c,n as z,k as T,l as y,m as Z,o as ae,p as re,r as me}from"./chunks/index.1a80f87b.js";var Q={["/"]:{label:"The Fire Rises"},["/consultacy"]:{label:"Apprenticeship Consultancy"},["/resources"]:{label:"External Resources"},["/funding"]:{label:"Support Prometheus"}},V={WEB_NAME:"Prometheus",COPYRIGHT:"\xA9 Prometheus Research Inc., 2022",FOOTER_LINKS:{twitter:{label:"Twitter",href:"https://twitter.com/prometheusprj"},github:{label:"Github",href:"https://github.com/Prometheus-Research-Inc"},discord:{label:"Discord",href:"https://discord.gg/wwbkhJTZwy"}}};function ce(a,t,o){const s=a.slice();return s[1]=t[o],s}function ie(a,t,o){const s=a.slice();return s[4]=t[o],s}function oe(a){let t,o=Q[a[4]].label+"",s,f;return{c(){t=d("a"),s=x(o),this.h()},l(r){t=v(r,"A",{href:!0,class:!0,"sveltekit:prefetch":!0});var m=g(t);s=A(m,o),m.forEach(u),this.h()},h(){i(t,"href",f=a[4]),i(t,"class","nav-tab"),i(t,"sveltekit:prefetch",""),se(t,"active",a[0]===a[4])},m(r,m){M(r,t,m),c(t,s)},p(r,m){m&1&&se(t,"active",r[0]===r[4])},d(r){r&&u(t)}}}function ne(a){let t,o=V.FOOTER_LINKS[a[1]].label+"",s,f;return{c(){t=d("a"),s=x(o),this.h()},l(r){t=v(r,"A",{href:!0,target:!0});var m=g(t);s=A(m,o),m.forEach(u),this.h()},h(){i(t,"href",f=V.FOOTER_LINKS[a[1]].href),i(t,"target","_blank")},m(r,m){M(r,t,m),c(t,s)},p:z,d(r){r&&u(t)}}}function de(a){let t,o,s,f,r,m,C,w,K,q,k,b,U,H,E,X,Y,I,R,B,p,j,L,$=V.COPYRIGHT+"",J,W,ee,P=Object.keys(Q),n=[];for(let l=0;l<P.length;l+=1)n[l]=oe(ie(a,P,l));let D=Object.keys(V.FOOTER_LINKS),h=[];for(let l=0;l<D.length;l+=1)h[l]=ne(ce(a,D,l));return{c(){t=d("div"),o=T(),s=d("div"),f=d("div"),r=d("img"),C=T(),w=d("h1"),K=x("Prometheus"),q=T(),k=d("div"),b=d("img"),H=T(),E=d("img"),Y=T(),I=d("div"),R=d("div");for(let l=0;l<n.length;l+=1)n[l].c();B=T(),p=d("div");for(let l=0;l<h.length;l+=1)h[l].c();j=T(),L=d("p"),J=x($),this.h()},l(l){t=v(l,"DIV",{class:!0}),g(t).forEach(u),o=y(l),s=v(l,"DIV",{class:!0});var _=g(s);f=v(_,"DIV",{class:!0});var e=g(f);r=v(e,"IMG",{src:!0,alt:!0}),C=y(e),w=v(e,"H1",{});var O=g(w);K=A(O,"Prometheus"),O.forEach(u),e.forEach(u),q=y(_),k=v(_,"DIV",{});var F=g(k);b=v(F,"IMG",{alt:!0,src:!0,class:!0}),H=y(F),E=v(F,"IMG",{alt:!0,src:!0,class:!0}),F.forEach(u),Y=y(_),I=v(_,"DIV",{class:!0});var G=g(I);R=v(G,"DIV",{class:!0});var te=g(R);for(let S=0;S<n.length;S+=1)n[S].l(te);te.forEach(u),B=y(G),p=v(G,"DIV",{class:!0});var N=g(p);for(let S=0;S<h.length;S+=1)h[S].l(N);j=y(N),L=v(N,"P",{});var le=g(L);J=A(le,$),le.forEach(u),N.forEach(u),G.forEach(u),_.forEach(u),this.h()},h(){i(t,"class","dimmer"),Z(r.src,m="imgs/logo-prometheus.svg")||i(r,"src",m),i(r,"alt","Logo"),i(f,"class","logo-container"),i(b,"alt","On Menu"),Z(b.src,U="imgs/icon-menu.svg")||i(b,"src",U),i(b,"class","mobile-menu-btn open"),i(E,"alt","Off Menu"),Z(E.src,X="imgs/icon-arrow.svg")||i(E,"src",X),i(E,"class","mobile-menu-btn close"),i(R,"class","sidebar-links"),i(p,"class","sidebar-footer"),i(I,"class","menu"),i(s,"class","sidebar")},m(l,_){M(l,t,_),M(l,o,_),M(l,s,_),c(s,f),c(f,r),c(f,C),c(f,w),c(w,K),c(s,q),c(s,k),c(k,b),c(k,H),c(k,E),c(s,Y),c(s,I),c(I,R);for(let e=0;e<n.length;e+=1)n[e].m(R,null);c(I,B),c(I,p);for(let e=0;e<h.length;e+=1)h[e].m(p,null);c(p,j),c(p,L),c(L,J),W||(ee=[ae(b,"click",he),ae(E,"click",he)],W=!0)},p(l,[_]){if(_&1){P=Object.keys(Q);let e;for(e=0;e<P.length;e+=1){const O=ie(l,P,e);n[e]?n[e].p(O,_):(n[e]=oe(O),n[e].c(),n[e].m(R,null))}for(;e<n.length;e+=1)n[e].d(1);n.length=P.length}if(_&0){D=Object.keys(V.FOOTER_LINKS);let e;for(e=0;e<D.length;e+=1){const O=ce(l,D,e);h[e]?h[e].p(O,_):(h[e]=ne(O),h[e].c(),h[e].m(p,j))}for(;e<h.length;e+=1)h[e].d(1);h.length=D.length}},i:z,o:z,d(l){l&&u(t),l&&u(o),l&&u(s),re(n,l),re(h,l),W=!1,me(ee)}}}function he(){var a;console.log(document.querySelector("html")),(a=document.querySelector("html"))===null||a===void 0||a.classList.toggle("menu-on")}function ve(a,t,o){let{pathname:s=""}=t;return a.$$set=f=>{"pathname"in f&&o(0,s=f.pathname)},[s]}class pe extends ue{constructor(t){super(),fe(this,t,ve,de,_e,{pathname:0})}}export{pe as default};
