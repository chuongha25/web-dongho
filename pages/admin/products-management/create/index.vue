<template>
  <el-page-header @back="goBack" />
  <div class="container mx-auto">
    <div class="content">
      <div class="content__title">
        <h1>Create Product!</h1>
      </div>
      <div class="flex flex-col items-center">
        <el-form
          ref="formRef"
          :rules="rules"
          :model="form"
          class="max-w-[500px] w-full"
          label-position="top"
        >
          <div class="flex justify-center">
            <el-image
              class="mb-4 items-center"
              style="width: 150px; height: 150px"
              :src="form.images"
            />
          </div>
          <el-form-item label="images" prop="images">
            <el-input type="text" v-model="form.images" />
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
              trigger: 'change',
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
            >Add Image</el-button
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
        <el-button style="width: 100px" type="primary" @click="onCreate"
          >Create</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})

import type { Category } from '~/types/category'
import { ElNotification } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const form = reactive({
  images: '',
  imagesDetail: {
    imageLarge: '',
    thumbnailImages: [''],
  },
  name: '',
  branch: '',
  logoBrand: '',
  category: [],
  productCode: '',
  description: '',
  price: '',
})

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  images: [{ required: true, message: 'Vui lòng nhập url', trigger: 'change' }],
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

const addImage = () => {
  form.imagesDetail.thumbnailImages.push('')
}

const deleteImage = (index: number) => {
  form.imagesDetail.thumbnailImages.splice(index, 1)
}

const onCreate = async () => {
  if (!formRef.value) return

  formRef.value.validate(async (vaild) => {
    if (!vaild) return

    await useCustomFetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    // Reset Form
    formRef.value?.resetFields()

    ElNotification({
      title: 'Success',
      message: 'Create completed',
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
@import '@/assets/css/pages/admin/products/create/create.scss';
</style>
