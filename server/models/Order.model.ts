import mongoose from 'mongoose'

// Order schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    products: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

// Order model
export default mongoose.model('Order', schema)
