<template>
    <div class="row">
      <div class="col-4 mb-4" v-for="column in columnList" :key="column.id">
        <div class="card shadow-sm h-100">
          <div class="card-body text-center">
            <img
              class="card-image-top round-circle border border-right w-25 my-3"
              :src="column?.avatar"
              :alt="column.title"
            />
            <h5 class="card-title">{{ column.title }}</h5>
            <p class="card-text text-left">{{ column.description }}</p>
            <a type="button" class="btn btn-outline-primary" @click="goDetail(column.id)">进入专栏</a>
          </div>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
import defaultColumnImg from '@/assets/images/column.jpg'
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props, ctx) {
    const router = useRouter()
    const columnList = computed(() => {
      return props.list?.map(column => ({
        ...column,
        avatar: column.avatar || defaultColumnImg
      }))
    })
    const goDetail = (id: number) => {
      router.push(`/column/${id}`)
    }
    return {
      columnList,
      goDetail
    }
  }
})
</script>
