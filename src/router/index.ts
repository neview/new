import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('../views/GuidePages.vue')
    },
    {
      path: '/node',
      name: 'Node',
      component: () => import('../views/NodeList.vue')
    },
    {
      path: '/log',
      name: 'Log',
      component: () => import('../views/Log.vue')
    }
  ]
})

export default router
