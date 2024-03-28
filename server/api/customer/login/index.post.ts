import CustomerModel from '~/server/models/Customer.model'
import jwt from 'jsonwebtoken'

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

    const payloadJwt = {
      id: customer._id,
      email: customer.email,
      name: customer.name,
    }

    const accessToken = await jwt.sign(payloadJwt, process.env.JWT_SECRET || '')

    if (accessToken) {
      // return await CustomerModel.findOneAndUpdate(
      //   { _id: customer._id },
      //   { token: accessToken },
      // )

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
