"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[558,657],{4845:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(184),a=function(){return(0,r.jsx)("section",{className:"ComicsBanner wrapper",children:(0,r.jsxs)("div",{className:"ComicsBanner-box",children:[(0,r.jsx)("div",{className:"ComicsBanner-box-logo",children:(0,r.jsx)("img",{src:"https://i.giphy.com/media/9r75CL4HcusetkC3d4/giphy.webp",alt:"logo-stanLee",className:"ComicsBanner-box-logo__img"})}),(0,r.jsxs)("div",{className:"ComicsBanner-box-titles",children:[(0,r.jsx)("h3",{className:"ComicsBanner-box-titles__title",children:"New comics every week!"}),(0,r.jsx)("h3",{className:"ComicsBanner-box-titles__title",children:"Stay tuned!"})]}),(0,r.jsx)("div",{className:"ComicsBanner-box-logo",children:(0,r.jsx)("img",{src:"https://i.giphy.com/media/13kajTax0GCg0g/giphy.webp",alt:"logo-Avengers",className:"ComicsBanner-box__logo-avengers"})})]})})}},1397:function(e,t,n){var r=n(5671),a=n(3144),c=n(136),s=n(2882),o=n(2791),i=n(9746),l=n(184),u={margin:"0 auto",width:"570px",height:"100%",padding:"25px",border:"2px solid #000",borderRadius:"15px",boxShadow:"5px 5px 20px rgba(0, 0, 0, 0.8)",background:"#232222",zIndex:"10",position:"relative"},p=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={error:!1},e}return(0,a.Z)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)("div",{style:u,children:(0,l.jsx)(i.Z,{})}):this.props.children}}]),n}(o.Component);t.Z=p},9746:function(e,t,n){var r=n(184);t.Z=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{style:{position:"absolute",left:"50%",bottom:"0%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#fff",fontWeight:700,textTransform:"uppercase",background:"#000",width:"50%",borderRadius:"14px",padding:"5px 0px"},children:["Oops!",(0,r.jsx)("br",{}),"Please, update your page :)"]}),(0,r.jsx)("img",{style:{margin:"0 auto",background:"none",display:"block",objectFit:"none",border:"10px solid #000",boxShadow:"15px 15px 20px rgba(0, 0, 0, 0.8)",width:"100%",height:"180px"},src:"https://i.gifer.com/fy3e.gif",alt:"error"})]})}},1558:function(e,t,n){n.r(t);var r=n(885),a=n(2791),c=n(8931),s=n(4270),o=n(4845),i=n(1397),l=n(9657),u=n(5487),p=n(184),d=(0,a.lazy)((function(){return n.e(958).then(n.bind(n,1784))}));t.default=function(e){var t=e.Component,n=e.dataType,h=(0,c.UO)().id,m=(0,a.useState)(null),f=(0,r.Z)(m,2),g=f[0],x=f[1],v=(0,u.Z)(),b=v.getElementById,j=v.process,w=v.setProcess,k=v.clearError;(0,a.useEffect)((function(){y(),C()}),[h]);var y=function(){switch(k(),n){case"characters":b(h,"characters").then(Z).then((function(){return w("confirmed")}));break;case"comics":b(h,"comics").then(Z).then((function(){return w("confirmed")}))}},Z=function(e){x(e)},C=function(){window.scrollTo({top:0})};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(s.q,{children:[(0,p.jsx)("meta",{name:"description",content:"".concat((null===g||void 0===g?void 0:g.name)||(null===g||void 0===g?void 0:g.title)||"Marvel"," page from mini app Marvel App")}),(0,p.jsx)("title",{children:"".concat((null===g||void 0===g?void 0:g.name)||(null===g||void 0===g?void 0:g.title)||"Marvel"," - single page")})]}),(0,p.jsx)(o.Z,{}),(0,p.jsx)("section",{className:"container wrapper",children:(0,p.jsx)("div",{className:"main__content",children:(0,p.jsx)(i.Z,{children:function(e,t,n){switch(e){case"waiting":return null;case"loading":return(0,p.jsx)(d,{});case"error":return(0,p.jsx)(l.default,{});case"confirmed":return(0,p.jsx)(t,{data:n});default:throw new Error("Unexpected process state!")}}(j,t,g)})})})]})}},9657:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});n(2791);var r=n(1523),a=n(4270),c=n(184),s=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a.q,{children:[(0,c.jsx)("meta",{name:"description",content:"404 page from mini app Marvel App"}),(0,c.jsx)("title",{children:"404 page"})]}),(0,c.jsxs)("div",{className:"Page404",children:[(0,c.jsx)("h2",{className:"Page404__title",children:"Oops! This page is not found!"}),(0,c.jsx)("img",{className:"Page404__img",src:"https://i.gifer.com/fy3e.gif",alt:"error"}),(0,c.jsx)(r.rU,{to:"".concat("/marvelApp__React","/"),className:"Page404__link",children:"Click the Home Page..."})]})]})}},5487:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4165),a=n(5861),c=n(885),s=n(2791),o=function(){var e=function(){var e=(0,s.useState)(!1),t=(0,c.Z)(e,2),n=t[0],o=t[1],i=(0,s.useState)(null),l=(0,c.Z)(i,2),u=l[0],p=l[1],d=(0,s.useState)("waiting"),h=(0,c.Z)(d,2),m=h[0],f=h[1],g=(0,s.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,c,s,i,l=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},o(!0),f("loading"),e.prev=5,e.next=8,fetch(t,{method:n,body:a,headers:c});case 8:if((s=e.sent).ok){e.next=11;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 11:return e.next=13,s.json();case 13:return i=e.sent,o(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(5),o(!1),p(e.t0.message),f("error"),e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{request:g,clearError:(0,s.useCallback)((function(){p(null),f("loading")}),[]),loading:n,error:u,process:m,setProcess:f}}(),t=e.request,n=e.process,o=e.setProcess,i=e.loading,l=e.error,u=e.clearError,p="https://gateway.marvel.com:443/v1/public/",d="characters",h=9,m=8,f=0,g="comics",x="af8551b0745198c417f5907893a2a765",v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,a,c,s,o,i,l=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:f,a=p,c=d,s=h,o=x,e.next=4,t("".concat(a).concat(c,"?limit=").concat(s,"&offset=").concat(n,"&apikey=").concat(o));case 4:return i=e.sent,e.abrupt("return",i.data.results.map(y));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,a,c,s,o,i,l=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:f,a=p,c=g,s=m,o=x,e.next=4,t("".concat(a).concat(c,"?limit=").concat(s,"&offset=").concat(n,"&apikey=").concat(o));case 4:return i=e.sent,e.abrupt("return",i.data.results.map(k));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,a){var c,s,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=p,s=x,e.next=3,t("".concat(c).concat(a,"/").concat(n,"?apikey=").concat(s));case 3:if(o=e.sent,"characters"!==a){e.next=8;break}return e.abrupt("return",y(o.data.results[0]));case 8:if("comics"!==a){e.next=10;break}return e.abrupt("return",k(o.data.results[0]));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a,c,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p,c=x,e.next=3,t("".concat(a,"characters?name=").concat(n,"&apikey=").concat(c));case 3:return s=e.sent,e.abrupt("return",s.data.results.map(y));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.id,n=e.title,r=e.thumbnail,a=e.urls,c=e.prices,s=e.description,o=e.pageCount,i=e.language;return{id:t,title:n,language:void 0===i?"EN-RU":i,pages:o,description:""===s||null===s?"This Marvel comic doesn't have description.":"".concat(s.slice(0,250),"..."),thumbnail:"".concat(r.path,".").concat(r.extension),homepage:a[0].url,comics:e.items,price:c[0].price}},y=function(e){var t=e.id,n=e.name,r=e.description,a=e.thumbnail,c=e.urls,s=e.comics;return{id:t,name:n,description:""===r?"This Marvel character doesn't have description.\n Please, click the links":r,thumbnail:"".concat(a.path,".").concat(a.extension),homepage:c[0].url,wiki:c[1].url,comics:s.items}};return{getAllComics:b,getAllCharacters:v,getElementById:j,getCharacterByName:w,process:n,setProcess:o,loading:i,error:l,clearError:u}}}}]);
//# sourceMappingURL=558.25ea2e60.chunk.js.map