(this["webpackJsonpgodraft-front"]=this["webpackJsonpgodraft-front"]||[]).push([[0],{176:function(e,t,n){e.exports=n(526)},181:function(e,t,n){},526:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=(n(181),n(77)),l=n(69),u=n(60),s=n(153),m=(n(182),{processing:102,ok:200,accepted:202,non_authoritative:203,partial:206,move:301,notmodified:304,invalid:400,payment_required:402,denied:403,notfound:404,unacceptable:406,timeout:408,conflict:409,expectation_failed:417,unprocessable:422,locked:423,failed_dependency:424,upgrade_required:426,many_requests:429,retry_with:449,unavailable_for_legal_reasons:451,fail:500,not_implemented:501,unavaliable:503,insufficient:507}),d=n(154);n(391);function f(e){var t=a.useRef(null),n=e.value;return a.useEffect((function(){d.highlightBlock(t.current)}),[n]),a.createElement("pre",null,a.createElement("code",{ref:t,className:"javascript",dangerouslySetInnerHTML:{__html:n}}))}var p=n(120),h=n(529),v=n(540),E=n(530),g=n(535),y=n(536),b=n(534),w=n(531),j=n(533),k=n(538),S=n(541),O=n(532),_=n(539),C=n(162),x=n.n(C),I=n(167),P=n.n(I),q=n(537),R=p.a.SubMenu,N=h.a.Header,A=h.a.Content,F=h.a.Sider,M=a.createContext({}),T={};function H(e){var t=e.sitemap,n=e.activeProject,r=a.useMemo((function(){return Object(l.a)({search:"",activeProject:n,activeEndpoint:""},J(t))}),[]),c=a.useState(r),o=Object(u.a)(c,2),s=o[0],m=o[1],d={state:s,updateState:function(e,t){m(Object(l.a)({},s,Object(i.a)({},e,t)))}};a.useEffect((function(){var e=setTimeout((function(){var e,t=s.activeProject?s.activeProject.id:"",n=null===(e=s.activeProject)||void 0===e?void 0:e.name;s.activeEndpoint&&(t+=":".concat(s.activeEndpoint),n+=s.activeEndpoint),s.queryString&&(t+="?".concat(s.queryString)),window.location.hash=t,n&&(window.document.title=n)}),250);return function(){clearTimeout(e)}}),[window.location.hash,s]),a.useEffect((function(){var e=function(){m(Object(l.a)({},s,{},J(t)))};return window.addEventListener("hashchange",e),function(){window.removeEventListener("hashchange",e)}}),[]);var f=a.useRef(!0);return a.useEffect((function(){var e=document.querySelector('[id="'.concat(decodeURIComponent(window.location.hash),'"]'));requestAnimationFrame((function(){e&&e.scrollIntoView({behavior:f.current?"auto":"smooth"}),f.current=!1}))}),[window.location.hash]),t.length?a.createElement(M.Provider,{value:d},a.createElement(z,{sitemap:t})):a.createElement("div",{style:{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}},a.createElement(E.a,{size:"large"}))}function J(e){var t=window.location.hash.match(/^#?([\w-]+)(?::([^?]+)(?:\?(.*))?)?/i)||[],n=Object(u.a)(t,4),a=(n[0],n[1]),r=n[2],c=n[3];return{activeProject:e.find((function(e){return e.id===a}))||e[0],activeEndpoint:r||"",queryString:c||""}}function L(){return a.useContext(M)}var z=function(e){var t=e.sitemap,n=L(),r=n.state,c=n.updateState,o=r.activeProject,i=r.activeEndpoint;return a.createElement(h.a,{style:{height:"100%"}},a.createElement(N,{className:"header"},a.createElement(h.a,null,a.createElement(F,{width:150},a.createElement("img",{height:"32",src:"https://img.imgsmail.ru/pm/1.0.3/blocks/ph-logo/img/logotype-mail.ru@2x.png"})),a.createElement(A,null,a.createElement(p.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:o&&[o.id]},t.map((function(e){return a.createElement(p.a.Item,{key:e.id},e.name)})))),a.createElement(F,{width:200},a.createElement(g.a.Search,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0430\u043c",value:r.search,onChange:function(e){c("search",e.target.value)}})))),a.createElement(h.a,null,a.createElement(F,{className:"site-layout-background"},a.createElement(D,{root:o?o.entries:[],selected:i})),a.createElement(A,{className:"site-layout-background",style:{margin:20,minHeight:280}},!r.search&&i?a.createElement(B,{id:i}):a.createElement(V,{root:o?o.entries:[]}))))};function B(e){var t=e.id,n=L().state.activeProject,r=a.useMemo((function(){var e=null;return n&&n.entries.some((function n(a){return X(a)===t?(e=a,!0):a.entries.some(n)})),e}),[n,t]);if(!r)return a.createElement(v.a,{status:"error",title:"\u041e\u0448\u0438\u0431\u043a\u0430: \xab".concat(t,"\xbb \u2014 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")});var c=r.scheme;return a.createElement(a.Fragment,null,a.createElement(y.a,{style:{marginBottom:20}},a.createElement(y.a.Item,null,null===n||void 0===n?void 0:n.name),c.project&&a.createElement(y.a.Item,null,c.project),a.createElement(y.a.Item,null,c.name)),c.description&&a.createElement(b.a,{style:{fontSize:"120%"}},a.createElement(x.a,null,c.description)),a.createElement("ul",null,c.cases.map((function(e,t){return a.createElement("li",{key:t},a.createElement("a",{href:G(n,r,e)},e.name),"\xa0",a.createElement(W,{name:e.status,badge:!0}))}))),a.createElement(w.a,{direction:"vertical",style:{width:"100%"}},c.cases.map((function(e,t){return a.createElement(U,{key:t,project:n,entry:r,value:e})}))))}function G(e,t,n){return"".concat(function(e,t){var n;return"#".concat(e.id).concat(t?":".concat((null===(n=t.scheme)||void 0===n?void 0:n.project)||"").concat(t.name):"")}(e,t),"?case=").concat(n.name)}function K(e){var t=e.type,n=e.meta_type,a=e.enum;switch(t){case"struct":return"object";case"slice":return"".concat(a?"Enum<".concat(a.join(" | "),">"):n,"[]")}return t}function U(e){var t=e.entry,n=e.value,r=e.project,c=t.scheme.detail[n.status],o=Object.entries(n.params).map((function(e){var t=Object(u.a)(e,2),n=t[0],r=t[1],o=c.request.params[n],i="".concat(n).concat(o.required?"":"?");return a.createElement("div",{key:n},a.createElement("div",null,"/* ",o.comment,". ",a.createElement("b",null,K(o))," */"),a.createElement("b",null,i),"=","boolean"===typeof r?JSON.stringify(r):r)})),i=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(null==n||"object"!==typeof n)return JSON.stringify(n);var r=a+"  ";return"{\n".concat(Object.entries(n).map((function(n){var c=Object(u.a)(n,2),o=c[0],i=c[1],l=t[o],s=l&&l.nested;s&&s.length?i=e(s.reduce((function(e,t){return e[t.name]=t,e}),{}),i,a+a):i=JSON.stringify(i);return["".concat(r,"/* ").concat(l.comment,". <b>").concat(K(l),"</b> */"),"".concat(r,'"').concat(o,'": ').concat(i)].join("\n")})).join(",\n"),"\n").concat(a,"}")}(c.response.body,n.body,"  "),l="ok"===n.status,s=G(r,t,n);return a.createElement(j.a,{style:l?{}:{borderColor:"#ffa39e"},title:a.createElement(a.Fragment,null,a.createElement("div",{id:s,style:{position:"relative",top:-20}}),a.createElement("span",{style:{position:"absolute",right:20,cursor:"pointer"},onClick:function(){window.location.hash=s,function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection(),a=[];if(n)for(var r=0;r<(n.rangeCount||0);r++)a.push(n.getRangeAt(r));if(t.select(),document.execCommand("copy"),document.body.removeChild(t),a.length){var c=document.getSelection();c&&(c.removeAllRanges(),a.forEach((function(e){c.addRange(e)})))}}(window.location.toString()),k.a.success("Copied",.4)}},a.createElement(q.a,null)),a.createElement("a",{href:s},n.name),a.createElement("br",null),a.createElement(W,{name:n.status}),a.createElement(S.a,null,n.method),a.createElement("span",null," \u2192 \xa0",t.name))},n.description&&a.createElement(a.Fragment,null,a.createElement(P.a,null,n.description),a.createElement(O.a,null)),a.createElement("div",{style:{background:"#fafafa",margin:-24,padding:24}},o),a.createElement("br",null),a.createElement("br",null),a.createElement("div",null,a.createElement(f,{value:"{\n"+'  "status": '.concat(m[n.status],",\n")+'  "body": '.concat(i,"\n}")})))}function W(e){var t=e.name,n=e.badge,r="ok"===t?"success":"error",c=t.toUpperCase(),o=n?{borderRadius:5,fontSize:"50%",padding:"0 4px",lineHeight:"14px",verticalAlign:"super"}:void 0;return a.createElement(S.a,{color:r,style:o},c)}function D(e){var t=e.root,n=e.selected,r=L().updateState;var c=t.flatMap((function(e){return e.entries})),o=[],i=c.map((function e(t){if("G"===t.type)return o.push(t.name),a.createElement(R,{key:t.name,title:t.name},t.entries.map(e));if("E"===t.type)return a.createElement(p.a.Item,{key:X(t),title:t.scheme.description||t.scheme.name},t.scheme.name);if("HR"===t.type)return a.createElement(O.a,null);throw"not supproted: ".concat(t.type)}));return a.createElement(p.a,{mode:"inline",defaultOpenKeys:o,defaultSelectedKeys:[n],style:{height:"100%",borderRight:0},onSelect:function(e){r("activeEndpoint",e.key)}},i)}function V(e){var t=e.root,n=L().state.search,r=_.a.TreeNode,c=t.flatMap((function(e){return e.entries})),o=!0,i=c.map((function e(t){if("G"===t.type)return a.createElement(r,{key:t.name,title:t.name},t.entries.map(e));if("E"===t.type){var c=Q(t.name,n),i=Q(t.scheme.name,n);return null===c&&null===i?null:(o=!1,a.createElement(r,{key:t.name,title:a.createElement(a.Fragment,null,a.createElement("a",{href:"#"},c||t.name),a.createElement("span",null," \u2014 ",i||t.scheme.name))}))}throw"not supproted: ".concat(t.type)}));return a.createElement(j.a,{title:"\u0412\u0441\u0435 \u043c\u0435\u0442\u043e\u0434\u044b"},o?a.createElement(v.a,{status:"info",title:"\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \xab<b>".concat(n,"</b>\xbb \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")}):a.createElement(_.a,{showLine:!0,onSelect:void 0,defaultExpandAll:!0},i))}var $={};function Q(e,t){void 0===$[e]&&($[e]={}),void 0===$[e][t]&&($[e][t]=Object(s.match)(t,e,{pre:'<span style="background: yellow;">',post:"</span>"}));var n=$[e][t];return n?a.createElement("span",{dangerouslySetInnerHTML:{__html:n.rendered}}):null}function X(e){var t=e.name;return e.scheme&&e.scheme.project&&(t="".concat(e.scheme.project).concat(t)),t}var Y=function(e){var t=a.useState(0),n=Object(u.a)(t,2),r=n[0],c=n[1],o=a.useCallback((function(){c(r+1)}),[r]);if(!e.sitemap)return a.createElement(v.a,{status:"error",title:"Sitemap not defined"});var i=e.sitemap.reduce((function(e,t){var n=[],a=!0;return t.entries.forEach((function(e){if("string"===typeof e){var t=T[e];void 0===t?(a=!1,T[e]=null,fetch(e).then((function(e){return e.json()})).then((function(t){T[e]=t,o()}))):null===t?a=!1:n.push(t)}else n.push(e)})),a&&e.push(Object(l.a)({},t,{entries:n})),e}),[]);return a.createElement(H,{key:r,activeProject:i.find((function(t){return t.id===e.activeProject})),sitemap:i})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,Object(globalThis.GODRAFT_CONFIG)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[176,1,2]]]);
//# sourceMappingURL=main.905a8ddc.chunk.js.map