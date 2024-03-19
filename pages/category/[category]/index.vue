<template>
  <div class="main">
    <CategoryNamNu
      v-if="listProducts.value"
      :data="listProducts.value"
      @change-page="fetchData"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product'
definePageMeta({
  layout: 'custom',
})

const listProducts = ref<Product[]>([])

const route = useRoute()
const total = ref(0)

const fetchData = (pagination: any = { page: 1, record: 12 }) => {
  console.log(pagination)
  const { data } = useFetch<Product[]>('/api/products', {
    query: {
      category: route.params.category,
      page: pagination.page || 1,
      record: pagination.record,
    },
  })

  listProducts.value = data
}

fetchData()
</script>
