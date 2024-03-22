<template>
  <div class="flex justify-center flex-col items-center">
    <el-image
      style="width: 100px; height: 100px"
      :src="form.imagesDetail.imageLarge"
    />
    <el-form class="max-w-[400px] w-full" label-position="top">
      <el-form-item label="thumbnail">
        <el-input v-model="form.imagesDetail.imageLarge" />
      </el-form-item>

      <el-form-item
        label="subImage"
        v-for="(item, index) in form.imagesDetail.thumbnailImages"
      >
        <el-image style="width: 50px; height: 50px" :src="item" />
        <el-input
          type="text"
          v-model="form.imagesDetail.thumbnailImages[index]"
        />
      </el-form-item>
      <el-button @click="addImage">Add image</el-button>
      <el-form-item label="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="description">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item label="price">
        <el-input v-model="form.price" type="number" />
      </el-form-item>
    </el-form>

    <el-button @click="onUpdate">Update</el-button>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '@/types/product'

const route = useRoute()
const form = ref<Product>()

const { data } = await useFetch<Product>(`/api/products/${route.params?.id}`)

form.value = data.value
console.log(form.value)

const addImage = () => {
  form.value.imagesDetail.thumbnailImages.push('')
}

const onUpdate = async () => {
  await fetch<Product>(`/api/products/${route.params?.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.value),
  })
}
</script>
