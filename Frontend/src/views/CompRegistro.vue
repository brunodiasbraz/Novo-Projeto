<template>
  <NavBar />
  <div class="container-fluid p-4 bg-bege">
    <div class="col-md-4 bg-white mb-4 p-4 py-5 shadow rounded-4">
      <FormCompRegistro />
    </div>
  </div>
  
  <LFooter />
</template>

<script setup>
import NavBar from '@components/NavBar.vue'
import FormCompRegistro from "../components/FormCompRegistro.vue"
import LFooter from '@components/Footer.vue'
</script>

<style scoped>
.bg-bege {
  background: #FBF7EC;
}
</style>