import jwt from 'jsonwebtoken'

export default defineEventHandler((event) => {
  const accessToken = getHeader(event, 'Authorization')
  const role = getCookie(event, 'role')

  const pathList = ['/api/products', '/api/categories', '/api/oders']

  try {
    if (!pathList.find((item) => getRequestPath(event).includes(item))) return

    jwt.verify(accessToken || '', process.env.JWT_SECRET || '')
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Verify token failed',
    })
  }
})
