(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(91),s=a(99),o=a(85),c=a(92);t.default=function(e){const{metadata:t,items:a,sidebar:n}=e,{allTagsPath:i,name:m,count:p}=t;return r.a.createElement(l.a,{title:`Posts tagged "${m}"`,description:`Blog | Tagged "${m}"`},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(c.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,p," ",function(e,t){return e>1?t+"s":t}(p,"post"),' tagged with "',m,'"'),r.a.createElement(o.a,{href:i},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),l=a(85),s=a(47),o=a.n(s);function c({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:o.a.sidebar},r.a.createElement("h3",{className:o.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:o.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:o.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:o.a.sidebarItemLink,activeClassName:o.a.sidebarItemLinkActive},e.title))))))}},93:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(o){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),s};e.exports=n,e.exports.default=n},94:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var l=[],s=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=s);for(var o=a;o!=r;o+=s)l.push(o);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},95:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),s=a(85),o=a(84),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(20).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=p({},a,{backgroundColor:null}),r};function h(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(l.style=s.plain),void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var s=n?{display:"inline-block"}:{},o=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[s].concat(o))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,s=p({},h(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?p({},s.style,r):r),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),s=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,s=0,o=[],c=[o];s>-1;){for(;(l=n[s]++)<r[s];){var i=void 0,m=t[s],p=a[s][l];if("string"==typeof p?(m=s>0?m:["plain"],i=p):(m=g(m,p.type),p.alias&&(m=g(m,p.alias)),i=p.content),"string"==typeof i){var y=i.split(u),h=y.length;o.push({types:m,content:y[0]});for(var f=1;f<h;f++)d(o),c.push(o=[]),o.push({types:m,content:y[f]})}else s++,t.push(m),a.push(i),n.push(0),r.push(i.length)}s--,t.pop(),a.pop(),n.pop(),r.pop()}return d(o),c}(void 0!==s?t.tokenize(n,s,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),b=a(93),v=a.n(b),k=a(94),E=a.n(k),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(96),O=a(86);var x=()=>{const{prism:e}=Object(O.a)(),{isDarkTheme:t}=Object(j.a)(),a=e.theme||N,n=e.darkTheme||a;return t?n:a},T=a(48),w=a.n(T);const _=/{([\d,-]+)}/,P=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},L=/title=".*"/;var B=({children:e,className:t,metastring:a})=>{const{prism:s}=Object(O.a)(),[c,m]=Object(r.useState)(!1),[p,u]=Object(r.useState)(!1);Object(r.useEffect)((()=>{u(!0)}),[]);const d=Object(r.useRef)(null);let g=[],y="";const h=x();if(a&&_.test(a)){const e=a.match(_)[1];g=E.a.parse(e).filter((e=>e>0))}a&&L.test(a)&&(y=a.match(L)[0].split("title=")[1].replace(/"+/g,""));let b=t&&t.replace(/language-/,"");!b&&s.defaultLanguage&&(b=s.defaultLanguage);let k=e.replace(/\n$/,"");if(0===g.length&&void 0!==b){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}})(b),n=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<n.length;){const l=e+1,s=n[e].match(a);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":t+=`${r}-${l-1},`}n.splice(e,1)}else e+=1}g=E.a.parse(t),k=n.join("\n")}const N=()=>{v()(k),m(!0),setTimeout((()=>m(!1)),2e3)};return l.a.createElement(f,Object(n.a)({},i,{key:String(p),theme:h,code:k,language:b}),(({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:s})=>l.a.createElement(l.a.Fragment,null,y&&l.a.createElement("div",{style:t,className:w.a.codeBlockTitle},y),l.a.createElement("div",{className:w.a.codeBlockContent},l.a.createElement("button",{tabIndex:0,ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(w.a.copyButton,{[w.a.copyButtonWithTitle]:y}),onClick:N},c?"Copied":"Copy"),l.a.createElement("div",{className:Object(o.a)(e,w.a.codeBlock,{[w.a.codeBlockWithTitle]:y})},l.a.createElement("div",{className:w.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return g.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t}))))))}))))))))},I=(a(49),a(50)),A=a.n(I);var S=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(O.a)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",{[A.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},C=a(51),D=a.n(C);const $={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(B,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(s.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:D.a.mdxCodeBlock},e)),h1:S("h1"),h2:S("h2"),h3:S("h3"),h4:S("h4"),h5:S("h5"),h6:S("h6")};t.a=$},99:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(84),s=a(89),o=a(97),c=a(85),i=a(95),m=a(88),p=a(52),u=a.n(p);const d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){const{children:t,frontMatter:a,metadata:n,truncated:p,isBlogPostPage:g=!1}=e,{date:y,permalink:h,tags:f,readingTime:b}=n,{author:v,title:k,image:E,keywords:N}=a,j=a.author_url||a.authorURL,O=a.author_title||a.authorTitle,x=a.author_image_url||a.authorImageURL,T=Object(m.a)(E,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:T}),E&&r.a.createElement("meta",{property:"twitter:image",content:T}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k})),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",t=y.substring(0,10).split("-"),a=t[0],n=d[parseInt(t[1],10)-1],s=parseInt(t[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},g?k:r.a.createElement(c.a,{to:h},k)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:y,className:u.a.blogPostDate},n," ",s,", ",a," ",b&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(b)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:j,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:x,alt:v})),r.a.createElement("div",{className:"avatar__intro"},v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:j,target:"_blank",rel:"noreferrer noopener"},v)),r.a.createElement("small",{className:"avatar__subtitle"},O)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(s.a,{components:i.a},t)),(f.length>0||p)&&r.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),f.map((({label:e,permalink:t})=>r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},e)))),p&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:n.permalink,"aria-label":"Read more about "+k},r.a.createElement("strong",null,"Read More"))))))}}}]);