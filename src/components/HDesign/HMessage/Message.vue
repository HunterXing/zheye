<template>
    <div :class="`message-tip alert alert-${messageType}`" role="alert">
      {{ options?.message }}
      <button
        v-if="options?.closeable"
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="close"
      >
      </button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { MessageOptionProps } from './createMessage'
export default defineComponent({
  name: 'HMessage',
  props: {
    options: {
      type: Object as PropType<MessageOptionProps>
    },
    closeFunc: {
      type: Function as PropType<() => void>
    }
  },
  setup (props, ctx) {
    const propsRefs = toRefs(props)
    const type = propsRefs.options?.value?.type
    // 计算属性
    const messageType = computed(() => {
      switch (type) {
        case 'success':
          return 'success'
        case 'error':
          return 'danger'
        case 'warning':
          return 'warning'
        default:
          return 'info'
      }
    })

    const close = () => {
      ctx.emit('close', 'hi')
    }

    return {
      messageType,
      close
    }
  }
})
</script>
<style lang="scss" scoped>
.message-tip {
  position: fixed;
  top: 20px;
  z-index: 999;
  width: 50%;
  left: 50%;
  transform: translateX(-50%);

  .btn-close {
    position: absolute;
    right: 10px;
  }
}
</style>
