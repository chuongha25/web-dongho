<template>
  <div class="cart-infor">
    <!-- Total Product Card -->
    <table>
      <tfoot>
        <tr class="cart-infor__subtotal">
          <th>Tạm tính</th>
          <td>
            <span>{{ formatPrice(props.total) }}</span>
          </td>
        </tr>
        <tr class="cart-infor__total">
          <th>Tổng</th>
          <td>
            <strong>{{ formatPrice(props.total) }}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
    <!-- Information -->
    <el-form ref="formRef" :rules="rules" :model="form" label-position="top">
      <h3>
        <el-icon><Document /></el-icon>
        Thông tin khách hàng
      </h3>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="name">
            <el-input
              v-model="form.name"
              type="text"
              placeholder="Tên khách hàng"
              class="mb-2"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="phone">
            <el-input
              v-model="form.phone"
              type="text"
              placeholder="Số điện thoại"
              class="mb-2"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item prop="email">
        <el-input
          v-model="form.email"
          type="text"
          placeholder="Email"
          class="mb-2"
        />
      </el-form-item>

      <h3>
        <el-icon><LocationInformation /></el-icon>
        Thông tin nhận hàng
      </h3>

      <el-form-item label="Địa chỉ" prop="address">
        <el-input
          v-model="form.address"
          type="text"
          placeholder="Số nhà - Tên đường - Thường/Xã"
        />
      </el-form-item>
      <el-form-item label="Tỉnh/Thành phố" prop="city">
        <el-input
          class="mb-3"
          v-model="form.city"
          type="text"
          placeholder="Tỉnh/Huyện/Thành phố"
        />
      </el-form-item>
      <!-- Payment -->
      <div class="cart-infor__payment">
        <h3>
          <el-icon><CreditCard /></el-icon>
          Phương thức thanh toán
        </h3>
        <ul>
          <el-form-item prop="select">
            <el-radio-group v-model="form.select">
              <li class="cart-infor__payment__item">
                <el-radio :label="'banking'">Chuyển khoản ngân hàng</el-radio>
                <div class="item-des">
                  <p>
                    Bạn ở HN và muốn tặng quà cho bạn mình ở HCM, bạn ở Huế và
                    muốn tặng quà bạn mình ở Đà Nẵng, bạn muốn bên trong quà
                    tặng của bạn có 1 tấm thiệp ghi những lời chúc của bạn tới
                    người thân! Rất đơn giản, chúng tôi có giải pháp cho bạn …
                  </p>
                </div>
              </li>
              <li class="cart-infor__payment__item">
                <el-radio :label="'cash'">Thanh toán khi nhận hàng</el-radio>
                <div class="item-des">
                  <p>Thanh toán khi nhận hàng</p>
                </div>
              </li>
            </el-radio-group>
          </el-form-item>
        </ul>
        <div class="cart-infor__payment__add">
          <el-button type="primary" @click="onSubmit">Đặt hàng</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  LocationInformation,
  CreditCard,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  select: '',
})

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  name: [{ required: true, message: 'Vui lòng nhập tên', trigger: 'change' }],
  phone: [{ required: true, message: 'Vui long nhap ten', trigger: 'change' }],
  email: [
    { required: true, message: 'Vui long nhap ten', trigger: 'change' },
    {
      pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: 'Please enter a valid email address',
      trigger: 'change',
    },
  ],
  address: [
    { required: true, message: 'Vui long nhap ten', trigger: 'change' },
  ],
  city: [{ required: true, message: 'Vui long nhap ten', trigger: 'change' }],
  select: [
    {
      required: true,
      message: 'Vui lòng chọn trường thanh toán',
      trigger: 'change',
    },
  ],
})

const onSubmit = () => {
  if (!formRef.value) return

  formRef.value.validate((valid) => {
    if (!valid) return //validate false thi yêu cầu nhập lại đúng tông tin

    // thực hiện action mua hàng
  })
}

const props = withDefaults(
  defineProps<{
    total: number
  }>(),
  {
    total: 0,
  },
)
</script>

<style lang="scss">
@import '@/assets/css/components/Card/Infor/card-infor.scss';
</style>
