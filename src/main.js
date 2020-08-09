//https://medium.com/@jsfanatik/vuestacks-chat-app-series-1-2-vue-js-firebase-materialize-css-1253870871b1



import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueChatScroll from 'vue-chat-scroll'
import firebase from "firebase";

Vue.use(VueChatScroll)

Vue.config.productionTip = false


//firebase is initialized
firebase.initializeApp({
  apiKey: "AIzaSyCl8TKEFlN68kINLoZ6ZaqVLHbTUyXVV_Q",
    authDomain: "chat-d74d2.firebaseapp.com",
    databaseURL: "https://chat-d74d2.firebaseio.com",
    projectId: "chat-d74d2",
    storageBucket: "chat-d74d2.appspot.com",
    messagingSenderId: "783086828814",
    appId: "1:783086828814:web:5623b79a81fd55a2076b5f"
    
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')