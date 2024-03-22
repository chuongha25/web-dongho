<template>
  <div class="main">
    <template v-if="categories && categories.length">
      <HomepageMain :categories="categories" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import type { Category } from '~/types/category'

definePageMeta({
  layout: 'custom',
})

const { data: categories } = useFetch<Category[]>('/api/categories')

// const { data: allProductsData } = useFetch('/api/products');
// const donhonamsellingData = ref([]);
// const donhonusellingData = ref([]);
// if (allProductsData.value) {
//   donhonamsellingData.value = allProductsData.value.filter(product => product.category === 'dong-ho-nam-selling');
//   donhonusellingData.value = allProductsData.value.filter(product => product.category === 'dong-ho-nu-selling');
// }
</script>

<style lang="scss"></style>
