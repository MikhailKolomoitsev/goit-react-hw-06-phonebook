(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(6),o=n.n(a),i=(n(19),n(20),n(12)),u=n(29),b=n(4),l=n(3),s={addContact:Object(l.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(u.a)(),name:e,number:n}}})),deleteContact:Object(l.b)("contacts/delete"),changeFilter:Object(l.b)("contacts/changeFilter")},j=n(1);var d=Object(b.b)(null,(function(t){return{onSubmit:function(e,n){return t(s.addContact(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1],b=Object(c.useState)(""),l=Object(i.a)(b,2),s=l[0],d=l[1],O=Object(u.a)(),h=Object(u.a)();return Object(j.jsxs)("form",{type:"submit",onSubmit:function(t){t.preventDefault(),e({id:Object(u.a)(),name:a,number:s}),o(""),d("")},children:[Object(j.jsxs)("label",{htmlFor:O,children:["Name",Object(j.jsx)("input",{value:a,id:O,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){o(t.currentTarget.value)}})]}),Object(j.jsxs)("label",{htmlFor:h,children:["Number",Object(j.jsx)("input",{value:s,id:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){d(t.currentTarget.value)}})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}));var O=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},h=Object(b.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contacts:O(n,c)}}),(function(t){return{onClick:function(e){return t(s.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onClick;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(j.jsxs)("li",{children:[c," ",r,Object(j.jsx)("button",{onClick:function(){return n(e)},type:"button",children:"delete"})]},e)}))})})),f=Object(b.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(s.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange,c=Object(u.a)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{htmlFor:c,children:"   "}),Object(j.jsx)("input",{id:c,type:"text",value:e,onChange:n})]})}));function m(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h3",{children:"Phonebook"}),Object(j.jsx)(d,{}),Object(j.jsx)("h3",{children:"Contacts"}),Object(j.jsx)("p",{children:"filter via name"}),Object(j.jsx)(f,{}),Object(j.jsx)(h,{})]})}var p,v,x=n(8),C=n(14),g=n(2),y=null!==(p=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==p?p:[],w=Object(l.c)(y,(v={},Object(x.a)(v,s.addContact,(function(t,e){var n=e.payload,c=n.name.toLowerCase(),r=t.find((function(t){return t.name.toLowerCase()===c}));return r?(alert("".concat(r.name," is already in contacts")),t):[].concat(Object(C.a)(t),[n])})),Object(x.a)(v,s.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),v)),k=Object(l.c)("",Object(x.a)({},s.changeFilter,(function(t,e){return e.payload}))),F=Object(g.b)({items:w,filter:k}),S=(n(26),Object(l.a)({reducer:{contacts:F},devTools:!1}));o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b.a,{store:S,children:Object(j.jsx)(m,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.04944e29.chunk.js.map