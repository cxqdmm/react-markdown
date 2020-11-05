(this["webpackJsonpreact-markdown"]=this["webpackJsonpreact-markdown"]||[]).push([[0],{18:function(e,t){e.exports="<p>\u8fd9\u4e2a\u535a\u5ba2\u4e3b\u8981\u7528\u6765\u8bb0\u5f55 react \u5b66\u4e60\u4e2d\u9047\u5230\u7684\u70b9\u70b9\u6ef4\u6ef4\uff0c\u5de9\u56fa\u77e5\u8bc6\u70b9\u3002</p> <hr> "},19:function(e,t){e.exports='<h1 id="useeffect\u3001uselayouteffect">useEffect\u3001useLayoutEffect</h1> <hr> <p>useEffect \u7684\u4f5c\u7528\u548c componentDidMount \u4ee5\u53ca componentDidUpdate \u6709\u70b9\u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 useEffect \u7684\u7c92\u5ea6\u66f4\u7ec6\uff0c\u53ef\u4ee5\u5728 useEffect \u4e2d\u63a7\u5236\u4e00\u4e2a\u6d41\u7a0b\u7684\u53d1\u8d77\u548c\u9500\u6bc1\u3002\u5177\u4f53\u7528\u6cd5\u53ef\u4ee5\u67e5\u770b<a href="https://zh-hans.reactjs.org/docs/hooks-effect.html">\u5b98\u7f51</a>,\u8fd9\u91cc\u4e3b\u8981\u8ba8\u8bba\u4e0b useEffect \u548c componentDidMount/componentDidUpdate \u7684\u533a\u522b \u4ee5\u53ca useEffect \u548c useLayoutEffect \u7684\u533a\u522b\u3002</p> <h2 id="useeffect-vs-componentdidmountcomponentdidupdate">useEffect vs componentDidMount/componentDidUpdate</h2> <p>componentDidMount \u662f class \u7ec4\u4ef6\u521d\u6b21\u6e32\u67d3\u7ed3\u675f\u65f6\u6267\u884c\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u662f\u5728 react \u7684 commit \u9636\u6bb5\uff0c\u7d27\u63a5\u7740\u7ec4\u4ef6\u6e32\u67d3\u5b8c\u540e\u6267\u884c\u7684\uff0c\u4f1a\u963b\u585e\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\uff0c\u5982\u679c\u5728\u5176\u4e2d\u6267\u884c\u8017\u65f6\u7684\u4efb\u52a1\uff0c\u90a3\u5728\u8017\u65f6\u4efb\u52a1\u7ed3\u675f\u524d\uff0c\u9875\u9762\u662f\u770b\u4e0d\u5230\u66f4\u65b0\u7684\uff0ccomponentDidUpdate \u548c componentDidMount \u7684\u884c\u4e3a\u5dee\u4e0d\u591a\uff0c\u53ea\u662f\u6267\u884c\u7684\u65f6\u673a\u4e0d\u662f\u521d\u6b21\u6e32\u67d3\u3002</p> <p>useEffect \u6709\u4e09\u4e2a\u91cd\u8981\u7684\u7ec4\u6210\uff0c\u5904\u7406\u51fd\u6570\u3001\u4f9d\u8d56\u3001\u9500\u6bc1\u51fd\u6570\uff08\u5904\u7406\u51fd\u6570\u8fd4\u56de\u7684\u51fd\u6570\uff09\uff0c\u6bcf\u5f53\u4f9d\u8d56\u53d1\u751f\u53d8\u5316\u90fd\u4f1a\u5148\u6267\u884c\u4e0a\u4e00\u6b21\u751f\u6210\u7684\u9500\u6bc1\u51fd\u6570\u518d\u6267\u884c\u65b0\u7684\u5904\u7406\u51fd\u6570\u3002</p> <p><strong>useEffect \u4e0d\u4f1a\u963b\u585e\u6d4f\u89c8\u5668\u7684\u6e32\u67d3</strong>\uff0c\u56e0\u4e3a useEffect \u662f\u7b49\u5230 commit \u5b8c\u6210\u540e\uff0c\u518d\u5728\u53e6\u4e00\u4e2a\u5b8f\u4efb\u52a1\u4e2d\u6267\u884c\u7684\uff0c\u8fd9\u4e2a\u5b8f\u4efb\u52a1\u662f\u901a\u8fc7 messageChannel \u7684 postMessage \u89e6\u53d1\u7684 j \u5177\u4f53\u7ec6\u8282\u53ef\u67e5\u770b react schedule \u6a21\u5757\u7684\u5b9e\u73b0\u3002</p> <h2 id="useeffect-vs-uselayouteffect">useEffect vs useLayoutEffect</h2> <p>\u4e8b\u5b9e\u4e0a\u767e\u5206\u4e4b 99%\u7684\u573a\u666f\u4f7f\u7528 useEffect \u548c useLayoutEffect \u7684\u6548\u679c\u662f\u4e00\u6837\u7684, \u4e0d\u540c\u70b9\u662f\uff0cuseLayoutEffect \u7684\u8868\u73b0\u548c componentDidUpdate \u4e00\u6837\uff0c\u4f1a\u963b\u585e\u6d4f\u89c8\u5668\u7684\u6e32\u67d3,\u5177\u4f53\u53ef\u53c2\u8003<a href="https://codesandbox.io/s/useeffect-vs-uselayouteffect-gtvim">useEffect</a>,\u53ef\u4ee5\u53d1\u73b0\u4f7f\u7528 useEffect \u65f6\u7ea2\u8272\u6570\u5b57 1 \u4f1a\u4e00\u95ea\u800c\u8fc7\uff0cuseLayoutEffect \u4e0d\u4f1a\u51fa\u73b0\u8fd9\u79cd\u73b0\u8c61\u3002</p> <p><img src="/react-markdown/assets/useEffect.png" alt="github" width="80%" style="margin:auto;display:block"></p> '},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(17),r=n.n(o),u=n(18),s=n.n(u),i=n(19),l=n.n(i),m=n(21),f=n(6),d=n.n(f),p=c.a.memo((function(e){var t=e.className,n=Object(a.useState)(0),o=Object(m.a)(n,2),r=o[0],u=o[1];Object(a.useEffect)((function(){return console.log(r),function(){console.log("unmount effect")}}),[r]);var s=Object(a.useCallback)((function(){u(r+1)}),[r]);return c.a.createElement("div",{className:d()("".concat("useEffectView"),t),onClick:s},r)})),h=n(10),E=n(1),v=n(14),b=n(8),g=function e(t,n){if(t&&(null===n||void 0===n?void 0:n.length)){var a=Object(b.find)(n,(function(e){return e.path===(null===t||void 0===t?void 0:t.lastChildRoutePath)}))||n[0];return e(a,a.children)}return(null===t||void 0===t?void 0:t.path)||""},y=c.a.memo((function(e){var t=e.route,n=e.routes,a=(e.location||{}).pathname,o=g(t,n);return o!==a?c.a.createElement(E.a,{to:o||U}):c.a.createElement(E.a,{to:U})})),j=function e(t,n,a){var o=n?c.a.createElement(E.d,null,Object(b.map)(n,(function(n,a){return e(n,n.children,t)})),c.a.createElement(y,{routes:n,route:t})):null;return c.a.createElement(O,Object.assign({childrenRender:o},t,{route:t,parentRoute:a,childRoutes:n}))},O=c.a.memo((function(e){var t=e.childrenRender,n=e.route,a=e.parentRoute,o=e.childRoutes,r=e.layout,u=e.layoutProps,s=(e.children,e.component),i=Object(v.a)(e,["childrenRender","route","parentRoute","childRoutes","layout","layoutProps","children","component"]);return a&&!a.ignoreCache&&(a.lastChildRoutePath=null===n||void 0===n?void 0:n.path),n?!o&&s?r?c.a.createElement(N,Object.assign({},i,{render:function(){return c.a.createElement(r,Object.assign({route:n},u),c.a.createElement(s,i))}})):c.a.createElement(N,Object.assign({},i,{render:function(){return c.a.createElement(s,i)}})):o&&r?c.a.createElement(N,Object.assign({},i,{render:function(){return c.a.createElement(r,Object.assign({childRoutes:o,route:n},u),t)}})):t:t})),N=function(e){var t=e.render,n=Object(v.a)(e,["render"]);return c.a.createElement(E.b,Object.assign({},n,{render:t}))},R=(n(34),n(35),"Mavigator"),k=c.a.memo((function(e){var t=e.className,n=e.childRoutes,o=function(e){var t=Object(E.g)(),n=Object(a.useMemo)((function(){return Object(b.find)(e,(function(e){return t.pathname.includes(e.path)}))}),[t.pathname,e]);return null===n||void 0===n?void 0:n.path}(n);return c.a.createElement("div",{className:d()("".concat(R),t)},n.map((function(e){return o===e.path?c.a.createElement("span",{className:d()("".concat(R,"-item"),"is-active")},e.name,c.a.createElement("div",{className:"".concat(R,"-activeBar")})):c.a.createElement(h.b,{className:d()("".concat(R,"-item")),key:e.path,to:e.path},e.name,c.a.createElement("div",{className:"".concat(R,"-activeBar")}))})))})),w="Layout",D=c.a.memo((function(e){var t=e.title,n=e.childRoutes,a=e.children;return c.a.createElement("div",{className:d()("".concat(w))},c.a.createElement("div",{className:"".concat(w,"-head")},c.a.createElement("span",{className:"".concat(w,"-headTitle")},t)),c.a.createElement("div",{className:"".concat(w,"-body")},c.a.createElement("div",{className:"".concat(w,"-bodyLeft")},c.a.createElement(k,{childRoutes:n})),c.a.createElement("div",{className:"".concat(w,"-bodyRight")},a)))})),M=(n(36),"MdView"),L=c.a.memo((function(e){var t=e.className,n=e.md;e.view;return c.a.createElement("div",{className:d()("".concat(M),t)},!1,c.a.createElement("div",{className:"".concat(M,"-md"),dangerouslySetInnerHTML:{__html:n}}))})),C="/react-markdown";function P(e){return"".concat(C).concat(e)}var U=P("/home"),x=[{path:C,layout:D,layoutProps:{title:"react \u89e3\u6790"},ignoreCache:!0,children:[{path:U,name:"home",component:function(){return c.a.createElement(L,{md:s.a})}},{path:P("/useEffect"),name:"useEffect",component:function(){return c.a.createElement(L,{md:l.a,view:c.a.createElement(p,null)})}}]}],B=function(){return c.a.createElement(h.a,null,c.a.createElement(E.d,null,j(void 0,x),c.a.createElement(E.a,{to:U})))},I=(n(37),c.a.memo((function(e){return c.a.createElement(B,null)})));r.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8c9a8c26.chunk.js.map