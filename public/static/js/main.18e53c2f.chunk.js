(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(35),u=a(9),i=a(11),m=a.n(i),d=a(20),f=a(12),p=a.n(f),v="https://backend-calendar-n.herokuapp.com/api",b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(v,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},E=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(v,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},h="[ui] Open Modal",g="[ui] Close Modal",O="[event] Set Active",j="[event] Logout event",y="[event] Add new",N="[event] Clear Active Event",w="[event] Event updated",k="[event] Event deleted",x="[event] Events loaded",S="[auth] Finish checking login state",C="[auth] Login",D="[auth] Logout",T=a(4),P=a(16),A=a.n(P),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{end:A()(e.end).toDate(),start:A()(e.start).toDate()})}))},_=function(e){return{type:y,payload:e}},L=function(){return{type:N}},R=function(e){return{type:w,payload:e}},G=function(){return{type:k}},M=function(e){return{type:x,payload:e}},F=function(){return{type:S}},V=function(e){return{type:C,payload:e}},H=function(){return function(e){localStorage.clear(),e({type:j}),e(J())}},J=function(){return{type:D}},U=a(14),B=a(24),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(U.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(T.a)(Object(T.a)({},r),{},Object(B.a)({},t.name,t.value)))};return[r,l,o]},q=(a(77),function(){var e=Object(l.b)(),t=X({lEmail:"",lPassword:""}),a=Object(U.a)(t,2),n=a[0],c=a[1],o=X({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),s=Object(U.a)(o,2),u=s[0],i=s[1],f=u.rName,v=u.rEmail,E=u.rPassword1,h=u.rPassword2,g=n.lEmail,O=n.lPassword;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=g,n=O,function(){var e=Object(d.a)(m.a.mark((function e(t){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:c.uid,name:c.name}))):p.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:g,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:O,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),E!==h)return p.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var a,n,r;e((a=f,n=v,r=E,function(){var e=Object(d.a)(m.a.mark((function e(t){var c,o,l,s,u,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("auth/new",{name:a,email:n,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:o.uid,name:o.name}))):(l=o.errors||{},s=l.email,u=l.password,i=l.name,s?p.a.fire("Error",s.msg,"error"):u?p.a.fire("Error",u.msg,"error"):i?p.a.fire("Error",i.msg,"error"):o.msg&&p.a.fire("Error",o.msg,"error"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:f,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:E,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),z=a(53),K=function(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){t(H())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},Q={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},W=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null,a),r.a.createElement("span",null,"- ",n.name))},Y=a(48),Z=a.n(Y),$=a(49),ee=a.n($),te=function(){return{type:h}},ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var ne=A()().minutes(0).seconds(0).add(1,"hours"),re=ne.clone().add(1,"hours"),ce={title:"",notes:"",start:ne.toDate(),end:re.toDate()},oe=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(ne.toDate()),o=Object(U.a)(c,2),s=o[0],u=o[1],i=Object(n.useState)(re.toDate()),f=Object(U.a)(i,2),v=f[0],b=f[1],h=Object(n.useState)(!0),O=Object(U.a)(h,2),j=O[0],y=O[1],N=Object(n.useState)(ce),w=Object(U.a)(N,2),k=w[0],x=w[1],S=k.notes,C=k.title,D=k.start,P=k.end;Object(n.useEffect)((function(){x(t||ce)}),[t,x]);var I=function(e){var t=e.target;x(Object(T.a)(Object(T.a)({},k),{},Object(B.a)({},t.name,t.value)))},G=function(){a({type:g}),a(L()),x(ce)};return r.a.createElement(Z.a,{isOpen:e,onRequestClose:G,style:ae,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null,t?"Editar Evento":"Nuevo evento "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=A()(D),c=A()(P);return r.isSameOrAfter(c)?p.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):C.trim().length<2?y(!1):(a(t?(n=k,function(){var e=Object(d.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(R(n)):p.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,c,o,l,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,E("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:s=t.sent,console.log(s),s.ok&&(e.id=s.event.id,e.user={_id:c,name:o},a(_(e)),console.log(e)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,a){return t.apply(this,arguments)}}()}(k)),y(!0),void G())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(ee.a,{onChange:function(e){u(e),x(Object(T.a)(Object(T.a)({},k),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(ee.a,{onChange:function(e){b(e),x(Object(T.a)(Object(T.a)({},k),{},{end:e}))},value:v,className:"form-control",minDate:s})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!j&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:C,onChange:I}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:S,onChange:I}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},le=(a(111),a(112),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(te())}},r.a.createElement("i",{className:"fas fa-plus"}))}),se=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,E("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(G()):p.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar Evento "))};A.a.locale("es");var ue=Object(z.b)(A.a),ie=function(){var e=Object(l.b)(),t=Object(n.useState)(localStorage.getItem("lastView")||"month"),a=Object(U.a)(t,2),c=a[0],o=a[1],s=Object(l.c)((function(e){return e.calendar})),u=s.events,i=s.activeEvent,f=Object(l.c)((function(e){return e.auth})).uid;Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=I(n.events),t(M(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(K,null),r.a.createElement(z.a,{localizer:ue,events:u,startAccessor:"start",endAccessor:"end",messages:Q,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:f===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(te())},onSelectEvent:function(t){e({type:O,payload:t})},onSelectSlot:function(t){e(L())},selectable:!0,onView:function(e){o(e),localStorage.setItem("lastView",e)},view:c,components:{event:W}}),i&&r.a.createElement(se,null),r.a.createElement(le,null),r.a.createElement(oe,null))},me=a(39),de=function(e){var t=e.isAuthenticated,a=e.component,n=Object(me.a)(e,["isAuthenticated","component"]);return console.log(t),r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(u.a,{to:"/login"})}}))},fe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(me.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(u.a,{to:"/"}):r.a.createElement(a,e)}}))},pe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:n.uid,name:n.name}))):t(F());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere"):r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(fe,{exact:!0,path:"/login",component:q,isAuthenticated:!!c}),r.a.createElement(de,{exact:!0,path:"/",component:ie,isAuthenticated:!!c}),r.a.createElement(u.a,{to:"/"}))))},ve=a(21),be={modalOpen:!1},Ee=a(54),he={events:[],activeEvent:null},ge={checking:!0},Oe=Object(ve.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!0});case g:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:t.payload});case y:return Object(T.a)(Object(T.a)({},e),{},{events:[].concat(Object(Ee.a)(e.events),[t.payload])});case N:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:null});case w:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case k:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case x:return Object(T.a)(Object(T.a)({},e),{},{events:Object(Ee.a)(t.payload)});case j:return Object(T.a)({},he);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(T.a)(Object(T.a)(Object(T.a)({},e),t.payload),{},{checking:!1});case S:return Object(T.a)(Object(T.a)({},e),{},{checking:!1});case D:return{checking:!1};default:return e}}}),je=a(66),ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,Ne=Object(ve.e)(Oe,ye(Object(ve.a)(je.a))),we=function(){return r.a.createElement(l.a,{store:Ne},r.a.createElement(pe,null))};a(114);o.a.render(r.a.createElement(we,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},77:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.18e53c2f.chunk.js.map