<template>
    <div class="container">
      <Title :text="titlePage" />
    </div>
  </template>
  
  <script>
  import Title from '../components/Title'
  
  export default {
    name: 'AboutPage',
    components: {
      Title
    },
    data() {
      return {
        titlePage: 'Sobre o Vue'
      }
    }
  }
  </script>
