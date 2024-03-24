<template>
  <el-page-header @back="goBack" />
  <div class="container mx-auto">
    <div class="content">
      <div class="content__title">
        <h1>Update order status!</h1>
      </div>
      <div class="flex flex-col items-center" v-if="form">
        <el-form
          class="mb-3.5"
          ref="formRef"
          :rules="rules"
          :model="form"
          label-position="top"
        >
          <el-form-item label="Status" prop="status">
            <el-input v-model="form.status" />
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

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})
import type { FormInstance, FormRules } from 'element-plus'
import { ref } from 'vue'
import type { Order } from '~/types/order'

const route = useRoute()
const form = ref<Order>()

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  status: [
    { required: true, message: 'Vui lòng cập nhật status', trigger: 'change' },
  ],
})

const { data } = await useFetch<Order>(`/api/oders/${route.params?.id}`)

if (data.value !== null) {
  form.value = data.value
}

const onUpdate = async () => {
  if (!formRef.value) return

  formRef.value.validate(async (vaild) => {
    if (!vaild) return

    await useFetch(`/api/oders/${route.params?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })
  })
}

const goBack = () => {
  navigateTo('/admin/orders-management')
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/admin/orders/edit/edit.scss';
</style>
