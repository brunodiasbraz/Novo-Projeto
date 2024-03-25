<script setup>
import BtnRoxo from '@elements/BtnRoxo.vue'
</script>
<template>
  <div class="container-fluid p-2 my-5 text-center">
    <div class="row justify-content-center align-items-center">
      <div class="col py-4">
        <img src="@assets/pic1.svg" alt="Imagem da seção 3" style="width: 85%;">
      </div>
      <div class="col-sm-3">
        <h3 class="c-roxo-text  px-2"><strong>O futuro da Fidelidade é Digital!</strong></h3>
        <p class="c-roxo-text p-2">Ganhe recompensas incríveis e apoie as empresas que você ama.</p>
        <BtnRoxo text="Saiba mais" />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Section3'
}
</script>

<style scoped>
.bg-roxo {
  background-color: #5B438B;
}

.c-roxo-text {
  color: #5B438B;
}
</style>
