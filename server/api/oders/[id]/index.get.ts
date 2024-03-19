// GET /api/oders -> Get oder

import OrderModel from '~/server/models/Order.model'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')

    // Kiểm tra xem id có tồn tại không
    if (id) {
      // Tìm kiếm đơn hàng dựa trên id trong cơ sở dữ liệu MongoDB
      const oder = await OrderModel.findById(id)

      // Kiểm tra xem đơn hàng có tồn tại không
      if (oder) {
        // Nếu đơn hàng tồn tại, trả về dữ liệu đơn hàng
        return oder
      } else {
        // Nếu đơn hàng không tồn tại, trả về lỗi 404
        throw createError({
          statusCode: 404,
          message: 'Oder not found',
        })
      }
    } else {
      // Nếu không có id được cung cấp, trả về lỗi 500
      throw createError({
        statusCode: 500,
        message: 'Missing oder id',
      })
    }

    // return all authors
    // return await OrderModel.find()
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
