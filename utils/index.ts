export const { format: formatPrice } = Intl.NumberFormat('vi-VN', {
  // notation: 'compact',
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 1,
})
