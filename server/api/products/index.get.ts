// GET /api/products
import data from '@/server/api/products/dum.json'

export default defineEventHandler((event) => {
  // handle GET requests for the `api/foo` endpoint
  const query = getQuery(event)
  // console.log('onserver', query)

  if (query.category && query.pageId) {
    return data.products.filter(
      (product) =>
        product.category.includes(query.category as string) &&
        product.pageId === parseInt(query.pageId as string),
    )
  }

  if (query.category) {
    return data.products.filter((product) =>
      product.category.includes(query.category as string),
    )
  }

  if (query.branch) {
    return data.products.filter((product) =>
      product.branch.includes(query.branch as string),
    )
  }

  return data
})
