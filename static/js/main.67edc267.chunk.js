(this["webpackJsonpreact-markdown"]=this["webpackJsonpreact-markdown"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),o=n.n(r),l=n(1),u=n.n(l),i=(n(29),n(11)),s=n(5),m=(n(30),"Scale"),d=c.a.memo((function(e){var t=e.max,n=e.min,r=e.step,o=e.className,l=Object(a.useMemo)((function(){for(var e=[],a=n,c=0;a<=t;)e.push({value:a,length:a/t,text:a,textVisible:!(c%2)}),c++,a+=r;return e}),[t,n,r]);return c.a.createElement("div",{className:u()(o,"".concat(m))},l.map((function(e,t){return c.a.createElement("div",{key:t,className:"".concat(m,"-pin"),style:{position:"absolute",left:"".concat(100*e.length,"%"),bottom:0}},c.a.createElement("span",{className:u()("".concat(m,"-pinText"),{"is-visible":e.textVisible})},e.text))})))}));function v(e){var t="00"+e;return t.slice(t.length-2)}function f(e){var t=Math.floor(e/60),n=e%60;return"".concat(v(t),":").concat(v(n),":00")}function h(e){if(!e||!e.length)return[];e.sort((function(e,t){return e[0]-t[0]}));for(var t=[Object(i.a)(e[0])],n=1;n<e.length;n++)t[t.length-1][1]>=e[n][0]?t[t.length-1][1]=Math.max(t[t.length-1][1],e[n][1]):t.push(Object(i.a)(e[n]));return t}function b(e,t){var n=e[1]-e[0]+(t[1]-t[0]);if(Math.max(e[1],t[1])-Math.min(e[0],t[0])<n)return[Math.max(e[0],t[0]),Math.min(e[1],t[1])]}n(31),n(32);var p="Slice";function E(e){document.body.style.cursor=e}for(var O=c.a.memo((function(e){var t=e.className,n=e.steps,r=e.value,o=e.parentWidth,l=e.onChange,i=(function(){var e=Object(a.useReducer)((function(e){return e+1}),0,(function(e){return e}));Object(s.a)(e,2)[1]}(),Object(a.useRef)(r)),m=Object(a.useState)(!1),d=Object(s.a)(m,2),v=d[0],f=d[1];Object(a.useMemo)((function(){i.current=r}),[r]);var h=Object(s.a)(i.current,2),b=h[0],O=h[1],j=Object(a.useMemo)((function(){return{left:"".concat(b/n*100,"%"),right:"".concat(100*(1-O/n),"%")}}),[O,b,n]),g=Object(a.useCallback)((function(e){e.stopPropagation(),f((function(e){return!e}))}),[]),N=Object(a.useCallback)((function(e){e.stopPropagation();var t=e.currentTarget.dataset.type,a=e.clientX;function c(e){var c=e.clientX,r=Math.floor((c-a)/o*n),u=i.current[0],s=i.current[1];a=c,"left"===t?(u+=r,u=Math.min(Math.max(0,u),s)):(s+=r,s=Math.min(n,Math.max(s,u))),E("w-resize"),i.current=[u,s],null===l||void 0===l||l(i.current)}document.addEventListener("mousemove",c),document.addEventListener("mouseup",(function e(){null===l||void 0===l||l(i.current),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e),E("initial")}))}),[l,n,o]),y=Object(a.useCallback)((function(e){e.stopPropagation();var t=e.clientX;function a(e){var a=e.clientX,c=Math.floor((a-t)/o*n),r=i.current[0],u=i.current[1];t=a,u+=c;var s=0;(r+=c)<0&&(s=Math.abs(r)),u>n&&(s=n-u),r+=s,u+=s,i.current=[r,u],null===l||void 0===l||l(i.current)}document.addEventListener("mousemove",a),document.addEventListener("mouseup",(function e(){null===l||void 0===l||l(i.current),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",e),E("initial")}))}),[l,o,n]);return c.a.createElement("div",{style:j,className:u()("".concat(p),t,{"is-active":v}),onMouseDown:y,onClick:g},c.a.createElement("span",{className:u()("".concat(p,"-leftDrag"),{"is-visible":v}),"data-type":"left",onMouseDown:N}),c.a.createElement("span",{className:u()("".concat(p,"-rightDrag"),{"is-visible":v}),"data-type":"right",onMouseDown:N}))})),j=n(8),g=(n(34),c.a.memo((function(e){var t=e.steps,n=e.value,r=Object(s.a)(n,2),o=r[0],l=r[1],u=Object(a.useMemo)((function(){return{left:"".concat(o/t*100,"%"),right:"".concat(100*(1-l/t),"%")}}),[l,o,t]);return c.a.createElement("div",{style:u,className:"Overlap"})}))),N="Slider",y=c.a.memo((function(e){var t=e.className,n=e.steps,r=void 0===n?1440:n,o=e.value,l=e.onChange,i=e.index,m=e.overlap,d=e.onDelete,v=Object(a.useRef)(null),h=Object(a.useState)(0),b=Object(s.a)(h,2),p=b[0],E=b[1];Object(a.useEffect)((function(){if(v.current){var e=v.current.getBoundingClientRect().width;E(e)}}),[]);var y,C=Object(a.useCallback)((function(e){e&&(null===l||void 0===l||l(e))}),[l]);return c.a.createElement("div",{className:u()("".concat(N),t)},c.a.createElement("div",{className:u()("".concat(N,"-body"),t),ref:v},o&&c.a.createElement(O,{value:o,steps:r,parentWidth:p,onChange:C}),Object(j.map)(m,(function(e,t){return c.a.createElement(g,{key:t,value:e,steps:r})}))),c.a.createElement("div",{className:"".concat(N,"-footer")},c.a.createElement("span",null,i),c.a.createElement("span",{className:"".concat(N,"-time")},(y=o)?"".concat(f(y[0]),"~").concat(f(y[1])):""),c.a.createElement("span",{className:"".concat(N,"-delete"),onClick:d},"x")))})),C=(n(35),n(20)),M=n(10),k="VirtualizedList",R=Object(M.a)((function(e,t){return{list:e,render:t}})),x=c.a.memo((function(e){var t=e.data,n=e.index,a=e.style,r=t.list,o=t.render,l=r[n];return c.a.createElement("div",{style:a,key:n},o(l,n))}),C.b),w=c.a.memo((function(e){var t=e.className,n=e.list,r=e.render,o=e.height,l=e.onRendered,i=R(n,r),s=Object(a.useCallback)((function(e){l(e)}),[l]);return c.a.createElement("div",{className:u()("".concat(k),t)},c.a.createElement(C.a,{style:{overflow:"overlay"},className:"".concat(k,"-list"),height:o,itemCount:n.length,onItemsRendered:s,itemData:i,itemKey:function(e){return e},itemSize:function(){return 40},width:"100%"},x))})),S="SchedulePanel",L=[],P=0;P<1e4;P++)L.push({overlap:[],value:[0,480]});var D=c.a.memo((function(e){var t=e.className,n=(e.onChange,Object(a.useState)([])),r=Object(s.a)(n,2),o=r[0],l=r[1],m=Object(a.useState)([0,0]),v=Object(s.a)(m,2),f=v[0],p=v[1],E=Object(a.useCallback)((function(e,t){if(e.length){console.time("\u66f4\u65b0\u91cd\u53e0\u533a\u57df");for(var n=[],a=t[0],c=t[1],r=0;r<a;r++)n.push(e[r].value);for(var o=c+1;o<e.length;o++)n.push(e[o].value);for(var u=h(n),s=function(t){for(var n=[],r=a;r<=c;r++)if(r!==t){var o=b(e[t].value,e[r].value);o&&n.push(o)}Object(j.forEach)(u,(function(a){var c=b(e[t].value,a);c&&n.push(c)}));var l=h(n);e[t].overlap=l},m=a;m<=c;m++)s(m);console.timeEnd("\u66f4\u65b0\u91cd\u53e0\u533a\u57df"),l(Object(i.a)(e))}}),[]),O=Object(a.useCallback)((function(e){var t=e.visibleStartIndex,n=e.visibleStopIndex;p([t,n]),E(o,[t,n])}),[o,E]),g=Object(a.useCallback)((function(e,t){l((function(n){return n[t].value=e,Object(i.a)(n)})),E(o,f)}),[o,E,f]),N=Object(a.useCallback)((function(e){l((function(t){return t.splice(e,1),Object(i.a)(t)}))}),[]),C=Object(a.useCallback)((function(e,t){return c.a.createElement(y,{className:"".concat(S,"-slide"),onChange:function(e){return g(e,t)},onDelete:function(){return N(t)},index:t,value:e.value,overlap:e.overlap,steps:1440})}),[g,N]),M=Object(a.useCallback)((function(){l((function(e){var t=[].concat(Object(i.a)(e),[{overlap:[],value:[0,480]}]);return setTimeout((function(){E(t,f)}),0),t}))}),[E,f]);return c.a.createElement("div",{className:u()("".concat(S),t)},c.a.createElement("div",null,c.a.createElement("div",{className:"".concat(S,"-header")},c.a.createElement(d,{className:"".concat(S,"-scale"),max:24,min:0,step:1}),c.a.createElement("div",{className:"".concat(S,"-footer")},c.a.createElement("div",{className:"".concat(S,"-add"),onClick:M},"+")))),c.a.createElement(w,{height:600,list:o,render:C,onRendered:O}))})),B=c.a.memo((function(e){var t=e.className;return c.a.createElement("div",{className:u()("".concat("MeetPage"),t)},c.a.createElement(D,null))})),I=n(13),T=n(2),V=n(19),X=function e(t,n){if(t&&(null===n||void 0===n?void 0:n.length)){var a=Object(j.find)(n,(function(e){return e.path===(null===t||void 0===t?void 0:t.lastChildRoutePath)}))||n[0];return e(a,a.children)}return(null===t||void 0===t?void 0:t.path)||""},z=c.a.memo((function(e){var t=e.route,n=e.routes,a=(e.location||{}).pathname,r=X(t,n);return r!==a?c.a.createElement(T.a,{to:r||$}):c.a.createElement(T.a,{to:$})})),J=function e(t,n,a){var r=n?c.a.createElement(T.d,null,Object(j.map)(n,(function(n,a){return e(n,n.children,t)})),c.a.createElement(z,{routes:n,route:t})):null;return c.a.createElement(W,Object.assign({childrenRender:r},t,{route:t,parentRoute:a,childRoutes:n}))},W=c.a.memo((function(e){var t=e.childrenRender,n=e.route,a=e.parentRoute,r=e.childRoutes,o=e.layout,l=e.layoutProps,u=(e.children,e.component),i=Object(V.a)(e,["childrenRender","route","parentRoute","childRoutes","layout","layoutProps","children","component"]);return a&&!a.ignoreCache&&(a.lastChildRoutePath=null===n||void 0===n?void 0:n.path),n?!r&&u?o?c.a.createElement(_,Object.assign({},i,{render:function(){return c.a.createElement(o,Object.assign({route:n},l),c.a.createElement(u,i))}})):c.a.createElement(_,Object.assign({},i,{render:function(){return c.a.createElement(u,i)}})):r&&o?c.a.createElement(_,Object.assign({},i,{render:function(){return c.a.createElement(o,Object.assign({childRoutes:r,route:n},l),t)}})):t:t})),_=function(e){var t=e.render,n=Object(V.a)(e,["render"]);return c.a.createElement(T.b,Object.assign({},n,{render:t}))},F=(n(43),n(44),"Mavigator"),H=c.a.memo((function(e){var t=e.className,n=e.childRoutes,r=function(e){var t=Object(T.g)(),n=Object(a.useMemo)((function(){return Object(j.find)(e,(function(e){return t.pathname.includes(e.path)}))}),[t.pathname,e]);return null===n||void 0===n?void 0:n.path}(n);return c.a.createElement("div",{className:u()("".concat(F),t)},n.map((function(e){return r===e.path?c.a.createElement("span",{className:u()("".concat(F,"-item"),"is-active")},e.name,c.a.createElement("div",{className:"".concat(F,"-activeBar")})):c.a.createElement(I.b,{className:u()("".concat(F,"-item")),key:e.path,to:e.path},e.name,c.a.createElement("div",{className:"".concat(F,"-activeBar")}))})))})),K="Layout",q=c.a.memo((function(e){var t=e.title,n=e.childRoutes,a=e.children;return c.a.createElement("div",{className:u()("".concat(K))},c.a.createElement("div",{className:"".concat(K,"-head")},c.a.createElement("span",{className:"".concat(K,"-headTitle")},t)),c.a.createElement("div",{className:"".concat(K,"-body")},c.a.createElement("div",{className:"".concat(K,"-bodyLeft")},c.a.createElement(H,{childRoutes:n})),c.a.createElement("div",{className:"".concat(K,"-bodyRight")},a)))})),A=(n(45),n(46),"Folder"),G=c.a.memo((function(e){var t=e.className,n=e.children,r=Object(a.useState)(!1),o=Object(s.a)(r,2),l=o[0],i=o[1];return c.a.createElement("div",{className:u()("".concat(A),t)},c.a.createElement("div",{className:"".concat(A,"-foldBtn"),onClick:function(){i((function(e){return!e}))}},l?"\u5c55\u5f00":"\u6536\u8d77"),l?null:c.a.createElement("div",{className:"".concat(A,"-body")},n))})),Q="MdView",U=c.a.memo((function(e){var t=e.className,n=e.md,a=e.view;return c.a.createElement("div",{className:u()("".concat(Q),t)},c.a.createElement(G,{className:"".concat(Q,"-body")},a),n&&c.a.createElement(G,{className:"".concat(Q,"-md")},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))})),Y="/react-markdown";function Z(e){return"".concat(Y).concat(e)}var $=Z("/home"),ee=[{path:Y,layout:q,layoutProps:{title:""},ignoreCache:!0,children:[{path:Z("/meet"),name:"\u4f1a\u8bae\u9884\u5b9a",component:function(){return c.a.createElement(U,{view:c.a.createElement(B,null)})}}]}],te=function(){return c.a.createElement(I.a,null,c.a.createElement(T.d,null,J(void 0,ee),c.a.createElement(T.a,{to:$})))},ne=(n(47),c.a.memo((function(e){return c.a.createElement(te,null)})));o.a.render(c.a.createElement(ne,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.67edc267.chunk.js.map