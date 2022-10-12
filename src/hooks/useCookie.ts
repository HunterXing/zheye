import { useCookies } from 'vue3-cookies'

export const useCookie = (): any => {
  const { cookies } = useCookies()

  const setToken = (value: string, expires?: number, key = 'token'): any => {
    return cookies.set(key, value, expires)
  }
  const getToken = (key = 'token'): any => {
    return cookies.get(key)
  }

  const removeToken = (key = 'token'): any => {
    return cookies.remove(key)
  }

  return {
    setToken,
    getToken,
    removeToken,
    ...cookies
  }
}
