import jwt from 'jsonwebtoken'

export default defineEventHandler((event) => {
  const accessToken = getHeader(event, 'Authorization')
  const role = getHeader(event, 'Role')

  const pathList = [
    '/api/products',
    '/api/categories',
    '/api/oders',
    '/api/statistical',
  ]

  try {
    // kiểm tra xem request được gửi đến có đường dẫn nằm trong pathList không?
    if (!pathList.find((item) => getRequestPath(event).includes(item)) || !role)
      // nếu không middleware sẽ không làm gì và kết thúc việc xử lý.
      return

    // nếu có middleware sẽ tiếp tục thực hiện xác thực token bằng cách sử dụng jwt.verify
    jwt.verify(accessToken || '', `${process.env.VITE_JWT_SECRET}` || '')
    // Và sau khi xác thực nếu không có token hoặc token không hợp lệ thì middleware sẽ thực hiện một hành động đó là trả về lỗi xác thực
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Verify token failed',
    })
  }
})
