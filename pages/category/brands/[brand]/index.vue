<template>
  <div class="brand">
    <CategoryBrand v-if="listProducts" :data="listProducts" />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import type { Product } from '~/types/product'
definePageMeta({
  layout: 'custom',
})

const route = useRoute()

const listProducts = ref<Product[]>([])

interface ProductListEntity {
  items: Product[]
  total: number
}

const { data } = await useFetch<ProductListEntity>('/api/products', {
  query: { branch: route.params.brand },
})

listProducts.value = data?.value?.items || []

// console.log(listProducts.value)
</script>
