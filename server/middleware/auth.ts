import jwt from 'jsonwebtoken'

export default defineEventHandler((event) => {
  const accessToken = getHeader(event, 'Authorization')
  const role = getHeader(event, 'Role')

  const pathList = ['/api/products', '/api/categories', '/api/oders']

  try {
    if (!pathList.find((item) => getRequestPath(event).includes(item)) || !role)
      return

    jwt.verify(accessToken || '', process.env.JWT_SECRET || '')
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Verify token failed',
    })
  }
})
