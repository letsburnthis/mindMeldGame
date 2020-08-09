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
  apiKey: "stuff",
    authDomain: "stuff",
    databaseURL: "stuff",
    projectId: "stuff",
    storageBucket: "stuff",
    messagingSenderId: "stuff",
    appId: "stuff"
    
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')