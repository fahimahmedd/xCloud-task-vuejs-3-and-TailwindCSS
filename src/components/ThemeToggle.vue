<template>
    <div
      @click="toggleTheme"
      class="inline-block"
    >
      <button v-if="isDarkMode" class="theme-button">
        <ion-icon name="sunny" class="text-xl"></ion-icon>
      </button>
      <button v-else class="theme-button">
        <ion-icon name="moon"></ion-icon>
      </button>
    </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/useTheme';
import { computed } from 'vue';

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.isDarkMode);

const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>

<style lang="scss" scoped>


</style>