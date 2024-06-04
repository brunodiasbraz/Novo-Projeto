<template>
  <NavBar />
  <div class="bg-bege">
    <div class="col-md-4 d-flex row justify-content-center py-4 bg-white shadow rounded-4">
      <FormRegistro />
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