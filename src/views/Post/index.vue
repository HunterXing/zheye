<template>
    <div class="Column-wrap">
        <post-list :list="posts"></post-list>
    </div>
</template>

<script setup lang="ts">
import PostList from './components/PostList/index.vue'
import { useDataStore } from '@/store/dataStore'
import { storeToRefs } from 'pinia'
const dataStore = useDataStore()
const { posts } = storeToRefs(dataStore)

</script>

<style lang="scss" scoped>
</style>
