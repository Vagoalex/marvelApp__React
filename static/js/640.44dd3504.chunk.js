"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[640,657],{4845:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(184),a=function(){return(0,r.jsx)("section",{className:"ComicsBanner wrapper",children:(0,r.jsxs)("div",{className:"ComicsBanner-box",children:[(0,r.jsx)("div",{className:"ComicsBanner-box-logo",children:(0,r.jsx)("img",{src:"https://i.giphy.com/media/9r75CL4HcusetkC3d4/giphy.webp",alt:"logo-stanLee",className:"ComicsBanner-box-logo__img"})}),(0,r.jsxs)("div",{className:"ComicsBanner-box-titles",children:[(0,r.jsx)("h3",{className:"ComicsBanner-box-titles__title",children:"New comics every week!"}),(0,r.jsx)("h3",{className:"ComicsBanner-box-titles__title",children:"Stay tuned!"})]}),(0,r.jsx)("div",{className:"ComicsBanner-box-logo",children:(0,r.jsx)("img",{src:"https://i.giphy.com/media/13kajTax0GCg0g/giphy.webp",alt:"logo-Avengers",className:"ComicsBanner-box__logo-avengers"})})]})})}},1397:function(e,n,t){var r=t(5671),a=t(3144),c=t(136),i=t(2882),s=t(2791),o=t(9746),l=t(184),u={margin:"0 auto",width:"570px",height:"100%",padding:"25px",border:"2px solid #000",borderRadius:"15px",boxShadow:"5px 5px 20px rgba(0, 0, 0, 0.8)",background:"#232222",zIndex:"10",position:"relative"},m=function(e){(0,c.Z)(t,e);var n=(0,i.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={error:!1},e}return(0,a.Z)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)("div",{style:u,children:(0,l.jsx)(o.Z,{})}):this.props.children}}]),t}(s.Component);n.Z=m},9746:function(e,n,t){var r=t(184);n.Z=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{style:{position:"absolute",left:"50%",bottom:"0%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#fff",fontWeight:700,textTransform:"uppercase",background:"#000",width:"50%",borderRadius:"14px",padding:"5px 0px"},children:["Oops!",(0,r.jsx)("br",{}),"Please, update your page :)"]}),(0,r.jsx)("img",{style:{margin:"0 auto",background:"none",display:"block",objectFit:"none",border:"10px solid #000",boxShadow:"15px 15px 20px rgba(0, 0, 0, 0.8)",width:"100%",height:"180px"},src:"https://i.gifer.com/fy3e.gif",alt:"error"})]})}},9657:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});t(2791);var r=t(1523),a=t(184),c=function(){return(0,a.jsxs)("div",{className:"Page404",children:[(0,a.jsx)("h2",{className:"Page404__title",children:"Oops! This page is not found!"}),(0,a.jsx)("img",{className:"Page404__img",src:"https://i.gifer.com/fy3e.gif",alt:"error"}),(0,a.jsx)(r.rU,{to:"".concat("/marvelApp__React","/"),className:"Page404__link",children:"Click the Home Page..."})]})}},8640:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(885),a=t(2791),c=t(1523),i=t(8931),s=t(4845),o=t(1397),l=t(9657),u=t(5487),m=t(4554),d=t(8690),p=t(2562),g=t(184),h=function(e){var n=e.comic,t=n.title,r=n.description,a=n.thumbnail,i=n.price,s=n.language,o=n.pages,l=n.homepage;return(0,g.jsxs)("section",{className:"SingleComicPage",children:[(0,g.jsx)("a",{href:l,target:"_blank",className:"SingleComicPage-link",rel:"noreferrer",children:(0,g.jsx)("img",{src:a,alt:"comic",className:"SingleComicPage-link__img"})}),(0,g.jsxs)("div",{className:"SingleComicPage-info",children:[(0,g.jsx)("h3",{className:"SingleComicPage-info__title",children:t}),(0,g.jsx)("p",{className:"SingleComicPage-info__desk",children:r}),(0,g.jsxs)("p",{className:"SingleComicPage-info__comic-length",children:[0===o?0:o," pages"]}),(0,g.jsxs)("p",{className:"SingleComicPage-info__comic-lang",children:["language:"," ",(0,g.jsx)("span",{className:"SingleComicPage-info__comic-lang--inner",children:s})]}),(0,g.jsx)("h3",{className:"SingleComicPage-info__price",children:i>0?"".concat(i,"$"):"NOT AVAILABLE"})]}),(0,g.jsx)("div",{className:"SingleComicPage-btn-back",children:(0,g.jsx)(c.rU,{to:"/comics",className:"SingleComicPage-btn-back button button__long",children:(0,g.jsx)("div",{className:"inner",children:"Back to all"})})})]})},f=function(){var e=(0,i.UO)().comicId,n=(0,a.useState)(null),t=(0,r.Z)(n,2),c=t[0],f=t[1],x=(0,u.Z)(),v=x.getElementById,b=x.loading,j=x.error,k=x.clearError;(0,a.useEffect)((function(){_(),N()}),[e]);var _=function(){k(),v(e,"comics").then(C)},C=function(e){f(e)},N=function(){window.scrollTo({top:0})},w=b?(0,g.jsx)(m.Z,{}):null,y=j?(0,g.jsx)(l.default,{}):null,Z=b||j||!c?null:(0,g.jsx)(h,{comic:c});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.Z,{}),(0,g.jsx)("section",{className:"container wrapper",children:(0,g.jsxs)("div",{className:"main__content",children:[(0,g.jsxs)(o.Z,{children:[w,y,Z]}),(0,g.jsx)("img",{className:"decoration-falcon",src:d,alt:"decorationFalcon"}),(0,g.jsx)("img",{className:"decoration-iron-Man",src:p,alt:"decorationIronMan"})]})})]})}},5487:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(4165),a=t(5861),c=t(885),i=t(2791),s=function(){var e=function(){var e=(0,i.useState)(!1),n=(0,c.Z)(e,2),t=n[0],s=n[1],o=(0,i.useState)(null),l=(0,c.Z)(o,2),u=l[0],m=l[1],d=(0,i.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,c,i,o,l=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},s(!0),e.prev=4,e.next=7,fetch(n,{method:t,body:a,headers:c});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(n,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,s(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),s(!1),m(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{request:d,clearError:(0,i.useCallback)((function(){return m(null)}),[]),loading:t,error:u}}(),n=e.request,t=e.loading,s=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="characters",m=9,d=8,p=0,g="comics",h="af8551b0745198c417f5907893a2a765",f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,a,c,i,s,o,d=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:p,a=l,c=u,i=m,s=h,e.next=4,n("".concat(a).concat(c,"?limit=").concat(i,"&offset=").concat(t,"&apikey=").concat(s));case 4:return o=e.sent,e.abrupt("return",o.data.results.map(j));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,a,c,i,s,o,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:p,a=l,c=g,i=d,s=h,e.next=4,n("".concat(a).concat(c,"?limit=").concat(i,"&offset=").concat(t,"&apikey=").concat(s));case 4:return o=e.sent,e.abrupt("return",o.data.results.map(b));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,a){var c,i,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l,i=h,e.next=3,n("".concat(c).concat(a,"/").concat(t,"?apikey=").concat(i));case 3:if(s=e.sent,"characters"!==a){e.next=8;break}return e.abrupt("return",j(s.data.results[0]));case 8:if("comics"!==a){e.next=10;break}return e.abrupt("return",b(s.data.results[0]));case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b=function(e){var n=e.id,t=e.title,r=e.thumbnail,a=e.urls,c=e.prices,i=e.description,s=e.pageCount,o=e.language;return{id:n,title:t,language:void 0===o?"EN-RU":o,pages:s,description:""===i||null===i?"This Marvel comic doesn't have description.":"".concat(i.slice(0,250),"..."),thumbnail:"".concat(r.path,".").concat(r.extension),homepage:a[0].url,comics:e.items,price:c[0].price}},j=function(e){var n=e.id,t=e.name,r=e.description,a=e.thumbnail,c=e.urls,i=e.comics;return{id:n,name:t,description:""===r?"This Marvel character doesn't have description.\n Please, click the links":"".concat(r.slice(0,100),"..."),thumbnail:"".concat(a.path,".").concat(a.extension),homepage:c[0].url,wiki:c[1].url,comics:i.items}};return{getAllComics:x,getAllCharacters:f,getElementById:v,loading:t,error:s,clearError:o}}}}]);
//# sourceMappingURL=640.44dd3504.chunk.js.map