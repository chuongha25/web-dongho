import mongoose from 'mongoose'

// product schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    logoBrand: {
      type: String,
      required: true,
    },
    productCode: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagesDetail: {
      imageLarge: {
        type: String,
        required: true,
      },
      thumbnailImages: {
        type: [String],
        required: true,
      },
    },
  },
  { timestamps: true },
)

// product model
export default mongoose.model('Product', schema)
