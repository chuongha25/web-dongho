// Get /api/categories/:id -> Delete category by id

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

  // Remove Category
  try {
    await CategoryModel.findByIdAndDelete(id)
    return { message: 'Category delete' }
  } catch (error: any) {
    throw createError({
      message: error.message,
    })
  }
})
