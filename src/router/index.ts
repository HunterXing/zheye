import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: async () => await import('@/views/Home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: async () => await import('@/views/Login/index.vue')
  },
  {
    path: '/column/:id',
    name: 'Post',
    component: async () => await import('@/views/Post/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
