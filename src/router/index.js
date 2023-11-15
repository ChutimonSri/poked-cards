import { createRouter, createWebHistory } from 'vue-router'
import PokedexListView from '../views/PokedexListView.vue'
import PokedexDetailsView from '@/views/PokedexDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokedexListView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokedex/:id',
      name: 'pokedex-details',
      props: true,
      component: PokedexDetailsView
    }
  ]
})

export default router