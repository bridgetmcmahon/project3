(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(50),o=a.n(s);a(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(3),i=a(4),c=a(6),m=a(5),u=a(7),p=a(134),h=a(135),d=a(136),f=a(51),g=a.n(f);a(119),a(121),a(132);g.a.initializeApp({apiKey:"AIzaSyBwe7XZHJjqOp2F779REb4wFZ-Xwc5RpzM",authDomain:"granplan-database.firebaseapp.com",databaseURL:"https://granplan-database.firebaseio.com",projectId:"granplan-database",storageBucket:"granplan-database.appspot.com",messagingSenderId:"809306430652"});var E=g.a,b=a(133),v=(a(125),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"header"},r.a.createElement("div",{className:"nav-bar"},this.props.userLoggedIn?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/appointments"},"Appointments")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/chatroom"},"Chat")),r.a.createElement("li",null,r.a.createElement("button",{className:"logout",onClick:this.props.logout},"Log Out"))):r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/register"},"Register")))))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={currentUser:null},E.auth().onAuthStateChanged(function(e){e&&a.setState({currentUser:e.displayName})}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.currentUser;return r.a.createElement("div",{className:"home-component"},r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Granplan"),r.a.createElement("h2",{style:{color:"#8182A3"}},"Helping families with rostering elderly and parental care.")),e?r.a.createElement("div",null,r.a.createElement("div",{className:"home-buttons hero hero-appointments"},r.a.createElement(b.a,{to:"/appointments"},"View Appointments")),r.a.createElement("div",{className:"home-buttons hero hero-chatroom"},r.a.createElement(b.a,{to:"/chatroom"},"View Messages"))):r.a.createElement("div",{className:"login-register"},r.a.createElement("div",{className:"home-login hero home-buttons"},r.a.createElement(b.a,{to:"/login"},"Login")),r.a.createElement("div",{className:"home-register hero home-buttons"},r.a.createElement(b.a,{to:"/register"},"Register"))))}}]),t}(n.Component),O=a(14),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",errors:[],loading:!1},a.isFormValid=function(e){var t=e.email,n=e.password;if(t&&n)return!0;a.setState({errors:"Please fill in both fields"})},a._handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a._handleSubmit=function(e){e.preventDefault(),a.isFormValid(a.state)&&(a.setState({errors:"",loading:!0}),E.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){console.log(e),a.props.history.push("/appointments")}).catch(function(e){console.log(e.message),a.setState({email:"",password:"",errors:""+e.message,loading:!1})}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errors,s=e.loading;return console.log("render"),r.a.createElement("div",{className:"small-container"},r.a.createElement("h2",null,"Login:"),r.a.createElement("form",{onSubmit:this._handleSubmit,className:"form"},r.a.createElement("input",{name:"email",placeholder:"Email",onChange:this._handleChange,value:t,type:"email"}),r.a.createElement("input",{name:"password",placeholder:"Password",onChange:this._handleChange,value:a,type:"password"}),r.a.createElement("button",{disabled:s,className:s?"loading submit":"submit"},"Submit")),n.length>0&&r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"Error"),r.a.createElement("p",null,n)),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(b.a,{to:"/register"},"Register here")))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",passwordConfirmation:"",errors:[],loading:!1,usersRef:E.database().ref("users")},a.isFormValid=function(){return a.isFormEmpty(a.state)?(a.setState({errors:"Fill in all fields"}),!1):!!a.isPasswordValid(a.state)||(a.setState({errors:"Password is not valid"}),!1)},a.isFormEmpty=function(e){var t=e.username,a=e.email,n=e.password,r=e.passwordConfirmation;return!t.length||!a.length||!n.length||!r.length},a.isPasswordValid=function(e){var t=e.password,a=e.passwordConfirmation;return!(t.length<6||a.length<6)&&t===a},a._handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a._handleSubmit=function(e){e.preventDefault(),a.isFormValid()&&(a.setState({errors:"",loading:!0}),E.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){e.user.updateProfile({displayName:a.state.username}).then(function(){a.saveUser(e).then(function(){console.log("user saved")})}).catch(function(e){console.log(e),a.setState({errors:a.state.errors.concat(e),loading:!1})})}).catch(function(e){console.error(e),a.setState({errors:e,loading:!1})}))},a.saveUser=function(e){return a.state.usersRef.child(e.user.uid).set({name:e.user.displayName})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password,s=e.passwordConfirmation,o=e.errors,l=e.loading;return r.a.createElement("div",{className:"small-container"},r.a.createElement("h2",null,"Register:"),r.a.createElement("form",{onSubmit:this._handleSubmit,className:"form"},r.a.createElement("input",{name:"username",placeholder:"Username",onChange:this._handleChange,value:t,type:"text"}),r.a.createElement("input",{name:"email",placeholder:"Email",onChange:this._handleChange,value:a,type:"email"}),r.a.createElement("input",{name:"password",placeholder:"Password",onChange:this._handleChange,value:n,type:"password"}),r.a.createElement("input",{name:"passwordConfirmation",placeholder:"Password Confirmation",onChange:this._handleChange,value:s,type:"password"}),r.a.createElement("button",{disabled:l,className:l?"loading":""},"Submit")),o.length>0&&r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"Error"),r.a.createElement("p",null,o)),r.a.createElement("p",null,"Already a User? ",r.a.createElement(b.a,{to:"/login"},"Login here")))}}]),t}(n.Component),C=a(65),S=(a(128),a(52)),N=a.n(S),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showAppointmentInfo:!1},a._handleShowClick=function(){a.setState({showAppointmentInfo:!a.state.showAppointmentInfo})},a._handleDeleteClick=function(){Object(C.confirmAlert)({title:"Wait!",message:"Are you sure you want to delete this appointment? This action can't be undone.",buttons:[{label:"Yes",onClick:a.props.deleteAppointment},{label:"No",onClick:function(){return console.log("clicked no")}}]})},a.nominateFamilyMember=function(){var e=a.props.appointment,t=e.purpose,n=e.patient,r=e.date,s=e.time,o=e.location,l=e.notes;E.auth().onAuthStateChanged(function(e){if(e){var i={familyMember:e.displayName,purpose:t,patient:n,date:r,time:s,location:o,notes:l},c={};c["/".concat(a.props.appointmentKey)]=i,E.database().ref("appointments").update(c)}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.appointment,t=e.purpose,a=e.patient,n=e.date,s=e.location,o=e.time,l=e.notes,i=e.familyMember,c=this.state.showAppointmentInfo;return r.a.createElement("div",{className:"appointment-card"},r.a.createElement("div",{className:"appointment-header"},r.a.createElement("span",null,r.a.createElement("i",{onClick:this._handleShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("h3",null,t),r.a.createElement("p",null,n)),r.a.createElement("i",{className:"fas fa-times",onClick:this._handleDeleteClick,style:{cursor:"pointer",color:"#F08080",marginLeft:"20px"}})),c&&r.a.createElement("div",{className:"appointment-info"},r.a.createElement("p",null,r.a.createElement("strong",null,"For"),": ",a),r.a.createElement("p",null,r.a.createElement("strong",null,"Location"),": ",s),r.a.createElement("p",null,r.a.createElement("strong",null,"Time"),": ",o),r.a.createElement("p",null,r.a.createElement("strong",null,"Notes"),": ",l||"-"),r.a.createElement("p",null,r.a.createElement("strong",null,"Family Member"),": ",i),r.a.createElement("span",{className:"controls"},""!==i?r.a.createElement("button",{disabled:!0,className:"nominate-button disabled"},r.a.createElement(N.a,{symbol:"\u270b\ud83c\udffb",label:"hand"}),"I can take ".concat(a," to this one!")):r.a.createElement("button",{className:"nominate-button",onClick:this.nominateFamilyMember},r.a.createElement(N.a,{symbol:"\u270b\ud83c\udffb",label:"hand"}),"I can take ".concat(a," to this one!")),r.a.createElement(b.a,{className:"edit-link",to:"/appointments/".concat(this.props.appointmentKey)},r.a.createElement("i",{className:"fas fa-pen"})))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).deleteAppointment=function(e){E.database().ref("appointments").child(e).remove(),a.fetchAppointments()},a.state={appointments:null,currentUser:null},E.auth().onAuthStateChanged(function(e){e?(a.setState({currentUser:e.displayName}),a.fetchAppointments()):a.props.history.push("/")}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"fetchAppointments",value:function(){var e=this;E.database().ref("appointments").orderByChild("familyMember").equalTo(this.state.currentUser).on("value",function(t){console.log(t.val()),e.setState({appointments:t.val()})})}},{key:"render",value:function(){var e=this,t=this.state.appointments;return r.a.createElement("div",{className:"user-info"},r.a.createElement("h1",null,"My Appointments"),t?Object.keys(t).map(function(a){return r.a.createElement(k,{key:a,appointmentKey:a,appointment:t[a],deleteAppointment:e.deleteAppointment.bind(e,a)})}):null,r.a.createElement(b.a,{className:"link",to:"/appointments"},"Back to All Appointments"))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e)))._handleInput=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.fetchAppointments=function(){(""===a.state.searchTerm?E.database().ref("appointments").orderByChild("date"):E.database().ref("appointments").orderByChild("patient").equalTo(a.state.searchTerm)).on("value",function(e){var t=e.val(),n=Object.keys(t).map(function(e){return t[e].key=e,t[e]});n.sort(function(e,t){return(e=new Date(e.date))<(t=new Date(t.date))?-1:e>t?1:0});var r={};n.forEach(function(e){r[e.key]=e,delete e.key}),a.setState({appointments:r})})},a.deleteAppointment=function(e){E.database().ref("appointments").child(e).remove(),a.fetchAppointments()},a.nominateFamilyMember=function(e,t){var a={familyMember:t},n={};n["/".concat(e)]=a,E.database().ref("appointments").update(n)},a.state={appointments:null,searchTerm:"",currentUserId:null},E.auth().onAuthStateChanged(function(e){e?a.setState({currentUserId:e.uid}):a.props.history.push("/login")}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchAppointments()}},{key:"render",value:function(){var e=this,t=this.state,a=t.appointments,n=t.currentUserId;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"appointments-heading"},r.a.createElement("div",{className:"new-appointment"},r.a.createElement(b.a,{to:"/appointments/new"},r.a.createElement("i",{className:"fas fa-plus"}),r.a.createElement("h3",null,"New Appointment"))),r.a.createElement("h1",null,"Upcoming Appointments")),r.a.createElement("hr",null),r.a.createElement(b.a,{to:"/user/".concat(n),className:"link"},"View My Appointments"),r.a.createElement("form",{onSubmit:this.fetchAppointments,className:"form search"},r.a.createElement("input",{type:"search",name:"searchTerm",placeholder:"Search by patient...",onChange:this._handleInput}),r.a.createElement("input",{type:"submit",value:"Search"})),a?Object.keys(a).map(function(t){return r.a.createElement(k,{key:t,appointmentKey:t,appointment:a[t],deleteAppointment:e.deleteAppointment.bind(e,t)})}):r.a.createElement("p",null,"No current appointments")))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={purpose:"",patient:"",date:"",time:"",location:"",notes:"",familyMember:"",errors:[],appointmentsRef:E.database().ref("appointments"),currentUser:null,editMode:!1},a.isFormValid=function(){var e;return!a.isFormEmpty(a.state)||(e={message:"Fill in the required fields"},a.setState({errors:[].concat(e)}),!1)},a.isFormEmpty=function(e){var t=e.purpose,a=e.patient,n=e.date,r=e.location;return!t.length||!a.length||!n.length||!r.length},a._handleInput=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a._handleSubmit=function(e){if(e.preventDefault(),a.isFormValid()){a.setState({errors:[]});var t={purpose:a.state.purpose,patient:a.state.patient,date:a.state.date,time:a.state.time,location:a.state.location,notes:a.state.notes,familyMember:a.state.familyMember};a.state.editMode?a.editAppointment(t):a.addNewAppointment(t)}},a.fetchAppointment=function(e){E.database().ref().child("appointments").child(e).once("value",function(e){a.setState({date:e.val().date,time:e.val().time,familyMember:e.val().familyMember,location:e.val().location,notes:e.val().notes,patient:e.val().patient,purpose:e.val().purpose})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"addNewAppointment",value:function(e){var t=this.state.appointmentsRef.push().key,a={};a["/".concat(t)]=e,this.state.appointmentsRef.update(a),this.props.history.push("/appointments")}},{key:"editAppointment",value:function(e){var t=this.props.match.params.id,a={};a["/".concat(t)]=e,this.state.appointmentsRef.update(a),this.props.history.push("/appointments")}},{key:"componentWillMount",value:function(){this.props.match.params.id&&this.setState({editMode:!0})}},{key:"componentDidMount",value:function(){this.state.editMode&&this.fetchAppointment(this.props.match.params.id),this.fetchCurrentUser()}},{key:"fetchCurrentUser",value:function(){var e=this;E.auth().onAuthStateChanged(function(t){e.setState({currentUser:t.displayName})})}},{key:"render",value:function(){var e=this.state,t=e.purpose,a=e.patient,n=e.date,s=e.time,o=e.location,l=e.notes,i=e.familyMember,c=e.currentUser;return r.a.createElement("div",null,r.a.createElement("div",{className:"container form"},this.state.editMode?r.a.createElement("h2",null,"Edit Appointment:"):r.a.createElement("h2",null,"New Appointment:"),r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("label",{htmlFor:"patient"},"For"),r.a.createElement("input",{type:"text",name:"patient",value:a,placeholder:"Aileen",required:!0,onChange:this._handleInput}),r.a.createElement("label",{htmlFor:"name"},"Purpose"),r.a.createElement("input",{type:"text",name:"purpose",value:t,placeholder:"Doctor's Appointment",required:!0,onChange:this._handleInput}),r.a.createElement("label",{htmlFor:"date"},"Date"),r.a.createElement("input",{type:"date",name:"date",value:n,onChange:this._handleInput,required:!0}),r.a.createElement("label",{htmlFor:"time"},"Time"),r.a.createElement("input",{type:"time",name:"time",value:s,onChange:this._handleInput,required:!0}),r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement("input",{type:"text",name:"location",value:o,placeholder:"Brisbane",onChange:this._handleInput,required:!0}),r.a.createElement("label",{htmlFor:"notes"},"Notes"),r.a.createElement("textarea",{name:"notes",value:l,placeholder:"Bring scans",onChange:this._handleInput}),this.state.familyMember&&this.state.editMode&&r.a.createElement("div",null,r.a.createElement("p",null,"".concat(i===c?"You are":"".concat(i," is")," taking ").concat(a||"them"," to this appointment"))),r.a.createElement("span",null,r.a.createElement("label",{style:{display:"block"},htmlFor:"familyMember"},"I can take ".concat(a||"them"," to this appointment")),r.a.createElement("input",{type:"radio",name:"familyMember",value:c||"",onChange:this._handleInput}),"Yes",r.a.createElement("input",{type:"radio",name:"familyMember",value:"",onChange:this._handleInput}),"No"),r.a.createElement("input",{type:"submit",value:this.state.editMode?"Update Appointment":"Add Appointment"}))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={currentUser:null},a.fetchCurrentUser(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"fetchCurrentUser",value:function(){var e=this;E.auth().onAuthStateChanged(function(t){t&&e.setState({currentUser:t.displayName})})}},{key:"render",value:function(){var e=this,t=this.props.messages;return r.a.createElement("div",{className:"messages"},Object.keys(t).map(function(a){return r.a.createElement("div",{className:e.state.currentUser===t[a].sender?"message user-message":"message"},r.a.createElement("p",{className:"sender-text"},t[a].sender),r.a.createElement("p",{key:a},t[a].message))}))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={message:""},a._handleInput=function(e){a.setState({message:e.target.value})},a._handleSubmit=function(e){e.preventDefault(),a.props.sendMessage(a.state.message),a.setState({message:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmit,className:" message-form"},r.a.createElement("input",{type:"text",onChange:this._handleInput,placeholder:"Send a message...",value:this.state.message}),r.a.createElement("input",{type:"submit",value:"Send"}))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={messages:[],user:null},a.fetchMessages=function(){E.database().ref().child("messages").limitToLast(20).on("value",function(e){a.setState({messages:e.val()})})},a.sendMessage=function(e){E.database().ref().child("messages").push({message:e,sender:a.state.user})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkForUser",value:function(){var e=this;E.auth().onAuthStateChanged(function(t){t?e.setState({user:t.displayName}):(e.setState({user:null}),e.props.history.push("/login"))})}},{key:"componentDidMount",value:function(){this.fetchMessages(),this.checkForUser()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Chatroom"),r.a.createElement("div",{className:"chatroom"},r.a.createElement(_,{messages:this.state.messages}),r.a.createElement(F,{sendMessage:this.sendMessage})))}}]),t}(n.Component),L=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("p",null,"Sorry! That pages does not exist")))},x=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Created by Bridget McMahon 2019"))},D=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).logout=function(){E.auth().signOut().then(function(t){e.setState({userLoggedIn:!1})})},e.state={userLoggedIn:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.auth().onAuthStateChanged(function(t){t&&e.setState({userLoggedIn:!0})})}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(v,{userLoggedIn:this.state.userLoggedIn,logout:this.logout}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{user:this.state.userLoggedIn,exact:!0,path:"/",component:y}),r.a.createElement(d.a,{exact:!0,path:"/login",component:j}),r.a.createElement(d.a,{exact:!0,path:"/register",component:w}),r.a.createElement(d.a,{path:"/user/:id",component:A}),r.a.createElement(d.a,{exact:!0,path:"/appointments",component:M}),r.a.createElement(d.a,{exact:!0,path:"/appointments/new",component:I}),r.a.createElement(d.a,{path:"/appointments/:id",component:I}),r.a.createElement(d.a,{exact:!0,path:"/chatroom",component:U}),r.a.createElement(d.a,{component:L}))),r.a.createElement(x,null)))}}]),t}(n.Component);o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){e.exports=a(131)},72:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.69161400.chunk.js.map