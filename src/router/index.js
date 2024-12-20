import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ChooseProvider.vue'
import AboutView from '@/views/AboutView.vue'
import ChooseProvider from '../views/ChooseProvider.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'choose-provider',
      component: ChooseProvider,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      
    },
  ],
})

export default router
