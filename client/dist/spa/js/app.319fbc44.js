(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),r=n.n(a),o=(n("a481"),n("96cf"),n("fa84")),c=n.n(o),i=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),u=n("1f91"),s=n("42d2"),p=n("b178");i["a"].use(p["c"],{config:{},lang:u["a"],iconSet:s["a"]});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],l=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),h=n.n(l),m=n("2f62");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={name:"App",methods:g({},Object(m["b"])("auth",["authStateChange"])),mounted:function(){this.authStateChange()}},v=y,w=n("2877"),D=Object(w["a"])(v,f,d,!1,null,null,null),k=D.exports,O=n("7424"),x={readData:function(){return Object(O["a"])().get("search")}},I={myData_view:[{name:"code",required:!0,label:"Code",align:"left",field:"code"},{name:"name",label:"Name",field:"name",align:"left"},{name:"description",label:"Description",field:"description",align:"left"}],myData:[],myDataObject:{id01:{code:"CD1",name:"First",description:"First Data Item",status:"current"},id02:{code:"CD2",name:"Second",description:"Second Data Item",status:"current"},id03:{code:"CD3",name:"Third",description:"Third Data Item",status:"current"}}},j={addMyDataObjectItem:function(e,t){i["a"].set(e.myData,t.id,t.data)},addMyDataItem:function(e,t){e.myData.push(t)},loadMyData:function(e,t){e.myData=[],e.myData=t}},S={addMyDataItem:function(){var e=c()(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,a("addMyDataItem",n);case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),addMyDataObjectItem:function(e,t){var n=e.commit,a=Object(p["d"])(),r={id:a,data:t};n("addMyDataObjectItem",r)},loadMyData:function(){var e=c()(r.a.mark((function e(t){var n,a,o,c;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,x.readData();case 4:a=e.sent,a.data&&(o=a.data,n("loadMyData",o)),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),c=e.t0.response.data.error,console.log(c);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},T={myData:function(e){return e.myData},myData_view:function(e){return e.myData_view}},P={namespaced:!0,state:I,mutations:j,actions:S,getters:T},C=n("83ec");i["a"].use(m["a"]);var M=function(){var e=new m["a"].Store({modules:{myData:P,auth:C["a"]},strict:!1});return e},U=n("8c4f"),E=[{path:"/",component:function(){return n.e("2d209b1e").then(n.bind(null,"a9c3"))},children:[{path:"",component:function(){return n.e("2d0e8be2").then(n.bind(null,"8b24"))}},{path:"/saveData",component:function(){return n.e("2d0d6cff").then(n.bind(null,"73c0"))}},{path:"/search",component:function(){return n.e("2d0d3303").then(n.bind(null,"5c65"))}},{path:"/auth",component:function(){return n.e("18da1f88").then(n.bind(null,"21f3"))}}]}];E.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var L=E;i["a"].use(U["a"]);var A=function(){var e=new U["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:L,mode:"hash",base:""});return e},F=function(){return _.apply(this,arguments)};function _(){return _=c()(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof M){e.next=6;break}return e.next=3,M({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=M;case 7:if(t=e.t0,"function"!==typeof A){e.next=14;break}return e.next=11,A({Vue:i["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=A;case 15:return n=e.t1,t.$router=n,a={el:"#q-app",router:n,store:t,render:function(e){return e(k)}},e.abrupt("return",{app:a,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}var B=n("bc3a"),H=n.n(B);i["a"].prototype.$axios=H.a;var $=n("fc1b"),V=function(e){var t=e.router;t.beforeEach((function(e,t,n){var a=C["a"].state.loggedIn;a||"/auth"===e.path?n():n("/auth")}))};function W(){return q.apply(this,arguments)}function q(){return q=c()(r.a.mark((function e(){var t,n,a,o,c,u,s,p,f;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n=t.app,a=t.store,o=t.router,c=!0,u=function(e){c=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),p=[void 0,$["default"],V],f=0;case 11:if(!(!0===c&&f<p.length)){e.next=29;break}if("function"===typeof p[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,p[f]({app:n,router:o,store:a,Vue:i["a"],ssrContext:null,redirect:u,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==c){e.next=31;break}return e.abrupt("return");case 31:new i["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),q.apply(this,arguments)}W()},7424:function(e,t,n){"use strict";var a=n("bc3a"),r=n.n(a),o=n("83ec");t["a"]=function(){return r.a.create({baseURL:"http://localhost:8081/",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o["a"].state.authToken)}})}},"83ec":function(e,t,n){"use strict";n("a481");var a=n("fc1b"),r=n("b178");function o(e){r["b"].hide(),r["a"].create({title:"Error",message:e})}function c(e){r["b"].hide(),r["a"].create({title:"Info",message:e})}var i={loggedIn:!1,authToken:null},u={setLoggedIn:function(e,t){e.loggedIn=t},setToken:function(e,t){e.authToken=t}},s={goToHomePage:function(){this.$router.push("/")},authStateChange:function(e){var t=this,n=e.commit,r=e.dispatch;a["b"].onAuthStateChanged((function(e){e?e.getIdToken().then((function(e){console.log("TOKEN: ",e),n("setLoggedIn",!0),n("setToken",e),r("goToHomePage")})):(n("setLoggedIn",!1),n("setToken",null),t.$router.replace("/auth"))}))},registerUser:function(e,t){e.commit;a["b"].createUserWithEmailAndPassword(t.email,t.password).then((function(e){console.log("User registered, response: ",e),c("User registered")})).catch((function(e){console.log(e.message),o(e.message)}))},loginUser:function(e,t){e.commit;a["b"].signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log("user refresh token: ",e.user.refreshToken)})).catch((function(e){o(e.message)}))},logoutUser:function(){a["b"].signOut()}},p={};t["a"]={namespaced:!0,state:i,mutations:u,actions:s,getters:p}},fc1b:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n("59ca");n("ea7b");var r={apiKey:"AIzaSyBL_eSmsmYZGFF-tWnnCLiHvH7WVOSB8HU",authDomain:"my-full-stack-app.firebaseapp.com",databaseURL:"https://my-full-stack-app.firebaseio.com",projectId:"my-full-stack-app",storageBucket:"my-full-stack-app.appspot.com",messagingSenderId:"470194054235",appId:"1:470194054235:web:113eb439efed41ad0bcb7e",measurementId:"G-G0L975FF7F"},o=a.initializeApp(r),c=o.auth()}},[[0,"runtime","vendor"]]]);