<template>
  <div class="main">
    <CategoryNamNu
      v-if="donghonamData && donghonuData"
      :data="{ donghonam: donghonamData, donghonu: donghonuData }"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'
definePageMeta({
  layout: 'custom',
})

const { data: donghonamData } = useFetch<Product[]>('/api/products', {
  query: { category: 'dong-ho-nam', pageId: 1 },
})

const { data: donghonuData } = useFetch<Product[]>('/api/products', {
  query: { category: 'dong-ho-nu', pageId: 1 },
})
</script>
