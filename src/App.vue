<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
   <main class="py-12">
    <RouterView />
   </main>
  <!-- <Footer/> -->
</template>

<style scoped></style>
