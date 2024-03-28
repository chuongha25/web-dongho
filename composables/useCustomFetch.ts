const useCustomFetch = async <T>(url: string, options = {}) => {
  const router = useRouter()

  const { data, error } = await useFetch<T>(url, {
    ...options,
    onRequest({ request, options }) {
      // Set the request headers
      options.headers = {
        ...options.headers,
        Authorization: useCookie('accessToken').value || '',
        Role: useCookie('role').value || '1',
      }
    },
  })

  if (error.value) {
    if (error.value.statusCode === 401) {
      router.push('/admin/login')
    }

    return Promise.reject(error)
  } else {
    return Promise.resolve({ data, error })
  }
}

export default useCustomFetch
