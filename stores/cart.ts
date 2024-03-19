import type { Product } from '~/types/product'

type CartItem = {
  [id: string]: {
    quantity: number
    data: Product
  }
}

type State = {
  cart: CartItem
  orderId: string | null // Thêm trường để lưu orderId
}

export const useCartStore = defineStore('cartStore', {
  state: (): State => ({
    cart: {},
    orderId: null, // Khởi tạo orderId là null
  }),
  actions: {
    addCart(item: Product, quantity: number = 1) {
      if (this.cart[item._id]) {
        console.log('on store,', quantity)

        this.cart[item._id].quantity += quantity
      } else {
        this.cart[item._id] = { quantity, data: item }
      }
    },
    remove(id: string) {
      delete this.cart[id]
    },
    setOrderId(orderId: string) {
      this.orderId = orderId // Hàm để cập nhật orderId
    },
  },
  getters: {
    totalPrice: (state) => {
      return Object.values(state.cart).reduce((total, item) => {
        return total + item.data.price * item.quantity
      }, 0)
    },
    getOrderId: (state) => state.orderId, // Getter để lấy orderId
  },
  // getters: {
  //   totalPrice: (state) => {
  //     let total = 0
  //     for (const itemId in state.cart) {
  //       const item = state.cart[itemId]
  //       total += item.data.price * item.quantity
  //     }
  //     return total
  //   },
  // },
})
