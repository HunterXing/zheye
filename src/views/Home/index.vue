<template>
  <div class="home-wrap">
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
    <column-list :list="columns"></column-list>
  </div>
</template>

<script setup lang="ts">
import ColumnList from '@/components/ColumnList/index.vue'
import callout from '@/assets/images/callout.svg'
import { useDataStore } from '@/store/dataStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const dataStore = useDataStore()
const { columns } = storeToRefs(dataStore)

onMounted(async () => {
  // 调用pinia中的方法
  dataStore.fetchColumns()
})

</script>

<style lang="scss" scoped></style>
