(this.webpackJsonpreact_article=this.webpackJsonpreact_article||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(6),r=n.n(c),s=n(1),a=n(3),o=(n(11),n(2)),u=n.n(o),i=n(4),l="https://bloggy-api.herokuapp.com",d=function(){var t=Object(i.a)(u.a.mark((function t(e){var n,c,r=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.next=3,fetch("".concat(l,"/").concat(e),n);case 3:return c=t.sent,t.abrupt("return",c.json());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("comments?postId=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("comments/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("posts",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("posts",{method:"GET",headers:{"Content-type":"application/json"}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("posts/".concat(e,"?_embed=comments")));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("posts/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=n(0),v=function(t){var e=t.onAdd,n=Object(s.useState)(""),c=Object(a.a)(n,2),r=c[0],o=c[1],u=Object(s.useState)(""),i=Object(a.a)(u,2),l=i[0],d=i[1];return Object(x.jsxs)("form",{className:"NewPostForm",onSubmit:function(t){t.preventDefault(),e({title:r,body:l}),o(""),d("")},children:[Object(x.jsx)("div",{className:"form-field",children:Object(x.jsx)("input",{type:"text",name:"title",placeholder:"Add your title",className:"NewPostForm__input",value:r,onChange:function(t){return o(t.target.value)}})}),Object(x.jsx)("div",{className:"form-field",children:Object(x.jsx)("textarea",{name:"body",placeholder:"Type post here",className:"NewPostForm__input",value:l,onChange:function(t){return d(t.target.value)}})}),Object(x.jsx)("button",{type:"submit",className:"NewPostForm__submit-button button",children:"Add a post"})]})},_=function(t){var e=t.selectedPostId,n=t.selectPost,c=Object(s.useState)([]),r=Object(a.a)(c,2),o=r[0],u=r[1];Object(s.useEffect)((function(){f().then((function(t){return u(t)}))}),[]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"PostsList",children:[Object(x.jsx)("h2",{children:"Posts:"}),Object(x.jsx)(v,{onAdd:function(t){m(t).then((function(){return f()})).then((function(t){return u(t)}))}}),Object(x.jsx)("ul",{className:"PostsList__list",children:o.map((function(t){return Object(x.jsxs)("li",{className:"PostsList__item",children:[Object(x.jsx)("div",{children:t.title}),Object(x.jsxs)("div",{className:"PostsList__buttons",children:[Object(x.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return e=t.id,void O(e).then((function(){return f()})).then((function(t){return u(t)}));var e},children:"Delete"}),Object(x.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c=t.id,void n(e===c?0:c);var c},children:e===t.id?"Close":"Open"})]})]},t.id)}))})]})})},N=function(t){var e=t.selectedPostId,n=t.onAdd,c=Object(s.useState)(""),r=Object(a.a)(c,2),o=r[0],u=r[1];return Object(x.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),n({postId:e,body:o}),u("")},children:[Object(x.jsx)("div",{className:"form-field",children:Object(x.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:o,onChange:function(t){return u(t.target.value)}})}),Object(x.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})},y=function(t){var e=t.selectedPostId,n=Object(s.useState)(null),c=Object(a.a)(n,2),r=c[0],o=c[1],u=Object(s.useState)([]),i=Object(a.a)(u,2),l=i[0],d=i[1],m=Object(s.useState)(!0),f=Object(a.a)(m,2),O=f[0],v=f[1];Object(s.useEffect)((function(){h(e).then((function(t){o(t)})),b(e).then((function(t){return d(t)}))}),[e]);return Object(x.jsxs)("div",{className:"PostDetails",children:[Object(x.jsx)("h2",{children:"Post details:"}),Object(x.jsx)("section",{className:"PostDetails__post",children:Object(x.jsx)("p",{children:null===r||void 0===r?void 0:r.body})}),Object(x.jsxs)("section",{className:"PostDetails__comments",children:[Object(x.jsx)("button",{type:"button",className:"button",onClick:function(){v(!O)},children:O?"Hide ".concat(l.length," comments"):"Show ".concat(l.length," comments")}),Object(x.jsx)("ul",{className:"PostDetails__list",children:O&&Object(x.jsx)(x.Fragment,{children:l.map((function(t){return Object(x.jsxs)("li",{className:"PostDetails__list-item",children:[Object(x.jsx)("p",{children:t.body}),Object(x.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return n=t.id,void p(n).then((function(){return b(e)})).then((function(t){return d(t)}));var n},children:"X"})]},t.id)}))})})]}),Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(x.jsx)(N,{selectedPostId:e,onAdd:function(t){j(t).then((function(){return b(e)})).then((function(t){return d(t)}))}})})})]})},P=function(){var t=Object(s.useState)(0),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("main",{className:"App__main",children:[Object(x.jsx)("div",{className:"App__sidebar",children:Object(x.jsx)(_,{selectedPostId:n,selectPost:c})}),0!==n&&Object(x.jsx)("div",{className:"App__content",children:Object(x.jsx)(y,{selectedPostId:n})})]})})};r.a.render(Object(x.jsx)(P,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1beba2ab.chunk.js.map