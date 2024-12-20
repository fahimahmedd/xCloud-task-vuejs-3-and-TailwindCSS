<script setup>
import ThemeToggle from './ThemeToggle.vue';


</script>

<template>
   <header class="bg-white dark:bg-darkBackgroundSecondary">
      <div class="container flex justify-between items-center h-20">
         <a href="/" class="h-10 hidden dark:block">
            <img src="../assets/images/logo/logo-dark.png" alt="" class="h-full">
         </a>
         <a href="/" class="flex items-center h-10 visible dark:hidden">
            <img src="../assets/images/logo/logo-light.png" alt="" class="h-full">
         </a>
         <ThemeToggle/>
      </div> 
  </header>
</template>

<style lang="scss" scoped>


</style>