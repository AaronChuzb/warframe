<!--
 * @Date: 2021-09-23 15:38:09
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-27 10:42:53
-->
<template>
  <view class="page">
    <scroll-view scroll-y style="height: 100vh">
      <view class="u-content">
        <u-parse :html="content" :tag-style="style"></u-parse>
      </view>
      <view style="height: 40rpx"></view>
    </scroll-view>
  </view>
</template>

<script>
import { about } from '../../api/mine'
export default {
  data() {
    return {
      content: '',
      style: {
        img: 'display: block; margin:0 auto;',
      },
    }
  },
  async onLoad() {
    const res = await about()
    this.content = res.text
  },
}
</script>

<style lang="scss" scoped>
.page {
  background: #fff;
}
.u-content {
  color: $u-content-color;
  font-size: 32rpx;
  line-height: 1.8;
  width: 750rpx;
  padding: 20rpx;
  
}
</style>
