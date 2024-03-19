<template>
  <div class="main">
    <HomepageMain
      v-if="donhonamsellingData && donhonusellingData"
      :data="{
        donghonamselling: donhonamsellingData,
        donghonuselling: donhonusellingData,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import type { Product } from '~/types/product'
definePageMeta({
  layout: 'custom',
})

const { data: donhonamsellingData } = useFetch<Product[]>('/api/products', {
  query: { category: 'dong-ho-nam-selling' },
})

const { data: donhonusellingData } = useFetch<Product[]>('/api/products', {
  query: { category: 'dong-ho-nu-selling' },
})

// console.log(donhonamsellingData)
// console.log(donhonusellingData)

// const { data: allProductsData } = useFetch('/api/products');
// const donhonamsellingData = ref([]);
// const donhonusellingData = ref([]);
// if (allProductsData.value) {
//   donhonamsellingData.value = allProductsData.value.filter(product => product.category === 'dong-ho-nam-selling');
//   donhonusellingData.value = allProductsData.value.filter(product => product.category === 'dong-ho-nu-selling');
// }
</script>

<style lang="scss">
/* @import "@/assets/css/reset.scss"; */
</style>
