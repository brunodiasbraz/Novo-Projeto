<script setup>
import BtnRoxo from '@elements/BtnRoxo.vue'
</script>
<template>
  <div class="container-fluid p-2 text-center">
    <div class="row mx-md-5 px-md-5 justify-content-center align-items-center">
      <div class="col-sm-9 col-md-6 py-4">
        <img src="@assets/pic1.svg" alt="Imagem da seção 3" class="img-fluid">
      </div>
      <div class="col-sm-3 col-md-6">
        <h3 class="c-roxo-text px-2"><strong>O futuro da Fidelidade é Digital!</strong></h3>
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

.container-fluid{
  margin: 15% 0;
   
  @media (min-width: 768px) {
    margin: 6% 0;
  }
}

img {
  width: 85%;
  /* Tamanho normal para dispositivos móveis */

  @media (min-width: 768px) {
    width: 75%;
  }
}

</style>
