(this["webpackJsonpreact-markdown"]=this["webpackJsonpreact-markdown"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),l=a(1),u=a.n(l),i=(a(29),a(11)),s=a(5),m=(a(30),"Scale"),d=c.a.memo((function(e){var t=e.max,a=e.min,r=e.step,o=e.className,l=Object(n.useMemo)((function(){for(var e=[],n=a,c=0;n<=t;)e.push({value:n,length:n/t,text:n,textVisible:!(c%2)}),c++,n+=r;return e}),[t,a,r]);return c.a.createElement("div",{className:u()(o,"".concat(m))},l.map((function(e,t){return c.a.createElement("div",{key:t,className:"".concat(m,"-pin"),style:{position:"absolute",left:"".concat(100*e.length,"%"),bottom:0}},c.a.createElement("span",{className:u()("".concat(m,"-pinText"),{"is-visible":e.textVisible})},e.text))})))}));function v(e){var t="00"+e;return t.slice(t.length-2)}function f(e){var t=Math.floor(e/60),a=e%60;return"".concat(v(t),":").concat(v(a),":00")}function h(e){if(!e||!e.length)return[];e.sort((function(e,t){return e[0]-t[0]}));for(var t=[Object(i.a)(e[0])],a=1;a<e.length;a++)t[t.length-1][1]>=e[a][0]?t[t.length-1][1]=Math.max(t[t.length-1][1],e[a][1]):t.push(Object(i.a)(e[a]));return t}function b(e,t){var a=e[1]-e[0]+(t[1]-t[0]);if(Math.max(e[1],t[1])-Math.min(e[0],t[0])<a)return[Math.max(e[0],t[0]),Math.min(e[1],t[1])]}a(31),a(32);var p="Slice";function E(e){document.body.style.cursor=e}for(var O=c.a.memo((function(e){var t=e.className,a=e.steps,r=e.value,o=e.parentWidth,l=e.onChange,i=(function(){var e=Object(n.useReducer)((function(e){return e+1}),0,(function(e){return e}));Object(s.a)(e,2)[1]}(),Object(n.useRef)(r)),m=Object(n.useState)(!1),d=Object(s.a)(m,2),v=d[0],f=d[1];Object(n.useMemo)((function(){i.current=r}),[r]);var h=Object(s.a)(i.current,2),b=h[0],O=h[1],j=Object(n.useMemo)((function(){return{left:"".concat(b/a*100,"%"),right:"".concat(100*(1-O/a),"%")}}),[O,b,a]),N=Object(n.useCallback)((function(e){e.stopPropagation(),f((function(e){return!e}))}),[]),g=Object(n.useCallback)((function(e){e.stopPropagation();var t=e.currentTarget.dataset.type,n=e.clientX;function c(e){var c=e.clientX,r=Math.floor((c-n)/o*a),u=i.current[0],s=i.current[1];n=c,"left"===t?(u+=r,u=Math.min(Math.max(0,u),s)):(s+=r,s=Math.min(a,Math.max(s,u))),E("w-resize"),i.current=[u,s],null===l||void 0===l||l(i.current)}document.addEventListener("mousemove",c),document.addEventListener("mouseup",(function e(){null===l||void 0===l||l(i.current),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e),E("initial")}))}),[l,a,o]),y=Object(n.useCallback)((function(e){e.stopPropagation();var t=e.clientX;function n(e){var n=e.clientX,c=Math.floor((n-t)/o*a),r=i.current[0],u=i.current[1];t=n,u+=c;var s=0;(r+=c)<0&&(s=Math.abs(r)),u>a&&(s=a-u),r+=s,u+=s,i.current=[r,u],null===l||void 0===l||l(i.current)}document.addEventListener("mousemove",n),document.addEventListener("mouseup",(function e(){null===l||void 0===l||l(i.current),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e),E("initial")}))}),[l,o,a]);return c.a.createElement("div",{style:j,className:u()("".concat(p),t,{"is-active":v}),onMouseDown:y,onClick:N},c.a.createElement("span",{className:u()("".concat(p,"-leftDrag"),{"is-visible":v}),"data-type":"left",onMouseDown:g}),c.a.createElement("span",{className:u()("".concat(p,"-rightDrag"),{"is-visible":v}),"data-type":"right",onMouseDown:g}))})),j=a(8),N=(a(34),c.a.memo((function(e){var t=e.steps,a=e.value,r=Object(s.a)(a,2),o=r[0],l=r[1],u=Object(n.useMemo)((function(){return{left:"".concat(o/t*100,"%"),right:"".concat(100*(1-l/t),"%")}}),[l,o,t]);return c.a.createElement("div",{style:u,className:"Overlap"})}))),g="Slider",y=c.a.memo((function(e){var t=e.className,a=e.steps,r=void 0===a?1440:a,o=e.value,l=e.onChange,i=e.overlap,m=e.onDelete,d=Object(n.useRef)(null),v=Object(n.useState)(0),h=Object(s.a)(v,2),b=h[0],p=h[1];Object(n.useEffect)((function(){if(d.current){var e=d.current.getBoundingClientRect().width;p(e)}}),[]);var E,y=Object(n.useCallback)((function(e){e&&(null===l||void 0===l||l(e))}),[l]);return c.a.createElement("div",{className:u()("".concat(g),t)},c.a.createElement("div",{className:u()("".concat(g,"-body"),t),ref:d},o&&c.a.createElement(O,{value:o,steps:r,parentWidth:b,onChange:y}),Object(j.map)(i,(function(e,t){return c.a.createElement(N,{key:t,value:e,steps:r})}))),c.a.createElement("div",{className:"".concat(g,"-footer")},c.a.createElement("span",{className:"".concat(g,"-time")},(E=o)?"".concat(f(E[0]),"~").concat(f(E[1])):""),c.a.createElement("span",{className:"".concat(g,"-delete"),onClick:m},"x")))})),C=(a(35),a(24)),M=a(10),k="VirtualizedList",R=Object(M.a)((function(e,t){return{list:e,render:t}})),x=c.a.memo((function(e){var t=e.data,a=e.index,n=e.style,r=t.list,o=t.render,l=r[a];return c.a.createElement("div",{style:n,key:a},o(l,a))})),w=c.a.memo((function(e){var t=e.className,a=e.list,r=e.render,o=e.height,l=e.onRendered,i=R(a,r),s=Object(n.useCallback)((function(e){l(e)}),[l]);return c.a.createElement("div",{className:u()("".concat(k),t)},c.a.createElement(C.a,{style:{overflow:"overlay"},className:"".concat(k,"-list"),height:o,itemCount:a.length,onItemsRendered:s,itemData:i,itemKey:function(e){return e},itemSize:function(){return 40},width:"100%"},x))})),S="SchedulePanel",L=[],P=0;P<1e3;P++)L.push({overlap:[],value:[0,480]});var D=c.a.memo((function(e){var t=e.className,a=(e.onChange,Object(n.useState)([])),r=Object(s.a)(a,2),o=r[0],l=r[1],m=Object(n.useState)([0,0]),v=Object(s.a)(m,2),f=v[0],p=v[1],E=Object(n.useCallback)((function(e,t){for(var a=[],n=0;n<e;n++)a.push(o[n].value);for(var c=t+1;c<o.length;c++)a.push(o[c].value);for(var r=h(a),u=function(a){for(var n=[],c=e;c<=t;c++)if(c!==a){var l=b(o[a].value,o[c].value);l&&n.push(l)}Object(j.forEach)(r,(function(e){var t=b(o[a].value,e);t&&n.push(t)}));var u=h(n);o[a].overlap=u},s=e;s<=t;s++)u(s);l(Object(i.a)(o))}),[o]),O=Object(n.useCallback)((function(e){var t=e.visibleStartIndex,a=e.visibleStopIndex;p([t,a]),E(t,a)}),[E]),N=Object(n.useCallback)((function(e,t){l((function(a){return a[t].value=e,Object(i.a)(a)})),E(f[0],f[1])}),[E,f]),g=Object(n.useCallback)((function(e){l((function(t){return t.splice(e,1),Object(i.a)(t)}))}),[]),C=Object(n.useCallback)((function(e,t){return c.a.createElement(y,{className:"".concat(S,"-slide"),onChange:function(e){return N(e,t)},onDelete:function(){return g(t)},value:e.value,overlap:e.overlap,steps:1440})}),[N,g]),M=Object(n.useCallback)((function(){l((function(e){return[].concat(Object(i.a)(e),[{overlap:[],value:[0,480]}])}))}),[]);return c.a.createElement("div",{className:u()("".concat(S),t)},c.a.createElement("div",null,c.a.createElement("div",{className:"".concat(S,"-header")},c.a.createElement(d,{className:"".concat(S,"-scale"),max:24,min:0,step:1}),c.a.createElement("div",{className:"".concat(S,"-footer")},c.a.createElement("div",{className:"".concat(S,"-add"),onClick:M},"+")))),c.a.createElement(w,{height:600,list:o,render:C,onRendered:O}))})),B=c.a.memo((function(e){var t=e.className;return c.a.createElement("div",{className:u()("".concat("MeetPage"),t)},c.a.createElement(D,null))})),I=a(13),T=a(2),V=a(19),X=function e(t,a){if(t&&(null===a||void 0===a?void 0:a.length)){var n=Object(j.find)(a,(function(e){return e.path===(null===t||void 0===t?void 0:t.lastChildRoutePath)}))||a[0];return e(n,n.children)}return(null===t||void 0===t?void 0:t.path)||""},z=c.a.memo((function(e){var t=e.route,a=e.routes,n=(e.location||{}).pathname,r=X(t,a);return r!==n?c.a.createElement(T.a,{to:r||$}):c.a.createElement(T.a,{to:$})})),J=function e(t,a,n){var r=a?c.a.createElement(T.d,null,Object(j.map)(a,(function(a,n){return e(a,a.children,t)})),c.a.createElement(z,{routes:a,route:t})):null;return c.a.createElement(W,Object.assign({childrenRender:r},t,{route:t,parentRoute:n,childRoutes:a}))},W=c.a.memo((function(e){var t=e.childrenRender,a=e.route,n=e.parentRoute,r=e.childRoutes,o=e.layout,l=e.layoutProps,u=(e.children,e.component),i=Object(V.a)(e,["childrenRender","route","parentRoute","childRoutes","layout","layoutProps","children","component"]);return n&&!n.ignoreCache&&(n.lastChildRoutePath=null===a||void 0===a?void 0:a.path),a?!r&&u?o?c.a.createElement(_,Object.assign({},i,{render:function(){return c.a.createElement(o,Object.assign({route:a},l),c.a.createElement(u,i))}})):c.a.createElement(_,Object.assign({},i,{render:function(){return c.a.createElement(u,i)}})):r&&o?c.a.createElement(_,Object.assign({},i,{render:function(){return c.a.createElement(o,Object.assign({childRoutes:r,route:a},l),t)}})):t:t})),_=function(e){var t=e.render,a=Object(V.a)(e,["render"]);return c.a.createElement(T.b,Object.assign({},a,{render:t}))},F=(a(43),a(44),"Mavigator"),H=c.a.memo((function(e){var t=e.className,a=e.childRoutes,r=function(e){var t=Object(T.g)(),a=Object(n.useMemo)((function(){return Object(j.find)(e,(function(e){return t.pathname.includes(e.path)}))}),[t.pathname,e]);return null===a||void 0===a?void 0:a.path}(a);return c.a.createElement("div",{className:u()("".concat(F),t)},a.map((function(e){return r===e.path?c.a.createElement("span",{className:u()("".concat(F,"-item"),"is-active")},e.name,c.a.createElement("div",{className:"".concat(F,"-activeBar")})):c.a.createElement(I.b,{className:u()("".concat(F,"-item")),key:e.path,to:e.path},e.name,c.a.createElement("div",{className:"".concat(F,"-activeBar")}))})))})),K="Layout",q=c.a.memo((function(e){var t=e.title,a=e.childRoutes,n=e.children;return c.a.createElement("div",{className:u()("".concat(K))},c.a.createElement("div",{className:"".concat(K,"-head")},c.a.createElement("span",{className:"".concat(K,"-headTitle")},t)),c.a.createElement("div",{className:"".concat(K,"-body")},c.a.createElement("div",{className:"".concat(K,"-bodyLeft")},c.a.createElement(H,{childRoutes:a})),c.a.createElement("div",{className:"".concat(K,"-bodyRight")},n)))})),A=(a(45),a(46),"Folder"),G=c.a.memo((function(e){var t=e.className,a=e.children,r=Object(n.useState)(!1),o=Object(s.a)(r,2),l=o[0],i=o[1];return c.a.createElement("div",{className:u()("".concat(A),t)},c.a.createElement("div",{className:"".concat(A,"-foldBtn"),onClick:function(){i((function(e){return!e}))}},l?"\u5c55\u5f00":"\u6536\u8d77"),l?null:c.a.createElement("div",{className:"".concat(A,"-body")},a))})),Q="MdView",U=c.a.memo((function(e){var t=e.className,a=e.md,n=e.view;return c.a.createElement("div",{className:u()("".concat(Q),t)},c.a.createElement(G,{className:"".concat(Q,"-body")},n),a&&c.a.createElement(G,{className:"".concat(Q,"-md")},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))})),Y="/react-markdown";function Z(e){return"".concat(Y).concat(e)}var $=Z("/home"),ee=[{path:Y,layout:q,layoutProps:{title:""},ignoreCache:!0,children:[{path:Z("/meet"),name:"\u4f1a\u8bae\u9884\u5b9a",component:function(){return c.a.createElement(U,{view:c.a.createElement(B,null)})}}]}],te=function(){return c.a.createElement(I.a,null,c.a.createElement(T.d,null,J(void 0,ee),c.a.createElement(T.a,{to:$})))},ae=(a(47),c.a.memo((function(e){return c.a.createElement(te,null)})));o.a.render(c.a.createElement(ae,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.cf9c0c59.chunk.js.map