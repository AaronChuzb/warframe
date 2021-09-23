<!--
 * @Date: 2021-09-23 15:01:02
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-23 15:35:13
-->
<template>
  <uni-transition mode-class="slide-bottom" :show="true">
    <view class="card">
      <u-avatar src="/static/logo.png" size="default"></u-avatar>
      <view class="content">
        <view class="name">测试</view>
        <view class="tip">测试测试测试测试测试测试测试</view>
      </view>
    </view>
  </uni-transition>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .card{
    width: 710rpx;
    background: #fff;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    margin: 0 auto 28rpx;
    padding: 20rpx;
    .content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20rpx;
      height: 80rpx;
    }
  }
</style>
