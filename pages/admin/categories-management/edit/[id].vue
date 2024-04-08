<template>
  <el-page-header @back="goBack" />
  <div class="container mx-auto">
    <div class="content">
      <div class="content__title">
        <h1>Edit Category!</h1>
      </div>
      <div class="flex flex-col items-center" v-if="form">
        <el-form
          class="mb-3.5"
          ref="formRef"
          :rules="rules"
          :model="form"
          label-position="top"
        >
          <el-form-item label="Category">
            <el-input v-model="form.name" disabled />
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input v-model="form.description" />
          </el-form-item>
        </el-form>
        <el-button
          class="mb-5"
          style="width: 100px"
          type="primary"
          @click="onUpdate"
          >Update</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})
import type { FormInstance, FormRules } from 'element-plus'
import { ref } from 'vue'
import { ElNotification } from 'element-plus'
import type { Category } from '~/types/category'

const route = useRoute()
const form = ref<Category>()

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  description: [
    { required: true, message: 'Vui lòng nhập description', trigger: 'change' },
  ],
})

const { data } = await useCustomFetch<Category>(
  `/api/categories/${route.params.id}`,
)

if (data.value) {
  form.value = data.value
}

const onUpdate = async () => {
  if (!formRef.value) return

  formRef.value.validate(async (valid) => {
    if (!valid) return

    await useCustomFetch(`/api/categories/${route.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application-json',
      },
      body: JSON.stringify(form.value),
    })

    ElNotification({
      title: 'Success',
      message: 'Update completed',
      type: 'success',
    })

    navigateTo('/admin/categories-management')
  })
}

const goBack = () => {
  navigateTo('/admin/categories-management')
}
</script>

<style lang="scss">
@import '@/assets/css/pages/admin/categories/edit/edit.scss';
</style>
