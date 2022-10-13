import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: async () => await import('@/views/Home/index.vue'),
    meta: {
      requireAuth: false,
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: async () => await import('@/views/Login/index.vue'),
    meta: {
      requireAuth: false,
      title: '登录'
    }
  },
  {
    path: '/column/:id',
    name: 'ColumnDetail',
    component: async () => await import('@/views/ColumnDetail/index.vue'),
    meta: {
      requireAuth: true,
      title: '专栏列表'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
