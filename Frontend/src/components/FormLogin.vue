<template>
  <h1 class="mb-4 mt-2 font-weight-normal text-center">Entrar</h1>

  <form class="form-signin d-grid gap-3" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="emailLogin" class="sr-only">Seu email</label>
      <input v-model="email" type="email" id="emailLogin" class="form-control" placeholder="Seu email" required
        autofocus>
    </div>
    <div class="form-group">
      <label for="passwordLogin" class="sr-only">Sua senha</label>
      <input v-model="password" type="password" id="passwordLogin" class="form-control" placeholder="Sua senha"
        required>
    </div>
    <div class="form-group">
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me"> Lembre-me
        </label>
      </div>
    </div>

    <div class="alert alert-danger alert-dismissible fade show d-none" id="alertError" role="alert" />

    <BtnRoxo class="col-12" id="btnLogin" type="submit" text="Entrar" @click="submitForm" />
<!--     <div class="row text-center px-3 justify-content-center">
      <span class="my-3">Ou entre com o</span>
      <a id="btnLoginGoogle" class="btn btn-light shadow border text-secondary rounded-5"><img src="@/assets/google.svg"
          class="mx-1 p-md-1 imgGoogle" alt="logo google" style="width: 23px;"> Google</a>
    </div> -->
    <hr class="my-3">
    <p class="text-center">Ainda não é cadastrado? <br><a href="/registrar">Clique aqui</a> e registre-se agora!</p>

  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import BtnRoxo from '@elements/BtnRoxo.vue';

const email = ref('');
const password = ref('');
const router = useRouter();
const apiUrl = import.meta.env.VITE_API_URL;

const submitForm = async () => {
  try {
    const response = await axios.post(`http://${apiUrl}/auth/login`, {
      email: email.value,
      password: password.value,
    }, {
      withCredentials: true,
    });

    console.log('Resposta do backend:', response.data);

    router.push('/app/home');

  } catch (error) {
    if (error.response) {
      console.error('Erro de resposta do servidor:', error.response.status, error.response.data);

      const alertErrorDiv = document.getElementById('alertError');
      alertErrorDiv.innerText = `Oops! ${error.response.data.msg || 'Ocorreu um erro no servidor.'}`;

      alertErrorDiv.classList.remove('d-none');

      setTimeout(() => {
        alertErrorDiv.classList.add('d-none');
      }, 5000);
    } else if (error.request) {
      console.error('Erro de requisição:', error.request);
      alert('Nenhuma resposta do servidor. Verifique sua conexão de rede.');
    } else {
      console.error('Erro ao configurar a requisição:', error.message);
      alert(`Erro: ${error.message}`);
    }
  }
};

</script>


<style scoped>
a {
  text-decoration: none;
}

.login {
  border-radius: 0px 15px 15px 0px;
}
</style>
