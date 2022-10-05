<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList/index.vue'

const list: ColumnProps[] = [
  {
    id: 1,
    title: 'TypeScript',
    avatar: '',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    id: 2,
    title: 'Vue 3',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg',
    description: 'Vue 3 is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
  },
  {
    id: 3,
    title: 'Vue 2',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg',
    description: 'Vue 3 is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
  },
  {
    id: 4,
    title: 'react',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg',
    description: 'Vue 3 is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
  }

]

</script>

<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>
