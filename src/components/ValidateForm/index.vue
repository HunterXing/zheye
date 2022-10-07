<template>
    <div class="form-com-wrap">
        <slot></slot>
        <div class="form-footer" @click="submitForm">
            <slot name="footer">
                <button type="button" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </div>
</template>
<script lang="ts">
import mitt from 'mitt'
import { defineComponent, onUnmounted } from 'vue'
export type Events = {
    'form-item-created': string
}
type validateFuc = () => boolean

export const emitter = mitt<any>()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, ctx) {
    let validateFuncs: validateFuc[] = []

    /**
     * @description: 表单整体提交数据校验
     * @return {*}
     */
    const submitForm = () => {
      const allpass = validateFuncs.map((validateFunc) => validateFunc()).every(validate => validate)
      ctx.emit('form-submit', allpass)
    }

    const callback = (func: validateFuc) => {
      validateFuncs.push(func)
    }

    emitter.on('form-item-created', callback)

    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      validateFuncs = []
    })

    return {
      submitForm
    }
  }
})

</script>

<style lang="scss" scoped>
.form-com-wrap {
    padding: 10px;
}
</style>
