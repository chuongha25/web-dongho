<template>
  <div class="product-list container mx-auto">
    <div
      class="product-list__grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      v-if="props.products"
    >
      <div
        class="product-list__item"
        v-for="productListItem in props.products"
        :key="productListItem._id"
      >
        <div class="product__small">
          <div class="product__img">
            <NuxtLink
              :to="{
                path: `/product/${productListItem.branch}/${productListItem._id}`,
              }"
            >
              <img
                class="product__after"
                :src="productListItem.images[0]"
                alt="Product Image"
              />
              <img
                class="product__before"
                :src="productListItem.images[1]"
                alt="Product Image Zoom"
              />
            </NuxtLink>
          </div>
          <div class="product__des">
            <div class="des-title">
              <p>
                {{ productListItem.name }}
              </p>
            </div>
            <div class="des-price">
              <span>{{ formatPrice(productListItem.price) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const route = useRoute()

const props = withDefaults(
  defineProps<{
    products?: Product[]
    category?: string
  }>(),
  {
    products: () => [],
    category: '',
  },
)
</script>

<style lang="scss">
@import './assets/css/components/Category/ProductList/product-list.scss';
</style>
