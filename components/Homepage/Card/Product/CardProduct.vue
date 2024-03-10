<template>
  <div class="cart-product">
    <!-- Form Product -->
    <form action="">
      <div class="cart-product__form">
        <div class="cart-product__form__item">
          <div class="cart-product__form__item__thumbnail">
            <a href="#">
              <img
                src="https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AE-1200WHD-1AVDF.jpg"
                alt="Image Cart"
              />
            </a>
          </div>
          <div class="cart-product__form__item__infor">
            <div class="infor-name">
              <p>
                Casio World Time AE-1200WHD-1AVDF - Nam - Quartz (Pin) - Mặt Số
                45 mm, Bộ Bấm Giờ, Chống Nước 10 ATM
              </p>
            </div>
            <div class="infor-des">
              <div class="infor-des__quantity">
                <el-input-number
                  v-model="num"
                  :min="1"
                  :max="10"
                  @click="handleChange"
                />
              </div>
              <div class="infor-des__subtotal">
                <span>4.518.000 ₫</span>
              </div>
            </div>
            <div class="infor-remove">
              <a href="#">
                <el-icon><Delete /></el-icon>
              </a>
              <span>Xóa</span>
            </div>
          </div>
        </div>
        <div class="update__cart"></div>
      </div>
    </form>
    <!-- Promotion -->
    <div class="cart-product__promotion">
      <a href="#">
        <img
          src="https://donghohaitrieu.com/wp-content/themes/flatsome-child/assets/images/discount.svg"
          alt="Image Promotion"
        />
        Phiếu ưu đãi
        <el-icon><ArrowRight /></el-icon>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Delete, ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>

<style lang="scss">
@import '@/assets/css/components/Card/Product/card-product.scss';
</style>
