<template>
  <el-page-header @back="goBack" />
  <div class="container mx-auto">
    <div class="content">
      <div class="content__title">
        <h1>Create Category!</h1>
      </div>
      <div class="flex flex-col items-center">
        <el-form
          class="mb-3.5"
          ref="formRef"
          :rules="rules"
          :model="form"
          label-position="top"
        >
          <el-form-item label="Category" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input v-model="form.description" />
          </el-form-item>
        </el-form>
        <el-button
          class="mb-5"
          style="width: 100px"
          type="primary"
          :plain="true"
          @click="onCreate"
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
import { ElNotification } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const form = reactive({
  name: '',
  description: '',
})

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  name: [
    { required: true, message: 'Vui lòng nhập category', trigger: 'change' },
  ],
  description: [
    { required: true, message: 'Vui lòng nhập description', trigger: 'change' },
  ],
})

const onCreate = async () => {
  if (!formRef.value) return

  formRef.value.validate(async (vaild) => {
    if (!vaild) return

    await fetch('/api/categories', {
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
      message: 'You have successfully created the category',
      type: 'success',
    })

    navigateTo('/admin/categories-management')
  })
}

const goBack = () => {
  navigateTo('/admin/categories-management')
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/admin/products/create/create.scss';
</style>
