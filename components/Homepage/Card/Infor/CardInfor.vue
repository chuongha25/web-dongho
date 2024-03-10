<template>
  <div class="cart-infor">
    <form action="">
      <!-- Table Total Price -->
      <table>
        <tfoot>
          <tr class="cart-infor__subtotal">
            <th>Tạm tính</th>
            <td><span>4.518.000 ₫</span></td>
          </tr>
          <tr class="cart-infor__total">
            <th>Tổng</th>
            <td><strong>4.518.000 ₫</strong></td>
          </tr>
        </tfoot>
      </table>
      <!-- Information -->
      <div class="cart-infor__form">
        <div class="cart-infor__form__service">
          <div class="service-customer">
            <h3>
              <el-icon><Document /></el-icon>
              Thông tin khách hàng
            </h3>
            <div class="service-customer__input">
              <div class="service-customer__input__item">
                <el-input
                  v-model="name"
                  style="width: 50%"
                  placeholder="Tên khách hàng"
                />
                <el-input
                  v-model="phone"
                  style="width: 50%"
                  placeholder="Số điện thoại"
                />
              </div>
              <el-input
                v-model="email"
                style="width: 100%"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="service-receive">
            <h3>
              <el-icon><LocationInformation /></el-icon>
              Thông tin nhận hàng
            </h3>
            <p><span>Quốc gia: Việt Nam</span></p>
            <div class="service-receive__adress">
              <label for="">Địa chỉ *</label>
              <el-input
                v-model="adress"
                style="width: 100%"
                placeholder="Số nhà - Tên đường - Thường/Xã"
              />
            </div>
            <div class="service-receive__city">
              <label for="">Tỉnh/Thành phố *</label>
              <el-input
                v-model="city"
                style="width: 100%"
                placeholder="Tỉnh/Huyện/Thành phố"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Payment -->
      <div class="cart-infor__payment">
        <h3>
          <el-icon><CreditCard /></el-icon>
          Phương thức thanh toán
        </h3>
        <ul>
          <li class="cart-infor__payment__item">
            <div class="item-radio">
              <input type="radio" />
            </div>
            <div class="item-des">
              <h5>Chuyển khoản ngân hàng</h5>
              <p>
                Bạn ở HN và muốn tặng quà cho bạn mình ở HCM, bạn ở Huế và muốn
                tặng quà bạn mình ở Đà Nẵng, bạn muốn bên trong quà tặng của bạn
                có 1 tấm thiệp ghi những lời chúc của bạn tới người thân! Rất
                đơn giản, chúng tôi có giải pháp cho bạn …
              </p>
            </div>
          </li>
          <li class="cart-infor__payment__item">
            <div class="item-radio">
              <input type="radio" />
            </div>
            <div class="item-des">
              <h5>Thanh toán khi nhận hàng</h5>
              <p>Thanh toán khi nhận hàng</p>
            </div>
          </li>
        </ul>
        <div class="cart-infor__payment__add">
          <form action="">
            <a href="#">
              <button type="submit">Đặt hàng</button>
            </a>
          </form>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  LocationInformation,
  CreditCard,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const name = ref('')
const phone = ref('')
const email = ref('')
const adress = ref('')
const city = ref('')
</script>

<style lang="scss">
@import '@/assets/css/components/Card/Infor/card-infor.scss';
</style>
