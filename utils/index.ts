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
