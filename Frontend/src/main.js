import './assets/main.css'

import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

// Configuração do axios para enviar cookies em todas as requisições
axios.defaults.withCredentials = true;

const app = createApp(App)

app.use(router)

app.mount('#app')
