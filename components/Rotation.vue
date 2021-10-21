<!--
 * @Date: 2021-10-11 21:41:34
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-12 21:07:42
-->
<template>
  <uni-transition mode-class="slide-right" :show="true">
    <view class="rotation">
      <view class="card" :class="current == itemData.rank ? 'choose' : ''">
        <view class="price">
          <image src="/static/gj.png" mode="widthFix" class="icon" />

          <view class="num">{{ itemData.price }}</view>
        </view>
        <view class="tips" v-if="itemData.rank == 1">本周</view>
        <view class="tips" style="background: #3299c9;" v-if="itemData.rank == 2">下周</view>
        <view :class="showBg ? 'img-box' : ''">
          <lazy-image width="200rpx" height="200rpx" :image="itemData.img" mode="widthFix" :index='itemData._id'></lazy-image>
        </view>
        <view class="name">{{ itemData.name }}</view>
        <view class="count-down">
          <view class="title">距离 <text style="color: #DD524D;" v-if="itemData.rank == 1">结束</text><text style="color: #007AFF;" v-if="itemData.rank != 1">开放</text>兑换还剩</view>
          <u-count-down :timestamp="date" separator="zh" font-size="24rpx" separator-size="24rpx" :show-seconds="false"></u-count-down>
        </view>
      </view>
    </view>
  </uni-transition>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      default: () => {
        return {
          img: '',
          name: '',
          price: 0,
          rank: '',
        }
      },
    },
    current: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {}
  },
  
  computed: {
    date() {
      let today = new Date()
      //设置时间为早上08:00:00
      today.setHours(8, 0, 0, 0)
      //获得今天与下星期一相隔几天
      let days = 7 - (today.getDay() ? today.getDay() : 7) + 1
      //今天早上08:00:00的时间戳 加上今天与下周一的日差秒数得到结果时间戳
      let result
      if (this.itemData.rank == 1) {
        result = today.getTime() / 1000 + days * 86400 - Date.parse(new Date()) / 1000
      } else {
        result = today.getTime() / 1000 + days * 86400 - Date.parse(new Date()) / 1000 + (this.itemData.rank - 2) * 7 * 86400
      }
      return result // 获取下周一的时间戳
    },
    showBg() {
      if (this.itemData.name.indexOf('设计图') != -1) {
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.rotation {
  padding: 30rpx 26rpx 0;
  position: relative;
  .card {
    background: #fff;
    position: relative;
    border-radius: 16rpx;
    padding: 16rpx 0 0;
    transition: all 0.5s;
    will-change: transform;
    background-image: radial-gradient(#384c52, #1b282c, #111b1e);
    box-shadow: 0 2rpx 10rpx 0 rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }
  .tips {
    position: absolute;
    top: 50rpx;
    height: 32rpx;
    // width: 80rpx;
    padding: 0 8rpx;
    padding-right: 15rpx;
    display: flex;
    align-items: center;
    background: #383838;
    border-radius: 0 20rpx 20rpx 0;
    color: #fff;
    line-height: 32rpx;
    font-size: 24rpx;
    transform: translate3d(0, 0, 0);
    
		background:  #DD524D;
  }
  .price {
    position: absolute;
    top: 10rpx;
    height: 32rpx;
    // width: 80rpx;
    padding: 0 10rpx;
    padding-right: 15rpx;
    display: flex;
    align-items: center;
    background: #383838;
    border-radius: 0 20rpx 20rpx 0;
    color: #fff;
    // line-height: 32rpx;
    .num {
      font-size: 26rpx;
      transform: translate3d(0, 0, 0);
    }
    .icon {
      width: 28rpx;
      min-width: 28rpx;
      margin-right: 5rpx;
      margin-left: 5rpx;
    }
  }
  .img-box {
    background-image: url('/static/rotation-bg.png');
  }
  .img {
    width: 200rpx;
    
    display: block;
    margin: 0 auto;
  }
  .name {
    text-align: center;
    transform: translate3d(0, 0, 0);
    color: #fff;
    margin: 15rpx 0;
  }
  .count-down {
    background: #fff;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 12rpx;
    .title {
      font-size: 24rpx;
      margin-right: 24rpx;
    }
  }
}
.choose {
  transform: scale(1.125);
  //width: 100% !important;
  // width: 120%;
}
</style>
