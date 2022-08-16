<!--
 * @Date: 2022-08-16 10:27:19
 * @LastEditors: AaronChu
 * @LastEditTime: 2022-08-16 13:46:42
-->
<template>
  <view class="page">
    <scroll-view scroll-y style="height: 100vh"> 
      <view class="position-title">
        <u-gap height="60"></u-gap>
        {{ positionList[position] }}
        <view class="sub-title">昼夜交替</view>
      </view>
      <view class="content">
        <swiper :current="position" class="swiper" circular next-margin="150rpx" @change="swiperChange">
          <swiper-item class="swiper-item">
            <DayNight></DayNight>
          </swiper-item>
          <swiper-item class="swiper-item">
            <view class="card">B</view>
          </swiper-item>
          <swiper-item class="swiper-item">
            <view class="card">C</view>
          </swiper-item>
        </swiper>
        <view class="rotation-title">轮换奖励</view>
        <view class="tip">数据自动轮换</view>
        <view class="rotation">
          <view class="image">
            <image src="https://img-api.oss-cn-shenzhen.aliyuncs.com/rotation/1658479657935_0" mode="heightFix" />
          </view>
          <view class="rotation-content">
            <view class="name">制衡</view>
            <view class="price">100</view>
            <u-count-down :timestamp="date" separator="zh" font-size="24rpx" separator-size="24rpx" :show-seconds="false"></u-count-down>
          </view>
          <view class="click-all">查看全部<u-icon name="arrow-right-double"></u-icon></view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import DayNight from 'components/DayNight'
export default {
  components: {
    DayNight,
  },
  data() {
    return {
      positionList: ['赛特斯', '金星', '地球'],
      position: 0,
      dataList: [],
    }
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
      result = today.getTime() / 1000 + days * 86400 - Date.parse(new Date()) / 1000

      return result // 获取下周一的时间戳
    },
  },
  async onLoad() {},
  methods: {
    swiperChange(e) {
      this.position = e.detail.current
    },
    onShareAppMessage() {},
  },
}
</script>

<style lang="scss" scoped>
.page {
  // 设置页面高度100%，必须
  height: 100vh;
  background: #fff;
}
.content {
  // padding-top: env(safe-area-inset-top);
  width: 690rpx;
  margin: 0 auto;
}
.position-title {
  font-size: 64rpx;
  font-weight: 700;
  line-height: 84rpx;
  padding-left: 30rpx;
  color: #fff;
  background: #383838;
  .sub-title {
    margin-top: 0rpx;
    font-size: 52rpx;
    font-weight: 500;
  }
}
.swiper-item {
}
.swiper {
  margin-top: 20rpx;
  height: 730rpx;
}
.card {
  width: 500rpx;
  height: 700rpx;
  background: #000;
  border-radius: 16rpx;
}
.rotation-title {
  font-size: 50rpx;
  font-weight: 600;
}
.tip {
  color: rgb(156, 154, 154);
  font-size: 28rpx;
  font-weight: 400;
}
.rotation {
  margin-top: 45rpx;
  width: 690rpx;
  height: 92px;
  background: rgb(62, 58, 109);
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
  border-radius: 16rpx;
  position: relative;

  .image {
    position: absolute;
    left: 40rpx;
    top: -20rpx;
    width: 220rpx;
    height: 150rpx;
    border-radius: 8rpx;
    background: #fff;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    image {
      width: 200rpx;
      height: 150rpx;
    }
  }
  .rotation-content {
    position: absolute;
    left: 300rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 150rpx;
    .name {
      color: rgb(255, 255, 255);
      font-size: 36rpx;
      font-weight: 600;
    }
    .price {
      color: #fff;
    }
  }
  .click-all {
    position: absolute;
    font-size: 20rpx;
    right: 20rpx;
    top: 10rpx;
    color: #fff;
  }
}
/deep/.u-countdown-colon {
  color: #fff !important;
}
</style>
