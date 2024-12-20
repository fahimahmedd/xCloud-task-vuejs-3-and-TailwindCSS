import './assets/css/custom.css';
import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { useThemeStore } from './stores/useTheme';

// Import and load theme store


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// Load the theme on app initialization
const themeStore = useThemeStore(pinia);
themeStore.loadTheme();

app.mount('#app');
