<script setup>
import BtnRoxo from '@elements/BtnRoxo.vue'
</script>

<template>
  <div class="bg-bege">
    <div class="container p-3 p-md-5">
      <div class="row pt-sm-2 pb-5 text-center justify-content-center align-items-center">
        <div class="col-md-9">
          <h1><span class="text-decoration">Pontue</span>
            a cada compra e troque por recompensas
            <strong class="c-roxo-text">exclusivas.</strong>
          </h1>
          <p class="col-sm mb-4 mt-3 text-secondary">
            Conheça as vantagens de entrar para o melhor Clube Fidelidade do país.
          </p>
          <!-- <BtnRoxo text="Experimente" href="/registrar" class="text-uppercase px-4" /> -->
          
          <div>
            <a href="/registrar" class="btn btn--promo px-5 c-roxo text-uppercase">Experimente</a>
          </div>

        </div>
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
.btn--promo {
  color: #ffffff;
  background-color: #130f40;
  border-radius: 50px;
}

.btn--promo:after {
  content: 'é grátis!';
  display: inline-block;
  font-size: 0.75rem;
  color: #000000;
  background-color: #FFDE59;
  border-radius: 25px;
  padding: 2px 18px;
  position: absolute;
  margin-top: 25px; 
  margin-left: -55px; 
  transform: rotate(-3deg);
}

.bg-bege {
  background: #FBF7EC;
  padding: 5% 0;
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

h1 {
  font-size: 26px;
  /* Tamanho normal para dispositivos móveis */

  @media (min-width: 768px) {
    font-size: 60px;
  }
}

p {
  font-size: 16px;
  /* Tamanho normal para dispositivos móveis */

  @media (min-width: 768px) {
    font-size: 24px;
  }
}
</style>
