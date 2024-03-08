import Joi from 'joi'

// Define Joi validation schema
const ProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  category: Joi.array().items(Joi.string()).required(),
  branch: Joi.string().required(),
  price: Joi.number().required(),
  images: Joi.array().items(Joi.string()).required(),
  logoBrand: Joi.string().uri().required(), // Thêm .uri() để kiểm tra URL hợp lệ
  productCode: Joi.string().required(),
  description: Joi.string().required(),
  imagesDetail: Joi.object({
    imageLarge: Joi.string().uri().required(), // Thêm .uri() để kiểm tra URL hợp lệ
    thumbnailImages: Joi.array().items(Joi.string().uri()).required(), // Thêm .uri() vào đây nếu các thumbnail cũng phải là URL hợp lệ
  }).required(),
})

export default ProductSchema
