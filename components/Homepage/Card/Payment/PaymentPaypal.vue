<template>
  <div class="container mx-auto mt-[100px] flex">
    <div class="my-auto mr-[30px]">
      <img
        src="https://img.freepik.com/premium-vector/online-shopping-concept-payment-get-bill-vector-online-payment-finance-transfer-shopping-financial-invoice-illustration_461812-1178.jpg"
        alt="Logo Payment"
      />
    </div>
    <div class="checkout">
      <h1 class="text-2xl font-bold text-center mb-4">Checkout your order!</h1>
      <CardProduct />
      <table>
        <tfoot>
          <tr class="cart-infor__subtotal">
            <th>Tạm tính</th>
            <td>
              <span>{{ formatPrice(cartStore.totalPrice) }}</span>
            </td>
          </tr>
          <tr class="cart-infor__total">
            <th>Tổng</th>
            <td>
              <strong>{{ formatPrice(cartStore.totalPrice) }}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
      <div
        v-if="orderDetail?.payment === 'banking'"
        v-for="(item, index) in carts"
        :key="index"
      >
        <h1 class="text-xl font-bold text-center mb-8">
          Tiến hành quét mã QR để thanh toán!
        </h1>
        <img
          class="w-[30%] my-0 mx-auto"
          :src="`https://img.vietqr.io/image/${MY_BANK.BANK_ID}-${MY_BANK.ACCOUNT_NO}-compact2.png?amount=${cartStore.totalPrice}&addInfo=${item.data.name}`"
          alt="QRCode"
        />
      </div>
      <div
        class="py-0 px-[50px]"
        v-else-if="orderDetail?.payment === 'paypal'"
        id="paypal-button-container"
      ></div>
      <!-- <div class="py-0 px-[50px]" v-else-if="orderDetail?.payment === 'vnpay'">
        <el-button type="primary" @click="handlePayment">Thanh toán</el-button>
      </div> -->
      <div class="text-center" v-else>
        <el-button type="primary" @click="onPayment"
          >Xác nhận thanh toán khi nhận hàng</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type { Order } from '~/types/order'
// import { paypal } from 'paypal-checkout'

const cartStore = useCartStore()
const carts = computed(() => Object.values(cartStore.cart))
const router = useRouter()
const orderId = cartStore.getOrderId

// Tích hợp thanh toán PayPal
let MY_BANK = {
  BANK_ID: 'MB',
  ACCOUNT_NO: '0327562729',
}

const handlePayPalPayment = async () => {
  const script = document.createElement('script')
  script.src =
    'https://www.paypal.com/sdk/js?client-id=AfLCIobVuAx60xu7uRr5MiIbM_lvNFv2RFmcfNmqveoI-xANFPeGQeWNp5PFR8QLbLZMrOwB0E-acImg'
  script.async = true
  script.onload = async () => {
    paypal
      .Buttons({
        createOrder: function (data: any, actions: any) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: cartStore.totalPrice, // Số tiền thanh toán
                },
              },
            ],
          })
        },
        onApprove: function (data: any, actions: any) {
          return actions.order.capture().then(async function (details: any) {
            // Xử lý sau khi thanh toán thành công
            console.log(details)

            await useFetch(`/api/oders/${orderId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ status: 'DA THANH TOAN' }),
            })

            // Chuyển hướng người dùng đến trang thông báo thanh toán thành công
            router.push({ path: `/cart/oder` })

            // Xóa dữ liệu sản phẩm khỏi cartStore hoặc gán lại dữ liệu mặc định
            cartStore.cart = {}
          })
        },
        onError: function (err: any) {
          // Xử lý khi có lỗi
          console.error(err)
        },
      })
      .render('#paypal-button-container')
  }
  document.body.appendChild(script)
}

onMounted(() => {
  handlePayPalPayment()
})

const orderDetail = ref<Order>()

try {
  const { data, error } = await useFetch<Order>(`/api/oders/${orderId}`, {
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

// Xử lý thanh toán khi nhận hàng
const onPayment = async () => {
  await useFetch(`/api/oders/${orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: 'CHUA THANH TOAN' }),
  })

  // Chuyển hướng người dùng đến trang thông báo đặt hàng thành công
  router.push({ path: `/cart/oder` })

  // Xóa dữ liệu sản phẩm khỏi cartStore hoặc gán lại dữ liệu mặc định
  cartStore.cart = {}
}

// Tích hợp thanh toán VNPAY
// import { ref } from 'vue'
// import { VNPay } from 'vn-payments'
// const handlePayment = async () => {
//   console.log('vnpay')
//   const vnpay = new VNPay({
//     paymentGateway: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
//     merchant: 'GYTLN19D',
//     orderId: orderId,
//     amount: cartStore.totalPrice, // Số tiền cần thanh toán
//     returnUrl: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html', // URL để VNPAY redirect sau khi thanh toán thành công
//   })

//   const paymentUrl = vnpay.buildCheckoutUrl()
//   window.location.href = paymentUrl
// }
</script>

<style lang="scss">
@import '@/assets/css/components/Card/Payment/card-payment.scss';
</style>
