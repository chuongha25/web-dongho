export type Product = {
  id: number
  name: string
  category: string[]
  branch: string
  price: number
  images: string[]
  logoCasio: string
  productCode: string
  description: string
  imagesDetail: ImageDetail
  pageId: number
}

interface ImageDetail {
  imageLarge: string
  thumbnailImages: string[]
}
