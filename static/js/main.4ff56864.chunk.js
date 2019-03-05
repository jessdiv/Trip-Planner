(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),l=a.n(r),s=a(109),o=a(110),c=(a(52),a(4)),u=a(5),m=a(7),h=a(6),p=a(8),d=(a(19),a(108)),g=a(28),b=a.n(g),f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"header"},i.a.createElement(b.a,{bg:"light",variant:"light",fixed:"top",className:"navlinks"},i.a.createElement(b.a.Brand,{href:"/"},"AXSYD"),i.a.createElement(d.a,{to:"/"}," Home "),i.a.createElement(d.a,{to:"/signin"}," Sign in "),i.a.createElement(d.a,{to:"/signup"}," Sign up ")),i.a.createElement("h1",{className:"heading"}," AxSyd "))}}]),t}(n.Component),E=a(27),v=a.n(E),C=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.thisTrip.legs[0].stopSequence;return i.a.createElement("div",null,i.a.createElement("p",null," Stop info coming soon "),i.a.createElement("p",null," ",e.map(function(e,t){return i.a.createElement("li",null,'stop["name"]')})," "))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).handleClick=function(){console.log("------ clickity click"),e.setState({displayStops:!e.state.displayStops}),console.log("displayStops:"+e.state.displayStops)},e.getTime=function(e){var t=new Date(e),a=t.getUTCHours(),n=t.getUTCMinutes();return console.log(t),console.log(a),console.log(n),a<10?(a="0"+a,console.log("hour:"+a),a):n<10?(n="0"+n,console.log("minutes:"+n),n):a+":"+n},e.state={tripInfo:null,displayStops:!1},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.trips.journeys;return console.log(t[0]),i.a.createElement("div",{className:"allTrips container"},i.a.createElement("ul",{className:"tripList"},t.map(function(a,n){return i.a.createElement("div",{className:"trip"},i.a.createElement("li",{key:n,className:"tripList"},i.a.createElement("p",null,e.getTime(a.legs[0].origin.departureTimePlanned)),i.a.createElement("p",null,a.legs[0].transportation.number," "),i.a.createElement("button",{className:"moreInfo",onClick:e.handleClick}," Click for train info "),e.state.displayStops&&i.a.createElement(C,{thisTrip:t[n]})))})))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={trips:null},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;!0===this.props.submitted&&(this.props.resultSubmitted(),v.a.get("http://localhost:4000/searchresults?origin=".concat(this.props.origin,"&destination=").concat(this.props.destination,"&time=").concat(this.props.time)).then(function(t){var a=t.data;e.setState({trips:a})}))}},{key:"render",value:function(){return null===this.state.trips?i.a.createElement("div",null):i.a.createElement("div",{className:"tripHeading"},i.a.createElement("h2",{className:"route"}," ",this.props.origin," to ",this.props.destination),i.a.createElement("p",{className:"routeTime"}," Leaving after: ",this.props.time,", ",this.props.date),i.a.createElement(j,{trips:this.state.trips}))}}]),t}(n.Component),y=a(21),N=a.n(y),w=a(2),S=a.n(w),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this)))._handleOriginChange=function(t){e.setState({origin:t.target.value})},e._handleDestinationChange=function(t){e.setState({destination:t.target.value})},e._handleWheelchairInput=function(t){e.setState({wheelchairAccess:!e.state.wheelchairAccess})},e._handleDate=function(t){e.setState({date:t.target.value})},e._handleTime=function(t){e.setState({time:t.target.value})},e._handleSubmit=function(t){arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.origin,arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.state.destination;t.preventDefault(),e.setState({submitted:!0})},e.resultSubmitted=function(){e.setState({submitted:!1})},e.state={origin:null,destination:null,wheelchairAccess:!1,time:null,date:null,submitted:!1,originStopId:null,destinationStopId:null},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"searchBar container"},i.a.createElement("h3",{className:"searchHeading"}," A Trip Planner for train travel "),i.a.createElement(S.a,{onSubmit:this._handleSubmit},i.a.createElement(S.a.Label,{htmlFor:"origin"}," From: "),i.a.createElement(S.a.Control,{type:"text",name:"origin",id:"origin",onChange:this._handleOriginChange,className:"searchInput",required:!0,autoFocus:!0}),i.a.createElement(S.a.Label,{htmlFor:"destination"}," To: "),i.a.createElement(S.a.Control,{type:"text",name:"destination",id:"destination",onChange:this._handleDestinationChange,className:"searchInput",required:!0}),i.a.createElement(S.a.Label,{htmlFor:"date"}," Select a date: "),i.a.createElement(S.a.Control,{type:"date",name:"date",id:"date",onChange:this._handleDate,className:"searchInput"}),i.a.createElement(S.a.Label,{htmlFor:"time"}," Pick a time: "),i.a.createElement(S.a.Control,{type:"time",name:"time",id:"time",onChange:this._handleTime,className:"searchInput"}),i.a.createElement(S.a.Label,{htmlFor:"wheelchairAccess",className:"accessToggle"}," Return Wheelchair accessible routes only "),i.a.createElement(S.a.Control,{type:"checkbox",name:"wheelchairAccess",className:"accessToggle",id:"wheelchairAccess",onChange:this._handleWheelchairInput}),i.a.createElement(N.a,{type:"submit",htmlFor:"submit",variant:"danger",size:"lg"}," Plan Trip ")),i.a.createElement(O,{origin:this.state.origin,destination:this.state.destination,submitted:this.state.submitted,resultSubmitted:this.resultSubmitted,time:this.state.time,date:this.state.date}))}}]),t}(n.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h4",null," This is a footer "))}}]),t}(n.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null),i.a.createElement(k,null),i.a.createElement(_,null))}}]),t}(n.Component),F=a(14),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={firstName:null,lastName:null,username:null,email:null,password:null},e._firstNameChange=e._firstNameChange.bind(Object(F.a)(Object(F.a)(e))),e._lastNameChange=e._lastNameChange.bind(Object(F.a)(Object(F.a)(e))),e._usernameChange=e._usernameChange.bind(Object(F.a)(Object(F.a)(e))),e._emailChange=e._emailChange.bind(Object(F.a)(Object(F.a)(e))),e._handleSubmit=e._handleSubmit.bind(Object(F.a)(Object(F.a)(e))),e._passwordChange=e._passwordChange.bind(Object(F.a)(Object(F.a)(e))),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"_firstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"_lastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"_usernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"_emailChange",value:function(e){this.setState({email:e.target.value})}},{key:"_passwordChange",value:function(e){this.setState({password:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("div",{className:"signup App container"},i.a.createElement(f,null),i.a.createElement("h3",null," Sign up "),i.a.createElement(S.a,{onSubmit:this._handleSubmit},i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,{htmlFor:"firstName"}," First Name: "),i.a.createElement(S.a.Control,{type:"text",name:"firstName",id:"firstName",onChange:this._firstNameChange,className:"searchInput"})),i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,{htmlFor:"lastName"}," Last Name: "),i.a.createElement(S.a.Control,{type:"text",name:"lastName",id:"lastName",onChange:this._lastNameChange,className:"searchInput"})),i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,{htmlFor:"userame"}," Pick a username: "),i.a.createElement(S.a.Control,{type:"text",name:"username",id:"username",onChange:this._usernameChange,className:"searchInput"})),i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,{htmlFor:"email"}," Email: "),i.a.createElement(S.a.Control,{type:"text",name:"email",id:"email",onChange:this._emailChange,className:"searchInput"})),i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,{htmlFor:"password"}," Password: "),i.a.createElement(S.a.Control,{type:"text",name:"password",id:"password",onChange:this._passwordChange,className:"searchInput"})),i.a.createElement(N.a,{type:"submit",htmlFor:"submit",variant:"danger"}," Sign in ")),i.a.createElement(_,null))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"signup App container"},i.a.createElement(f,null),i.a.createElement("h3",null," Sign in "),i.a.createElement(S.a,null,i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,{htmlFor:"email"}," Email: "),i.a.createElement(S.a.Control,{type:"email",name:"email",id:"email",placeholder:"Enter email",className:"searchInput"})),i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,{htmlFor:"password"}," Password: "),i.a.createElement(S.a.Control,{type:"text",name:"password",id:"password",placeholder:"Enter password",className:"searchInput"})),i.a.createElement(N.a,{type:"submit",htmlFor:"submit",variant:"danger"}," Sign in ")),i.a.createElement(_,null))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"confirmation"},i.a.createElement(f,null),i.a.createElement("h2",null," Confirmation Page "),i.a.createElement(_,null))}}]),t}(n.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var W=i.a.createElement(s.a,null,i.a.createElement("div",null,i.a.createElement(o.a,{exact:!0,path:"/",component:T}),i.a.createElement(o.a,{exact:!0,path:"/signup",component:I}),i.a.createElement(o.a,{exact:!0,path:"/signin",component:L}),i.a.createElement(o.a,{path:"/confirmation",component:A})));l.a.render(W,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Trip-Planner",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Trip-Planner","/service-worker.js");x?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):P(t,e)})}}()},19:function(e,t,a){},46:function(e,t,a){e.exports=a(107)}},[[46,1,2]]]);
//# sourceMappingURL=main.4ff56864.chunk.js.map