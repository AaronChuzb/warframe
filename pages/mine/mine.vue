<!--
 * @Date: 2021-09-20 17:58:56
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-12 18:24:09
-->
<template>
  <view class="page">
    <scroll-view scroll-y style="height: 100vh">
      <view class="header">
        <view class="avatar">
          <u-avatar src="/static/logo.png" size="150"></u-avatar>
        </view>
      </view>
      <view class="bar">
        <view class="item">
          <u-count-to :use-easing="true" :start-val="0" :end-val="count.remain"></u-count-to>
          <view class="">遗物数</view>
        </view>
        <view class="item">
          <u-count-to :use-easing="true" :start-val="0" :end-val="count.part"></u-count-to>
          <view class="">部件数</view>
        </view>
      </view>
      <view class="content">
        <view class="card">
          <u-cell-group>
            <u-cell-item icon="list-dot" title="遗物部件默认折叠" :arrow="false">
              <u-switch slot="right-icon" v-model="collapse" @change="setCollapse"></u-switch>
            </u-cell-item>
            <u-cell-item icon="chat" title="问题反馈" @click="navPage(0)"></u-cell-item>
            <u-cell-item icon="thumb-up" title="鸣谢名单" @click="navPage(1)"></u-cell-item>
            <u-cell-item icon="clock" title="计划日志" @click="navPage(3)"></u-cell-item>
            <u-cell-item icon="info-circle" title="关于" @click="navPage(2)"></u-cell-item>
            <u-cell-item icon="gift" title="赞赏支持" @click="$refs.popup.open()"></u-cell-item>
          </u-cell-group>
        </view>
      </view>
    </scroll-view>
    <uni-popup ref="popup" type="center">
      <view class="support">
        <image src="/static/support.jpg" mode="widthFix" show-menu-by-longpress />
        <view class="tips">小程序不支持长按识别二维码，需保存到本地才能扫码</view>
        <view class="tips">要是能来帮我打下 钢铁蝠力使 就更好了</view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import { index } from '../../api/mine'
export default {
  data() {
    return {
      collapse: false,
      count: {
        remain: 0,
        part: 0,
      },
      navList: ['/pages/suggest/suggest', '/pages/acknowledgement/acknowledgement', '/pages/about/about', '/pages/logs/logs'],
    }
  },
  async onLoad() {
    const res = await index()
    this.count = res
  },
  methods: {
    /**
     * @description: 设置折叠面板默认显示
     */
    setCollapse(e) {
      uni.setStorageSync('collapse', !this.collapse)
    },
    /**
     * @description: 页面跳转通用函数
     * @param {Number} index 点击的列表下标
     */
    navPage(index) {
      uni.navigateTo({ url: this.navList[index] })
    },
    showSupport() {
      this.$refs.popup.open()
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-image: url('/static/mine_bg.jpeg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 442rpx;
  width: 750rpx;
  padding-top: 150rpx;
  .avatar {
    text-align: center;
    margin: 0 auto;
  }
}
.bar {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #fff;
  height: 130rpx;
  align-items: center;
  box-shadow: 0 2rpx 10rpx 0 rgba(0, 0, 0, 0.15);
  .item {
    text-align: center;
  }
}
.content {
  .card {
    width: 710rpx;
    margin: 32rpx auto 0;
    border-radius: 16rpx;
    background: #fff;
    overflow: hidden;
  }
}
.support {
  width: 680rpx;
  margin: 0 auto;
  background: #fff;
  border-radius: 16rpx;
  text-align: center;
  padding: 16rpx;
  .tips {
    font-size: 24rpx;
    margin: 16rpx 0;
  }
}
</style>
