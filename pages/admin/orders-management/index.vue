<template>
  <div class="dashboard-order">
    <div class="dashboard-order__list flex items-center mb-8 justify-between">
      <p style="color: #606266" class="text-lg font-bold font-sans">
        List Order
      </p>
      <el-button type="primary" @click="toManager">Manager orders</el-button>
    </div>
    <el-table :data="listOrders" style="width: 100%">
      <el-table-column prop="customer" label="Customer" />
      <el-table-column label="Product" width="280">
        <template #default="{ row }">
          <div v-for="(product, index) in row.products" :key="index">
            <p>{{ product.name }}</p>
            <p>Quantity: {{ product.quantity }}</p>
            <p>Price: {{ formatPrice(product.price) }}</p>
            <hr v-if="index < row.products.length - 1" />
          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="totalPrice" label="Total Price" /> -->
      <el-table-column label="Total Price">
        <template #default="{ row }">
          <p>{{ formatPrice(row.totalPrice) }}</p>
        </template>
      </el-table-column>
      <el-table-column label="Adress">
        <template #default="{ row }">
          <p>{{ row.adress + ', ' + row.city }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="Order date">
        <template #default="{ row }">
          <p>{{ dayjs(row.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status Order" />
      <el-table-column prop="operation" label="Operation">
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
import { ElNotification, ElMessageBox } from 'element-plus'
import dayjs from 'dayjs'
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
  const { data } = await useCustomFetch<ProductListEntity>('/api/oders', {
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

const toManager = () => {
  navigateTo('/admin/orders-management/manager')
}

const toEdit = (id: string) => {
  navigateTo(`/admin/orders-management/edit/${id}`)
}

const toDelete = async (id: string) => {
  ElMessageBox.confirm(
    'proxy will permanently delete the order. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    },
  )
    .then(async () => {
      await useCustomFetch(`/api/oders/${id}`, {
        method: 'DELETE',
      }),
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
