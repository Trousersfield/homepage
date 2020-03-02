import Home from './views/Home.vue'
import CV from './views/CV.vue'

export default {
  mode: 'history',
  routes: [
    {
      path: '/cv',
      name: 'cv',
      component: CV,
      // try something out: meta field for authentication?
      meta: { requiresAuth: false }
    },
    {
      path: '*',
      name: 'home',
      component: Home,
      meta: { requiresAuth: false }
    }
  ]
}
