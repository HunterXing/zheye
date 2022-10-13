/*
 * @description: 页面中的数据存储
 * @Date: 2022-10-11 20:51:20
 * @Author: xingheng
 */
import http from '@/http'
import { ColumnProps, PostProps } from '@/types/ColumnType'
import { defineStore } from 'pinia'

export interface DataProps {
  columns: ColumnProps[]
  posts: PostProps[]
}

export const useDataStore = defineStore('data', {
  state: (): DataProps => ({
    columns: [],
    posts: []
  }),
  actions: {
    /**
     * @description: 获得专栏列表
     */
    async fetchColumns () {
      const response = await http.get('/columns')
      this.columns = response.data.list
    },

    async fetchColumn (id: string) {
      const response = await http.get(`columns/${id}`)
      this.columns = [response.data]
    },

    /**
     * @description: 获得一个专栏的文章列表
     * @param {string} id
     */
    async fetchPosts (id: string) {
      const response = await http.get(`columns/${id}/posts`)
      this.posts = response.data.list
    }
  },
  getters: {
    column (): ColumnProps {
      return this.columns.length > 0 ? this.columns[0] : []
    }
  }
})
