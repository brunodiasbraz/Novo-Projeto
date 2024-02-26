<template>
  <div class="container-fluid p-4 bg-bege">
    <div class="bg-white mb-4 p-5 shadow rounded-4">
      <FormLogin />
      <!-- <FormRegistro /> -->
    </div>
  </div>
</template>
  
<script setup>
import FormLogin from "../components/FormLogin.vue"
import FormRegistro from "../components/FormRegistro.vue"
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