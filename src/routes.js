import Home from './views/Home.vue'
import CV from './views/CV.vue'
import Playground from './views/Playground.vue'
import Projects from './views/Projects.vue'

export default {
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home,
      meta: { requiresAuth: false }
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV,
      // try something out: meta field for authentication?
      meta: { requiresAuth: false }
    },
    {
      path: '/playground',
      name: 'playground',
      component: Playground,
      meta: { requiresAuth: false }
    },
    {
      path: '/Projects',
      name: 'projects',
      component: Projects,
      meta: { requiresAuth: false }
    }
  ]
}
