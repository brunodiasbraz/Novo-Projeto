<template>
  <h1 class="mb-4 font-weight-normal text-center">Registre-se</h1>

  <form @submit.prevent="submitForm" class="col-10 d-grid gap-3">
    <div class="form-group">
      <label for="emailRegistro" class="sr-only">Seu email</label>
      <input v-model="email" type="email" id="emailRegistro" class="form-control" placeholder="Seu email" required autofocus>
      <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
    </div>
    <div class="form-group">
      <label for="passwordRegistro" class="sr-only">Sua senha</label>
      <input v-model="password" type="password" class="form-control" id="passwordRegistro" placeholder="Senha" required>
    </div>
    <div class="form-group">
      <label for="confPasswordRegistro" class="sr-only">Confirme sua senha</label>
      <input v-model="confirmPassword" type="password" id="confPasswordRegistro" class="form-control" placeholder="Confirme sua senha" required>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Clique em mim</label>
    </div>
    <BtnRoxo class="col-12 mt-3" id="btnLogin" text="Registrar" @click="submitForm" />
  </form>

  <!----------Alertas----------->
  <div class="mt-4 alert alert-danger alert-dismissible fade show d-none" id="alertError" role="alert">
    Ocorreu um problema durante o registro. Tente novamente mais tarde.
  </div>
  <div class="mt-4 alert alert-success alert-dismissible fade show d-none" id="alertSuccess" role="alert">
    Um e-mail de confirmação foi enviado. <strong>Acesse seu e-mail e clique no link para continuar o cadastro.</strong>
  </div>
  <!----------Fim Alertas----------->
  <hr class="mt-4">
  <p class="text-center px-5">Já possui cadastro? <a href="/login">Clique aqui</a> para fazer o login.</p>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import BtnRoxo from '@elements/BtnRoxo.vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const name = ref('');

const submitForm = async () => {
  //console.log('Entrei no submitForm'); 

  try {
    // Validar se os campos estão preenchidos
    if (!email.value || !password.value || !confirmPassword.value) {
      console.error('Preencha todos os campos.');
      return;
    }

    // Validar se as senhas coincidem
    if (password.value !== confirmPassword.value) {
      console.error('As senhas não coincidem.');
      return;
    }

    const response = await axios.post('http://localhost:3000/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmpassword: confirmPassword.value,
    });

    console.log('Response status:', response.status);
    if (response.status === 201) {
      // Exibir a div de sucesso
      document.getElementById('alertSuccess').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('alertSuccess').classList.add('d-none');
      }, 8000);
    } else {
      // Exibir a div de erro
      document.getElementById('alertError').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('alertError').classList.add('d-none');
      }, 5000);
    }
  } catch (error) {
    console.error('Erro ao enviar formulário:', error.message);
    document.getElementById('alertError').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('alertError').classList.add('d-none');
    }, 5000);
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
