import { useCookie } from '@/hooks/useCookie'
import router from './index'
const { getToken } = useCookie()
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // 如果在路由白名单中，直接放行
  if (whiteList.includes(to.path)) next()
  // 如果没有token，跳转到登录页
  if (!getToken()) {
    next({ path: '/login' })
  } else {
    next()
  }
})
