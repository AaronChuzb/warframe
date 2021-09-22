<!--
 * @Date: 2021-09-20 17:58:56
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-22 18:31:40
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
            <u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 750rpx;
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
    margin: 0 auto;
    border-radius: 16rpx;
    background: #fff;
    overflow: hidden;
  }
}
</style>
