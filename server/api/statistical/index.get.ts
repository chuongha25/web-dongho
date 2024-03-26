// GET /api/statistical
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import OrderModel from '~/server/models/Order.model'
import { Order } from '~/types/order'

dayjs.extend(timezone)
dayjs.extend(utc)

export default defineEventHandler(async (event) => {
  try {
    const orders = await OrderModel.find()

    const result = orders.reduce((acc, item) => {
      return {
        ...acc,
        [dayjs(item.createdAt).month() + 1]:
          (acc[dayjs(item.createdAt).month() + 1] || 0) + item.totalPrice,
      }
    }, {})
    return result
  } catch (error: any) {
    // Xử lý lỗi nếu có
    throw createError({
      message: error.message,
    })
  }
})
