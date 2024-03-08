// GET /api/products/:id -> Get product detail

import data from '../dum.json'
export default defineEventHandler((event) => {
  // handle GET requests for the `api/foo` endpoint
  const id = getRouterParam(event, 'id')

  if (id) {
    return data.products.find((item) => item.id === parseInt(id))
  }

  return {}
})

// import listProducts from '../dum.json'
// export default defineEventHandler((event) => {
//   // handle GET requests for the `api/foo` endpoint
//   const id = getRouterParam(event, 'id')

//   if (id) {
//     return {
//       ...Object.values(listProducts).find((item) => item.id == id),
//       detail: {
//         xuatxu: 'Nhat ban',
//         baohanh: '1 nam',
//       },
//     }
//   }

//   return Object.values(listProducts).find((item) => item.id == id)
// })
