<template>
  <NavBar />
  <div class="container-fluid p-4 bg-bege">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-6 bg-white mb-4 p-0 shadow rounded-4 d-flex">
        <div class="d-none d-md-block col-md-6 p-0">
          <img src="@assets/Frame.svg" alt="Description" class="img-fluid rounded-4 h-100 w-100"
            style="object-fit: cover;">
        </div>
        <div class="col-12 col-md-6 p-4 p-md-5">
          <FormLogin />
        </div>
      </div>
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
.bg-bege {
  background: #FBF7EC;
}
</style>
