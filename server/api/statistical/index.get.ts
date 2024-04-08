// GET /api/statistical
import dayjs from 'dayjs'
// import timezone from 'dayjs/plugin/timezone'
// import utc from 'dayjs/plugin/utc'
// import customParseFormat from 'dayjs/plugin/customParseFormat'
import OrderModel from '~/server/models/Order.model'

// dayjs.extend(timezone)
// dayjs.extend(utc)
// dayjs.extend(customParseFormat)

export default defineEventHandler(async (event) => {
  try {
    const from = '2024-01'
    const to = '2024-12'
    const orders = await OrderModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: dayjs(from as string, 'YYYY-MM')
              .startOf('months')
              .toDate(),
            $lte: dayjs(to as string, 'YYYY-MM')
              .endOf('months')
              .toDate(),
          },
        },
      },
      {
        $group: {
          _id: { $month: '$createdAt' },
          totalAmount: {
            $sum: '$totalPrice',
          },
        },
      },
      { $sort: { _id: 1 } },
    ])

    return Array.from({ length: 12 }).reduce(
      (current: Record<number, number>, _i, idx) => ({
        ...current,
        [idx]: orders.find((i) => i._id === idx + 1)?.totalAmount || 0,
      }),
      {},
    )
  } catch (error: any) {
    // Xử lý lỗi nếu có
    throw createError({
      message: error.message,
    })
  }
})
