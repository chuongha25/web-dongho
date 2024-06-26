export type Product = {
  _id: string
  name: string
  category: string[]
  branch: string
  price: number
  images: string[]
  logoBrand: string
  productCode: string
  description: string
  imagesDetail: ImageDetail
  pageId: number
}

interface ImageDetail {
  imageLarge: string
  thumbnailImages: string[]
}
