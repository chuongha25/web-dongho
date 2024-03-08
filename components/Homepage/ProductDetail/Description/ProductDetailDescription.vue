<template>
  <div class="description" v-if="descriptionData">
    <div class="description__logo">
      <a href="#">
        <img :src="descriptionData.logoBrand" alt="Logo" />
      </a>
    </div>
    <div class="description__title">
      <h1>
        {{ descriptionData.name }}
      </h1>
    </div>
    <div class="description__text">
      <strong>Mã Số Sản Phẩm: AE-1200WHD-1AVDF</strong>
    </div>
    <div class="description__price">
      <p>
        <span> {{ formatPrice(descriptionData.price) }} </span>
      </p>
    </div>
    <div class="description__content">
      <p>
        {{ descriptionData.description }}
      </p>
    </div>
    <div class="description__wrap">
      <button type="button">Xem Showroom còn hàng</button>
    </div>
    <div class="description__add-to-card">
      <form>
        <NuxtLink to="/cart">
          <button type="submit">Thêm vào giỏ hàng</button>
        </NuxtLink>
      </form>
    </div>
    <p class="description__contact">
      Có thanh toán:
      <strong> Trả góp </strong>
      khi mua Online (Qua thẻ tín dụng)
      <br />
      Gọi đặt mua:
      <strong> 1900.6777 (7:00 - 22:00)</strong>
    </p>
    <div class="description__endow">
      <p>
        <strong>Ưu đãi thêm </strong>
        dự kiến áp dụng 2024
      </p>
      <div class="line">
        <div />
      </div>
      <div class="endow-icon">
        <el-icon><SuccessFilled /></el-icon>
        <p>Dịch vụ gói quà miễn phí khi mua tại cửa hàng.</p>
      </div>
      <div class="endow-icon">
        <el-icon><SuccessFilled /></el-icon>
        <p>Khi thanh toán qua Home PayLater tại MCWatch</p>
      </div>
      <p class="sale">- Giảm 50% tối đa 100K cho đơn từ 200K</p>
      <p class="sale">- Giảm 5% tối đa 500K</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SuccessFilled } from '@element-plus/icons-vue'
import type { Product } from '~/types/product'

const { descriptionData } = withDefaults(
  defineProps<{
    descriptionData?: Product | null
  }>(),
  {
    descriptionData: null,
  },
)
// console.log(descriptionData)
</script>

<style lang="scss">
@import './assets/css/components/HomePage/ProductDetail/Description/product-detail-des.scss';
</style>
