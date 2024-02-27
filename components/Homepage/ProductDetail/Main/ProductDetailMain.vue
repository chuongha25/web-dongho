<template>
  <div class="content">
    <CategoryNavigation />
    <div class="product-detail container mx-auto">
      <div
        class="product-grid grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <ProductDetailImage />
        <ProductDetailDescription />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/css/components/HomePage/ProductDetail/Main/product-detail-main.scss';
</style>
