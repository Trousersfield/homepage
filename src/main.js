import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import routes from './routes.js'
import storeModels from './store/'
import '@/assets/styles/main.sass'
import '@/assets/styles/button.sass'

Vue.config.productionTip = false

// import routes
const router = new VueRouter(routes)

// import store models
const store = new Vuex.Store(storeModels)

Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
