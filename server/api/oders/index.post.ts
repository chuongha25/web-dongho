// POST /api/oders -> create oders

import OrderModel from '~/server/models/Order.model'

export default defineEventHandler(async (event) => {
  // Get data form body
  const body = await readBody(event)

  // create order
  try {
    // await OrderModel.create(body)
    // return { message: 'Order created' }
    const newOrder = await OrderModel.create(body)
    // Trả về ID của đơn hàng sau khi tạo thành công
    return { orderId: newOrder._id, message: 'Order created' }
  } catch (e: any) {
    throw createError({
      message: e.message,
    })
  }
})
