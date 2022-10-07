<template>
    <div class="Column-wrap">
        <post-list :list="testPosts"></post-list>
    </div>
</template>

<script setup lang="ts">
import PostList from '@/components/PostList/index.vue'
import { testPosts } from '@/mock/testData'

</script>

<style lang="scss" scoped>
</style>
