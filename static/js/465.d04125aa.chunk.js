"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[465],{147:function(e,t,n){n.d(t,{Hq:function(){return d},xc:function(){return v},Y5:function(){return f},Hx:function(){return h},Tg:function(){return l}});var r=n(861),i=n(757),a=n.n(i),s=n(294),o=n.p+"static/media/image01.327cd36903ab7c7a9dec.jpeg",c=n.p+"static/media/img002.7101790eb4aa96a7d8d3.jpg";s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"2123fea73978ac77fe6a3f347cf7ced6",include_adult:!1};var u="https://image.tmdb.org/t/p/w500",l=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.Z.get("/trending/all/day?").then((function(e){return e.data.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster:r?u+r:c}}))})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.Z.get("/search/movie?query=".concat(t)).then((function(e){return e.data.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster:r?u+r:c}}))})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return s.Z.get("/movie/".concat(e,"?")).then((function(e){var t=e.data,n=t.id,r=t.poster_path,i=t.title,a=t.release_date,s=t.vote_average,o=t.overview,l=t.genres;return{id:n,poster:r?u+r:c,title:i,releaseYear:new Date(a).getFullYear(),userScore:Math.round(10*s),overview:o,genres:l}})).catch((function(e){console.log(e.message)}))},v=function(e){return s.Z.get("/movie/".concat(e,"/credits?")).then((function(e){return e.data.cast.map((function(e){var t=e.id,n=e.name,r=e.character,i=e.profile_path;return{id:t,name:n,character:r,photo:i?u+i:o}}))})).catch((function(e){console.log(e.message)}))},h=function(e){return s.Z.get("/movie/".concat(e,"/reviews?")).then((function(e){return e.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}))})).catch((function(e){console.log(e.message)}))}},899:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(439),i=n(791),a=n(689),s=n(147),o="MovieDetails_DetBtn__eEhTI",c="MovieDetails_DetContainer__0MSp0",u="MovieDetails_DetImg__ISCBQ",l="MovieDetails_DetInfo__a5w+5",d="MovieDetails_DetTitle__QRBZU",f="MovieDetails_DetAddInfo__9qNZ+",v="MovieDetails_DetList__xw-jI",h="MovieDetails_DetDescr__rFlDs",m=n(87),p=n(184),_=function(){var e,t,n,_,g=(0,i.useState)(null),j=(0,r.Z)(g,2),x=j[0],w=j[1],D=(0,a.UO)().movieId,Z=(0,a.TH)(),b=(0,a.s0)(),M=null!==(e=null===(t=Z.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",N=null!==x&&void 0!==x?x:{},k=N.poster,I=N.title,y=N.releaseYear,C=N.userScore,S=N.overview,Y=N.genres;(0,i.useEffect)((function(){(0,s.Y5)(D).then(w)}),[D]);return(0,p.jsxs)("div",{children:[(0,p.jsx)("button",{className:o,type:"button",onClick:function(){b(M)},children:"Back to movies"}),x&&(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("img",{className:u,src:k,alt:I}),(0,p.jsxs)("div",{className:l,children:[(0,p.jsxs)("h2",{className:d,children:[I," (",y,")"]}),(0,p.jsxs)("p",{children:["User Score: ",C,"%"]}),(0,p.jsx)("h3",{className:h,children:"Overview"}),(0,p.jsx)("p",{children:S}),(0,p.jsx)("h3",{className:h,children:"Genres"}),(0,p.jsx)("p",{children:Y.map((function(e){return e.name})).join(" ")})]})]}),(0,p.jsx)("h3",{className:f,children:"Additional information"}),(0,p.jsxs)("ul",{className:v,children:[(0,p.jsx)("li",{children:(0,p.jsx)(m.OL,{to:"cast",state:{from:null===Z||void 0===Z||null===(n=Z.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(m.OL,{to:"reviews",state:{from:null===Z||void 0===Z||null===(_=Z.state)||void 0===_?void 0:_.from},children:"Reviews"})})]}),(0,p.jsx)(a.j3,{})]})]})}}}]);
//# sourceMappingURL=465.d04125aa.chunk.js.map