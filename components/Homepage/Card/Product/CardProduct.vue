<template>
  <div class="cart-product">
    <!-- Form Product -->
    <form action="">
      <div class="cart-product__form">
        <div
          class="cart-product__form__item"
          v-for="(item, index) in carts"
          :key="index"
        >
          <div class="cart-product__form__item__thumbnail">
            <a href="#">
              <img :src="item.data.imagesDetail.imageLarge" alt="Image Cart" />
            </a>
          </div>
          <div class="cart-product__form__item__infor">
            <div class="infor-name">
              <p>
                {{ item.data.name }}
              </p>
            </div>
            <div class="infor-des">
              <div class="infor-des__quantity">
                <!-- <el-input-number
                  :model-value="item.quantity"
                  :min="1"
                  :max="10"
                  @change="
                    (value, oldValue) =>
                      handleChange(value, oldValue, item.data)
                  "
                /> -->
                <el-input-number
                  v-model="item.quantity"
                  :min="1"
                  :max="10"
                  @change="handleChange"
                />
              </div>
              <div class="infor-des__subtotal">
                <span>{{ formatPrice(item.data.price * item.quantity) }}</span>
              </div>
            </div>
            <div class="infor-remove">
              <a @click="handleDelete(item.data._id)" href="#">
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
// import type { Product } from '~/types/product'

const cartStore = useCartStore()

const carts = computed(() => Object.values(cartStore.cart))

// const cartItems = Object.values(cartStore.cart)

// const handleChange = (newValue: number, oldValue: number, item: Product) => {
//   console.log(newValue, oldValue, item)
//   cartStore.addCart(item, newValue)
// }

const handleChange = () => {
  console.log('quantity update')
}

const handleDelete = (id: string) => {
  cartStore.remove(id)
}

// hàm dùng để cập nhật số lượng sản phẩm trong giỏ hàng
// const handleChange = (value: number) => {
//   // dùng reduce() để duyệt qua mảng các sản phẩm trong giỏ hàng và biến đổi mảng thành một đối tượng
//   const updateQuantity = listProducts.value.reduce(
//     (a, v) => ({ ...a, [v._id]: v }),
//     {},
//   )
//   // Cập nhật lại dữ liệu giỏ hàng trong localStorage
//   localStorage.setItem('cart', JSON.stringify(updateQuantity))
// }

// hàm dùng để xóa sản phẩm trong giỏ hàng
// const handleDelete = (id: any) => {
//   // Lấy dữ liệu giỏ hàng từ localStorage
//   const cartData = JSON.parse(localStorage.getItem('cart') || '{}')

//   // Tạo một bản sao của dữ liệu giỏ hàng để cập nhật
//   const updatedCart = { ...cartData }

//   // Xóa sản phẩm có id tương ứng khỏi giỏ hàng
//   if (updatedCart[id]) {
//     delete updatedCart[id]

//     // Cập nhật lại dữ liệu giỏ hàng trong localStorage
//     localStorage.setItem('cart', JSON.stringify(updatedCart))

//     // Cập nhật lại biến trạng thái nếu cần thiết
//     listProducts.value = Object.values(updatedCart)

//     // Kiểm tra nếu giỏ hàng sau khi xóa trống, xóa luôn key 'cart' từ localStorage
//     if (Object.keys(updatedCart).length === 0) {
//       localStorage.removeItem('cart')
//     }
//   }
// }

// interface ImageDetail {
//   imageLarge: string
//   thumbnailImages: string[]
// }

// interface Product {
//   _id: string
//   name: string
//   category: string[]
//   branch: string
//   price: number
//   images: string[]
//   logoCasio: string
//   productCode: string
//   description: string
//   imagesDetail: ImageDetail
//   pageId: number
//   quantity: number
// }

// const listProducts = ref<Product[]>([])

// const emits = defineEmits<{
//   (event: 'change-total', value: number): void
// }>()

// onMounted(() => {
//   fetchProducts()
// })

// const totalPrice = computed(() =>
//   listProducts.value.reduce(
//     (total, item) => item.price * item.quantity + total,
//     0,
//   ),
// )

// watch(
//   () => totalPrice.value,
//   () => {
//     emits('change-total', totalPrice.value)
//   },
// )

// hàm để lấy dữ liệu từ localStorage
// const fetchProducts = () => {
//   // sử dụng Object.values() để chuyển đổi thành một mảng các giá trị
//   const storeCard = Object.values(
//     JSON.parse(localStorage.getItem('cart') || '{}'),
//   )

//   if (!storeCard.length) return

//   listProducts.value = storeCard as any

//   // console.log(listProducts.value)
// }
</script>

<style lang="scss">
@import '@/assets/css/components/Card/Product/card-product.scss';
</style>
