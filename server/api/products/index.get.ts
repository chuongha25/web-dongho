// GET /api/products

import ProductModel from '~/server/models/Product.model'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    let products

    if (query.category || query.branch) {
      const params = {
        category: query.category,
        branch: query.branch,
      }

      !params.category && delete params.category
      !params.branch && delete params.branch

      products = await ProductModel.find(params)
    } else {
      products = await ProductModel.find()
    }

    const total = products.length

    if (query.page && query.record) {
      products = products.slice(
        (Number(query.page) - 1) * Number(query.record),
        Number(query.page) * Number(query.record),
      )
    }

    const data = {
      items: products,
      total,
    }

    return data
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
