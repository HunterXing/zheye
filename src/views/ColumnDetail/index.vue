<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column._id">
      <div class="col-3 text-center">
        <img :src="column.avatar.url" :alt="column.title" class="rounded-circle border ">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="posts"></post-list>
  </div>
</template>

<script setup lang="ts">
import PostList from './components/PostList/index.vue'
import { useDataStore } from '@/store/dataStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const dataStore = useDataStore()
const { posts, column } = storeToRefs(dataStore)
const route = useRoute()
onMounted(() => {
  dataStore.fetchColumn(route.params.id as string)
  dataStore.fetchPosts(route.params.id as string)
})

</script>

<style lang="scss" scoped>
</style>
