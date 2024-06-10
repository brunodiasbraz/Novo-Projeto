<template>
  <NavBar />
  <div class="container-fluid p-4 bg-bege">
    <div class="row justify-content-center"> <!-- Centralizar o conteúdo -->
      <div class="col-sm-12 col-md-4 bg-white mb-4 p-4 py-4 shadow rounded-4">
        <FormRegistro />
      </div>
    </div>
  </div>
  <LFooter />
</template>

<script setup>
import NavBar from '@components/NavBar.vue'
import FormRegistro from "../components/FormRegistro.vue"
import LFooter from '@components/Footer.vue'

</script>

<style scoped>
.bg-bege {
  background: #FBF7EC;
}
</style>
