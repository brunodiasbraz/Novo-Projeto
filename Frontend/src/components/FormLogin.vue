<template>
  <div>
    <form class="form-signin">
      <h1 class="mb-3 font-weight-normal text-center">Entrar</h1>
      <div class="row text-center px-2 mb-4">
        <div class="col h-75 border rounded">
          <img class="m-2" src="@/components/icons/google.svg" alt="">
        </div>
        <div class="col h-75 border mx-4 rounded">
          <img class="m-2" src="@/components/icons/facebook.svg" alt="">
        </div>
        <div class="col h-75 border rounded">
          <img class="m-2" src="@/components/icons/phone.svg" alt="">
        </div>
      </div>

      <div class="row g-3">
        <label for="emailLogin" class="sr-only">Seu email</label>
        <input v-model="email" type="email" id="emailLogin" class="form-control" placeholder="Seu email" required autofocus>
        <label for="passwordLogin" class="sr-only">Sua senha</label>
        <input v-model="password" type="password" id="passwordLogin" class="form-control" placeholder="Sua senha" required>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Lembre-me
          </label>
        </div>
      </div>
      <BtnRoxo class="col-12 mt-3" id="btnLogin" type="submit" text="Entrar" @click="submitForm" />

    </form>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import BtnRoxo from '@elements/BtnRoxo.vue';

const email = ref('');
const password = ref('');

const submitForm = async () => {
  try {

    const response = await axios.post('https://localhost:3000/login', {
      email: email.value,
      password: password.value,
    });

    console.log('Resposta do backend:', response.data);
  } catch (error) {
    
    console.error('Erro ao enviar formulário:', error);
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
