import { useCookie } from './../hooks/useCookie'
import UserType from '@/types/UserType'
import { defineStore } from 'pinia'
import router from '@/router'
import http from '@/http'

const { setToken, removeToken } = useCookie()

interface stateProps {
  userInfo: UserType
}
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('user', {
  // other options...
  // 推荐使用 完整类型推断的箭头函数
  state: (): stateProps => {
    return {
      // 所有这些属性都将自动推断其类型
      userInfo: {
        _id: '',
        email: '',
        nickName: '',
        descript: '',
        avatar: {
          url: '',
          _id: ''
        },
        column: '',
        createdAt: ''
      }
    }
  },
  actions: {
    async login (form: UserType) {
      const response = await http.post('/user/login', form)
      const token = response.data.token
      setToken(token)
      await this.fetchCurrentUser()
    },
    async fetchCurrentUser () {
      const response = await http.get('/user/current')
      this.userInfo = response.data
    },
    logout () {
      removeToken()
      router.push('/login').catch(() => {})
    }
  }
})
