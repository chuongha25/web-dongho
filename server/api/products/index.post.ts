// POST /api/product -> create product

import ProductModel from '~/server/models/Product.model'
import ProductSchema from '~~/server/validation'

export default defineEventHandler(async (event) => {
  // Get data form body
  const body = await readBody(event)

  // validate
  let { error } = ProductSchema.validate(body)
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ''),
      statusCode: 400,
      fatal: false,
    })
  }

  // create book
  try {
    await ProductModel.create(body)
    return { message: 'Product created' }
  } catch (e) {
    throw createError({
      message: e.message,
    })
  }
})

// import ProductModel from '@/server/models/product.model'
// export default defineEventHandler(async (event) => {
//   // Get data form body

//   try {
//     const body = await readBody(event)

//     ProductModel.create(body)

//     return {
//       message: 'added successfully',
//     }
//   } catch (error) {
//     throw createError(error)
//   }
// })
