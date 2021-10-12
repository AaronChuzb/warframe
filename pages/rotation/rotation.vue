<!--
 * @Date: 2021-10-11 21:31:48
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-12 13:47:03
-->
<template>
  <view class="page">
    <view>
      <swiper class="swiper" :indicator-dots="false" :autoplay="false" :circular="true" previous-margin="150rpx" next-margin="150rpx" :current="current" @change="swiperChange">
        <swiper-item v-for="item in rotationList" :key="item._id">
          <Rotation :item-data="item" :current="current + 1"></Rotation>
        </swiper-item>
      </swiper>
    </view>
    <view class="title">固定奖励</view>
    <view class="fixed-list">
      <z-paging ref="paging" :fixed="false" height="100%" :refresher-enabled="false" :loading-more-enabled="false">
        <view class="item-box">
          <Fixed v-for="item in fixedList" :key="item._id" :item-data="item"></Fixed>
        </view>
      </z-paging>
    </view>
  </view>
</template>

<script>
import Rotation from 'components/Rotation'
import Fixed from 'components/Fixed'
import { list } from 'api/rotation'
export default {
  components: {
    Rotation,
    Fixed,
  },
  data() {
    return {
      fixedList: [],
      rotationList: [],
      current: 0,
    }
  },
  onLoad(options) {
    uni.showLoading({
      title: '加载中',
      mask: false
    })
    this.getData()
  },
  methods: {
    swiperChange(e) {
      this.current = e.detail.current
    },
    async getData() {
      const res = await list()
      this.fixedList = res.fixedList
      this.rotationList = res.rotationList
      uni.hideLoading()
    },
  },
}
</script>

<style lang="scss">
page {
  // 设置页面高度100%，必须
  height: 100%;
}
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.swiper {
  height: 450rpx;
}
.title {
  margin-bottom: 12rpx;
  // border-left: 4rpx solid #000;
  font-weight: bold;
  font-size: 32rpx;
  margin-left: 20rpx;
}
.fixed-list {
  flex: 1;
  padding: 0 20rpx;

  .item-box {
    display: grid;
    grid-template-columns: repeat(2, 340rpx);
    column-gap: 30rpx;
    row-gap: 20rpx;
  }
}
</style>
