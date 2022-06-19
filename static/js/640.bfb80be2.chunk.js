/*! For license information please see 640.bfb80be2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[640,657],{845:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(184),o=function(){return(0,n.jsx)("section",{className:"ComicsBanner wrapper",children:(0,n.jsxs)("div",{className:"ComicsBanner-box",children:[(0,n.jsx)("div",{className:"ComicsBanner-box-logo",children:(0,n.jsx)("img",{src:"https://i.giphy.com/media/9r75CL4HcusetkC3d4/giphy.webp",alt:"logo-stanLee",className:"ComicsBanner-box-logo__img"})}),(0,n.jsxs)("div",{className:"ComicsBanner-box-titles",children:[(0,n.jsx)("h3",{className:"ComicsBanner-box-titles__title",children:"New comics every week!"}),(0,n.jsx)("h3",{className:"ComicsBanner-box-titles__title",children:"Stay tuned!"})]}),(0,n.jsx)("div",{className:"ComicsBanner-box-logo",children:(0,n.jsx)("img",{src:"https://i.giphy.com/media/13kajTax0GCg0g/giphy.webp",alt:"logo-Avengers",className:"ComicsBanner-box__logo-avengers"})})]})})}},397:function(t,e,r){var n=r(671),o=r(144),i=r(340),a=r(882),c=r(791),s=r(746),u=r(184),l={margin:"0 auto",width:"570px",height:"100%",padding:"25px",border:"2px solid #000",borderRadius:"15px",boxShadow:"5px 5px 20px rgba(0, 0, 0, 0.8)",background:"#232222",zIndex:"10",position:"relative"},f=function(t){(0,i.Z)(r,t);var e=(0,a.Z)(r);function r(){var t;(0,n.Z)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={error:!1},t}return(0,o.Z)(r,[{key:"componentDidCatch",value:function(t,e){console.log(t,e),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,u.jsx)("div",{style:l,children:(0,u.jsx)(s.Z,{})}):this.props.children}}]),r}(c.Component);e.Z=f},746:function(t,e,r){var n=r(184);e.Z=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{style:{position:"absolute",left:"50%",bottom:"0%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#fff",fontWeight:700,textTransform:"uppercase",background:"#000",width:"50%",borderRadius:"14px",padding:"5px 0px"},children:["Oops!",(0,n.jsx)("br",{}),"Please, update your page :)"]}),(0,n.jsx)("img",{style:{margin:"0 auto",background:"none",display:"block",objectFit:"none",border:"10px solid #000",boxShadow:"15px 15px 20px rgba(0, 0, 0, 0.8)",width:"100%",height:"180px"},src:"https://i.gifer.com/fy3e.gif",alt:"error"})]})}},657:function(t,e,r){r.r(e),r.d(e,{default:function(){return i}});r(791);var n=r(504),o=r(184),i=function(){return(0,o.jsxs)("div",{className:"Page404",children:[(0,o.jsx)("h2",{className:"Page404__title",children:"Oops! This page is not found!"}),(0,o.jsx)("img",{className:"Page404__img",src:"https://i.gifer.com/fy3e.gif",alt:"error"}),(0,o.jsx)(n.rU,{to:"".concat("/marvelApp__React","/"),className:"Page404__link",children:"Click the Home Page..."})]})}},640:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(885),o=r(791),i=r(504),a=r(871),c=r(845),s=r(397),u=r(657),l=r(487),f=r(554),h=r(690),p=r(562),d=r(184),m=function(t){var e=t.comic,r=e.title,n=e.description,o=e.thumbnail,a=e.price,c=e.language,s=e.pages,u=e.homepage;return(0,d.jsxs)("section",{className:"SingleComicPage",children:[(0,d.jsx)("a",{href:u,target:"_blank",className:"SingleComicPage-link",rel:"noreferrer",children:(0,d.jsx)("img",{src:o,alt:"comic",className:"SingleComicPage-link__img"})}),(0,d.jsxs)("div",{className:"SingleComicPage-info",children:[(0,d.jsx)("h3",{className:"SingleComicPage-info__title",children:r}),(0,d.jsx)("p",{className:"SingleComicPage-info__desk",children:n}),(0,d.jsxs)("p",{className:"SingleComicPage-info__comic-length",children:[0===s?0:s," pages"]}),(0,d.jsxs)("p",{className:"SingleComicPage-info__comic-lang",children:["language:"," ",(0,d.jsx)("span",{className:"SingleComicPage-info__comic-lang--inner",children:c})]}),(0,d.jsx)("h3",{className:"SingleComicPage-info__price",children:a>0?"".concat(a,"$"):"NOT AVAILABLE"})]}),(0,d.jsx)("div",{className:"SingleComicPage-btn-back",children:(0,d.jsx)(i.rU,{to:"".concat("/marvelApp__React","/comics"),className:"SingleComicPage-btn-back button button__long",children:(0,d.jsx)("div",{className:"inner",children:"Back to all"})})})]})},g=function(){var t=(0,a.UO)().comicId,e=(0,o.useState)(null),r=(0,n.Z)(e,2),i=r[0],g=r[1],v=(0,l.Z)(),y=v.getElementById,x=v.loading,b=v.error,w=v.clearError;(0,o.useEffect)((function(){j(),k()}),[t]);var j=function(){w(),y(t,"comics").then(_)},_=function(t){g(t)},k=function(){window.scrollTo({top:0})},N=x?(0,d.jsx)(f.Z,{}):null,C=b?(0,d.jsx)(u.default,{}):null,E=x||b||!i?null:(0,d.jsx)(m,{comic:i});return(0,d.jsxs)(o.Fragment,{children:[(0,d.jsx)(c.Z,{}),(0,d.jsx)("section",{className:"container wrapper",children:(0,d.jsxs)("div",{className:"main__content",children:[(0,d.jsxs)(s.Z,{children:[N,C,E]}),(0,d.jsx)("img",{className:"decoration-falcon",src:h,alt:"decorationFalcon"}),(0,d.jsx)("img",{className:"decoration-iron-Man",src:p,alt:"decorationIronMan"})]})})]})}},487:function(t,e,r){r.d(e,{Z:function(){return c}});var n=r(165),o=r(861),i=r(885),a=r(791),c=function(){var t=function(){var t=(0,a.useState)(!1),e=(0,i.Z)(t,2),r=e[0],c=e[1],s=(0,a.useState)(null),u=(0,i.Z)(s,2),l=u[0],f=u[1],h=(0,a.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,i,a,s,u=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",o=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},c(!0),t.prev=4,t.next=7,fetch(e,{method:r,body:o,headers:i});case 7:if((a=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));case 10:return t.next=12,a.json();case 12:return s=t.sent,c(!1),t.abrupt("return",s);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),f(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:h,clearError:(0,a.useCallback)((function(){return f(null)}),[]),loading:r,error:l}}(),e=t.request,r=t.loading,c=t.error,s=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="characters",f=9,h=8,p=0,d="comics",m="af8551b0745198c417f5907893a2a765",g=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,i,a,c,s,h=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=h.length>0&&void 0!==h[0]?h[0]:p,o=u,i=l,a=f,c=m,t.next=4,e("".concat(o).concat(i,"?limit=").concat(a,"&offset=").concat(r,"&apikey=").concat(c));case 4:return s=t.sent,t.abrupt("return",s.data.results.map(b));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,i,a,c,s,l=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>0&&void 0!==l[0]?l[0]:p,o=u,i=d,a=h,c=m,t.next=4,e("".concat(o).concat(i,"?limit=").concat(a,"&offset=").concat(r,"&apikey=").concat(c));case 4:return s=t.sent,t.abrupt("return",s.data.results.map(x));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r,o){var i,a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=u,a=m,t.next=3,e("".concat(i).concat(o,"/").concat(r,"?apikey=").concat(a));case 3:if(c=t.sent,"characters"!==o){t.next=8;break}return t.abrupt("return",b(c.data.results[0]));case 8:if("comics"!==o){t.next=10;break}return t.abrupt("return",x(c.data.results[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),x=function(t){var e=t.id,r=t.title,n=t.thumbnail,o=t.urls,i=t.prices,a=t.description,c=t.pageCount,s=t.language;return{id:e,title:r,language:void 0===s?"EN-RU":s,pages:c,description:""===a||null===a?"This Marvel comic doesn't have description.":"".concat(a.slice(0,250),"..."),thumbnail:"".concat(n.path,".").concat(n.extension),homepage:o[0].url,comics:t.items,price:i[0].price}},b=function(t){var e=t.id,r=t.name,n=t.description,o=t.thumbnail,i=t.urls,a=t.comics;return{id:e,name:r,description:""===n?"This Marvel character doesn't have description.\n Please, click the links":"".concat(n.slice(0,100),"..."),thumbnail:"".concat(o.path,".").concat(o.extension),homepage:i[0].url,wiki:i[1].url,comics:a.items}};return{getAllComics:v,getAllCharacters:g,getElementById:y,loading:r,error:c,clearError:s}}},690:function(t,e,r){t.exports=r.p+"static/media/decorationFalcon.a7be48754825aec5f0a1.png"},562:function(t,e,r){t.exports=r.p+"static/media/ironMan.a94c9e28ff728327d861.png"},861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},671:function(t,e,r){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,{Z:function(){return n}})},144:function(t,e,r){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}r.d(e,{Z:function(){return o}})},882:function(t,e,r){function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}r.d(e,{Z:function(){return a}});var o=r(2);function i(t,e){if(e&&("object"===(0,o.Z)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=n(t);if(e){var a=n(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return i(this,r)}}},340:function(t,e,r){function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)}r.d(e,{Z:function(){return o}})},165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(2);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(Z){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=l;var h={};function p(){}function d(){}function m(){}var g={};u(g,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(C([])));y&&y!==e&&r.call(y,a)&&(g=y);var x=m.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=m,u(x,"constructor",m),u(m,"constructor",d),d.displayName=u(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}},2:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:function(){return n}})}}]);
//# sourceMappingURL=640.bfb80be2.chunk.js.map