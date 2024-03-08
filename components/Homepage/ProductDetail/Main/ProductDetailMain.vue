<template>
  <div class="content">
    <CategoryNavigation />
    <div class="product-detail container mx-auto">
      <div class="product-grid grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductDetailImage :imageData="props.data" />
        <ProductDetailDescription :descriptionData="props.data" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

type Props = {
  data?: Product
}

const props = withDefaults(defineProps<Props>(), {
  data: undefined,
})

// console.log(props.data)
</script>

<style lang="scss">
@import './assets/css/components/HomePage/ProductDetail/Main/product-detail-main.scss';
</style>
