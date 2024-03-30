import CustomerModel from '~/server/models/Customer.model'
import jwt from 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'
export default defineEventHandler(async (event) => {
  try {
    const accessToken = getHeader(event, 'Authorization')

    if (!accessToken) return

    const { id } = jwt.verify(
      accessToken || '',
      process.env.JWT_SECRET || '',
    ) as JwtPayload

    const res = await CustomerModel.findOneAndUpdate({ _id: id }, { token: '' })

    return res
  } catch (error: any) {
    console.log(error)
    throw createError({
      message: 'Logout failed!',
    })
  }
})
