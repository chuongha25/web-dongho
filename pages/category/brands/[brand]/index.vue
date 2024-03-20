<template>
  <div class="brand">
    <CategoryBrand v-if="data" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import type { Product } from '~/types/product'
definePageMeta({
  layout: 'custom',
})

const route = useRoute()

const { data } = await useFetch<Product[]>('/api/products', {
  query: { branch: route.params.brand },
})
</script>
