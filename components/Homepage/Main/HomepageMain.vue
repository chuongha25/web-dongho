<template>
  <div class="content">
    <HomepageSlider />
    <HomepageAlbums title="Bộ sưu tập nổi bật" />
    <ProductSellingNam
      :products="props.data.donghoname"
      title="Đồng hồ nam bán chạy"
    />
    <ProductSellingNu
      :products="props.data.donghonu"
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
    donghoname?: Product[]
    donghonu?: Product[]
  }
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({
    donghoname: [],
    donghonu: [],
  }),
})
</script>

<style lang="scss">
@import './assets/css/components/HomePage/Main/main.scss';
</style>
