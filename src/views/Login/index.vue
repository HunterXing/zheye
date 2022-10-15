<template>
  <div class="Login-wrap">
    <validate-form @form-submit="submitForm">
      <form-item label="用户名">
        <invalid-input
          v-model="form.email"
          placeholder="请输入邮箱"
          type = "email"
          :rules="[
            {
              required: true,
              message: '邮箱必填',
            },
          ]"
        ></invalid-input>
      </form-item>
      <form-item label="密码">
        <invalid-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          autocomplete="off"
        ></invalid-input>
      </form-item>
    </validate-form>
  </div>
</template>

<script setup lang="ts">
import ValidateForm from '@/components/ValidateForm/index.vue'
import FormItem from '@/components/FormItem/index.vue'
import InvalidInput from '@/components/FormItem/InvalidInput.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'

const store = useUserStore()
const { login } = store
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const submitForm = (validate: boolean) => {
  if (validate) {
    login(form)
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>
</style>
