<!--
 * @Date: 2021-09-20 17:58:56
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-23 00:52:32
-->
<template>
  <view class="page">
    <scroll-view scroll-y style="height: 100vh">
      <view class="header">
        <view class="avatar">
          <u-avatar src="/static/ls.png" size="large"></u-avatar>
        </view>
      </view>
      <view class="bar">
        <view class="item">
          <u-count-to :use-easing="true" :start-val="0" :end-val="30"></u-count-to>
          <view class="">遗物数</view>
        </view>
        <view class="item">
          <u-count-to :use-easing="true" :start-val="0" :end-val="327"></u-count-to>
          <view class="">部件数</view>
        </view>
      </view>
      <view class="content">
        <view class="card">
          <u-cell-group>
            <u-cell-item icon="list-dot" title="遗物部件折叠默认打开显示" :arrow="false">
              <u-switch slot="right-icon" v-model="collapse" @change="setCollapse"></u-switch>
            </u-cell-item>
            <u-cell-item icon="chat" title="意见反馈"  @click="navPage(1)"></u-cell-item>
            <u-cell-item icon="thumb-up" title="鸣谢名单"  @click="navPage(2)"></u-cell-item>
            <u-cell-item icon="grid" title="数据来源"  @click="navPage(3)"></u-cell-item>
            <u-cell-item icon="clock" title="计划日志"  @click="navPage(4)"></u-cell-item>
            <u-cell-item icon="gift" title="赞赏支持"  @click="navPage(5)"></u-cell-item>
          </u-cell-group>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      collapse: false
    }
  },
  methods:{
    /**
     * @description: 设置折叠面板默认显示
     */
    setCollapse(){
      uni.setStorageSync('collapse', this.collapse)
    },
    navPage(index){
      console.log(index)
      if(index == 1){
        uni.navigateTo({ url: '/pages/suggest/suggest' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-image: url('/static/mine_bg.jpg');
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
</style>
