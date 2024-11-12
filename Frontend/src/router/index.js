import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import VerifyEmail from '../views/VerifyEmail.vue'
import HomeAPP from '../views/app/Home.vue'
import Profile from '../views/app/User.vue'
import LiveChat from '@components/LiveChat.vue'
import axios from 'axios'

const routes = [
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
    path: '/app/home',
    name: 'homeApp',
    component: HomeAPP
  },
  {
    path: '/app/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/compregistro',
    name: 'compregistro',
    component: CompRegistro
  },
  {
    path: '/verify-email/:token',
    name: 'verify-email',
    component: VerifyEmail
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      // Verificar se o cookie jwt existe e é válido
      const response = await axios.get('http://localhost:3000/auth/check-token', {
        withCredentials: true
      })
      if (response.status === 200) {
      } else {
        next({ path: '/registrar', query: { redirect: to.fullPath } })
      }
    } catch (error) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})

export default router
