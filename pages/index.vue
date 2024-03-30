<template>
  <div class="main">
    <template v-if="categorySelling && categorySelling.length">
      <HomepageMain :categorySelling="categorySelling" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import type { Category } from '~/types/category'

definePageMeta({
  layout: 'custom',
})

const { data: categories } = await useFetch<Category[]>('/api/categories')
const categorySelling = ref<Category[]>([])
if (categories.value) {
  categorySelling.value = categories.value.filter(
    (category) =>
      category.name === 'dong-ho-nam-selling' ||
      category.name === 'dong-ho-nu-selling',
  )
}
</script>
