<!--
 * @Date: 2021-09-23 15:38:09
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-23 17:19:40
-->
<template>
  <view class="page">
    <scroll-view scroll-y style="height: 100vh"> 
      <u-parse :html="content"></u-parse>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      content: '<p>露从今夜白，月是故乡明</p><img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />'
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  background: #fff;
}
</style>