
<template>
  <div class="container">
    <GlobalHeader :user="user"></GlobalHeader>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from '@/components/GlobalHeader/index.vue'
import UserType from '@/types/UserType'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    const user: UserType = {
      isLogin: false,
      name: 'Jack',
      id: 1
    }
    return {
      user
    }
  }
})

</script>
