<template>
  <div class="dashboard-products">
    <div
      class="dashboard-products__list flex items-center mb-8 justify-between"
    >
      <p>List Order</p>
      <el-button type="primary">Create orders</el-button>
    </div>
    <el-table :data="listOrders" style="width: 100%">
      <el-table-column prop="customer" label="Customer" width="150" />
      <el-table-column label="Product" width="280">
        <template #default="{ row }">
          <div v-for="(product, index) in row.products" :key="index">
            <p>{{ product.name }}</p>
            <p>Quantity: {{ product.quantity }}</p>
            <p>Price: {{ product.price }}</p>
            <hr v-if="index < row.products.length - 1" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="totalPrice" label="Total Price" width="130" />
      <el-table-column prop="adress" label="Adress" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="status" label="Status Order" width="150" />
      <el-table-column prop="operation" label="Operation" width="140">
        <template v-slot="{ row }">
          <el-button
            type="primary"
            :icon="Edit"
            circle
            @click="toEdit(row._id)"
          />
          <el-button
            type="primary"
            :icon="Delete"
            circle
            @click="toDelete(row._id)"
          />
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

<script setup lang="ts">
import { Edit, Delete } from '@element-plus/icons-vue'
import type { Order } from '@/types/order'
import { ref } from 'vue'
definePageMeta({
  layout: 'dashboard',
})

const listOrders = ref<Order[]>([])
const total = ref(0)

interface ProductListEntity {
  items: Order[]
  total: number
}

const fetchData = async () => {
  const { page, record } = pagination.value
  const { data } = await useFetch<ProductListEntity>('/api/oders', {
    query: {
      page: page,
      record: record,
    },
  })

  listOrders.value = data.value?.items || []

  total.value = data.value?.total || 0
}

const pagination = ref({
  page: 1,
  record: 7,
})

const handlePageChange = async (page: number) => {
  pagination.value.page = page
  await fetchData()
}

fetchData()

const toEdit = (id: string) => {
  navigateTo(`/admin/orders-management/edit/${id}`)
}

const toDelete = async (id: string) => {
  await useFetch(`/api/oders/${id}`, {
    method: 'DELETE',
  }),
    // Cập nhật lại dữ liệu
    fetchData()
}
</script>
