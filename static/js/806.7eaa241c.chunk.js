"use strict";(self.webpackChunkmovie_searcher=self.webpackChunkmovie_searcher||[]).push([[806],{7608:function(e,n,r){r.d(n,{x:function(){return c}});var t=r(6444),a=r(407),c=(0,t.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.FK)},1806:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t,a,c,u=r(5861),i=r(885),s=r(7757),o=r.n(s),p=r(7608),d=r(2791),f=r(6871),l=r(4697),h=r(168),v=r(6444),x=v.ZP.div(t||(t=(0,h.Z)(["\n  background-color: wheat;\n  border-radius: 10px;\n  padding: 20px;\n"]))),g=v.ZP.p(a||(a=(0,h.Z)(["\n  text-indent: 50px;\n"]))),b=v.ZP.span(c||(c=(0,h.Z)(["\n  display: inline-block;\n  min-width: 30px;\n  text-align: center;\n  padding: 5px;\n  background-color: ",";\n  border-radius: 10px;\n  color: ",";\n"])),(function(e){var n=e.rating;return n>6?"#6c3":n>=4&&n<=6?"#fc3":"#f00"}),(function(e){var n=e.rating;return n>=4&&n<=6?"black":"white"})),m=r(184),w=function(){var e=(0,f.UO)().movieId,n=(0,d.useState)([]),r=(0,i.Z)(n,2),t=r[0],a=r[1];return(0,d.useEffect)((function(){(0,u.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=a,n.next=3,(0,l.dW)(e);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()}),[e]),(0,m.jsx)(p.x,{children:!t.length>0?(0,m.jsx)("p",{children:"No reviews"}):(0,m.jsx)(p.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:3,children:t.map((function(e){var n=e.id,r=e.author,t=e.author_details.rating,a=e.content,c=e.created_at;return(0,m.jsxs)(x,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Author:"})," ",r]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Rating:"})," ",(0,m.jsx)(b,{rating:t,children:t||"Not rated"})]}),(0,m.jsx)("p",{children:(0,m.jsx)("b",{children:"Review:"})}),(0,m.jsx)(g,{children:a}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Created at: "})," ",new Date(c).toLocaleDateString("en-US")]})]},n)}))})})}},4697:function(e,n,r){r.d(n,{Hg:function(){return s},Pg:function(){return p},dW:function(){return f},gI:function(){return d},h$:function(){return o}});var t=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("trending/movie/day",{params:{api_key:"820f51701c1eae13089594e954cb7930"}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("search/movie",{params:{api_key:"820f51701c1eae13089594e954cb7930",query:n,language:"en-US",page:1,include_adult:!1}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(n),{params:{api_key:"820f51701c1eae13089594e954cb7930",language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(n,"/credits"),{params:{api_key:"820f51701c1eae13089594e954cb7930",language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,i().get("movie/".concat(n,"/reviews"),{params:{api_key:"820f51701c1eae13089594e954cb7930",language:"en-US",page:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=806.7eaa241c.chunk.js.map