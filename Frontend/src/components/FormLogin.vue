<template>
  <div class="py-3">
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
      <div class="container">
        <div class="row text-center align-items-center">

          <hr class="col-2">

          <div class="col text-secondary">
            <small> ou entre com o e-mail</small>
          </div>

          <hr class="col-2">

        </div>
      </div>

      <div class="row g-2">
        <label for="emailLogin" class="sr-only">Seu email</label>
        <input type="email" id="emailLogin" class="form-control" placeholder="Seu email" required autofocus>
        <label for="passwordLogin" class="sr-only">Sua senha</label>
        <input type="password" id="passwordLogin" class="form-control" placeholder="Sua senha" required>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Lembre-me
          </label>
        </div>
      </div>
      <BtnRoxo class="mt-3" id="btnLogin" type="submit" text="Entrar" />

    </form>
  </div>
</template>
  
<script setup>
import BtnRoxo from '@elements/BtnRoxo.vue'
</script>

<style scoped>
a {
  text-decoration: none;
}

.login {
  border-radius: 0px 15px 15px 0px;
}
</style>
