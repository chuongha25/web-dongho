// POST /api/product -> create product

import ProductModel from '~/server/models/Product.model'

export default defineEventHandler(async (event) => {
  // Get data form body
  const body = await readBody(event)

  // create product
  try {
    await ProductModel.create(body)
    return { message: 'Product created' }
  } catch (e: any) {
    throw createError({
      message: e.message,
    })
  }
})
