(this["webpackJsonpreact-markdown"]=this["webpackJsonpreact-markdown"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),o=n.n(r),l=n(1),u=n.n(l),i=(n(29),n(11)),s=n(6),m=(n(30),"Scale"),d=c.a.memo((function(e){var t=e.max,n=e.min,r=e.step,o=e.className,l=Object(a.useMemo)((function(){for(var e=[],a=n,c=0;a<=t;)e.push({value:a,length:a/t,text:a,textVisible:!(c%2)}),c++,a+=r;return e}),[t,n,r]);return c.a.createElement("div",{className:u()(o,"".concat(m))},l.map((function(e,t){return c.a.createElement("div",{key:t,className:"".concat(m,"-pin"),style:{position:"absolute",left:"".concat(100*e.length,"%"),bottom:0}},c.a.createElement("span",{className:u()("".concat(m,"-pinText"),{"is-visible":e.textVisible})},e.text))})))}));function v(e){var t="00"+e;return t.slice(t.length-2)}function f(e){var t=Math.floor(e/60),n=e%60;return"".concat(v(t),":").concat(v(n),":00")}function h(e){if(!e||!e.length)return[];e.sort((function(e,t){return e[0]-t[0]}));for(var t=[Object(i.a)(e[0])],n=1;n<e.length;n++)t[t.length-1][1]>=e[n][0]?t[t.length-1][1]=Math.max(t[t.length-1][1],e[n][1]):t.push(Object(i.a)(e[n]));return t}function b(e,t){var n=e[1]-e[0]+(t[1]-t[0]);if(Math.max(e[1],t[1])-Math.min(e[0],t[0])<n)return[Math.max(e[0],t[0]),Math.min(e[1],t[1])]}n(31),n(32);var p="Slice";function E(e){document.body.style.cursor=e}var O=c.a.memo((function(e){var t=e.className,n=e.steps,r=e.value,o=e.parentWidth,l=e.onChange,i=Object(a.useRef)(r),m=Object(a.useState)(!1),d=Object(s.a)(m,2),v=d[0],f=d[1];Object(a.useMemo)((function(){i.current=r}),[r]);var h=Object(s.a)(i.current,2),b=h[0],O=h[1],j=Object(a.useMemo)((function(){return{left:"".concat(b/n*100,"%"),right:"".concat(100*(1-O/n),"%")}}),[O,b,n]),g=Object(a.useCallback)((function(){f((function(e){return!e}))}),[]),N=Object(a.useCallback)((function(e){e.stopPropagation();var t=e.currentTarget.dataset.type,a=e.clientX;function c(e){var c=e.clientX,r=Math.floor((c-a)/o*n),u=i.current[0],s=i.current[1];a=c,"left"===t?(u+=r,u=Math.min(Math.max(0,u),s)):(s+=r,s=Math.min(n,Math.max(s,u))),E("w-resize"),i.current=[u,s],null===l||void 0===l||l(i.current)}document.addEventListener("mousemove",c),document.addEventListener("mouseup",(function e(t){t.stopPropagation(),null===l||void 0===l||l(i.current),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e),E("initial")}))}),[l,n,o]),y=Object(a.useCallback)((function(e){e.stopPropagation();var t=e.clientX,a=!1;function c(e){var c=e.clientX,r=Math.floor((c-t)/o*n),u=i.current[0],s=i.current[1];t=c,s+=r;var m=0;(u+=r)<0&&(m=Math.abs(u)),s>n&&(m=n-s),u+=m,s+=m,i.current=[u,s],a=!0,E("grabbing"),null===l||void 0===l||l(i.current)}document.addEventListener("mousemove",c),document.addEventListener("mouseup",(function e(){E("initial"),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e),a?null===l||void 0===l||l(i.current):g()}))}),[l,o,n,g]);return c.a.createElement("div",{style:j,className:u()("".concat(p),t,{"is-active":v}),onMouseDown:y},c.a.createElement("span",{className:u()("".concat(p,"-leftDrag"),{"is-visible":v}),"data-type":"left",onMouseDown:N}),c.a.createElement("span",{className:u()("".concat(p,"-rightDrag"),{"is-visible":v}),"data-type":"right",onMouseDown:N}))})),j=n(10),g=(n(34),c.a.memo((function(e){var t=e.steps,n=e.value,r=Object(s.a)(n,2),o=r[0],l=r[1],u=Object(a.useMemo)((function(){return{left:"".concat(o/t*100,"%"),right:"".concat(100*(1-l/t),"%")}}),[l,o,t]);return c.a.createElement("div",{style:u,className:"Overlap"})}))),N="Slider",y=c.a.memo((function(e){var t=e.className,n=e.steps,r=void 0===n?1440:n,o=e.value,l=e.onChange,i=e.index,m=e.overlap,d=e.onDelete,v=Object(a.useRef)(null),h=Object(a.useState)(0),b=Object(s.a)(h,2),p=b[0],E=b[1];Object(a.useEffect)((function(){if(v.current){var e=v.current.getBoundingClientRect().width;E(e)}}),[]);var y,C=Object(a.useCallback)((function(e){e&&(null===l||void 0===l||l(e))}),[l]);return c.a.createElement("div",{className:u()("".concat(N),t)},c.a.createElement("div",{className:u()("".concat(N,"-body"),t),ref:v},o&&c.a.createElement(O,{value:o,steps:r,parentWidth:p,onChange:C}),Object(j.map)(m,(function(e,t){return c.a.createElement(g,{key:t,value:e,steps:r})}))),c.a.createElement("div",{className:"".concat(N,"-footer")},c.a.createElement("span",null,i),c.a.createElement("span",{className:"".concat(N,"-time")},(y=o)?"".concat(f(y[0]),"~").concat(f(y[1])):""),c.a.createElement("span",{className:"".concat(N,"-delete"),onClick:d},"x")))})),C=(n(35),n(20)),k=n(9),M="VirtualizedList",R=Object(k.a)((function(e,t){return{list:e,render:t}})),x=c.a.memo((function(e){var t=e.data,n=e.index,a=e.style,r=t.list,o=t.render,l=r[n];return c.a.createElement("div",{style:a,key:n},o(l,n))}),C.b),w=c.a.memo((function(e){var t=e.className,n=e.list,r=e.render,o=e.height,l=e.onRendered,i=R(n,r),s=Object(a.useCallback)((function(e){l(e)}),[l]);return c.a.createElement("div",{className:u()("".concat(M),t)},c.a.createElement(C.a,{style:{overflow:"overlay"},className:"".concat(M,"-list"),height:o,itemCount:n.length,onItemsRendered:s,itemData:i,itemKey:function(e){return e},itemSize:function(){return 40},width:"100%"},x))})),S="SchedulePanel";var L=c.a.memo((function(e){var t=e.className,n=(e.onChange,Object(a.useRef)(10)),r=Object(a.useState)([]),o=Object(s.a)(r,2),l=o[0],m=o[1],v=Object(a.useState)([0,0]),f=Object(s.a)(v,2),p=f[0],E=f[1],O=Object(a.useCallback)((function(e,t){if(e.length){console.time("\u66f4\u65b0\u91cd\u53e0\u533a\u57df");for(var n=[],a=t[0],c=t[1],r=0;r<a;r++)n.push(e[r].value);for(var o=c+1;o<e.length;o++)n.push(e[o].value);for(var l=h(n),u=function(t){for(var n=[],r=a;r<=c;r++)if(r!==t){var o=b(e[t].value,e[r].value);o&&n.push(o)}Object(j.forEach)(l,(function(a){var c=b(e[t].value,a);c&&n.push(c)}));var u=h(n);e[t].overlap=u},s=a;s<=c;s++)u(s);console.timeEnd("\u66f4\u65b0\u91cd\u53e0\u533a\u57df"),m(Object(i.a)(e))}}),[]),g=Object(a.useCallback)((function(e){var t=e.visibleStartIndex,n=e.visibleStopIndex;E([t,n]),O(l,[t,n])}),[l,O]),N=Object(a.useCallback)((function(e,t){m((function(n){return n[t].value=e,Object(i.a)(n)})),O(l,p)}),[l,O,p]),C=Object(a.useCallback)((function(e){m((function(t){return t.splice(e,1),Object(i.a)(t)}))}),[]),k=Object(a.useCallback)((function(e,t){return c.a.createElement(y,{className:"".concat(S,"-slide"),onChange:function(e){return N(e,t)},onDelete:function(){return C(t)},index:t,value:e.value,overlap:e.overlap,steps:1440})}),[N,C]),M=Object(a.useCallback)((function(){m((function(e){var t=[].concat(Object(i.a)(e),[{overlap:[],value:[0,480]}]);return setTimeout((function(){O(t,p)}),0),t}))}),[O,p]),R=Object(a.useCallback)((function(e){n.current=parseInt(e.target.value)}),[]);return c.a.createElement("div",{className:u()("".concat(S),t)},c.a.createElement("div",{className:"".concat(S,"-reset")},c.a.createElement("span",null,"\u521d\u59cb\u5316\uff1a"),c.a.createElement("input",{type:"text",placeholder:"\u5217\u8868\u957f\u5ea6",onChange:R}),c.a.createElement("div",{onClick:function(){for(var e=[],t=0;t<n.current;t++)e.push({overlap:[],value:[0,480]});m(e)}},"\u91cd\u7f6e")),c.a.createElement("div",{className:"".concat(S,"-header")},c.a.createElement(d,{className:"".concat(S,"-scale"),max:24,min:0,step:1}),c.a.createElement("div",{className:"".concat(S,"-footer")},c.a.createElement("div",{className:"".concat(S,"-add"),onClick:M},"+"))),c.a.createElement(w,{height:600,list:l,render:k,onRendered:g}))})),P=c.a.memo((function(e){var t=e.className;return c.a.createElement("div",{className:u()("".concat("MeetPage"),t)},c.a.createElement(L,null))})),D=n(16),I=n(3),T=n(19),V=function e(t,n){if(t&&(null===n||void 0===n?void 0:n.length)){var a=Object(j.find)(n,(function(e){return e.path===(null===t||void 0===t?void 0:t.lastChildRoutePath)}))||n[0];return e(a,a.children)}return(null===t||void 0===t?void 0:t.path)||""},X=c.a.memo((function(e){var t=e.route,n=e.routes,a=(e.location||{}).pathname,r=V(t,n);return r!==a?c.a.createElement(I.a,{to:r||Q}):c.a.createElement(I.a,{to:Q})})),z=function e(t,n,a){var r=n?c.a.createElement(I.d,null,Object(j.map)(n,(function(n,a){return e(n,n.children,t)})),c.a.createElement(X,{routes:n,route:t})):null;return c.a.createElement(B,Object.assign({childrenRender:r},t,{route:t,parentRoute:a,childRoutes:n}))},B=c.a.memo((function(e){var t=e.childrenRender,n=e.route,a=e.parentRoute,r=e.childRoutes,o=e.layout,l=e.layoutProps,u=(e.children,e.component),i=Object(T.a)(e,["childrenRender","route","parentRoute","childRoutes","layout","layoutProps","children","component"]);return a&&!a.ignoreCache&&(a.lastChildRoutePath=null===n||void 0===n?void 0:n.path),n?!r&&u?o?c.a.createElement(J,Object.assign({},i,{render:function(){return c.a.createElement(o,Object.assign({route:n},l),c.a.createElement(u,i))}})):c.a.createElement(J,Object.assign({},i,{render:function(){return c.a.createElement(u,i)}})):r&&o?c.a.createElement(J,Object.assign({},i,{render:function(){return c.a.createElement(o,Object.assign({childRoutes:r,route:n},l),t)}})):t:t})),J=function(e){var t=e.render,n=Object(T.a)(e,["render"]);return c.a.createElement(I.b,Object.assign({},n,{render:t}))},W=(n(43),"Layout"),_=c.a.memo((function(e){e.title,e.childRoutes;var t=e.children;return c.a.createElement("div",{className:u()("".concat(W))},c.a.createElement("div",{className:"".concat(W,"-body")},c.a.createElement("div",{className:"".concat(W,"-bodyRight")},t)))})),F=(n(44),n(45),"Folder"),H=c.a.memo((function(e){var t=e.className,n=e.children,r=Object(a.useState)(!1),o=Object(s.a)(r,2),l=o[0],i=o[1];return c.a.createElement("div",{className:u()("".concat(F),t)},c.a.createElement("div",{className:"".concat(F,"-foldBtn"),onClick:function(){i((function(e){return!e}))}},l?"\u5c55\u5f00":"\u6536\u8d77"),l?null:c.a.createElement("div",{className:"".concat(F,"-body")},n))})),K="MdView",q=c.a.memo((function(e){var t=e.className,n=e.md,a=e.view;return c.a.createElement("div",{className:u()("".concat(K),t)},c.a.createElement(H,{className:"".concat(K,"-body")},a),n&&c.a.createElement(H,{className:"".concat(K,"-md")},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))})),A="/react-markdown";function G(e){return"".concat(A).concat(e)}var Q=G("/home"),U=[{path:A,layout:_,layoutProps:{title:""},ignoreCache:!0,children:[{path:G("/meet"),name:"\u4f1a\u8bae\u9884\u5b9a",component:function(){return c.a.createElement(q,{view:c.a.createElement(P,null)})}}]}],Y=function(){return c.a.createElement(D.a,null,c.a.createElement(I.d,null,z(void 0,U),c.a.createElement(I.a,{to:Q})))},Z=(n(46),c.a.memo((function(e){return c.a.createElement(Y,null)})));o.a.render(c.a.createElement(Z,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.71198750.chunk.js.map