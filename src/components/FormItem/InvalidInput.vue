<!--
 * @description: 文本验证组件
 * @Date: 2022-10-06 17:04:49
 * @Author: xingheng
-->
<template>
  <input
    class="form-control"
    autocomplete="off"
    v-bind="$attrs"
    :value="props.modelValue"
    @input="changeInput"
  >
  <div
    class="invalid-feedback"
    v-if="!validPass"
  >{{ errorText }}</div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { emitter } from '@/components/ValidateForm/index.vue'

// interface or types
export interface ruleProps {
  required?: true | false
  type?: 'number' | 'email' | 'reg'
  message: string
}

export interface InvalidInputProps {
  rules?: ruleProps[]
  modelValue: string | number
}

// props
const props = defineProps<InvalidInputProps>()

// data
const errorText = ref('')
const validPass = ref(true)

// emits
const emits = defineEmits<{
  (event: 'update:modelValue', value: string | number): void
}>()

// methods

/**
 * @description: 文本值改变组件
 * @param {*} e
 */
const changeInput = (e: Event): void => {
  const value = (e?.target as HTMLInputElement).value
  emits('update:modelValue', value)
}

/**
 * @description: 验证规则
 */
const validRules = () => {
  const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ // 邮箱正则
  props?.rules?.forEach(rule => {
    // 必填
    if (rule.required) {
      if ((props.modelValue as string)?.trim() === '') {
        errorText.value = rule.message
        validPass.value = false
      } else {
        errorText.value = ''
        validPass.value = true
      }
    }

    // 数字
    if (rule.type === 'number') {
      if (typeof Number(props.modelValue) !== 'number') {
        errorText.value = rule.message
        validPass.value = false
      } else {
        errorText.value = ''
        validPass.value = true
      }
    }

    // email
    if (rule.type === 'email') {
      if (!emailReg.test(props.modelValue as string)) {
        errorText.value = rule.message
        validPass.value = false
      } else {
        errorText.value = ''
        validPass.value = true
      }
    }
  })
  return validPass.value
}

// lifecircle
onMounted(() => {
  emitter.emit('form-item-created', validRules)
})

defineExpose({
  validRules
})
</script>
<style lang="scss" scoped>
  .invalid-feedback {
    display: block;
  }
</style>
