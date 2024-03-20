// POST /api/oders -> create oders

import CategoryModel from '~/server/models/Category.model'

export default defineEventHandler(async (event) => {
  // Get data form body
  const body = await readBody(event)

  // create order
  try {
    // await OrderModel.create(body)
    // return { message: 'Order created' }
    const data = await CategoryModel.create(body)
    // Trả về ID của đơn hàng sau khi tạo thành công
    return data
  } catch (e: any) {
    throw createError({
      message: e.message,
    })
  }
})
