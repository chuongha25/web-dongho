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
          <h1 class="mb-1">
            <span class="font-semibold">Customer: </span>{{ form.customer }}
          </h1>
          <div class="mb-1" v-for="(item, index) in form.products" :key="index">
            <p class="mb-1">
              <span class="font-semibold">Products: </span>{{ item.name }}
            </p>
            <p class="mb-1">
              <span class="font-semibold">Quantity: </span> {{ item.quantity }}
            </p>
            <p class="mb-1">
              <span class="font-semibold">Price: </span> {{ item.price }}
            </p>
            <hr v-if="index < form.products.length - 1" />
          </div>
          <p class="mb-1">
            <span class="font-semibold">Purchase date: </span>
            {{ dayjs(form.createdAt).format('YYYY-MM-DD HH:mm:ss') }}
          </p>
          <el-form-item label="Status" prop="status">
            <el-radio-group v-model="form.status" size="large">
              <el-radio
                v-for="(item, index) in statusOrder"
                :key="index"
                :label="item"
                :value="item"
                size="large"
              >
              </el-radio>
            </el-radio-group>
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
import { ElNotification } from 'element-plus'
import type { Order } from '~/types/order'
import dayjs from 'dayjs'

const route = useRoute()
const form = ref<Order>()

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  status: [
    { required: true, message: 'Vui lòng cập nhật status', trigger: 'change' },
  ],
})

const { data } = await useCustomFetch<Order>(`/api/oders/${route.params?.id}`)

if (data.value !== null) {
  form.value = data.value
}

const onUpdate = async () => {
  if (!formRef.value) return

  formRef.value.validate(async (vaild) => {
    if (!vaild) return

    await useCustomFetch(`/api/oders/${route.params?.id}`, {
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

    navigateTo('/admin/orders-management')
  })
}

const goBack = () => {
  navigateTo('/admin/orders-management')
}

const statusOrder = [
  'DAT_HANG',
  'CHUA THANH TOAN',
  'DA THANH TOAN',
  'HOAN_THANH',
]
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/admin/orders/edit/edit.scss';
</style>
