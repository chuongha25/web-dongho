// POST /api/categories -> create categories

import CategoryModel from '~/server/models/Category.model'

export default defineEventHandler(async (event) => {
  try {
    // Get data form body
    const categories = await CategoryModel.find()

    return categories
  } catch (e: any) {
    throw createError({
      message: e.message,
    })
  }
})
