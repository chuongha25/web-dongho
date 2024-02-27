<template>
  <div class="content">
    <CategoryNavigation />
    <div class="category-content container mx-auto">
      <CategorySection />
    </div>
    <HomepageTitle />
    <AlbumBrands />
    <Line />
    <div class="category-products">
      <CategoryProductFilter />
      <CategoryProductList />
      <HomepagePagination />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
