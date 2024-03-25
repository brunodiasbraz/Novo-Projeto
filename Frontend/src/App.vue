<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@components/NavBar.vue'
import LFooter from '@components/Footer.vue'
import { VueElement } from 'vue';
</script>

<template>
  <NavBar />

  <RouterView />

  <LFooter />
</template>
