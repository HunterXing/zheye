import { defineStore } from 'pinia'
import { testData, testPosts, ColumnProps, PostProps } from './../mock/testData'

export interface DataProps {
  columns: ColumnProps[]
  posts: PostProps[]
}

export const useDataStore = defineStore('data', {
  state: (): DataProps => ({
    columns: testData,
    posts: testPosts
  })
})
