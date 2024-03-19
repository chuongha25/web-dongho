import emailjs from '@emailjs/browser'

export const { format: formatPrice } = Intl.NumberFormat('vi-VN', {
  // notation: 'compact',
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 1,
})

export const sendMail = (
  templateParams: any,
  templateId = 'template_z9hfyl2',
) => {
  emailjs
    .send('service_yrp0syr', templateId, templateParams, {
      publicKey: 'glfq251aktMEPIVEx',
    })
    .then(
      () => {
        console.log('SUCCESS!')
      },
      (error) => {
        console.log('FAILED...', error)
      },
    )
}
export const setNewCookie = (
  name: string,
  value: string,
  daysToExpire?: number,
) => {
  const expirationDate = new Date()

  expirationDate.setDate(expirationDate.getDate() + (daysToExpire || 0))

  const cookieValue =
    encodeURIComponent(name) +
    '=' +
    encodeURIComponent(value) +
    ((daysToExpire &&
      '; expires=' + expirationDate.toUTCString() + '; path=/') ||
      '')

  document.cookie = cookieValue
}

export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      // Ensure that the result is of type string before splitting
      if (typeof reader.result === 'string') {
        const base64String = reader.result.split(',')[1]
        resolve(base64String)
      } else {
        reject(
          new Error('Failed to convert file to Base64: Invalid result type'),
        )
      }
    }
    reader.onerror = (error) => reject(error)
    reader.readAsDataURL(file)
  })
}
