(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(91);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(89),o=a(87),c=a(22),s=a(91),i=a(2),u=a(84),p=a(86),m=a(112),d=a(105),h=a(109),y=a(110),b=a(111),g=a(108),f=a(85),v=a(100),k=a(61),j=a.n(k);const E=(e,t)=>"link"===e.type?Object(m.a)(e.href,t):"category"===e.type&&e.items.some((e=>E(e,t)));function O({item:e,onItemClick:t,collapsible:a,activePath:l,...o}){const{items:c,label:s}=e,p=E(e,l),m=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(p),[d,h]=Object(n.useState)((()=>!!a&&(!p&&e.collapsed)));Object(n.useEffect)((()=>{p&&!m&&d&&h(!1)}),[p,m,d]);const y=Object(n.useCallback)((e=>{e.preventDefault(),h((e=>!e))}),[h]);return 0===c.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&p,[j.a.menuLinkText]:!a}),onClick:a?y:void 0,href:a?"#!":void 0},o),s),r.a.createElement("ul",{className:"menu__list"},c.map((e=>r.a.createElement(C,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l})))))}function N({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:o,label:c}=e,s=E(e,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(f.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:o},Object(v.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),c))}function C(e){switch(e.item.type){case"category":return r.a.createElement(O,e);case"link":default:return r.a.createElement(N,e)}}var x=function({path:e,sidebar:t,sidebarCollapsible:a=!0}){const[l,c]=Object(n.useState)(!1),{navbar:{title:s,hideOnScroll:m}}=Object(p.a)(),{isClient:v}=Object(o.a)(),{logoLink:k,logoLinkProps:E,logoImageUrl:O,logoAlt:N}=Object(b.a)(),{isAnnouncementBarClosed:x}=Object(d.a)(),{scrollY:_}=Object(g.a)();Object(h.a)(l);const w=Object(y.a)();return Object(n.useEffect)((()=>{w===y.b.desktop&&c(!1)}),[w]),r.a.createElement("div",{className:Object(u.a)(j.a.sidebar,{[j.a.sidebarWithHideableNavbar]:m})},m&&r.a.createElement(f.a,Object(i.a)({tabIndex:-1,className:j.a.sidebarLogo,to:k},E),null!=O&&r.a.createElement("img",{key:v,src:O,alt:N}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",j.a.menu,{"menu--show":l,[j.a.menuWithAnnouncementBar]:!x&&0===_})},r.a.createElement("button",{"aria-label":l?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{c(!l)}},l?r.a.createElement("span",{className:Object(u.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:j.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(C,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),c(!1)},collapsible:a,activePath:e}))))))},_=a(95),w=a(104),P=a(98),T=a(62),S=a.n(T),L=a(113);function I({currentDocRoute:e,versionMetadata:t,children:a}){var n,c;const{siteConfig:i,isClient:u}=Object(o.a)(),{pluginId:p,permalinkToSidebar:m,docsSidebars:d,version:h}=t,y=m[e.path],b=d[y];return r.a.createElement(s.a,{key:u,searchMetadatas:{version:h,tag:Object(L.b)(p,h)}},r.a.createElement("div",{className:S.a.docPage},b&&r.a.createElement("div",{className:S.a.docSidebarContainer,role:"complementary"},r.a.createElement(x,{key:y,sidebar:b,path:e.path,sidebarCollapsible:null===(n=null===(c=i.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===n||n})),r.a.createElement("main",{className:S.a.docMainContainer},r.a.createElement(l.a,{components:_.a},a))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>Object(P.matchPath)(n.pathname,e)));return l?r.a.createElement(I,{currentDocRoute:l,versionMetadata:a},Object(c.a)(t)):r.a.createElement(w.default,e)}},93:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},94:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var l=[],o=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=o);for(var c=a;c!=r;c+=o)l.push(c);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},95:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(85),c=a(84),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(20).a,theme:s};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=p({},a,{backgroundColor:null}),r};function b(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var g=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=p({},b(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,u=t[o],p=a[o][l];if("string"==typeof p?(u=o>0?u:["plain"],i=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),i=p.content),"string"==typeof i){var y=i.split(m),b=y.length;c.push({types:u,content:y[0]});for(var g=1;g<b;g++)d(c),s.push(c=[]),c.push({types:u,content:y[g]})}else o++,t.push(u),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return d(c),s}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),f=a(93),v=a.n(f),k=a(94),j=a.n(k),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=a(96),N=a(86);var C=()=>{const{prism:e}=Object(N.a)(),{isDarkTheme:t}=Object(O.a)(),a=e.theme||E,n=e.darkTheme||a;return t?n:a},x=a(48),_=a.n(x);const w=/{([\d,-]+)}/,P=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},T=/title=".*"/;var S=({children:e,className:t,metastring:a})=>{const{prism:o}=Object(N.a)(),[s,u]=Object(r.useState)(!1),[p,m]=Object(r.useState)(!1);Object(r.useEffect)((()=>{m(!0)}),[]);const d=Object(r.useRef)(null);let h=[],y="";const b=C();if(a&&w.test(a)){const e=a.match(w)[1];h=j.a.parse(e).filter((e=>e>0))}a&&T.test(a)&&(y=a.match(T)[0].split("title=")[1].replace(/"+/g,""));let f=t&&t.replace(/language-/,"");!f&&o.defaultLanguage&&(f=o.defaultLanguage);let k=e.replace(/\n$/,"");if(0===h.length&&void 0!==f){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}})(f),n=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<n.length;){const l=e+1,o=n[e].match(a);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":t+=`${r}-${l-1},`}n.splice(e,1)}else e+=1}h=j.a.parse(t),k=n.join("\n")}const E=()=>{v()(k),u(!0),setTimeout((()=>u(!1)),2e3)};return l.a.createElement(g,Object(n.a)({},i,{key:String(p),theme:b,code:k,language:f}),(({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:o})=>l.a.createElement(l.a.Fragment,null,y&&l.a.createElement("div",{style:t,className:_.a.codeBlockTitle},y),l.a.createElement("div",{className:_.a.codeBlockContent},l.a.createElement("button",{tabIndex:0,ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(_.a.copyButton,{[_.a.copyButtonWithTitle]:y}),onClick:E},s?"Copied":"Copy"),l.a.createElement("div",{className:Object(c.a)(e,_.a.codeBlock,{[_.a.codeBlockWithTitle]:y})},l.a.createElement("div",{className:_.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return h.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t}))))))}))))))))},L=(a(49),a(50)),I=a.n(L);var B=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(N.a)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",{[I.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},M=a(51),D=a.n(M);const A={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(S,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(o.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:D.a.mdxCodeBlock},e)),h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")};t.a=A}}]);