"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[821],{485:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(885),c=e(791),a=e(501),u=e(373),i=e(422),o=e(240),s="SearchForm_form__o80os",f="SearchForm_input__HOxJo",h="SearchForm_btn__TXrR3",p=e(184);function l(n){var t=n.setSearchParams,e=(0,c.useState)(""),a=(0,r.Z)(e,2),u=a[0],i=a[1];return(0,p.jsxs)("form",{className:s,onSubmit:function(n){if(n.preventDefault(),u.trim()){var e=u.trim().split(" ").join("+");t({query:e}),i("")}else alert("Enter correct title")},children:[(0,p.jsx)("input",{className:f,type:"text",onChange:function(n){i(n.target.value)},name:"searchPhrase",value:u,autoFocus:!0}),(0,p.jsx)("button",{className:h,type:"submit",children:"Search"})]})}var d="MoviesView_loader__vxNHI",_=(0,c.lazy)((function(){return e.e(889).then(e.bind(e,673))}));function m(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,a.lr)(),h=(0,r.Z)(f,2),m=h[0],v=h[1];return(0,c.useEffect)((function(){var n=m.get("query");n&&(0,i.Xd)(n).then((function(n){return s(n.results)}))}),[m]),(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(l,{setSearchParams:v}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)("div",{className:d,children:(0,p.jsx)(u.VF,{})}),children:(0,p.jsx)(_,{moviesArray:e})})]})}},909:function(n,t,e){e.d(t,{Z:function(){return a}});e(791);var r="Container_container__VVOCq",c=e(184);function a(n){var t=n.children;return(0,c.jsx)("div",{className:r,children:t})}},240:function(n,t,e){e.d(t,{Z:function(){return o}});e(791);var r=e(909),c="Section_section__Z2PLw",a="Section_title__SLHvV",u="Section_hidden__x1r60",i=e(184);function o(n){var t=n.title,e=n.children;return(0,i.jsx)("section",{className:c,children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("h1",{className:t?a:u,children:t}),e]})})}},422:function(n,t,e){e.d(t,{Bt:function(){return m},Mc:function(){return p},Xd:function(){return f},wr:function(){return o},y:function(){return d}});var r=e(861),c=e(757),a=e.n(c),u="5e1fcd47f20766d1df18c73f06c8901a",i="https://api.themoviedb.org/3/";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/all/day?api_key=").concat(u)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(u,"&query=").concat(t,"&include_adult=false")).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(u)).then((function(n){return n.ok?n.json():(alert("No detailed information"),null)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=movie-view.0cbb73ac.chunk.js.map