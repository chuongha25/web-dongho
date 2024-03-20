<template>
  <div class="main">
    <CategoryNamNu
      v-if="listProducts"
      :data="listProducts"
      :total="total"
      @change-page="fetchData"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from 'nuxt/app'
import type { Product } from '@/types/product'
definePageMeta({
  layout: 'custom',
})

const listProducts = ref<Product[]>([])

const route = useRoute()
const total = ref(0)

interface ProductListEntity {
  items: Product[]
  total: number
}

const fetchData = async (pagination: any = { page: 1, record: 12 }) => {
  try {
    const { data } = await useFetch<ProductListEntity>('/api/products', {
      query: {
        category: route.params.category,
        page: pagination.page || 1,
        record: pagination.record || 12,
      },
    })

    listProducts.value = data?.value?.items || []

    total.value = data?.value?.total || 0
  } catch (error) {
    console.log(error)
  }
}

fetchData()
</script>
