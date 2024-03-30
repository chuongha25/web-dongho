import mongoose from 'mongoose'

// Customer schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: false,
    },
    role: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true },
)

// Customer model
export default mongoose.model('Customer', schema)
