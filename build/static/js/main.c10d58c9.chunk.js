(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(17),a=t.n(r),u=t(8),i=t(3),o=t(0),s=function(e){var n=e.searchFilter,t=e.handleFiltering;return Object(o.jsxs)(o.Fragment,{children:["filter with name:",Object(o.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.addPerson,t=e.newName,c=e.handleNewName,r=e.newNumber,a=e.handleNewNumber;return Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:t,onChange:c})]}),Object(o.jsxs)("div",{children:["number: ",Object(o.jsx)("input",{value:r,onChange:a})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.persons,t=e.searchFilter,c=e.deletePerson;return Object(o.jsx)(o.Fragment,{children:n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[e.name," ",e.number]}),Object(o.jsx)("button",{onClick:function(){return window.confirm('Delete "'.concat(e.name,'"?'))?c(e.id):""},children:"Delete"})]},e.name)}))})},j=function(e){var n=e.message,t=e.type;return null===n?null:Object(o.jsx)("div",{className:t,children:n})},b=t(4),f=t.n(b),h="/api/persons",m={getAll:function(){return f.a.get(h).then((function(e){return e.data}))},create:function(e){return f.a.post(h,e).then((function(e){return e.data}))},deletePerson:function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},update:function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))}},O=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),b=Object(i.a)(a,2),f=b[0],h=b[1],O=Object(c.useState)(""),p=Object(i.a)(O,2),v=p[0],x=p[1],w=Object(c.useState)(null),g=Object(i.a)(w,2),N=g[0],F=g[1],P=Object(c.useState)("success"),S=Object(i.a)(P,2),C=S[0],k=S[1],y=Object(c.useState)(""),A=Object(i.a)(y,2),D=A[0],E=A[1];Object(c.useEffect)((function(){m.getAll().then((function(e){r(e)}))}),[]);var J=function(e,n){F(e),k("error"===n?"error":"success"),setTimeout((function(){F(null)}),2500)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(j,{message:N,type:C}),Object(o.jsx)(s,{searchFilter:D,handleFiltering:function(e){E(e.target.value.toLowerCase())}}),Object(o.jsx)(l,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(f)){var n='"'.concat(f,'" is already added to the phonebook, replace the old number with a new one?');if(window.confirm(n)){var c=t.find((function(e){return e.name===f})),a=Object(u.a)(Object(u.a)({},c),{},{number:v});m.update(c.id,a).then((function(e){r(t.map((function(n){return n.id===c.id?e:n}))),h(""),x(""),J('Updated number of "'.concat(e.name,'"'),"success")})).catch((function(e){J('"'.concat(c.name,'" not found in server.'),"error")}))}}else{var i={name:f,number:v};m.create(i).then((function(e){r(t.concat(e)),h(""),x(""),J('Added "'.concat(i.name,'"'),"success")}))}},newName:f,handleNewName:function(e){h(e.target.value)},newNumber:v,handleNewNumber:function(e){x(e.target.value)}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(d,{persons:t,searchFilter:D,deletePerson:function(e){m.deletePerson(e).then((function(n){J("Person deleted.","success"),r(t.filter((function(n){return n.id!==e})))}))}})]})};t(41);a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c10d58c9.chunk.js.map