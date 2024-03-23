<template>
  <div class="container mx-auto">
    <div class="content">
      <div class="content__title">
        <h1>Create Product!</h1>
      </div>
      <div class="flex flex-col items-center">
        <el-image
          class="mb-4"
          style="width: 150px; height: 150px"
          :src="form.imagesDetail.imageLarge"
        />
        <el-form
          ref="formRef"
          :rules="rules"
          :model="form"
          class="max-w-[500px] w-full"
          label-position="top"
        >
          <el-form-item label="imageLarge" prop="imagesDetail.imageLarge">
            <el-input v-model="form.imagesDetail.imageLarge" />
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
          <el-form-item
            label="Category"
            v-for="(item, index) in form.category"
            :key="index"
            :prop="'category.' + index"
            :rules="{
              required: true,
              message: 'Vui lòng nhập category',
              trigger: 'change',
            }"
          >
            <el-card class="flex justify-between w-full">
              <el-input
                class="mr-4"
                style="width: 369px"
                v-model="form.category[index]"
              />
              <el-button @click="deleteCategory(index)">Delete</el-button>
            </el-card>
          </el-form-item>
          <el-button class="mb-4" @click="addCategory">Add Category</el-button>
          <el-form-item label="Description" prop="description">
            <el-input v-model="form.description" />
          </el-form-item>
          <el-form-item label="Price" prop="price">
            <el-input v-model="form.price" type="number" />
          </el-form-item>
        </el-form>

        <el-button style="width: 100px" type="primary" @click="onUpdate"
          >Create</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '@/types/product'
import type { FormInstance, FormRules } from 'element-plus'

const form = reactive({
  imagesDetail: {
    imageLarge: '',
    thumbnailImages: [''],
  },
  name: '',
  branch: '',
  category: [''],
  description: '',
  price: '',
})

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  'imagesDetail.imageLarge': [
    { required: true, message: 'Vui lòng nhập url', trigger: 'change' },
  ],
  name: [{ required: true, message: 'Vui lòng nhập name', trigger: 'change' }],
  branch: [
    { required: true, message: 'Vui lòng nhập branch', trigger: 'change' },
  ],
  category: [
    { required: true, message: 'Vui lòng nhập category', trigger: 'change' },
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

const addCategory = () => {
  form.category.push('')
}

const deleteCategory = (index: number) => {
  form.category.splice(index, 1)
}

const onUpdate = async () => {
  if (!formRef.value) return

  formRef.value.validate(async (vaild) => {
    if (!vaild) return

    await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/admin/products/create/create.scss';
</style>
