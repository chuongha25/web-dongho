<template>
  <div class="main">
    <CategoryNamNu
      v-if="pageIdDongHoNamData && pageIdDongHoNuData"
      :data="{ pageIdNam: pageIdDongHoNamData, pageIdNu: pageIdDongHoNuData }"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'
definePageMeta({
  layout: 'custom',
})

const route = useRoute()
const pageId = route.params.id

const { data: pageIdDongHoNamData } = useFetch<Product[]>('/api/products', {
  query: { category: 'dong-ho-nam', pageId: `${pageId}` },
})

const { data: pageIdDongHoNuData } = useFetch<Product[]>('/api/products', {
  query: { category: 'dong-ho-nu', pageId: `${pageId}` },
})

// console.log(pageIdDongHoNamData)
// console.log(pageIdDongHoNuData)
</script>
