(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{20:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o=t(0),d=t.n(o),u=t(12),b=t.n(u),l=(t(20),t(10)),p=t(7),s=t(3),g=t(2),x=g.a.div(i||(i=Object(s.a)(["\n    background-color: #17181f;\n    color:#797a81;\n    min-height:100vh;\n"]))),j=g.a.div(c||(c=Object(s.a)(["\n    margin:auto;\n    max-width:980px;\n    padding:10px;\n"]))),h=g.a.h1(r||(r=Object(s.a)(["\n    margin:0;\n    padding:0;\n    color:#fff;\n    text-align:center;\n    border-bottom:1px solid #444;\n    padding-bottom:20px;\n"]))),f=g.a.div((function(n){var e=n.done;return"\n    display:flex;\n    align-items:center;\n    background-color:#20212c;\n    padding:10px;\n    border-radius:10px;\n    margin-bottom:10px;\n\n    label{\n        color:#ccc;\n        text-decoration:".concat(e?"line-through":"initial","\n    }\n    input{\n        width:25px;\n        height:25px;\n        margin-right:5px;\n    }\n")})),m=t(1),O=function(n){var e=n.item,t=n.onChange;return Object(m.jsxs)(f,{done:e.done,children:[Object(m.jsx)("input",{type:"checkbox",checked:e.done,onChange:function(n){return t(e.id,n.target.checked)}}),Object(m.jsx)("label",{children:e.name})]})},v=g.a.div(a||(a=Object(s.a)(["\n    display:flex;\n    align-items:center;\n    border:1px solid #555;\n    border-radius:15px;\n    padding:10px;\n    margin:20px 0;\n\n    .image{\n        margin-right:5px;\n    }\n    input {\n        border:0;\n        background:transparent;\n        outline:0;\n        color:#fff;\n        font-size:18px;\n        flex:1;\n    }\n"]))),k=function(n){var e=n.onEnter,t=Object(o.useState)(""),i=Object(p.a)(t,2),c=i[0],r=i[1];return Object(m.jsxs)(v,{children:[Object(m.jsx)("div",{className:"image",children:"\u2795"}),Object(m.jsx)("input",{type:"text",placeholder:"Adicione uma tarefa",value:c,onChange:function(n){return r(n.target.value)},onKeyUp:function(n){"Enter"===n.code&&""!==c&&(e(c),r(""))}})]})},C=function(){var n=Object(o.useState)([]),e=Object(p.a)(n,2),t=e[0],i=e[1],c=function(n,e){var c=Object(l.a)(t);for(var r in c)c[r].id===n&&(c[r].done=e);i(c)};return Object(m.jsx)(x,{children:Object(m.jsxs)(j,{children:[Object(m.jsx)(h,{children:"LISTA DE TAREFAS"}),Object(m.jsx)(k,{onEnter:function(n){var e=Object(l.a)(t);e.push({id:t.length+1,name:n,done:!1}),i(e)}}),t.map((function(n,e){return Object(m.jsx)(O,{item:n,onChange:c},e)}))]})})},y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),i(n),c(n),r(n),a(n)}))};b.a.render(Object(m.jsx)(d.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),y()}},[[24,1,2]]]);
//# sourceMappingURL=main.6f4af9be.chunk.js.map