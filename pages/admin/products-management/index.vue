<template>
  <div class="dashboard-products">
    <div
      class="dashboard-products__list flex items-center mb-8 justify-between"
    >
      <p>List Products</p>
      <el-button type="primary" @click="toCreate">Create products</el-button>
    </div>
    <el-table :data="listProducts" style="width: 100%">
      <el-table-column prop="_id" label="Id" width="180" />
      <el-table-column prop="name" label="Name" width="270" />
      <el-table-column prop="category" label="Category" width="190" />
      <el-table-column prop="price" label="Price" width="130" />
      <el-table-column prop="branch" label="Branch" width="130" />
      <el-table-column prop="operation" label="Operation" width="170">
        <template v-slot="{ row }">
          <el-button type="primary" @click="toEdit(row._id)">Edit</el-button>
          <el-button type="primary" @click="toDelete(row._id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-center mt-3.5">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="pagination.page"
        :page-size="pagination.record"
        :total="total"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})
import type { Product } from '@/types/product'
import { ElNotification } from 'element-plus'
import { formatPrice } from '~/utils'

const listProducts = ref<Product[]>([])
const total = ref(0)

interface ProductListEntity {
  items: Product[]
  total: number
}

const fetchData = async () => {
  const { page, record } = pagination.value
  const { data } = await useCustomFetch<ProductListEntity>('/api/products', {
    query: {
      page: page,
      record: record,
    },
  })

  listProducts.value = data.value?.items || []

  total.value = data.value?.total || 0
}

const pagination = ref({
  page: 1,
  record: 10,
})

const handlePageChange = async (page: number) => {
  pagination.value.page = page
  await fetchData()
}

fetchData()

const toCreate = () => {
  navigateTo(`/admin/products-management/create`)
}

const toEdit = (id: string) => {
  navigateTo(`/admin/products-management/edit/${id}`)
}

const toDelete = async (id: string) => {
  await fetch(`/api/products/${id}`, {
    method: 'DELETE',
  })
  // Cập nhật lại dữ liệu
  fetchData()

  ElNotification({
    title: 'Success',
    message: 'You have successfully delete the product',
    type: 'success',
  })
}
</script>

<style lang="scss">
@import '@/assets/css/pages/admin/products/products.scss';
</style>
