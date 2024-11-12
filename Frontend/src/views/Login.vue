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
</template>

<script setup>
import FormLogin from "../components/FormLogin.vue"

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