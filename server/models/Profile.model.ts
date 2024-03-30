import mongoose from 'mongoose'

// Profile schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    sex: {
      type: Number,
      required: false,
    },
    emailContact: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

// Profile model
export default mongoose.model('Profile', schema)
