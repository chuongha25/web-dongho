<template>
  <div class="content">
    <CategoryNavigation />
    <div class="category-content container mx-auto">
      <CategorySection />
    </div>
    <HomepageTitle />
    <HomepageAlbums />
    <Line />
    <div class="category-products">
      <CategoryProductFilter />
      <CategoryProductList />
      <HomepagePagination />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/css/components/Category/Main/Nam/category-nam.scss';
</style>
