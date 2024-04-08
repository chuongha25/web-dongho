import mongoose from 'mongoose'

// Customer schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
