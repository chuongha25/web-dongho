// GET /api/products/:id -> update product by id

import ProductModel from '~/server/models/Product.model'

export default defineEventHandler(async (event) => {
  // Get data from body
  const body = await readBody(event)

  // Get id from params
  const id = event.context?.params?.id

  // Check if id exists
  if (!id) {
    throw new Error('Product ID is missing')
  }

  // Update product
  try {
    await ProductModel.findByIdAndUpdate(id, body)
    return { message: 'Product updated' }
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
