(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){},63:function(t,e,c){"use strict";c.r(e);var o=c(0),a=c(30),s=c.n(a),n=c(17),d=c(5),b=c(11),j=c(1);function l(t){var e=t.projectName,c=t.description,o=t.id,a=t.columns,s=Object(d.l)();return Object(j.jsxs)("div",{className:"todo__item",onClick:function(t){s("/todos/".concat(o),{state:{id:o,projectName:e,description:c,columns:a}})},children:[Object(j.jsx)("h2",{className:"todo__title",children:e}),Object(j.jsx)("p",{className:"todo__text",children:c})]})}function i(){var t=Object(b.c)((function(t){return t.todos.projects})),e=Object(b.c)((function(t){return t.todos.projects.allIds}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"todo__title",children:"Projects"}),Object(j.jsx)("div",{className:"todo__projects",children:e.map((function(e){var c=t.byId[e];return console.log(c),Object(j.jsx)(l,{description:c.description,id:c.id,columns:c.columns,projectName:c.projectName})}))})]})}var r=c(4),u="TODOS/ADD_TODO",O="TODOS/EDIT_TODO",m="TODOS/CHANGE_TODO_COLUMN",h="TODOS/REMOVE_TODO",x="TODOS/SEARCH",f="TODOS/ADD_COMMENT",p="TODOS/ADD_SUBTASK",I="TODOS/CHECK_SUBTASK";function _(t,e,c){return{type:m,payload:{id:t,columnId:e,nextColumnId:c}}}var v=c(22);function y(t){var e=t.showModal,c=t.todoId,a=t.commentId,s=Object(b.b)(),n=Object(o.useState)(""),d=Object(r.a)(n,2),l=d[0],i=d[1],u=Object(o.useState)(""),O=Object(r.a)(u,2),m=O[0],h=O[1];Object(o.useEffect)((function(){h(Object(v.a)())}),[]);return Object(j.jsxs)("form",{className:"todo__form",onSubmit:function(t){t.preventDefault(),t.target.reset(),e(!1),s(function(t,e,c,o){return{type:f,string:t,id:e,todoId:c,commentId:o}}(l,m,c,a))},children:[Object(j.jsxs)("label",{className:"todo__label",children:[Object(j.jsx)("span",{className:"todo__label-text",children:"Comment"}),Object(j.jsx)("input",{className:"todo__input",type:"text",onChange:function(t){i(t.target.value)},value:l})]}),Object(j.jsx)("input",{className:"button",type:"submit"})]})}function N(t){var e=t.showModal,c=t.todoId,a=(t.commentId,Object(b.b)()),s=Object(o.useState)(""),n=Object(r.a)(s,2),d=n[0],l=n[1],i=Object(o.useState)(""),u=Object(r.a)(i,2),O=u[0],m=u[1];Object(o.useEffect)((function(){m(Object(v.a)())}),[]);return Object(j.jsxs)("form",{className:"todo__form",onSubmit:function(t){t.preventDefault(),t.target.reset(),e(!1),a(function(t,e,c){return{type:p,subtask:t,id:e,todoId:c}}(d,O,c))},children:[Object(j.jsxs)("label",{className:"todo__label",children:[Object(j.jsx)("span",{className:"todo__label-text",children:"Subtask"}),Object(j.jsx)("input",{className:"todo__input",type:"text",onChange:function(t){l(t.target.value)},value:d})]}),Object(j.jsx)("input",{className:"button",type:"submit"})]})}function g(t){var e=t.columnId,c=t.showModal,a=t.oldTodo,s=t.columnsIds,n=Object(b.c)((function(t){return t.todos.todos.lastIndex})),d=Object(b.b)(),l=Object(o.useState)(""),i=Object(r.a)(l,2),m=i[0],h=i[1],x=Object(o.useState)(""),f=Object(r.a)(x,2),p=f[0],I=f[1],y=Object(o.useState)(""),N=Object(r.a)(y,2),g=N[0],S=N[1],k=Object(o.useState)(""),T=Object(r.a)(k,2),D=T[0],C=T[1],w=Object(o.useState)(""),M=Object(r.a)(w,2),A=M[0],E=M[1],F=Object(o.useState)(""),J=Object(r.a)(F,2),R=J[0],B=J[1],H=Object(o.useState)(""),L=Object(r.a)(H,2),q=L[0],K=L[1],P=Object(o.useState)(""),Q=Object(r.a)(P,2),U=Q[0],G=Q[1];Object(o.useEffect)((function(){a?(I(a.title),S(a.description),C(a.date),E(a.timeTaken),B(a.finalDate),K(a.priority),G(a.status),h(a.id)):(h(Object(v.a)()),G(e))}),[]);var V={id:m,title:p,number:n,description:g,date:D,timeTaken:A,finalDate:R,priority:q,comments:[],status:U,subTasks:[]};return Object(j.jsxs)("form",{className:"todo__form",onSubmit:function(t){t.preventDefault(),t.target.reset(),c(!1),d(a?function(t,e,c){return{type:O,payload:{id:t,todo:e,columnId:c}}}(m,V,U):function(t,e,c){return{type:u,payload:{id:t,todo:e,columnId:c}}}(m,V,U))},children:[Object(j.jsxs)("label",{className:"todo__label",children:[Object(j.jsx)("span",{className:"todo__label-text",children:"Title"}),Object(j.jsx)("input",{className:"todo__input",type:"text",onChange:function(t){I(t.target.value)},value:p})]}),Object(j.jsxs)("label",{className:"todo__label",children:[Object(j.jsx)("span",{className:"todo__label-text",children:"Description"}),Object(j.jsx)("input",{className:"todo__input",type:"text",onChange:function(t){S(t.target.value)},value:g})]}),Object(j.jsxs)("label",{className:"todo__label",children:[Object(j.jsx)("span",{className:"todo__label-text",children:"Date"}),Object(j.jsx)("input",{className:"todo__input",type:"date",onChange:function(t){C(t.target.value)},value:D})]}),Object(j.jsxs)("label",{className:"todo__label",children:[Object(j.jsx)("span",{className:"todo__label-text",children:"Time taken"}),Object(j.jsx)("input",{className:"todo__input",type:"text",onChange:function(t){E(t.target.value)},value:A})]}),Object(j.jsxs)("label",{className:"todo__label",children:[Object(j.jsx)("span",{className:"todo__label-text",children:"Final date"}),Object(j.jsx)("input",{className:"todo__input",type:"date",onChange:function(t){B(t.target.value)},value:R})]}),Object(j.jsxs)("select",{onChange:function(t){K(t.target.value)},children:[Object(j.jsx)("option",{value:"",children:"--Choose priority--"}),Object(j.jsx)("option",{value:"high",children:"High"}),Object(j.jsx)("option",{value:"average",children:"Average"}),Object(j.jsx)("option",{value:"low",children:"Low"})]}),Object(j.jsxs)("select",{onChange:function(t){var e=t.target.value;G(e),a&&d(_(m,U,e))},value:U,children:[Object(j.jsx)("option",{value:"",children:"--Choose status--"}),Object(j.jsx)("option",{value:s[0],children:"Queue"}),Object(j.jsx)("option",{value:s[1],children:"Development"}),Object(j.jsx)("option",{value:s[2],children:"Done"})]}),Object(j.jsx)("input",{className:"button",type:"submit"})]})}c(59);function S(t){t.type;var e=t.children,c=t.title,o=t.showModal;function a(){o(!1)}return Object(j.jsx)("section",{className:"modal",children:Object(j.jsx)("div",{className:"modal__overlay",onClick:a,children:Object(j.jsxs)("div",{className:"modal__container",onClick:function(t){return t.stopPropagation()},children:[Object(j.jsx)("button",{className:"modal__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:a}),Object(j.jsx)("h2",{className:"todo__title",children:c}),e]})})})}function k(t){var e=t.todoId,c=t.comment,a=Object(o.useState)(!1),s=Object(r.a)(a,2),n=s[0],d=s[1];return Object(j.jsxs)("div",{className:"todo__comment",children:[Object(j.jsx)("div",{children:c.text}),Object(j.jsx)("button",{className:"button",onClick:function(){d(!0)},children:"reply"}),Object(j.jsx)(T,{todoId:e,comment:c}),n?Object(j.jsx)(S,{title:"Reply a comment",children:Object(j.jsx)(y,{showModal:d,todoId:e,commentId:c.id})}):""]})}function T(t){var e,c=t.todoId,a=t.comment,s=Object(o.useState)(!0),n=Object(r.a)(s,2),d=n[0],l=n[1],i=Object(b.c)((function(t){return t.todos.comments.byId})),u=Object(b.c)((function(t){return t.todos.todos.byId[c].comments}));e=a?a.comments:u,Object(o.useEffect)((function(){a&&l(!d)}),[]);return Object(j.jsxs)(j.Fragment,{children:[a&&a.comments?Object(j.jsx)("button",{className:"button",onClick:function(){l(!d)},children:"show replies"}):"",u.length||e.length?Object(j.jsxs)("div",{children:[a?"":Object(j.jsx)("h4",{className:"todo__title",children:"Comments"}),d?Object(j.jsx)("div",{className:"todo__comments",children:e.map((function(t){var e=i[t];return Object(j.jsx)(k,{comment:e,todoId:c})}))}):""]}):""]})}function D(t){var e=t.subTodo,c=(t.todoId,Object(o.useState)(!1)),a=Object(r.a)(c,2),s=a[0],n=a[1];console.log(e.checked),Object(o.useEffect)((function(){n(e.checked)}),[]),console.log(s);var d=Object(b.b)();return Object(j.jsxs)("div",{className:"todo__subtodo",children:[Object(j.jsxs)("label",{className:"checkbox",children:[Object(j.jsx)("input",{className:"checkbox__input",type:"checkbox",onChange:function(t){var c=!s;n(c),d(function(t,e){return{type:I,id:t,checked:e}}(e.id,c))},checked:s}),Object(j.jsx)("span",{className:"checkbox__indicator"})]}),Object(j.jsx)("div",{children:e.text})]})}function C(t){var e=t.todoId,c=Object(b.c)((function(t){return t.todos.subTasks.byId})),o=Object(b.c)((function(t){return t.todos.todos.byId[e].subTasks}));return Object(j.jsx)(j.Fragment,{children:o.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{className:"todo__title",children:"Subtodos"}),Object(j.jsx)("div",{children:o.map((function(t){var o=c[t];return Object(j.jsx)(D,{subTodo:o,todoId:e})}))})]}):""})}var w=c(69);function M(t){var e=t.todo,c=t.columnId,a=t.columnsIds,s=Object(o.useState)(!1),n=Object(r.a)(s,2),d=n[0],l=n[1],i=Object(o.useState)(!1),u=Object(r.a)(i,2),O=u[0],m=u[1],x=Object(o.useState)(!1),f=Object(r.a)(x,2),p=f[0],I=f[1],_=Object(b.b)(),v=Object(w.a)((function(){return{type:"CARD",item:{id:e.id,columnId:c},collect:function(t){return{isDragging:!!t.isDragging()}}}})),k=Object(r.a)(v,2),D=k[0].isDragging,M=k[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:D?"todo__item todo__item--dragged":"todo__item",ref:M,children:[Object(j.jsx)("div",{children:e.number}),Object(j.jsx)("h3",{className:"todo__subtitle",children:e.title}),Object(j.jsx)("p",{className:"todo__text",children:e.description}),Object(j.jsxs)("p",{className:"todo__text",children:[" ",e.date]}),Object(j.jsxs)("p",{className:"todo__text",children:[" ",e.timeTaken]}),Object(j.jsxs)("p",{className:"todo__text",children:[" ",e.finalDate]}),Object(j.jsxs)("p",{className:"todo__text",children:[" ",e.priority]}),Object(j.jsxs)("p",{className:"todo__text",children:[" ",e.attachedFiles]}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{className:"button",onClick:function(){m(!0)},children:"add comment"}),Object(j.jsx)("button",{className:"button",onClick:function(){I(!0)},children:"add subtask"})]}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{className:"button",onClick:function(){_(function(t,e){return{type:h,payload:{id:t,columnId:e}}}(e.id,c))},children:"delete"}),Object(j.jsx)("button",{className:"button",onClick:function(){l(!0)},children:"edit"})]}),Object(j.jsx)(T,{todoId:e.id}),Object(j.jsx)(C,{todoId:e.id})]}),d?Object(j.jsx)(S,{title:"Edit todo",showModal:l,children:Object(j.jsx)(g,{columnId:c,showModal:l,oldTodo:e,columnsIds:a})}):"",O?Object(j.jsx)(S,{title:"Add a comment",showModal:m,children:Object(j.jsx)(y,{showModal:m,todoId:e.id})}):"",p?Object(j.jsx)(S,{title:"Add a subtask",showModal:I,children:Object(j.jsx)(N,{showModal:I,todoId:e.id})}):""]})}function A(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),c=e[0],a=e[1],s=Object(o.useState)("title"),n=Object(r.a)(s,2),d=n[0],l=n[1],i=Object(o.useState)("text"),u=Object(r.a)(i,2),O=u[0],m=u[1],h=Object(o.useState)(""),f=Object(r.a)(h,2),p=f[0],I=f[1],_=Object(o.useState)(!1),v=Object(r.a)(_,2),y=v[0],N=v[1],g=Object(b.b)(),S=Object(b.c)((function(t){return t.todos.searchedTodos}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"todo__title",children:"Search"}),Object(j.jsxs)("form",{className:"todo__search",onSubmit:function(t){t.preventDefault(),N(!0),c?g(function(t,e){return{type:x,string:t,queryType:e}}(c,d)):I("Your search query is empty")},children:[Object(j.jsx)("label",{className:"todo__label",children:Object(j.jsx)("input",{className:"todo__input",type:O,onChange:function(t){a(t.target.value)},value:c})}),Object(j.jsxs)("select",{onChange:function(t){l(t.target.value),"number"===t.target.value?m("number"):m("text")},children:[Object(j.jsx)("option",{value:"title",children:"Search by title"}),Object(j.jsx)("option",{value:"number",children:"Search by number"})]}),Object(j.jsx)("div",{children:p}),Object(j.jsx)("input",{className:"button",type:"submit",value:"search"})]}),y?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"todo__title",children:"Found todos"}),Object(j.jsx)("div",{className:"todo__found",children:S.map((function(t){return Object(j.jsx)(M,{todo:t})}))})]}):""]})}var E=c(70);function F(t){var e=t.title,c=t.id,a=t.todosIds,s=t.columnsIds,n=Object(b.c)((function(t){return t.todos.todos})),d=Object(b.b)(),l=Object(o.useState)(!1),i=Object(r.a)(l,2),u=i[0],O=i[1],m=Object(E.a)((function(){return{accept:"CARD",drop:function(t){return d(_(t.id,t.columnId,c))},collect:function(t){return{isOver:t.isOver()}}}})),h=Object(r.a)(m,2),x=(h[0].isOver,h[1]);return Object(j.jsxs)("div",{className:"todo__column",ref:x,children:[Object(j.jsx)("h2",{className:"todo__title",children:e}),Object(j.jsx)("button",{className:"todo__button button",onClick:function(){O(!u)},children:"Add todo"}),Object(j.jsx)("div",{className:"todo__list",children:a.map((function(t){var e=n.byId[t];return Object(j.jsx)(M,{todo:e,columnId:c,showModal:O,columnsIds:s})}))}),u?Object(j.jsx)(S,{title:"Add todo",showModal:O,children:Object(j.jsx)(g,{columnId:c,showModal:O,columnsIds:s})}):""]})}function J(){var t,e,c,o,a=Object(d.j)(),s=Object(d.n)().id,n=Object(b.c)((function(t){return t.todos.projects.byId}))[s];n?(t=n.projectName,e=n.description,c=n.id,o=n.columns):(t=a.state.projectName,e=a.state.description,c=a.state.id,o=a.state.columns);var l=Object(b.c)((function(t){return t.todos.columns}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"todo__title",children:t}),Object(j.jsx)("p",{className:"todo__text",children:e}),Object(j.jsx)(A,{}),Object(j.jsx)("div",{className:"todo__columns",children:o.map((function(t){var e=l.byId[t];return Object(j.jsx)(F,{id:e.id,projectId:c,title:e.columnName,todosIds:e.todos,columnsIds:o})}))})]})}c(61);function R(){return Object(j.jsx)("div",{children:Object(j.jsx)(n.b,{className:"todo__main-title",to:"/",children:Object(j.jsx)("h1",{children:"Todo app"})})})}var B=function(){return Object(j.jsxs)(n.a,{basename:"/",children:[Object(j.jsx)(R,{}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/",exact:!0,element:Object(j.jsx)(i,{})}),Object(j.jsx)(d.a,{path:"/todos/:id",element:Object(j.jsx)(J,{})})]})]})},H=c(15),L=c(45),q=c(21),K=c(7),P=c(10),Q=c(2),U=JSON.parse(localStorage.getItem("state")),G=U?Object(Q.a)({},U):Object(Q.a)({},{projects:{byId:{"4f90d13a40":{projectName:"Book App",description:"App for discovering new books and sharing opinin about the books you read",id:"4f90d13a40",columns:["4f90d13a41","4f90d13a42","4f90d13a43"]},"4f90d13a44":{projectName:"Pet Food App",description:"App for ordering pet food and sharing opinion about it",id:"4f90d13a41",columns:["4f90d13a45","4f90d13a46","4f90d13a47"]}},allIds:["4f90d13a40","4f90d13a44"]},columns:{byId:{"4f90d13a41":{id:"4f90d13a41",columnName:"Queue",todos:[]},"4f90d13a42":{id:"4f90d13a42",columnName:"Development",todos:[]},"4f90d13a43":{id:"4f90d13a43",columnName:"Done",todos:[]},"4f90d13a45":{id:"4f90d13a45",columnName:"Queue",todos:[]},"4f90d13a46":{id:"4f90d13a46",columnName:"Development",todos:[]},"4f90d13a47":{id:"4f90d13a47",columnName:"Done",todos:[]}},allIds:["4f90d13a41","4f90d13a42","4f90d13a43","4f90d13a45","4f90d13a46","4f90d13a47"]},todos:{byId:{},allIds:[],lastIndex:1},subTasks:{byId:{},allIds:[]},comments:{byId:{},postIds:[],allIds:[]},searchedTodos:[]}),V=Object(H.combineReducers)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:var c=e.payload,o=c.todo,a=c.columnId,s=c.id,n=t.columns.byId,d=Object(Q.a)(Object(Q.a)({},t),{},{columns:{byId:Object(Q.a)(Object(Q.a)({},n),{},Object(K.a)({},a,Object(Q.a)(Object(Q.a)({},n[a]),{},{todos:[].concat(Object(P.a)(n[a].todos),[s])})))},todos:Object(Q.a)(Object(Q.a)({},t.todos),{},{byId:Object(Q.a)(Object(Q.a)({},t.todos.byId),{},Object(K.a)({},s,o)),allIds:[].concat(Object(P.a)(t.todos.allIds),[s]),lastIndex:Number(t.todos.lastIndex)+1})});return localStorage.setItem("state",JSON.stringify(d)),Object(Q.a)({},d);case O:return function(){var c=e.payload,o=c.todo,a=c.id,s=Object(Q.a)(Object(Q.a)({},t),{},{todos:Object(Q.a)(Object(Q.a)({},t.todos),{},{byId:Object(Q.a)(Object(Q.a)({},t.todos.byId),{},Object(K.a)({},a,o))})});return localStorage.setItem("state",JSON.stringify(s)),Object(Q.a)({},s)}();case m:return function(){var c,o=e.payload,a=o.id,s=o.columnId,n=o.nextColumnId,d=t.columns.byId,b=t.columns.byId[s].todos,j=t.columns.byId[n].todos,l=b.findIndex((function(t){return t===a})),i=[].concat(Object(P.a)(b.slice(0,l)),Object(P.a)(b.slice(l+1))),r=Object(Q.a)(Object(Q.a)({},t),{},{columns:{byId:Object(Q.a)(Object(Q.a)({},d),{},(c={},Object(K.a)(c,s,Object(Q.a)(Object(Q.a)({},d[s]),{},{todos:i})),Object(K.a)(c,n,Object(Q.a)(Object(Q.a)({},d[n]),{},{todos:[].concat(Object(P.a)(j),[a])})),c))},todos:Object(Q.a)(Object(Q.a)({},t.todos),{},{byId:Object(Q.a)(Object(Q.a)({},t.todos.byId),{},Object(K.a)({},a,Object(Q.a)(Object(Q.a)({},t.todos.byId[a]),{},{status:n})))})});return localStorage.setItem("state",JSON.stringify(r)),Object(Q.a)({},r)}();case h:return function(){var c=e.payload,o=c.columnId,a=c.id,s=t.columns.byId,n=t.columns.byId[o].todos,d=t.todos.allIds,b=t.todos.byId,j=(b[a],Object(L.a)(b,[a].map(q.a))),l=d.findIndex((function(t){return t===a})),i=n.findIndex((function(t){return t===a})),r=[].concat(Object(P.a)(n.slice(0,i)),Object(P.a)(n.slice(i+1))),u=[].concat(Object(P.a)(d.slice(0,l)),Object(P.a)(d.slice(l+1))),O=Object(Q.a)(Object(Q.a)({},t),{},{columns:{byId:Object(Q.a)(Object(Q.a)({},s),{},Object(K.a)({},o,Object(Q.a)(Object(Q.a)({},s[o]),{},{todos:r})))},todos:Object(Q.a)(Object(Q.a)({},t.todos),{},{byId:Object(Q.a)({},j),allIds:Object(P.a)(u)})});return localStorage.setItem("state",JSON.stringify(O)),Object(Q.a)({},O)}();case x:return function(){var c,o=e.string,a=e.queryType,s=Object(Q.a)({},t.todos.byId),n=Object.values(s);return c="title"===a?[n.filter((function(t){if(t.title.toLowerCase().indexOf(o.toLowerCase())>=0||o.length<=0)return t}))]:[n.filter((function(t){if(t.number===Number(o))return t}))],Object(Q.a)(Object(Q.a)({},t),{},{searchedTodos:c[0]})}();case f:return function(){var c,o,a=e.string,s=e.id,n=e.todoId,d=e.commentId,b={text:a,id:s,comments:[]};d?c=Object(Q.a)(Object(Q.a)({},t),{},{comments:Object(Q.a)(Object(Q.a)({},t.comments),{},{byId:Object(Q.a)(Object(Q.a)({},t.comments.byId),{},(o={},Object(K.a)(o,s,b),Object(K.a)(o,d,Object(Q.a)(Object(Q.a)({},t.comments.byId[d]),{},{comments:[].concat(Object(P.a)(t.comments.byId[d].comments),[s])})),o)),allIds:[].concat(Object(P.a)(t.comments.allIds),[s])})}):c=Object(Q.a)(Object(Q.a)({},t),{},{todos:Object(Q.a)(Object(Q.a)({},t.todos),{},{byId:Object(Q.a)(Object(Q.a)({},t.todos.byId),{},Object(K.a)({},n,Object(Q.a)(Object(Q.a)({},t.todos.byId[n]),{},{comments:[].concat(Object(P.a)(t.todos.byId[n].comments),[s])})))}),comments:Object(Q.a)(Object(Q.a)({},t.comments),{},{byId:Object(Q.a)(Object(Q.a)({},t.comments.byId),{},Object(K.a)({},s,b)),allIds:[].concat(Object(P.a)(t.comments.allIds),[s]),postIds:[].concat(Object(P.a)(t.comments.allIds),[s])})});return localStorage.setItem("state",JSON.stringify(c)),Object(Q.a)({},c)}();case p:return function(){var c,o=e.subtask,a=e.id,s=e.todoId,n={text:o,id:a,checked:!1};return c=Object(Q.a)(Object(Q.a)({},t),{},{todos:Object(Q.a)(Object(Q.a)({},t.todos),{},{byId:Object(Q.a)(Object(Q.a)({},t.todos.byId),{},Object(K.a)({},s,Object(Q.a)(Object(Q.a)({},t.todos.byId[s]),{},{subTasks:[].concat(Object(P.a)(t.todos.byId[s].subTasks),[a])})))}),subTasks:Object(Q.a)(Object(Q.a)({},t.subTasks),{},{byId:Object(Q.a)(Object(Q.a)({},t.subTasks.byId),{},Object(K.a)({},a,n)),allIds:[].concat(Object(P.a)(t.subTasks.allIds),[a])})}),localStorage.setItem("state",JSON.stringify(c)),Object(Q.a)({},c)}();case I:return function(){var c,o=e.id,a=e.checked;return c=Object(Q.a)(Object(Q.a)({},t),{},{todos:Object(Q.a)({},t.todos),subTasks:Object(Q.a)(Object(Q.a)({},t.subTasks),{},{byId:Object(Q.a)(Object(Q.a)({},t.subTasks.byId),{},Object(K.a)({},o,Object(Q.a)(Object(Q.a)({},t.subTasks.byId[o]),{},{checked:a})))})}),localStorage.setItem("state",JSON.stringify(c)),Object(Q.a)({},c)}();default:return t}}}),W=c(46),Y=c(68),z=c(47),X=(c(62),Object(H.createStore)(V,Object(W.composeWithDevTools)(Object(H.applyMiddleware)())));s.a.render(Object(j.jsx)(b.a,{store:X,children:Object(j.jsx)(Y.a,{backend:z.a,children:Object(j.jsx)(B,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.26bc86e0.chunk.js.map