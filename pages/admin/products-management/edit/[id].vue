<template>
  <el-page-header @back="goBack" />
  <div class="container mx-auto">
    <div class="content">
      <div class="content__title">
        <h1>Edit Product!</h1>
      </div>
      <div class="flex flex-col items-center" v-if="form">
        <el-form
          ref="formRef"
          :rules="rules"
          :model="form"
          class="max-w-[500px] w-full"
          label-position="top"
        >
          <el-form-item
            :label="`images ${index + 1}`"
            v-for="(item, index) in form.images"
            :key="index"
            :prop="'images.' + index"
            :rules="{
              required: true,
              message: 'Vui lòng nhập url',
              trigger: 'change',
            }"
          >
            <el-card class="w-full">
              <div class="flex justify-center items-center mx-auto my-0">
                <el-image
                  class="m-2"
                  style="width: 150px; height: 150px"
                  :src="item"
                />
              </div>
              <el-input type="text" v-model="form.images[index]" />
            </el-card>
          </el-form-item>
          <el-form-item label="imageLarge" prop="imagesDetail.imageLarge">
            <el-card class="w-full">
              <div class="flex justify-center items-center">
                <el-image
                  class="m-2"
                  style="width: 70px; height: 60px"
                  :src="form.imagesDetail.imageLarge"
                />
              </div>
              <el-input type="text" v-model="form.imagesDetail.imageLarge" />
            </el-card>
          </el-form-item>

          <el-form-item
            :label="`thumbnailImages ${index + 1}`"
            v-for="(item, index) in form.imagesDetail.thumbnailImages"
            :key="index"
            :prop="'imagesDetail.thumbnailImages.' + index"
            :rules="{
              required: true,
              message: 'Vui lòng nhập url',
              trigger: 'blur',
            }"
          >
            <el-card class="w-full">
              <div class="flex justify-center items-center">
                <el-image
                  class="m-2"
                  style="width: 70px; height: 60px"
                  :src="item"
                />
                <el-button class="m-2" @click="deleteImage(index)"
                  >Delete Image</el-button
                >
              </div>
              <el-input
                type="text"
                v-model="form.imagesDetail.thumbnailImages[index]"
              />
            </el-card>
          </el-form-item>
          <el-button class="mb-4 my-[10px]" @click="addImage"
            >Add image</el-button
          >
          <el-form-item label="Name" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Branch" prop="branch">
            <el-input v-model="form.branch" />
          </el-form-item>
          <el-form-item label="logoBrand" prop="logoBrand">
            <el-input v-model="form.logoBrand" />
          </el-form-item>
          <el-form-item label="Category" prop="category">
            <el-checkbox-group v-model="form.category" size="large">
              <el-checkbox
                v-for="(item, index) in listCategories"
                :key="index"
                :value="item.name"
                :label="item.name"
                size="large"
              />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="productCode" prop="productCode">
            <el-input v-model="form.productCode" />
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input v-model="form.description" />
          </el-form-item>
          <el-form-item label="Price" prop="price">
            <el-input v-model="form.price" type="number" />
          </el-form-item>
        </el-form>

        <el-button style="width: 100px" type="primary" @click="onUpdate"
          >Update</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})
import type { Product } from '@/types/product'
import type { Category } from '~/types/category'
import { ElNotification } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const route = useRoute()
const form = ref<Product>()

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  'imagesDetail.imageLarge': [
    { required: true, message: 'Vui lòng nhập url', trigger: 'change' },
  ],
  name: [{ required: true, message: 'Vui lòng nhập name', trigger: 'change' }],
  branch: [
    { required: true, message: 'Vui lòng nhập branch', trigger: 'change' },
  ],
  logoBrand: [
    { required: true, message: 'Vui lòng nhập branch', trigger: 'change' },
  ],
  category: [
    { required: true, message: 'Vui lòng nhập category', trigger: 'change' },
  ],
  productCode: [
    { required: true, message: 'Vui lòng nhập branch', trigger: 'change' },
  ],
  description: [
    { required: true, message: 'Vui lòng nhập description', trigger: 'change' },
  ],
  price: [
    { required: true, message: 'Vui lòng nhập price', trigger: 'change' },
  ],
})

// const rulesThumbnail = (rule: any, value: any, callback: any) => {
//   if (!value) callback(new Error('Please input the password'))

//   callback()
// }

const { data } = await useCustomFetch<Product>(
  `/api/products/${route.params?.id}`,
)

if (data.value !== null) {
  form.value = data.value
}

const addImage = () => {
  form.value?.imagesDetail.thumbnailImages.push('')
}

const deleteImage = (index: number) => {
  form.value?.imagesDetail.thumbnailImages.splice(index, 1)
}

const onUpdate = async () => {
  if (!formRef.value) return

  formRef.value.validate(async (vaild) => {
    if (!vaild) return

    await useCustomFetch(`/api/products/${route.params?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    ElNotification({
      title: 'Success',
      message: 'Update completed',
      type: 'success',
    })

    navigateTo('/admin/products-management')
  })
}

const goBack = () => {
  navigateTo('/admin/products-management')
}

const { data: listCategories } =
  await useCustomFetch<Category[]>('/api/categories')
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/admin/products/edit/edit.scss';
</style>
