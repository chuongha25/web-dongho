export type Order = {
  _id: string
  products: [Product]
  totalPrice: number
  customer: string
  phone: number
  email: string
  adress: string
  city: string
  payment: string
}

interface Product {
  name: string
  quantity: number
  price: number
  _id: string
}
