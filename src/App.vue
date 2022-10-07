
<template>
  <div class="container">
    <GlobalHeader></GlobalHeader>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from '@/components/GlobalHeader/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
    }
  }
})

</script>
