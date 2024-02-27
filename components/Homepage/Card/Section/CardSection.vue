<template>
  <div class="cart container mx-auto">
    <h2>Giỏ hàng của bạn</h2>
    <div v-if="cart.length === 0" class="empty-cart">
      Giỏ hàng của bạn đang trống
    </div>
    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <div class="item-details">
          <div class="item-name">{{ item.name }}</div>
          <div>Số lượng: {{ item.quantity }}</div>
          <div>Giá: {{ item.price }}</div>
        </div>
        <button class="remove-button" @click="removeFromCart(index)">
          Xóa
        </button>
      </div>
      <div class="total">Tổng tiền: {{ getTotal() }}</div>
      <button class="checkout-button" @click="checkout">Thanh toán</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cart = ref([
  { name: 'Sản phẩm 1', price: 100, quantity: 2 },
  { name: 'Sản phẩm 2', price: 150, quantity: 1 },
])

const removeFromCart = (index: number) => {
  cart.value.splice(index, 1) // Xóa sản phẩm khỏi giỏ hàng
}

const getTotal = () => {
  return cart.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  ) // Tính tổng tiền
}

const checkout = () => {
  // Logic xử lý khi người dùng nhấn thanh toán
  console.log('Thanh toán thành công')
}
</script>

<style lang="scss">
@import './assets/css/components/Card/Section/card-section.scss';
</style>
