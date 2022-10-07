<template>
    <div class="Column-wrap">
        {{ id }}
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const id = route.params.id
</script>

<style lang="scss" scoped>
</style>
