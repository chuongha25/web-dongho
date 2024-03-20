import mongoose from 'mongoose'

// category schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

// category model
export default mongoose.model('Category', schema)
