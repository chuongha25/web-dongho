<template>
  <div class="brand">
    <CategoryBrand
      v-if="casioData && citizenData && orientData"
      :data="{ casio: casioData, citizen: citizenData, orient: orientData }"
    />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import type { Product } from '~/types/product'
definePageMeta({
  layout: 'custom',
})

const { data: casioData } = useFetch<Product[]>('/api/products', {
  query: { branch: 'casio' },
})
const { data: citizenData } = useFetch<Product[]>('/api/products', {
  query: { branch: 'citizen' },
})
const { data: orientData } = useFetch<Product[]>('/api/products', {
  query: { branch: 'orient' },
})
</script>
