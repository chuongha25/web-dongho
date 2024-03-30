// GET /api/customer/profile/:id -> update profile by id

import ProfileModel from '~/server/models/Profile.model'

export default defineEventHandler(async (event) => {
  // Get data from body
  const body = await readBody(event)
  // Get id from params
  const id = event.context?.params?.id

  // Check if id exists
  if (!id) {
    throw new Error('Profile ID is missing')
  }

  // Update profile
  try {
    await ProfileModel.findByIdAndUpdate(id, body)
    return { message: 'Profile updated' }
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
