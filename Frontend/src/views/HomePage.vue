
<script setup>
import Section1 from '@components/Section1.vue'
import Section2 from '@components/Section2Cards.vue'
</script>
<template>
  <div>
    <Section1 />
  </div>
  <div>
    <Section2 />
  </div>
  <!---<div class="p-4">
    <div class="container-fluid px-5 row align-items-center">
      <div class="col">
        <div class="col" style="padding-left: 15%">
          <h1>A solução ideal para sua empresa</h1>
          <p class="mt-4 mb-4 fs-5 col-9">
            <strong>Simplifique</strong> a comunicação entre seus atendentes e clientes.
          </p>
          <a
            class="btn btn-outline-primary btn-lg"
            role="button"
            href="#"
            style="width: 180px; height: 50px"
            >Saiba mais!</a
          >
        </div>
      </div>
      <div class="col">
        <img class="img-fluid" src="../assets/Teste.png" alt="aqui uma imagem" />
      </div>
    </div>
  </div>--->
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
  data() {
    return {
      titlePage: 'Aqui um Slide'
    }
  }
}

</script>

<style></style>
