<!--
 * @Date: 2021-09-26 13:39:17
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-26 14:18:24
-->
<template>
  <view class="title">
    <view class="border"></view>
    <view class="name">{{ name }}</view>
  </view>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  margin-bottom: 6rpx;
  .border {
    margin-right: 10rpx;
    background: $app-base-color;
    width: 5rpx;
    border-radius: 3rpx;
    height: 26rpx;
  }
  .name{
    font-weight: bold;
  }
}
</style>
