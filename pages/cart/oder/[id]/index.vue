<template>
  <div class="order-details">
    <div class="container mx-auto">
      <h1>Chi tiết đơn hàng của bạn!</h1>
      <div v-if="orderDetail">
        <div class="customer-info">
          <h2>Thông tin khách hàng</h2>
          <p><strong>Tên:</strong> {{ orderDetail.customer }}</p>
          <p><strong>Địa chỉ:</strong> {{ orderDetail.adress }}</p>
          <p><strong>Thành phố:</strong> {{ orderDetail.city }}</p>
          <p><strong>Số điện thoại:</strong> {{ orderDetail.phone }}</p>
          <p><strong>Email:</strong> {{ orderDetail.email }}</p>
        </div>
        <div class="order-products">
          <h2>Danh sách sản phẩm</h2>
          <ul>
            <li v-for="(product, index) in orderDetail.products" :key="index">
              <h3>{{ product.name }}</h3>
              <p>Số lượng: {{ product.quantity }}</p>
              <p>
                Thành tiền: {{ formatPrice(product.price * product.quantity) }}
              </p>
            </li>
          </ul>
        </div>
        <div class="order-total">
          <h2>Tổng thanh toán</h2>
          <p>
            <strong>Tổng tiền:</strong>
            {{ formatPrice(orderDetail.totalPrice) }}
          </p>
          <p>
            <strong>Phương thức thanh toán:</strong>
            {{ orderDetail.payment }}
          </p>
        </div>
      </div>
      <div v-else>
        <p>Đang tải...</p>
      </div>
      <router-link to="/" class="back-button">Quay về trang chủ</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Order } from '~/types/order'
import { formatPrice } from '~/utils'

const route = useRoute()
const id = route.params.id

// Khai báo biến cục bộ trong phương thức mounted hoặc created
let orderDetail = ref<Order>()

try {
  const { data, error } = await useFetch<Order>(`/api/oders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (data.value) {
    // console.log('Chi tiết đơn hàng:', data)

    // Lưu dữ liệu vào biến cục bộ
    orderDetail.value = data.value
  } else if (error) {
    console.error('Lỗi khi gửi yêu cầu lấy chi tiết đơn hàng:', error)
  }
} catch (error) {
  console.error('Lỗi khi gửi yêu cầu lấy chi tiết đơn hàng:', error)
}
</script>

<style lang="scss">
@import '@/assets/css/pages/cart/oder/detail/[id]/cart-oder-detail-id.scss';
</style>
