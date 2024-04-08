import CustomerModel from '~/server/models/Customer.model'
import jwt from 'jsonwebtoken'

// Hàm để tạo ra JWT token
function generateToken(
  payload: any,
  secret: string,
  options?: jwt.SignOptions,
) {
  return jwt.sign(payload, secret, options)
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    let customer = await CustomerModel.findOne(body)

    if (!customer) {
      throw createError({
        message: 'Wrong pass or email',
      })
    }

    // Một payload JWT được tạo từ thông tin của customer
    const payloadJwt = {
      id: customer._id,
      email: customer.email,
      name: customer.name,
    }
    // Token được tạo bằng cách gọi hàm jwt.sign với payload(dữ liệu muốn mã hóa) và secret key(chìa khóa)
    const accessToken = await jwt.sign(
      payloadJwt,
      `${process.env.VITE_JWT_SECRET}` || '',
    )

    if (accessToken) {
      // Cập nhật token trong cơ sở dữ liệu
      const data = await CustomerModel.findOneAndUpdate(
        { _id: customer._id },
        { token: accessToken || '' },
      )

      return await CustomerModel.findOne(body)
    } else {
      createError({
        message: 'Wrong pass or email',
      })
    }
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
