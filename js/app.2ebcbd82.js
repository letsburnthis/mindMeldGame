(function(e){function t(t){for(var n,r,c=t[0],i=t[1],d=t[2],u=0,m=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,c=1;c<s.length;c++){var i=s[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/mindMeldGame/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=i;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"1e3e":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return s(t)}function o(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t),s.d(t,"db",(function(){return L}));s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],r={name:"App"},c=r,i=(s("034f"),s("2877")),d=Object(i["a"])(c,a,o,!1,null,null,null),l=d.exports,u=(s("b0c0"),s("8c4f")),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col s6 offset-s3"},[s("div",{staticClass:"container"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content center-align"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.enterChat(t)}}},[s("h4",{attrs:{for:"name"}},[e._v("Enter your name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e.feedback?s("p",{staticClass:"green-text"},[e._v(e._s(e.feedback))]):e._e(),s("button",{staticClass:"btn green"},[e._v("Enter Chat")])])])])])])])},f=[],p={name:"Welcome",data:function(){return{name:null,feedback:null}},methods:{enterChat:function(){this.name?(this.$router.push({name:"Chat",params:{name:this.name}}),L.collection("messages").add({content:" has entered the arena.",name:this.name,timestamp:Date.now(),secret:""})):this.feedback="You must enter a name to join"}}},g=p,h=Object(i["a"])(g,m,f,!1,null,null,null),b=h.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat container"},[e._m(0),s("div",{staticClass:"card",attrs:{id:"chat-window",display:"block"}},[s("div",{staticClass:"card-content"},[s("div",[s("ul",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"messages"},e._l(e.messages,(function(t){return s("li",{key:t.id,staticClass:"chat-message"},[t.name===e.name?s("div",{staticClass:"right-bubble"},[s("span",{staticClass:"green-text"},[e._v(e._s(t.name)+" ")]),s("span",{staticClass:"grey-text text-darken-3"},[e._v(e._s(t.content))])]):e._e(),t.name!==e.name?s("div",{staticClass:"left-bubble right-align"},[s("span",{staticClass:"green-text"},[e._v(e._s(t.name)+" ")]),s("span",{staticClass:"grey-text text-darken-3"},[e._v(e._s(t.content))])]):e._e()])})),0)])]),s("div",{staticClass:"card-action",attrs:{id:"chatInput",display:"block"}},[s("div",{staticClass:"new-message"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.addMessage(t)}}},[s("label",{attrs:{for:"new-message"}},[e._v("New Message from "+e._s(e.name)+" (enter to add):")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],attrs:{type:"text",name:"new-message"},domProps:{value:e.newMessage},on:{input:function(t){t.target.composing||(e.newMessage=t.target.value)}}}),e.feedback?s("p",{staticClass:"red-text"},[e._v(e._s(e.feedback))]):e._e()]),s("button",{staticClass:"btn green",attrs:{type:"button"},on:{click:e.addMessage}},[e._v("Send")])])])]),s("div",{staticStyle:{"font-size":"100px","text-align":"left",position:"fixed",left:"10%",top:"5%","z-index":"2"},attrs:{id:"countDown"}},[s("p",[e._v(e._s(e.countDown))])]),s("div",{staticClass:"hidden",attrs:{id:"gameResponses",display:"block"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("p",{staticStyle:{"text-align":"center","font-size":"30px"}},[e._v(" "+e._s(e.lastResponse))]),s("p",{staticStyle:{"text-align":"center","font-size":"30px"}},[e._v(e._s(e.secondToLastResponse))])])])]),s("div",{staticClass:"center",attrs:{id:"gameReadyButton",display:"block"}},[s("button",{staticClass:"btn red",attrs:{type:"button"},on:{click:e.readyGame}},[e._v("Press When Ready To Start Game!")])]),s("br"),s("div",{staticClass:"hidden",staticStyle:{position:"fixed",left:"5%",top:"50%"},attrs:{id:"gameInput",display:"none"}},[s("label",[e._v("What combines the two?:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.gameMessage,expression:"gameMessage"}],attrs:{type:"text",name:"game-message",id:"gameInputField"},domProps:{value:e.gameMessage},on:{input:function(t){t.target.composing||(e.gameMessage=t.target.value)}}})]),s("div",{staticClass:"hidden",attrs:{id:"resetButton",display:"none"}},[s("button",{staticClass:"btn red",attrs:{type:"button"},on:{click:e.resetEverything}},[e._v("Press to go back to chat")])]),s("br")])},y=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"players"},[s("p",[e._v("MindMelders")]),s("p")])}],v=(s("4160"),s("fb6a"),s("159b"),s("96cf"),s("1da1")),w=s("c1df"),k=s.n(w),x={name:"Chat",props:["name"],data:function(){return{messages:[],newMessage:null,gameMessage:null,feedback:null,countDown:"",lastResponse:"Type",secondToLastResponse:"Whatever",iterations:0,gameStarted:0,gameWon:0,readyCount:0,ready:0}},mounted:function(){this.getMessage()},created:function(){},methods:{getMessageOG:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.collection("messages").orderBy("timestamp").get();case 2:s=t.sent,s.forEach((function(t){var s=t.data();s.id=t.id,s.secret=t.secret,s.timestamp=k()(t.timestamp).format("lll"),e.messages.push(s)}));case 4:case"end":return t.stop()}}),t)})))()},getMessage:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.collection("messages").orderBy("timestamp");case 2:s=t.sent,console.log("recieving a message"),s.onSnapshot((function(t){t.docChanges().forEach((function(t){if(t.type="added"){var s=t.doc;e.messages.push({id:s.id,content:s.data().content,name:s.data().name,timestamp:k()(s.data().timestamp).format("LTS"),secret:s.data().secret}),console.log("added message from firebase to client messages"),0==e.gameStarted&&e.readyCheck()}}))}));case 5:case"end":return t.stop()}}),t)})))()},addMessage:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.newMessage){t.next=7;break}return t.next=3,L.collection("messages").add({content:e.newMessage,name:e.name,timestamp:Date.now(),secret:""});case 3:e.newMessage=null,e.feedback=null,t.next=8;break;case 7:e.feedback="you must enter a message";case 8:case"end":return t.stop()}}),t)})))()},addGameMessage:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.gameMessage){t.next=6;break}return t.next=3,L.collection("messages").add({content:e.gameMessage,name:e.name,timestamp:Date.now(),secret:""});case 3:e.gameMessage=null,t.next=8;break;case 6:return t.next=8,L.collection("messages").add({content:"I fucked up",name:e.name,timestamp:Date.now(),secret:""});case 8:console.log("send game answer to firebase");case 9:case"end":return t.stop()}}),t)})))()},setGameAnswer:function(){this.gameMessage=document.getElementById("gameInputField").value,console.log("setting game answer to "+this.gameMessage)},setLastResponse:function(){var e=this.messages.slice(-1)[0].content,t=e.toLowerCase();this.lastResponse=t,console.log("setting last response to "+this.lastResponse)},setSecondToLastResponse:function(){var e=this.messages.slice(-2)[0].content,t=e.toLowerCase();this.secondToLastResponse=t,console.log("setting second to last response to "+this.secondToLastResponse)},checkGameWon:function(){console.log("checking winning condition"),this.lastResponse==this.secondToLastResponse&&"i fucked up"!=this.lastResponse&&(this.gameWon=1)},game:function(){var e=this;1==this.gameStarted&&0==this.gameWon?(console.log("starting iteration!!!"),console.log(this.lastResponse),console.log(this.secondToLastResponse),setTimeout((function(){return e.countDown="3"}),1e3),setTimeout((function(){return e.countDown="2"}),2500),setTimeout((function(){return e.countDown="1"}),4e3),setTimeout((function(){return e.countDown="0"}),5500),setTimeout(this.setGameAnswer,6500),setTimeout(this.addGameMessage,6600),setTimeout(this.setLastResponse,8900),setTimeout(this.setSecondToLastResponse,9100),this.iterations=this.iterations+1,setTimeout(this.checkGameWon,9700),setTimeout(this.game,1e4)):(this.countDown="YOU WON in "+this.iterations+" attempts!!!",document.getElementById("resetButton").style.display="block",document.getElementById("chatInput").style.display="block",document.getElementById("gameInput").style.display="none",document.getElementById("chat-window").style.display="block")},gameLoop:function(){var e=this;if(0==this.gameWon&&1==this.gameStarted&&(setTimeout((function(){return e.countDown="3"}),1e3),setTimeout((function(){return e.countDown="2"}),2500),setTimeout((function(){return e.countDown="1"}),4e3),setTimeout((function(){return e.countDown="0"}),5500),setTimeout(this.setGameAnswer,6500),setTimeout(this.addGameMessage,7e3),setTimeout(this.setLastResponse,9e3),setTimeout(this.setSecondToLastResponse,9e3),this.iterations=this.iterations+1,setTimeout(this.checkGameWon,9500),setTimeout(1e4)),1==this.gameWon)return this.countDown="YOU WON in "+this.iterations+" attempts!!!",document.getElementById("resetButton").style.display="block",document.getElementById("chatInput").style.display="block",document.getElementById("gameInput").style.display="none",void(document.getElementById("chat-window").style.display="block")},readyGame:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.collection("messages").add({content:" is ready to start the game.",name:e.name,timestamp:Date.now(),secret:"Ready!!!"});case 2:e.ready=1,document.getElementById("gameReadyButton").style.display="none";case 4:case"end":return t.stop()}}),t)})))()},readyCheck:function(){console.log("running ready check"),"Ready!!!"==this.messages.slice(-1)[0].secret&&(this.readyCount=this.readyCount+1,console.log(this.readyCount)),this.readyCount>1&&(this.gameStarted=1,this.setupGame())},setupGame:function(){this.countDown="Starting Game",document.getElementById("chatInput").style.display="none",document.getElementById("gameInput").style.display="block",document.getElementById("chat-window").style.display="none",document.getElementById("gameResponses").style.display="block",console.log("setting up game"),document.getElementById("gameInputField").focus(),this.game()},resetEverything:function(){this.messages=[],this.newMessage=null,this.gameMessage=null,this.feedback=null,this.countDown="",this.lastResponse="Type",this.secondToLastResponse="Whatever",this.iterations=0,this.gameStarted=0,this.gameWon=0,this.readyCount=0,this.ready=0,document.getElementById("chatInput").style.display="block",document.getElementById("gameInput").style.display="none",document.getElementById("chatInput").focus(),document.getElementById("gameReadyButton").style.display="block",document.getElementById("resetButton").style.display="none",document.getElementById("chat-window").style.display="block",document.getElementById("gameResponses").style.display="none"},deleteAll:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.collection("messages").orderBy("timestamp").delete();case 2:case"end":return e.stop()}}),e)})))()}}},C=x,_=(s("f196"),Object(i["a"])(C,j,y,!1,null,null,null)),R=_.exports;n["a"].use(u["a"]);var I=[{path:"/",name:"Home",component:b},{path:"/chat",name:"Chat",component:R,props:!0,beforeEnter:function(e,t,s){e.params.name?s():s({name:"Home"})}}],T=new u["a"]({mode:"history",base:"/mindMeldGame/",routes:I}),M=T,E=s("2f62");n["a"].use(E["a"]);var B=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=s("123d"),O=s.n(z),S=s("8aa5"),D=s.n(S);n["a"].use(O.a),n["a"].config.productionTip=!1,D.a.initializeApp({apiKey:"AIzaSyCl8TKEFlN68kINLoZ6ZaqVLHbTUyXVV_Q",authDomain:"chat-d74d2.firebaseapp.com",databaseURL:"https://chat-d74d2.firebaseio.com",projectId:"chat-d74d2",storageBucket:"chat-d74d2.appspot.com",messagingSenderId:"783086828814",appId:"1:783086828814:web:5623b79a81fd55a2076b5f"});var L=D.a.firestore();new n["a"]({router:M,store:B,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,s){},f196:function(e,t,s){"use strict";var n=s("1e3e"),a=s.n(n);a.a}});
//# sourceMappingURL=app.2ebcbd82.js.map