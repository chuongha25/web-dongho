<template>
  <div class="dashboard-products">
    <div
      class="dashboard-products__list flex items-center mb-8 justify-between"
    >
      <p>List Products</p>
      <el-button type="primary" @click="toCreate">Create products</el-button>
    </div>
    <el-table :data="listProducts" style="width: 100%">
      <el-table-column prop="_id" label="Id" />
      <el-table-column prop="name" label="Name" width="270" />
      <el-table-column label="Price">
        <template #default="{ row }">
          <p>{{ formatPrice(row.price) }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="category" label="Category" />
      <el-table-column prop="branch" label="Branch" />
      <el-table-column label="Operation">
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
import { ElNotification, ElMessageBox } from 'element-plus'
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
  ElMessageBox.confirm(
    'proxy will permanently delete the product. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    },
  )
    .then(async () => {
      await useCustomFetch(`/api/products/${id}`, {
        method: 'DELETE',
      })
      // Cập nhật lại dữ liệu
      fetchData()

      ElNotification({
        type: 'success',
        message: 'Delete completed',
        duration: 4000,
      })
    })
    .catch(() => {
      ElNotification({
        type: 'info',
        message: 'Delete canceled',
        duration: 4000,
      })
    })
}
</script>

<style lang="scss">
@import '@/assets/css/pages/admin/products/products.scss';
</style>
