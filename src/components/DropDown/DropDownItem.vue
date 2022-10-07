<template>
  <li>
    <a :class="{
      'dropdown-item':true,
      'disabled': disabled
    }">
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {
    return {
    }
  }
})
</script>
<style lang="scss" scoped></style>
