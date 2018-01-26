// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'
import {store} from './store'

Vue.use(Vuetify)
Vue.use(Vuetify, { theme: {
  primary: '#22264b',
  secondary: '#b569692',
  accent: '#b56969',
  error: '#FF5252',
  info: '#e8edf3',
  success: '#4CAF50',
  warning: '#e6cf8b'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyBr0pIY1r6GqBXmg-gn3KZuic8JYGKjwoU",
      authDomain: "wtfmazon.firebaseapp.com",
      databaseURL: "https://wtfmazon.firebaseio.com",
      projectId: "wtfmazon",
      storageBucket: "",
      messagingSenderId: "162492416510"
    })
    this.$store.dispatch('loadItems')
  }
})
