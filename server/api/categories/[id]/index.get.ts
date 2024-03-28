// GET /api/categories -> Get category

import CategoryModel from '~/server/models/Category.model'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')

    // Kiểm tra xem id có tồn tại không
    if (id) {
      // Tìm kiếm đơn hàng dựa trên id trong cơ sở dữ liệu MongoDB
      const category = await CategoryModel.findById(id)

      // Kiểm tra xem đơn hàng có tồn tại không
      if (category) {
        // Nếu đơn hàng tồn tại, trả về dữ liệu đơn hàng
        return category
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
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
