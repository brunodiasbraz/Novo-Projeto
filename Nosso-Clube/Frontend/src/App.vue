<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <NavBar />
      </nav>
    </div>
  </header>

  <button class="btn btn-primary">Primary button</button>

  <RouterView />
</template>
