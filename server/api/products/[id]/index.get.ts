// GET /api/products/:id -> Get product detail

import ProductModel from '~/server/models/Product.model'

export default defineEventHandler(async (event) => {
  try {
    // Lấy id từ đường dẫn
    const id = getRouterParam(event, 'id')

    // Kiểm tra xem id có tồn tại không
    if (id) {
      // Tìm kiếm sản phẩm dựa trên id trong cơ sở dữ liệu MongoDB
      const product = await ProductModel.findById(id)

      // Kiểm tra xem sản phẩm có tồn tại không
      if (product) {
        // Nếu sản phẩm tồn tại, trả về sản phẩm
        return product
      } else {
        // Nếu sản phẩm không tồn tại, trả về lỗi 404
        throw createError({
          statusCode: 404,
          message: 'Product not found',
        })
      }
    } else {
      // Nếu không có id được cung cấp, trả về lỗi 400
      throw createError({
        statusCode: 400,
        message: 'Missing product id',
      })
    }
  } catch (error: any) {
    // Xử lý lỗi nếu có
    throw createError({
      message: error.message,
    })
  }
})

// Cách này lấy dữ liệu chi tiết từ id của file json để xử lý
// import data from '../dum.json'
// export default defineEventHandler((event) => {
//   // handle GET requests for the `api/foo` endpoint
//   const id = getRouterParam(event, 'id')

//   if (id) {
//     return data.products.find((item) => item.id === parseInt(id))
//   }

//   return {}
// })
