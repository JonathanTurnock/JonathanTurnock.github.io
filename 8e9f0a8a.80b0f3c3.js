(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(2),r=n(6),a=(n(0),n(89)),i={slug:"hola",title:"Express Request & Response Logging",author:"Jonathan Turnock",author_title:"Software Engineer",author_url:"https://github.com/JonathanTurnock",author_image_url:"https://avatars2.githubusercontent.com/u/16135506",tags:["JavaScript","Nodejs","Expressjs"]},s={permalink:"/blog/hola",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-05-28-hola.md",source:"@site/blog/2019-05-28-hola.md",description:"Introduction",date:"2019-05-28T00:00:00.000Z",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"Nodejs",permalink:"/blog/tags/nodejs"},{label:"Expressjs",permalink:"/blog/tags/expressjs"}],title:"Express Request & Response Logging",readingTime:3.82,truncated:!1},c=[{value:"Introduction",id:"introduction",children:[]},{value:"The Middleware",id:"the-middleware",children:[{value:"Logging the Request",id:"logging-the-request",children:[]},{value:"Logging the Response",id:"logging-the-response",children:[]},{value:"Intercepting res.send",id:"intercepting-ressend",children:[]},{value:"Designing the interceptor",id:"designing-the-interceptor",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"While Logging the Request object in Express is amazingly easy, doing so with the response is not\nquite as straight forwards."),Object(a.b)("p",null,"We need to utilize a couple of tricks and some patching to get things working smoothly and get\nall the information we are sending back to the client."),Object(a.b)("p",null,"We can also use this technique to perform some other manipulation rather than just logging, some\nuse cases might be:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"To Observe the response (Logging, Tracing)"),Object(a.b)("li",{parentName:"ol"},"To Amend the response (Redacting information by origin for example or modify response for\ntarget audience)")),Object(a.b)("h2",{id:"the-middleware"},"The Middleware"),Object(a.b)("h3",{id:"logging-the-request"},"Logging the Request"),Object(a.b)("p",null,"Firstly we need to create a basic middleware which can log our req, nothing new here other than\nour middleware is a higher order function which takes a logger making it more re-usable."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'const requestLoggerMiddleware = ({ logger }) => (req, res, next) => {\n  logger("RECV <<<", req.method, req.url, req.hostname);\n  ...\n  next();\n};\n')),Object(a.b)("h3",{id:"logging-the-response"},"Logging the Response"),Object(a.b)("p",null,"Next we need to log our response. As we can see we have access to the response under the\nreference ",Object(a.b)("inlineCode",{parentName:"p"},"res"),". However, this does not have the information we need yet. "),Object(a.b)("p",null,"Our middleware runs ",Object(a.b)("strong",{parentName:"p"},"BEFORE")," our router, so if we call for any information on our ",Object(a.b)("inlineCode",{parentName:"p"},"res")," now\nit will not be reflective of the res state after the router has done its thing."),Object(a.b)("p",null,"We need to add an event hook to be invoked after the ",Object(a.b)("inlineCode",{parentName:"p"},"finish")," event, more info on this event can\nbe found in the docs: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/api/http.html#http_event_finish"}),"https://nodejs.org/api/http.html#http_event_finish")," "),Object(a.b)("p",null,"Crucially however we need to be aware of the purpose of the event"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Emitted when the response has been sent. More specifically, this event is emitted when the last\nsegment of the response headers and body have been handed off to the operating system for\ntransmission over the network. It does not imply that the client has received anything yet.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),' const requestLoggerMiddleware = ({ logger }) => (req, res, next) => {\n   ...\n   res.on("finish", () => {\n     logger("SEND >>>", res.statusCode);\n   });\n   next();\n };\n')),Object(a.b)("p",null,"This gives us the basic ability to observe information about the response after handoff, good for\nobservability but bad for interception, and the ",Object(a.b)("inlineCode",{parentName:"p"},"res")," is also missing the crucial content sent to\n",Object(a.b)("inlineCode",{parentName:"p"},"res.send")),Object(a.b)("h3",{id:"intercepting-ressend"},"Intercepting res.send"),Object(a.b)("p",null,"For this last piece we need to monkey patch the ",Object(a.b)("inlineCode",{parentName:"p"},"res.send")," method. This means when we call it in\nour router, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),' app.get(["/", "/api/health"], (req, res) => {\n   res.send({ message: "OK", uptime: process.uptime() });\n });\n')),Object(a.b)("p",null,"We are actually going to be calling our patched ",Object(a.b)("inlineCode",{parentName:"p"},"res.send"),", doing something, then calling the\noriginal ",Object(a.b)("inlineCode",{parentName:"p"},"res.send"),". We call this the ",Object(a.b)("inlineCode",{parentName:"p"},"interceptor")," because it's intercepting the call\n, performing some actions and handing back off."),Object(a.b)("p",null,"This is going to give us a critical point to interject and do whatever we need. For observability\n, we will simply bind the content passed to ",Object(a.b)("inlineCode",{parentName:"p"},"res.send")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"res")," under ",Object(a.b)("inlineCode",{parentName:"p"},"res.contentBody\n")," giving us access later, but you could just as easily perform some mutation and intercept the\ncontent for redacting, modifying, adapting etc. "),Object(a.b)("p",null,"Let's add the interceptor and explain it's signature.  "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const requestLoggerMiddleware = ({ logger }) => (req, res, next) => {\n   ...  \n   res.send = resDotSendInterceptor(res, res.send);\n   ...\n   next();\n};\n")),Object(a.b)("p",null,"We can see how the interceptor replaces the default ",Object(a.b)("inlineCode",{parentName:"p"},"res.send"),", as this middleware runs ",Object(a.b)("em",{parentName:"p"},"BEFORE")," our\nrouter. We know that this patch is now in place and any subsequent calls to ",Object(a.b)("inlineCode",{parentName:"p"},"res.send")," will go via\nour interceptor."),Object(a.b)("h3",{id:"designing-the-interceptor"},"Designing the interceptor"),Object(a.b)("p",null,"Our interceptor needs two things:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"To be a function that can take the content sent to ",Object(a.b)("inlineCode",{parentName:"li"},"res.send")," normally"),Object(a.b)("li",{parentName:"ol"},"To be a function which ultimately calls the original ",Object(a.b)("inlineCode",{parentName:"li"},"res.send")," so the request/response chain\ncan complete naturally.")),Object(a.b)("p",null,"Therefore, we write our interceptor as a Higher Order Function taking the res, and the original\nunmodified send. Finally, that returns a function which takes the content passed to ",Object(a.b)("inlineCode",{parentName:"p"},"res.send")," in\nthe router."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const resDotSendInterceptor = (res, send) => (content) => {\n res.contentBody = content;\n res.send = send;\n res.send(content);\n};\n")),Object(a.b)("p",null,"By the time the rouer has called ",Object(a.b)("inlineCode",{parentName:"p"},"res.send")," and the request ",Object(a.b)("inlineCode",{parentName:"p"},"finish")," event is broadcast, our\ninterceptor has put the content passed to ",Object(a.b)("inlineCode",{parentName:"p"},"res.send")," in the router onto our ",Object(a.b)("inlineCode",{parentName:"p"},"res")," under the\nfield ",Object(a.b)("inlineCode",{parentName:"p"},"contentBody")," making this now accessible in the ",Object(a.b)("inlineCode",{parentName:"p"},"finish")," callback."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'const requestLoggerMiddleware = ({ logger }) => (req, res, next) => {\n ...\n res.on("finish", () => {\n   logger("SEND >>>", res.contentBody);\n });\n next();\n};\n')),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"While the topic at first can seem quite confusing I highly recommend taking a look at the\nmiddleware and app discussed above. "),Object(a.b)("p",null,"Checkout the project on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonathanTurnock/ReqResLoggingExample"}),"Github")," to\nsee things running."))}b.isMDXComponent=!0}}]);