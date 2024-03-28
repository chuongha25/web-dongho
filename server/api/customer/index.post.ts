import CustomerModel from '~/server/models/Customer.model'
import ProfileModel from '~/server/models/Profile.model'

export default defineEventHandler(async (event) => {
  // Get data form body
  const body = await readBody(event)

  // validate
  // let { error } = ProductSchema.validate(body)
  // if (error) {
  //   throw createError({
  //     message: error.message.replace(/"/g, ''),
  //     statusCode: 400,
  //     fatal: false,
  //   })
  // }

  // create product

  try {
    const data = await CustomerModel.create(body)

    const defaultProfile = {
      firstName: '',
      lastName: '',
      phone: '',
      sex: 0,
      emailContact: '',
      avatar: '',
      userId: data._id,
    }

    await ProfileModel.create(defaultProfile)
    return { message: 'Created account!' }
  } catch (e: any) {
    throw createError({
      message: e.message,
    })
  }
})
