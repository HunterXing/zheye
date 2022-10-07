<template>
  <div class="Home-wrap">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img :src="callout" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
  </div>
</template>

<script setup lang="ts">
import ColumnList, { ColumnProps } from '@/components/ColumnList/index.vue'
import callout from '@/assets/images/callout.svg'
const list: ColumnProps[] = [
  {
    id: 1,
    title: 'TypeScript',
    avatar: '',
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    id: 2,
    title: 'Vue 3',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg',
    description:
      'Vue 3 is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
  },
  {
    id: 3,
    title: 'Vue 2',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg',
    description:
      'Vue 3 is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
  },
  {
    id: 4,
    title: 'react',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg',
    description:
      'Vue 3 is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
  }
]
</script>

<style lang="scss" scoped>
.Home-wrap {
}
</style>
