<template>
  <NavBar />
  <div class="container-fluid d-flex justify-content-center p-4 bg-bege">
    <div class="col-md-4 bg-white mb-4 p-5 shadow rounded-4">
      <FormLogin />
    </div>
  </div>
  <LFooter />
</template>

<script setup>
import NavBar from '@components/NavBar.vue'
import FormLogin from "../components/FormLogin.vue"
import LFooter from '@components/Footer.vue'

</script>

<style scoped>
.bg-roxo {
  background: linear-gradient(180deg, #644a99 0%, #3a226b 100%);
  padding: 10%;
  border-radius: 15px 0px 0px 15px;
}

.bg-bege {
  background: #FBF7EC;
}
</style>