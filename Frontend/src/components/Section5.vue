<script setup>
import BtnRoxo from '@elements/BtnRoxo.vue'
</script>
<template>
  <div class="container-fluid p-3 text-center">
    <div class="justify-content-center py-5 align-items-center">
      <div>
        <h3 class="c-roxo-text">Junte-se a nós hoje e comece a <strong>Ganhar</strong></h3>
      </div>
      <div class="my-5">
        <img src="@assets/pic2.svg" alt="Imagem da seção 3" style="width: 85%;">
      </div>
      <h5 class="c-roxo-text mb-3">É grátis e fácil de se inscrever.<br />
        Clique no botão abaixo para começar a ganhar pontos e recompensas.</h5>
      <BtnRoxo text="Começar a ganhar" />
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Section5'
}
</script>

<style scoped>
.bg-roxo {
  background-color: #5B438B;
}

.c-roxo-text {
  color: #5B438B;
}

.c-roxo {
  background-color: #5B438B;
}

.bg-bege {
  background: #FBF7EC;
}
</style>
