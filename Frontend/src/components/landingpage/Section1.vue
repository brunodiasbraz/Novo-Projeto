<script setup>
import BtnRoxo from '@elements/BtnRoxo.vue'
</script>
<template>
  <div class="bg-bege">
    <div class="container p-3">
      <div class="row pt-2 pb-5 text-center align-items-center">
        <div class="col">
          <h1><span class="text-decoration">Pontue</span>
            a cada compra e troque por recompensas
            <strong class="c-roxo-text">exclusivas.</strong>
          </h1>
          <p class="col-sm-9 mb-4 mt-3 text-secondary">
            Conheça as vantagens de entrar para o melhor Clube Fidelidade do país.
          </p>
          <BtnRoxo text="Experimente grátis" class="text-uppercase" />
        </div>
        <!-- <div class=" col-sm-4">
            <img class="img-fluid" src="@assets/Group.png" style="width: 85%;" alt="aqui uma imagem" />
          </div> -->
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Section1'
}
</script>

<style scoped>
.bg-bege {
  background: #FBF7EC;
}

.c-roxo {
  background-color: #5B438B;
}

.c-roxo-text {
  color: #5B438B;

}

.text-decoration {
  text-decoration: underline wavy #FFDE59;
}
</style>
