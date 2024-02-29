<template>
  <div class="content">
    <CategoryNavigation name="Đồng Hồ Nam" />
    <div class="category-content container mx-auto">
      <CategorySection
        title="Đồng hồ nam đẹp, thời trang, cao cấp chính hãng 100%, góp 0%"
        image="https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-dong-ho-nam.jpg"
        description="Những mẫu đồng hồ nam đẹp luôn là món phụ kiện thời trang hoàn hảo cho tất cả các dịp, giúp nam giới tự tin hơn – khẳng định phong cách. Đặc biệt khi mà nhiều thương hiệu đồng hồ nam thời trang quốc tế du nhập vào Việt Nam, việc mua sắm chiếc đồng hồ đeo tay nam phù hợp rất dễ dàng bởi sự đa dạng về mẫu mã, màu sắc, tính năng và kiểu dáng. Shop Đồng Hồ Hải Triều hiện là đại lý ủy quyền của gần 30 thương hiệu, mang cả thế giới đồng hồ về trưng bày tại hơn 25 chi nhánh trên toàn quốc."
      />
    </div>
    <HomepageAlbums title="Bộ sưu tập đồng hồ nam" />
    <Line />
    <div class="category-products">
      <CategoryProductFilter />
      <CategoryProductList />
      <HomepagePagination />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/css/components/Category/Main/Nam/category-nam.scss';
</style>
