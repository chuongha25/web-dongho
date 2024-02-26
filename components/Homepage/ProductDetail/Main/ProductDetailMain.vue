<template>
  <div class="content">
    <CategoryNavigation />
    <div class="product-detail container mx-auto px-4">
      <div class="product-grid grid grid-cols-2 gap-4">
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
