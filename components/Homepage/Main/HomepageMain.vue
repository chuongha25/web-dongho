<template>
  <div class="content">
    <HomepageSlider />
    <HomepageAlbums title="Bộ sưu tập nổi bật" />

    <ProductSelling
      v-for="item in props.categorySelling"
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
  categorySelling: Category[]
}
const props = withDefaults(defineProps<Props>(), {
  categorySelling: () => [],
})
</script>

<style lang="scss" scoped>
@import './assets/css/components/HomePage/Main/main.scss';
</style>
