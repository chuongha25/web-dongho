// GET /api/oders

import OrderModel from '~/server/models/Order.model'

export default defineEventHandler(async (event) => {
  // return all oders
  // return await OrderModel.find()

  try {
    const query = getQuery(event)

    let orders
    orders = await OrderModel.find()

    const total = orders.length

    if (query.page && query.record) {
      orders = orders.slice(
        (Number(query.page) - 1) * Number(query.record),
        Number(query.page) * Number(query.record),
      )
    }

    const data = {
      items: orders,
      total,
    }

    return data
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
