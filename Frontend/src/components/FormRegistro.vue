<template>
  <div>
    <form class="form-signin">
      <h1 class="mb-4 font-weight-normal text-center">Registre-se</h1>

      <div class="row g-3">
        <label for="nomeRegistro" class="sr-only">Nome Completo</label>
        <input v-model="name" type="email" id="nomeRegistro" class="form-control" placeholder="Nome completo" required
          autofocus>
        <label for="emailRegistro" class="sr-only">Seu email</label>
        <input v-model="email" type="email" id="emailRegistro" class="form-control" placeholder="Seu email" required
          autofocus>
        <label for="passwordRegistro" class="sr-only">Sua senha</label>
        <input v-model="password" type="password" id="passwordRegistro" class="form-control" placeholder="Sua senha"
          required>
        <label for="confirmPasswordRegistro" class="sr-only">Confirme sua senha</label>
        <input v-model="confirmPassword" type="password" id="confirmPasswordRegistro" class="form-control"
          placeholder="Confirme sua senha" required>
      </div>
      <div class="mt-4 alert alert-warning alert-dismissible fade show" id="alertSuccess" role="alert">
        Um e-mail de confirmação foi enviado. <strong>Acesse seu e-mail e clique no link para continuar o
          cadastro.</strong>
      </div>
      <BtnRoxo class="col-12 mt-3" id="btnLogin" type="submit" text="Registrar" @click="submitForm" />
    </form>
  </div>
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

  } catch (error) {
    console.error('Erro ao enviar formulário 2:', error.message); // Adicione .message
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
