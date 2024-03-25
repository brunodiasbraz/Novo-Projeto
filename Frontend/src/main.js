import './assets/main.css'

import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// // Adicione uma guarda de navegação global
// router.beforeEach((to, from, next) => {
//   // Verifica se a rota requer autenticação
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // Verifica se o usuário está autenticado (coloque sua lógica de verificação aqui)
//     const isAuthenticated = /* Lógica para verificar autenticação, por exemplo, verificar se há um token válido */;

//     if (isAuthenticated) {
//       // Permite o acesso à rota
//       next();
//     } else {
//       // Redireciona para a página de login ou outra página não autenticada
//       next('/');
//     }
//   } else {
//     // Se a rota não requer autenticação, permite o acesso
//     next();
//   }
// });

app.mount('#app')
