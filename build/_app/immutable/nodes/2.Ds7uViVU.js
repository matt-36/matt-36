import{s as w,n as M}from"../chunks/scheduler.CtbWrGNo.js";import{S as H,i as L,e as v,t as A,s as D,c as g,a as $,b as q,d as h,f as E,m as S,n as f,g as I,h as p,j as z,z as O,p as j,v as B,q as T,A as W,k,l as F,o as G,r as J,x as K}from"../chunks/index.BjdCDlvI.js";function V(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}const N=!0,et=Object.freeze(Object.defineProperty({__proto__:null,prerender:N},Symbol.toStringTag,{value:"Module"}));function Q(o){let t,a,e=o[0].title+"",c,_,d,m="";return{c(){t=v("div"),a=v("div"),c=A(e),_=D(),d=v("div"),d.innerHTML=m,this.h()},l(u){t=g(u,"DIV",{class:!0});var r=$(t);a=g(r,"DIV",{class:!0});var s=$(a);c=q(s,e),s.forEach(h),_=E(r),d=g(r,"DIV",{class:!0,"data-svelte-h":!0}),S(d)!=="svelte-15y2jwi"&&(d.innerHTML=m),r.forEach(h),this.h()},h(){f(a,"class","body"),f(d,"class","popover"),f(t,"class","container svelte-ec94vg")},m(u,r){I(u,t,r),p(t,a),p(a,c),p(t,_),p(t,d)},p(u,[r]){r&1&&e!==(e=u[0].title+"")&&z(c,e)},i:M,o:M,d(u){u&&h(t)}}}function R(o,t,a){let{p:e={title:"Could not obtain projects.",source:"https://github.com/matt-36",img:{small:""}}}=t;return o.$$set=c=>{"p"in c&&a(0,e=c.p)},[e]}class U extends H{constructor(t){super(),L(this,t,R,Q,w,{p:0})}}function C(o,t,a){const e=o.slice();return e[1]=t[a],e}function P(o){let t,a;return t=new U({props:{p:o[1]}}),{c(){k(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,c){G(t,e,c),a=!0},p:M,i(e){a||(j(t.$$.fragment,e),a=!0)},o(e){T(t.$$.fragment,e),a=!1},d(e){J(t,e)}}}function X(o){let t,a,e,c,_="<h1>Projects.</h1>",d,m,u,r=V(o[0]),s=[];for(let n=0;n<r.length;n+=1)s[n]=P(C(o,r,n));const y=n=>T(s[n],1,1,()=>{s[n]=null});return{c(){t=v("meta"),a=D(),e=v("div"),c=v("div"),c.innerHTML=_,d=D(),m=v("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){const i=O("svelte-1cgcwpw",document.head);t=g(i,"META",{name:!0,content:!0}),i.forEach(h),a=E(n),e=g(n,"DIV",{class:!0});var l=$(e);c=g(l,"DIV",{class:!0,"data-svelte-h":!0}),S(c)!=="svelte-5drk3r"&&(c.innerHTML=_),d=E(l),m=g(l,"DIV",{class:!0});var b=$(m);for(let x=0;x<s.length;x+=1)s[x].l(b);b.forEach(h),l.forEach(h),this.h()},h(){document.title="MattWoods",f(t,"name","description"),f(t,"content","Portfolio site"),f(c,"class","title svelte-1bojaps"),f(m,"class","cards svelte-1bojaps"),f(e,"class","container svelte-1bojaps")},m(n,i){p(document.head,t),I(n,a,i),I(n,e,i),p(e,c),p(e,d),p(e,m);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(m,null);u=!0},p(n,[i]){if(i&1){r=V(n[0]);let l;for(l=0;l<r.length;l+=1){const b=C(n,r,l);s[l]?(s[l].p(b,i),j(s[l],1)):(s[l]=P(b),s[l].c(),j(s[l],1),s[l].m(m,null))}for(K(),l=r.length;l<s.length;l+=1)y(l);B()}},i(n){if(!u){for(let i=0;i<r.length;i+=1)j(s[i]);u=!0}},o(n){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)T(s[i]);u=!1},d(n){n&&(h(a),h(e)),h(t),W(s,n)}}}function Y(o){return[[{title:"test",source:"github.com/matt-36",img:{small:"//"}},{title:"test",source:"github.com/matt-36",img:{small:"//"}},{title:"test",source:"github.com/matt-36",img:{small:"//"}}]]}class st extends H{constructor(t){super(),L(this,t,Y,X,w,{})}}export{st as component,et as universal};