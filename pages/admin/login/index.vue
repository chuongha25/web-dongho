<template>
  <div class="admin-login-page">
    <el-form label-position="top">
      <el-form-item label="email" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" @click="onLogin"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { Customer } from '@/types/customer'
import { useCookie } from '#imports'

const authStore = useAuthStore()

interface FormLogin {
  email: string
  password: string
}

const form = ref<FormLogin>({
  email: 'admin@gmail.com1',
  password: '123456',
})

const onLogin = async () => {
  try {
    const { data, error } = await useCustomFetch<Customer>(
      '/api/customer/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.value),
      },
    )
    console.log('pass', data)

    // Lưu vào cookie
    const accessToken = useCookie('accessToken')
    // Lấy thông tin token và lưu vào cookie có tên accessToken
    accessToken.value = data.value?.token || ''

    setTimeout(async () => {
      // hàm getUser từ store được gọi để lấy thông tin của người dùng sau khi đã đăng nhập
      await authStore.getUser()

      navigateTo('/admin/dashboard')
    }, 1000)
  } catch (error: any) {
    ElNotification({
      title: 'Success',
      message: error.value?.data.message,
      type: 'error',
    })
  }
}
</script>

<style lang="scss">
.admin-login-page {
  @apply flex justify-center items-center h-screen;

  .el-form {
    @apply w-full max-w-[400px];
  }
}
</style>
