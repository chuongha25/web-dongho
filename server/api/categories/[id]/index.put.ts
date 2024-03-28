// GET /api/categories/:id -> update category by id

import CategoryModel from '~/server/models/Category.model'

export default defineEventHandler(async (event) => {
  // Get data from body
  const body = await readBody(event)

  // Get id from params
  const id = event.context?.params?.id

  // Check if id exists
  if (!id) {
    throw new Error('Category ID is missing')
  }

  // Update Order
  try {
    await CategoryModel.findByIdAndUpdate(id, body)
    return { message: 'Category update' }
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
