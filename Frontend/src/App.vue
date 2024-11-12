<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@components/NavBar.vue'
import LFooter from '@components/Footer.vue'
import { VueElement } from 'vue';
import LiveChat from '@components/LiveChat.vue'

</script>

<template>
  <NavBar />

  <RouterView />
  <LiveChat />
</template>
