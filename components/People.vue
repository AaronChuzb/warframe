<!--
 * @Date: 2021-09-23 15:01:02
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-24 22:04:43
-->
<template>
  <uni-transition mode-class="slide-bottom" :show="true">
    <view class="card">
      <u-avatar :src="pageData.avatar" size="default"></u-avatar>
      <view class="content">
        <view class="name">{{ pageData.name }}</view>
        <view class="tips">{{ pageData.tips }}</view>
      </view>
    </view>
  </uni-transition>
</template>

<script>
export default {
  props:{
    pageData:{
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    width: 710rpx;
    background: #fff;
    border-radius: 16rpx;
    display: flex;
    // align-items: center;
    margin: 28rpx auto 0;
    padding: 20rpx;
    .content{
      
      margin-left: 20rpx;
      min-height: 80rpx;
      .name{
        font-weight: bold;
      }
      .tips{
        margin-top: 18rpx;
        font-size: 26rpx;
        color: #999;
      }
    }
  }
</style>
