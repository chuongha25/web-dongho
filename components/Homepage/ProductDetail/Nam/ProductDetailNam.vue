<template>
  <div class="content">
    <CategoryNavigation name="Đồng Hồ Nam" path="/category/dong-ho-nam" />
    <div class="product-detail container mx-auto">
      <div class="product-grid grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductDetailImage />
        <ProductDetailDescription />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/css/components/HomePage/ProductDetail/Nam/product-detail-nam.scss';
</style>
