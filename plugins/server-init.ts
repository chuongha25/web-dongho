import { useCookie } from '#imports'

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore()

  // Kiểm tra plugin có đang chạy trên server hay không
  if (process.server) {
    const accessToken = useCookie('accessToken')

    if (accessToken.value) {
      await authStore.getUser()
    }
  }
})
