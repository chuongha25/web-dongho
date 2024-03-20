<template>
  <div class="content">
    <HomepageSlider />
    <HomepageAlbums title="Bộ sưu tập nổi bật" />

    <ProductSelling
      v-for="item in props.categories"
      :category="item.name"
      :title="item.description"
    />
    <HomepageService title="Các dịch vụ tại cửa hàng" />
    <HomepageBrands title="Thương hiệu nổi tiếng" />
    <Line />
    <HomepageBanner />
  </div>
</template>

<script setup lang="ts">
import type { Category } from '~/types/category'

type Props = {
  categories: Category[]
}
const props = withDefaults(defineProps<Props>(), {
  categories: () => [],
})
</script>

<style lang="scss">
@import './assets/css/components/HomePage/Main/main.scss';
</style>
