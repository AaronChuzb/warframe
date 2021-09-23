<!--
 * @Date: 2021-09-23 15:41:13
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-23 16:44:07
-->
<template>
  <view class="page">
    <scroll-view scroll-y style="height: 100vh">
      <view class="log" v-for="(item, index) in logList" :key="index">
        <view class="dot">
          <view class="center">
            <view class="back"></view>
          </view>
        </view>
        <view class="content">
          <view class="version">
            <view class="name">{{item.version}}</view>
            <view class="date">{{item.date}}</view>
          </view>
          <text>{{item.content}}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      logList: [
        {
          date: '2021-10-01',
          version: '1.1.0',
          content: '1.dwjkahfwkaf\n2.dhwjakhdkdjkw',
        },
        {
          date: '2021-10-01',
          version: '1.1.0',
          content: '1.dwjkahfwkaf\n2.dhwjakhdkdjkw',
        },
        {
          date: '2021-10-01',
          version: '1.1.0',
          content: '1.dwjkahfwkaf\n2.dhwjakhdkdjkw',
        },
        {
          date: '2021-10-01',
          version: '1.1.0',
          content: '1.dwjkahfwkaf\n2.dhwjakhdkdjkw',
        },
        {
          date: '2021-10-01',
          version: '1.1.0',
          content: '1.dwjkahfwkaf\n2.dhwjakhdkdjkw',
        },
        {
          date: '2021-10-01',
          version: '1.1.0',
          content: '1.dwjkahfwkaf\n2.dhwjakhdkdjkw',
        },
        {
          date: '2021-10-01',
          version: '1.1.0',
          content: '1.dwjkahfwkaf\n2.dhwjakhdkdjkw',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  background: #fff;
}
.log {
  margin-left: 50rpx;
  border-left: 2rpx solid #999;
  position: relative;
  padding: 30rpx 0;
  .dot {
    position: absolute;
    left: -30rpx;
    top: 20rpx;
    width: 60rpx;
    height: 60rpx;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .center {
      width: 30rpx;
      height: 30rpx;
      border-radius: 50%;
      background: #383838;
      display: flex;
      justify-content: center;
      align-items: center;
      .back {
        width: 15rpx;
        height: 15rpx;
        background: #fff;
        border-radius: 50%;
      }
    }
  }
  .content {
    background: #383838;
    margin-left: 50rpx;
    width: 620rpx;
    min-height: 200rpx;
    border-radius: 12rpx;
    padding: 20rpx;
    .version{
      border: 2rpx solid #fff;
      background: #fff;
      color: #383838;
      width: 250rpx;
      height: 50rpx;
      display: flex;
      align-items: center;
      border-radius: 12rpx;
      margin-bottom: 28rpx;
      .name{
        width: 80rpx;
        text-align: center;
      }
      .date{
        flex: 1;
        background: #383838;
        color: #fff;
        text-align: center;
        line-height: 50rpx;
        height: 100%;
        border-radius: 0 12rpx 12rpx 0;
      }
    }
  }
  text{
    margin-top: 28rpx;
    color: #fff;
  }
}
</style>
