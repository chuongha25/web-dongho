<template>
  <div class="admin-login-page">
    <el-form label-position="top">
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" />
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

    // Lưu token vào cookie
    const accessToken = useCookie('accessToken')
    // Lấy thông tin token và lưu vào cookie có tên accessToken
    await new Promise((resolve) => {
      accessToken.value = data.value?.token || ''
      resolve(true)
    })

    // hàm getUser từ store được gọi để lấy thông tin của người dùng sau khi đã đăng nhập
    await authStore.getUser()

    navigateTo('/admin/dashboard')
  } catch (error: any) {
    ElNotification({
      title: 'Error',
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
