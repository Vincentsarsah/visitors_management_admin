(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c(8),n=c.n(s),i=c(16),l=c.n(i),r=(c(23),c(24),c(9)),o=c(11),j=c(12),d=function(e){var t={fullName:"",mobile:"",email:"",company:""},c=Object(s.useState)(t),n=Object(o.a)(c,2),i=n[0],l=n[1];Object(s.useEffect)((function(){""==e.currentId?l(Object(r.a)({},t)):l(Object(r.a)({},e.contactObjects[e.currentId]))}),[e.currentId,e.contactObjects]);var d=function(e){var t=e.target,c=t.name,a=t.value;l(Object(r.a)(Object(r.a)({},i),{},Object(j.a)({},c,a)))};return Object(a.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault(),e.addOrEdit(i)},children:[Object(a.jsxs)("div",{className:"form-group input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-user"})})}),Object(a.jsx)("input",{className:"form-control",name:"fullName",placeholder:"Full Name",value:i.fullName,onChange:d})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-mobile-alt"})})}),Object(a.jsx)("input",{className:"form-control",name:"mobile",placeholder:"Mobile",value:i.mobile,onChange:d})]}),Object(a.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-envelope"})})}),Object(a.jsx)("input",{className:"form-control",name:"email",placeholder:"Email",value:i.email,onChange:d})]})]}),Object(a.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-building"})})}),Object(a.jsx)("input",{className:"form-control",name:"company",placeholder:"Company",value:i.company,onChange:d})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:""==e.currentId?"Save":"Update",className:"btn btn-primary btn-block"})})]})},b=c(17).a.initializeApp({apiKey:"AIzaSyDEX-Hym5hbr55Pqvgj81ro-SgCLo99PmI",authDomain:"visitors-app-7b543.firebaseapp.com",databaseURL:"https://visitors-app-7b543-default-rtdb.firebaseio.com",projectId:"visitors-app-7b543",storageBucket:"visitors-app-7b543.appspot.com",messagingSenderId:"15687979725",appId:"1:15687979725:web:82dee0c9e9520145238f84",measurementId:"G-F65YJ5Z3T7"}).database().ref(),m=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)({}),l=Object(o.a)(i,2),j=l[0],m=l[1];Object(s.useEffect)((function(){b.child("contacts").on("value",(function(e){null!=e.val()&&m(Object(r.a)({},e.val()))}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{className:"display-4 text-center",children:"Visitors Manager"})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-5",children:Object(a.jsx)(d,Object(r.a)({},{currentId:c,contactObjects:j,addOrEdit:function(e){""==c?b.child("contacts").push(e,(function(e){e?console.log(e):n("")})):b.child("contacts/".concat(c)).set(e,(function(e){e?console.log(e):n("")}))}}))}),Object(a.jsx)("div",{className:"col-md-7",children:Object(a.jsxs)("table",{className:"table table-borderless table-stripped",children:[Object(a.jsx)("thead",{className:"thead-light",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Mobile"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Actions"})]})}),Object(a.jsx)("tbody",{children:Object.keys(j).map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:j[e].fullName}),Object(a.jsx)("td",{children:j[e].mobile}),Object(a.jsx)("td",{children:j[e].email}),Object(a.jsxs)("td",{className:"bg-light",children:[Object(a.jsx)("a",{className:"btn text-primary",onClick:function(){n(e)},children:Object(a.jsx)("i",{className:"fas fa-pencil-alt"})}),Object(a.jsx)("a",{className:"btn text-danger",onClick:function(){var t;t=e,window.confirm("Are you sure to delete this record?")&&b.child("contacts/".concat(t)).remove((function(e){e?console.log(e):n("")}))},children:Object(a.jsx)("i",{className:"far fa-trash-alt"})})]})]},e)}))})]})})]})]})};var u=function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(a.jsx)(m,{})})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),p()}},[[28,1,2]]]);
//# sourceMappingURL=main.b8d968d0.chunk.js.map