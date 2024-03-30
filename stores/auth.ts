import type { Customer } from '~/types/customer'

type State = {
  user: Customer
}

export const useAuthStore = defineStore('authStore', {
  state: (): State => ({
    user: {} as Customer,
  }),
  actions: {
    setUser(user: Customer) {
      this.user = user
    },
    async getUser() {
      const { data } = await useCustomFetch<Customer>('/api/customer/me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (data.value) {
        this.user = { ...this.user, ...data.value }
      }
    },

    async logout() {
      try {
        await useCustomFetch<Customer>('/api/customer/logout', {
          method: 'POST',
        })

        this.user = {} as Customer
        const cookie = useCookie('accessToken')
        cookie.value = ''
        navigateTo('/admin/login')
      } catch (error) {
        console.log(error)
      }
    },
  },
})
