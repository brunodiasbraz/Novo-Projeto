<template>
  <div class="container-fluid" style="background-color: rgb(238, 238, 238);" >
    <div class="container align-middle cont-login">
      <div class="row">
        <div class="row text-center bg-roxo">
        <h1 class="text-white" ><strong>Que bom ter você por aqui!</strong></h1>
        <span class="text-white">Faça seu cadastro (é super rápido) e gerencie seu programa de Fidelidade na palma da sua mão.</span>
      <div>
        <button type="submit" class="col-6 btn btn-outline-warning">Cadastrar</button>
      </div> 
      </div>

<!---------------------------------------------LOGIN------------------------------------------------->

      <div class="col-sm bg-login">
      <FormLogin />
     </div>
    </div>
    </div>
  </div>
</template>
  
<script setup>
import FormLogin from "../components/FormLogin.vue"
</script>

<style scoped>
.cont-login{
  padding: 3%;
}
.bg-roxo{
  display: flex ;
  align-items: center;
  background: linear-gradient(180deg, #644a99 0%, #3a226b 100%);
  border-radius: 15px 0px 0px 15px;
  width: 550px;
  height: auto;
  padding: 10%;
}

.bg-login{
  border-radius: 0px 15px 15px 0px;
  background-color: white;
}
</style>