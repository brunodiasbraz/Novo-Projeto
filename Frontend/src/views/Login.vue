<template>
  <div class="container-fluid d-flex bg-url p-5 justify-content-center">
    <div class="row container">
      <div class="col-lg-5 col-md-12 d-flex align-items-center bg-roxo">
        <div class="row g-4 text-center">
          <h1 class="text-white"><strong>Que bom ter você por aqui!</strong></h1>
          <span class="text-white">Faça seu cadastro (é super rápido) e gerencie seu programa de Fidelidade na palma da
            sua mão.</span>
          <div>
            <button type="submit" class="btn btn-outline-warning px-5">Cadastrar</button>
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-12">
        <FormLogin />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import FormLogin from "../components/FormLogin.vue"
</script>

<style scoped>
.bg-roxo{
  background: linear-gradient(180deg, #644a99 0%, #3a226b 100%);
  padding: 10%;
  border-radius: 15px 0px 0px 15px;
}
.bg-url{
  background: #FFFFFF url("../assets/fidelidade.png") no-repeat right top fixed;
}
</style>