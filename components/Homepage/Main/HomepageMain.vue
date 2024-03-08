<template>
  <div class="content">
    <HomepageSlider />
    <HomepageAlbums title="Bộ sưu tập nổi bật" />
    <ProductSelling
      :products="props.data.donghonamselling"
      category="dong-ho-nam"
      title="Đồng hồ nam bán chạy"
    />
    <ProductSelling
      :products="props.data.donghonuselling"
      category="dong-ho-nu"
      title="Đồng hồ nữ bán chạy"
    />
    <HomepageService title="Các dịch vụ tại cửa hàng" />
    <HomepageBrands title="Thương hiệu nổi tiếng" />
    <Line />
    <HomepageBanner />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

type Props = {
  data: {
    donghonamselling?: Product[]
    donghonuselling?: Product[]
  }
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({
    donghonamselling: [],
    donghonuselling: [],
  }),
})
</script>

<style lang="scss">
@import './assets/css/components/HomePage/Main/main.scss';
</style>
