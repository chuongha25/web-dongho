// Get /api/oders/:id -> Delete order by id

import Order from '~/server/models/Order.model'

export default defineEventHandler(async (event) => {
  // Get data from body
  const body = await readBody(event)

  // Get id from params
  const id = event.context?.params?.id

  // Check if id exists
  if (!id) {
    throw new Error('Order ID is missing')
  }

  // Remove Order
  try {
    await Order.findByIdAndDelete(id)
    return { message: 'Order delete' }
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
