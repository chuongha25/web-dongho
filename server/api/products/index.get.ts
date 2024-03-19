// GET /api/products

import ProductModel from '~/server/models/Product.model'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    let products

    if (query.category && query.page && query.record) {
      products = await ProductModel.find({
        category: query.category,
      })

      const total = products.length

      products = products.slice(
        (Number(query.page) - 1) * Number(query.record),
        Number(query.page) * Number(query.record),
      )
    } else if (query && (query.category || query.branch)) {
      // Định nghĩa một đối tượng chứa các điều kiện tìm kiếm
      const searchConditions: any = {}

      // Nếu query.category được cung cấp, thêm điều kiện lọc theo category vào searchConditions
      if (query.category) {
        searchConditions.category = query.category
      }

      // Nếu query.branch được cung cấp, thêm điều kiện lọc theo branch vào searchConditions
      if (query.branch) {
        searchConditions.branch = query.branch
      }

      // Sử dụng searchConditions để lọc dữ liệu
      products = await ProductModel.find(searchConditions)
    } else {
      // Nếu không có category hoặc branch được cung cấp, trả về tất cả sản phẩm
      products = await ProductModel.find()
    }

    // Trả về dữ liệu sản phẩm
    return products
  } catch (error: any) {
    // Xử lý lỗi nếu có
    throw createError({
      message: error.message,
    })
  }
})

// Cách này lấy dữ liệu trực tiếp từ file JSON và xử lý logic
// import data from '@/server/api/products/dum.json'

// export default defineEventHandler((event) => {
//   // handle GET requests for the `api/foo` endpoint
//   const query = getQuery(event)
//   // console.log('onserver', query)

//   if (query.category && query.pageId) {
//     return data.products.filter(
//       (product) =>
//         product.category.includes(query.category as string) &&
//         product.pageId === parseInt(query.pageId as string),
//     )
//   }

//   if (query.category) {
//     return data.products.filter((product) =>
//       product.category.includes(query.category as string),
//     )
//   }

//   if (query.branch) {
//     return data.products.filter((product) =>
//       product.branch.includes(query.branch as string),
//     )
//   }

//   return data
// })
