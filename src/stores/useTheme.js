import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('useTheme', () => {
  const isDarkMode = ref(true); // Default to dark mode

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    const html = document.documentElement;

    if (isDarkMode.value) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light'); 
    }
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const html = document.documentElement;

    if (savedTheme === 'light') {
      isDarkMode.value = false;
      html.classList.remove('dark');
    } else {
      isDarkMode.value = true;
      html.classList.add('dark');
    }
  };

  return { isDarkMode, toggleTheme, loadTheme }
})
