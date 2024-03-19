import { useCookie } from '#imports'

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore()

  if (process.server) {
    const accessToken = useCookie('accessToken')

    if (accessToken.value) {
      await authStore.getUser()
    }
  }
})
