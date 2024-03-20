<template>
  <div class="main">
    <ProductDetailMain v-if="productDetailData" :data="productDetailData" />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import { useRoute } from 'vue-router'
import type { Product } from '~/types/product'

definePageMeta({
  layout: 'custom',
})

const route = useRoute()
const id = route.params.id

const { data: productDetailData } = useFetch<Product>(`/api/products/${id}`)
</script>
