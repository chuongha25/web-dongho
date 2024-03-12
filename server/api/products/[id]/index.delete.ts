// DELETE /api/products/:id -> delete products by id

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

  // Remove product
  try {
    await ProductModel.findByIdAndDelete(id)
    return { message: 'Product deleted' }
  } catch (error: any) {
    throw createError({ message: error.message })
  }
})
