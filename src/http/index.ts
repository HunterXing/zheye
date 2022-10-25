import axios from 'axios'
import { useRouter } from 'vue-router'
import { useCookie } from '@/hooks/useCookie'
import { createMessage } from '@/components/HDesign/HMessage/createMessage'
const router = useRouter()
// 封装axios
const http = axios.create({
  baseURL: 'http://apis.imooc.com/api/'
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    const { getToken } = useCookie()
    config.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken() as string}`
    }
    // get 请求，添加到 url 中
    config.params = { ...config.params, icode: '29FEC8316F31134A' }
    // 如果是上传文件，添加到 FormData 中
    if (config.data instanceof FormData) {
      config.data.append('icode', '29FEC8316F31134A')
    } else {
      // 普通的 body 对象，添加到 data 中
      config.data = { ...config.data, icode: '29FEC8316F31134A' }
    }
    return config
  }
)

// 响应拦截器
http.interceptors.response.use(
  async response => {
    debugger
    if (response.status === 200) {
      if (response.data?.code === 0) {
        return await Promise.resolve(response.data)
      } else {
        alert(response.data?.msg)
        return await Promise.resolve(response.data)
      }
    } else if (response.status === 401) {
      router.push('/login').catch(() => {})
    } else if (response.status === 404) {
      debugger
      createMessage({
        type: 'error',
        message: response.data?.error
      })
    } else {
      return await Promise.reject(response)
    }
  }, async e => {
    switch (e.response.data.code) {
      case '401':
        createMessage({
          type: 'error',
          message: e.response.data.error
        })
        break
      default:
        createMessage({
          type: 'error',
          message: e.response.data.error,
          timeout: 3000,
          closeable: true
        })
    }

    return await Promise.reject(e)
  }
)

export default http
