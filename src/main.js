import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Home from "../components/Home.vue"
import UserProfile from "../components/UserProfile.vue"


const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/user/:id", component: UserProfile }
  ],
  mode : "history"
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
