import axios from 'axios'

// 封装axios
const http = axios.create({
  baseURL: 'http://apis.imooc.com/api/'
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json'
    }
    // get 请求，添加到 url 中
    config.params = { ...config.params, icode: '29FEC8316F31134A' }
    // 如果是上传文件，添加到 FormData 中
    if (config.data instanceof FormData) {
      config.data.append('icode', '******')
    } else {
      // 普通的 body 对象，添加到 data 中
      config.data = { ...config.data, icode: '******' }
    }
    return config
  }
)

// 响应拦截器
http.interceptors.response.use(
  async response => {
    if (response.status === 200) {
      if (response.data?.code === 0) {
        return await Promise.resolve(response.data)
      } else {
        alert(response.data?.msg)
        return await Promise.resolve(response.data)
      }
    } else {
      return await Promise.reject(response)
    }
  }
)

export default http
