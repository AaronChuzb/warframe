<!--
 * @Date: 2021-09-23 15:41:13
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-24 22:13:13
-->



<template>
  <view class="page">
    <z-paging ref="paging" v-model="dataList" @query="getData" :default-page-size="10" :auto-show-back-to-top="true" :refresher-end-bounce-enabled="true" :refresher-complete-delay="300">
      <view class="options" slot="top">
        <view class="search">
          <u-search placeholder="模糊搜索" v-model="keyword" :clearabled="true" :show-action="true" action-text="搜索" @custom="searchList" @search="searchList" :animation="false"></u-search>
        </view>
      </view>
      <view class="log" v-for="(item, index) in dataList" :key="index">
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
    </z-paging>
  </view>
</template>

<script>
import { logs } from '../../api/mine'

export default {
  data() {
    return {
      dataList: [],
      keyword: '',
    }
  },
  async onLoad() {
    
  },
  methods: {
    async searchList(){
      await this.$refs.paging.reload()
    },
    async getData(pageNo, pageSize) {
      const res = await logs(pageNo, pageSize, this.keyword)
      this.$refs.paging.complete(res.models)
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  min-height: 100vh;
  background: #fff;
}
.options {
  height: 100rpx;
  background: #fff;
  padding: 20rpx 0;
  box-shadow: 0 2rpx 10rpx 0 rgba(0, 0, 0, 0.15);
  .search {
    padding: 0 25rpx;
  }
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
