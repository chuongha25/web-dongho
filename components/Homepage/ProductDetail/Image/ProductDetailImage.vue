<template>
  <div v-if="imageData?.imagesDetail" class="product-image">
    <!-- Ảnh lớn của sản phẩm -->
    <div class="product-image__main">
      <img
        class="product-image__main__image"
        :src="imageData?.imagesDetail.imageLarge"
        alt="Product Image"
        v-if="imageData?.imagesDetail.imageLarge"
      />
    </div>

    <!-- Danh sách các ảnh nhỏ -->
    <div class="product-image__thumbnail">
      <div
        v-for="(thumbnail, index) in imageData?.imagesDetail.thumbnailImages"
        :key="index"
        class="product-image__thumbnail__wrapper"
      >
        <img
          class="product-image__thumbnail__wrapper__image"
          :src="thumbnail"
          alt="Thumbnail Image"
          @click="changeLargeImage(thumbnail)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const { imageData } = withDefaults(
  defineProps<{
    imageData?: Product | null
  }>(),
  {
    imageData: null,
  },
)

const changeLargeImage = (imageUrl: string) => {
  // Chỉ cập nhật ảnh lớn nếu product đã được khởi tạo
  if (imageData && imageData?.imagesDetail) {
    imageData.imagesDetail.imageLarge = imageUrl
  }
}
// console.log(imageData?.imagesDetail)
</script>

<style lang="scss">
@import '~/assets/css/components/HomePage/ProductDetail/Image/product-detail-image.scss';
</style>
