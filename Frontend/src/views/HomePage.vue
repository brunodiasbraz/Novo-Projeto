<script setup>
import NavBar from '@components/NavBar.vue'
import Section1 from '@components/landingpage/Section1.vue'
import Section2 from '@components/landingpage/Section2Cards.vue'
import Section3 from '@components/landingpage/Section3.vue'
import Section4 from '@components/landingpage/Section4.vue'
import Section5 from '@components/landingpage/Section5.vue'
import Section6 from '@components/landingpage/Section6.vue'
import Section7 from '@components/landingpage/Section7.vue'
import LFooter from '@components/Footer.vue'
</script>
<template>
  <NavBar />
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />
  <Section5 />
  <Section6 />
  <Section7 />
  <LFooter />
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
