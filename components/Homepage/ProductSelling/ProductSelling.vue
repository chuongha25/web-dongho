<template>
  <div class="product container mx-auto">
    <HomepageTitle :title="props.title" />
    <div
      class="product__grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        class="product__item"
        v-for="productItem in listProducts"
        :key="productItem._id"
      >
        <div class="product__small">
          <div class="product__img">
            <NuxtLink
              :to="{
                path: `/product/${productItem.branch}/${productItem._id}`,
              }"
            >
              <img
                class="product__after"
                :src="productItem.images[0]"
                alt="Product Image"
              />
              <img
                class="product__before"
                :src="productItem.images[1]"
                alt="Product Image Zoom"
              />
            </NuxtLink>
          </div>
          <div class="product__des">
            <div class="des-title">
              <p>
                {{ productItem.name }}
              </p>
            </div>
            <div class="des-price">
              <span>{{ formatPrice(productItem.price) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const props = withDefaults(
  defineProps<{
    category: string
    title: string
  }>(),
  {
    category: '',
    title: '',
  },
)

const listProducts = ref<Product[]>([])

interface ProductListEntity {
  items: Product[]
  total: number
}

const { data } = await useFetch<ProductListEntity>('/api/products', {
  query: { category: props.category, page: 1, record: 8 },
})

listProducts.value = data?.value?.items || []
</script>
<style lang="scss">
@import './assets/css/components/HomePage/ProductSelling/product-selling.scss';
</style>
