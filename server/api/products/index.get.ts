// GET /api/product
import data from './dum.json'

export default defineEventHandler((event) => {
  // handle GET requests for the `api/foo` endpoint
  const query = getQuery(event)
  
  console.log('onserver', query)
  if (query.category) {
    return data.products.filter((product) =>
      product.category.includes(query.category as string),
    )
  }

  return data
})
