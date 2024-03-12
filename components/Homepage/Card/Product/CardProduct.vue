<template>
  <div class="cart-product">
    <!-- Form Product -->
    <form action="">
      <div class="cart-product__form">
        <div
          class="cart-product__form__item"
          v-for="(item, index) in listProducts"
          :key="index"
        >
          <Icon name="material-symbols:search" size="20" />
          <i class="icon-[material-symbols--search]"></i>
          <div class="cart-product__form__item__thumbnail">
            <a href="#">
              <img :src="item.imagesDetail.imageLarge" alt="Image Cart" />
            </a>
          </div>
          <div class="cart-product__form__item__infor">
            <div class="infor-name">
              <p>
                {{ item.name }}
              </p>
            </div>
            <div class="infor-des">
              <div class="infor-des__quantity">
                <el-input-number
                  v-model="item.number"
                  :min="1"
                  :max="10"
                  @click="handleChange"
                />
              </div>
              <div class="infor-des__subtotal">
                <span>{{ item.price }}</span>
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
  const tamp = listProducts.value.reduce((a, v) => ({ ...a, [v._id]: v }), {})

  localStorage.setItem('cart', JSON.stringify(tamp))
}

const listProducts = ref([])
onMounted(() => {
  fetchProducts()
})

const fetchProducts = () => {
  const storeCard = Object.values(
    JSON.parse(localStorage.getItem('cart') || '{}'),
  )

  if (!storeCard.length) return

  listProducts.value = storeCard

  console.log(listProducts.value)
}
</script>
<style lang="scss">
@import '@/assets/css/components/Card/Product/card-product.scss';
</style>
