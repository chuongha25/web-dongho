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

    const { id } = (await jwt.verify(
      accessToken || '',
      process.env.JWT_SECRET || '',
    )) as JwtPayload

    if (!id) throw createError({ message: 'Not authorizion' })

    const customer = await CustomerModel.findOne({ _id: id })
    const profile = await ProfileModel.findOne({ userId: id })

    if (!customer) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Not Found',
      })
    }

    const data = {
      name: customer.name,
      email: customer.email,
      avatar: customer.avatar,
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
