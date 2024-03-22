<template>
  <div class="dashboard-products">
    <div class="flex items-center mb-8 justify-between">
      <p>List products</p>
      <el-button type="primary">Create products</el-button>
    </div>
    <el-table :data="listProducts" style="width: 100%">
      <el-table-column prop="_id" label="Id" width="180" />
      <el-table-column prop="name" label="Name" width="240" />
      <el-table-column prop="category" label="Category" />
      <el-table-column prop="price" label="Price" />
      <el-table-column prop="branch" label="Branch" />
      <el-table-column prop="operation" label="Operation">
        <template v-slot="{ row }">
          <el-button type="primary" @click="toEdit(row._id)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '@/types/product'
definePageMeta({
  layout: 'dashboard',
})

const listProducts = ref<Product[]>([])

interface ProductListEntity {
  items: Product[]
  total: number
}

const { data } = await useFetch<ProductListEntity>('/api/products', {
  query: {
    page: 1,
    record: 10,
  },
})

listProducts.value = data.value?.items || []

const toEdit = (id: string) => {
  navigateTo(`/admin/products-management/edit/${id}`)
}
</script>
