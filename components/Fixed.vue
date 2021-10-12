<!--
 * @Date: 2021-10-12 00:09:48
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-12 13:54:25
-->
<template>
  <uni-transition mode-class="slide-bottom" :show="true">
    <view class="fixed-item">
      <view class="card">
        <view class="price">
          <image src="/static/gj.png" mode="widthFix" class="icon" />
          <view class="num">{{ itemData.price }}</view>
        </view>
        <view :class="showBg ? 'img-box' : ''">
          <!-- <image :src="itemData.img" mode="widthFix" class="img" /> -->
          <lazy-image :src="itemData.img" mode="widthFix" :index='itemData._id'></lazy-image>
        </view>
        <view class="name">{{ itemData.name }}</view>
      </view>
    </view>
  </uni-transition>
</template>

<script>
export default {
  options: { styleIsolation: 'shared' }, // 使/deep/在小程序生效
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
  },
  computed: {
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
.fixed-item {
  padding: 0rpx 0rpx 0;
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
  .name {
    text-align: center;
    transform: translate3d(0, 0, 0);
    color: #fff;
    margin: 15rpx 0;
  }
}
/deep/ .m-image {
  width: 200rpx !important;
  height: 200rpx !important;
  display: block;
  margin: 0 auto;
}
</style>
