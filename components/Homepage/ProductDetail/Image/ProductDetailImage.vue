<template>
  <div v-if="product" class="product-image">
    <!-- Ảnh lớn của sản phẩm -->
    <div class="product-image__main">
      <img
        class="product-image__main__image"
        :src="product.imageLarge"
        alt="Product Image"
        v-if="product.imageLarge"
      />
    </div>

    <!-- Danh sách các ảnh nhỏ -->
    <div class="product-image__thumbnail">
      <div
        v-for="(thumbnail, index) in product.thumbnailImages"
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
import { ref, watch } from 'vue'

const product = ref({
  imageLarge:
    'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AE-1200WHD-1AVDF.jpg', // Thay đổi đường dẫn ảnh lớn tại đây
  thumbnailImages: [
    'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AE-1200WHD-1AVDF.jpg', // Thay đổi đường dẫn ảnh nhỏ 1 tại đây
    'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AE-1200WHD-1AVDF-4.jpg', // Thay đổi đường dẫn ảnh nhỏ 2 tại đây
    'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AE-1200WHD-1AVDF-2.jpg', // Thay đổi đường dẫn ảnh nhỏ 3 tại đây
    'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AE-1200WHD-1AVDF-3.jpg', // Thay đổi đường dẫn ảnh nhỏ 4 tại đây
    'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AE-1200WHD-1AVDF-1.jpg', // Thay đổi đường dẫn ảnh nhỏ 4 tại đây
  ],
})

const changeLargeImage = (imageUrl: string) => {
  // Chỉ cập nhật ảnh lớn nếu product đã được khởi tạo
  if (product.value) {
    product.value.imageLarge = imageUrl
  }
}
</script>

<style lang="scss">
@import '~/assets/css/components/HomePage/ProductDetail/Image/product-detail-image.scss';
</style>
