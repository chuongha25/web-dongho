<template>
  <div class="footer">
    <HomepageSocial />
    <div class="footer__content">
      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          <div class="footer__item">
            <div class="footer-infor">
              <span class="infor-title">Liên Hệ</span>
              <div class="infor-line"></div>
              <div class="infor-hotline">
                <a href="#">
                  <img
                    src="https://image.donghohaitrieu.com/wp-content/uploads/2023/06/p10.png"
                  />
                </a>
              </div>
              <span>
                <strong>FanPage: </strong>
                MCWatch.vn
              </span>
              <br />
              <span>
                <strong>Địa Chỉ: </strong>
                157 Nguyễn Du, Thạch Thang, Hải Châu, Đà Nẵng
              </span>
            </div>
          </div>
          <div class="footer__item">
            <div class="footer-infor">
              <span class="infor-title">Thông Tin</span>
              <div class="infor-line"></div>
              <div class="infor-des">
                <p>
                  <a href="#">Bảo hành & Đổi trả</a>
                </p>
                <p>
                  <a href="#">Phương thức thanh toán</a>
                </p>
                <p>
                  <a href="#">Vận chuyển & Giao nhận</a>
                </p>
                <p>
                  <a href="#">Điều khoản sử dụng</a>
                </p>
                <p>
                  <a href="#">Trung tâm bảo hành</a>
                </p>
              </div>
            </div>
          </div>
          <div class="footer__item">
            <div class="footer-infor">
              <span class="infor-title">Về Chúng Tôi</span>
              <div class="infor-line"></div>
              <span class="infor-des"
                >MCWatch.vn là kênh bán đồng hồ đeo tay chính hãng giảm giá.
                Chúng tôi chỉ bán đồng hồ thời trang, hàng hiệu đẹp với giá rẻ
                hơn mọi cửa hàng tại Việt Nam.</span
              >
              <hr />
              <span>
                <strong>Tên Pháp Lý: </strong>
                MCWatch.vn
              </span>
              <span>
                <strong>Ngày Cấp: </strong>
                30/3/2024
              </span>
              <hr />
              <span>
                <strong>Liên hệ Email: </strong>
                haminhchuong.2002@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="footer__scope">
        <div class="container mx-auto px-4">
          <p>
            Copyright 2024 © by
            <span>MCWatch.vn</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '@/assets/css/components/HomePage/Footer/footer.scss';
</style>
