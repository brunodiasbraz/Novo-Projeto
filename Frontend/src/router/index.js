import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import VerifyEmail from '../views/VerifyEmail.vue'
import HomeAPP from '../views/HomeAPP.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: Registro
    },
    {
      path: '/homeApp',
      name: 'homeApp',
      component: HomeAPP
    },
    {
      path: '/verify-email',
      name: 'verify-email',
      component: VerifyEmail
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
