import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('user', {
  // other options...
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      userInfo: {
        id: '',
        name: '',
        isLogin: false
      }
    }
  },
  actions: {
    login () {
      this.userInfo = {
        id: '1',
        name: 'admin',
        isLogin: true
      }
    },
    logout () {
      this.userInfo = {
        id: '',
        name: '',
        isLogin: false
      }
    }
  }
})