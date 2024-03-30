const authStore = useAuthStore()

export default defineNuxtRouteMiddleware(async () => {
  const isAuthenticated = authStore.user.id
  // console.log(isAuthenticated)

  if (!isAuthenticated) {
    return navigateTo('/admin/login')
  }
})
