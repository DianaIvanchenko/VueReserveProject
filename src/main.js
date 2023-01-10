import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//бд
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyDWb0z_vW8Bye_5auwI_g9VNZEPGkSLt28",
  authDomain: "project-august-26566.firebaseapp.com",
  projectId: "project-august-26566",
  storageBucket: "project-august-26566.appspot.com",
  messagingSenderId: "924250392484",
  appId: "1:924250392484:web:e0d47e82ad676898f36331",
  measurementId: "G-E2GLKDYVG4"
})

//ініціалізація застосунку
let app

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


