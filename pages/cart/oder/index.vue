<template>
  <div class="oder">
    <div class="container mx-auto">
      <div class="oder__image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/858/556/original/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png"
          alt="Image Check"
        />
      </div>
      <h1>Đặt hàng thành công!</h1>
      <div class="oder__title">
        <p>
          Chúng tôi sẽ liên hệ Quý Khách để xác nhận đơn hàng trong thời gian
          sớm nhất!
        </p>
      </div>
      <div class="oder__des">
        <div class="oder__des__detail">
          <NuxtLink :to="{ path: `/cart/oder/${orderId}` }">
            <el-button>Xem chi tiết đơn hàng</el-button>
          </NuxtLink>
        </div>
        <div class="oder__des__back">
          <nuxt-link to="/">
            <el-button>Tiếp tục mua hàng</el-button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const orderId = cartStore.getOrderId
</script>

<style lang="scss">
@import '@/assets/css/pages/cart/oder/[id]/cart-oder-id.scss';
</style>
