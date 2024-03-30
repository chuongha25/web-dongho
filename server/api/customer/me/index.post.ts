import CustomerModel from '~/server/models/Customer.model'
import jwt, { JwtPayload } from 'jsonwebtoken'
import ProfileModel from '~/server/models/Profile.model'

export default defineEventHandler(async (event) => {
  try {
    const accessToken = await getHeader(event, 'Authorization')

    if (!accessToken)
      throw createError({
        statusCode: 401,
        statusMessage: 'Not Found',
      })

    // Giải mã accessToken bằng cách sử dụng hàm jwt.verify và thông tin payload của token được lấy ra, trong đó chứa ID của người dùng
    const { id } = (await jwt.verify(
      accessToken || '',
      process.env.JWT_SECRET || '',
    )) as JwtPayload

    if (!id) throw createError({ message: 'Not authorizion' })

    // Truy vấn csdl để lấy thông tin người dùng
    const customer = await CustomerModel.findOne({ _id: id })
    const profile = await ProfileModel.findOne({ userId: id })

    if (!customer) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Not Found',
      })
    }

    // Xử lý kết quả và trả về thông tin người dùng
    const data = {
      id: customer._id,
      name: customer.name,
      email: customer.email,
      token: customer.token,
      profile,
    }

    return data
  } catch (e: any) {
    throw createError({
      message: e.message,
    })
  }
})
