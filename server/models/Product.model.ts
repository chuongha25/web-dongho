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
    },
    logoBrand: {
      type: String,
    },
    productCode: {
      type: String,
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
    pageId: {
      type: Number,
    },
  },
  { timestamps: true },
)

// product model
export default mongoose.model('Product', schema)
