<!--
 * @Date: 2021-09-20 01:55:52
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-21 16:57:59
-->
<template>
  <view class="page">
    <z-paging ref="paging" v-model="dataList" @query="getData" :refresher-end-bounce-enabled="true" :refresher-complete-delay="300">
      <view class="options" slot="top">
        <view class="search">
          <u-search placeholder="根据遗物或部件名称搜索" v-model="keyword" :clearabled="true" :show-action="true" action-text="搜索" @custom="getData(1, 10)" @search="getData(1, 10)" :animation="false"></u-search>
        </view>
        <view class="search" style="margin-top: 15rpx">
          <u-subsection :list="list" :current="0" @change="typeChange"></u-subsection>
        </view>
      </view>
      <u-card :thumb="transImg(item.type.name)" :border="false" :foot-border-top="false" :title="item.name" :sub-title="item.stock ? '已入库' : ''" v-for="(item, index) in dataList" :key="index">
        <view slot="body">
          <uni-transition mode-class="slide-left" :show="true">
            <view class="header">
              <image src="/static/copper.png" mode="heightFix" />
              <view style="color: #c08972">普通</view>
            </view>
            <view class="content">
              <view class="item">
                <view>{{ item.copper_1.name }}</view>
                <view class="money">
                  <view>{{ item.copper_1.price }}</view>
                  <image src="/static/bi.png" mode="heightFix" />
                </view>
              </view>
              <view class="item">
                <view>{{ item.copper_2.name }}</view>
                <view class="money">
                  <view>{{ item.copper_2.price }}</view>
                  <image src="/static/bi.png" mode="heightFix" />
                </view>
              </view>
              <view class="item">
                <view>{{ item.copper_3.name }}</view>
                <view class="money">
                  <view>{{ item.copper_3.price }}</view>
                  <image src="/static/bi.png" mode="heightFix" />
                </view>
              </view>
            </view>
            <view class="header">
              <image style="margin-bottom: 3rpx" src="/static/silver.png" mode="heightFix" />
              <view style="color: #cecbce">精良</view>
            </view>
            <view class="content">
              <view class="item">
                <view>{{ item.silver_1.name }}</view>
                <view class="money">
                  <view>{{ item.silver_1.price }}</view>
                  <image src="/static/bi.png" mode="heightFix" />
                </view>
              </view>
              <view class="item">
                <view>{{ item.silver_2.name }}</view>
                <view class="money">
                  <view>{{ item.silver_2.price }}</view>
                  <image src="/static/bi.png" mode="heightFix" />
                </view>
              </view>
            </view>
            <view class="header">
              <image src="/static/gold.png" mode="heightFix" style="margin-bottom: 4rpx" />
              <view style="color: #dec772">稀有</view>
            </view>
            <view class="content">
              <view class="item">
                <view>{{ item.gold.name }}</view>
                <view class="money">
                  <view>{{ item.gold.price }}</view>
                  <image src="/static/bi.png" mode="heightFix" />
                </view>
              </view>
            </view>
          </uni-transition>
          <view> 查看更多 </view>
        </view>
      </u-card>
    </z-paging>
  </view>
</template>

<script>
import { list, type } from '../../api/index'
export default {
  data() {
    return {
      dataList: [],
      list: [
        { _id: '', name: '全部' },
        { _id: '', name: '丽斯' },
        { _id: '', name: '美索' },
        { _id: '', name: '尼奥' },
        { _id: '', name: '亚希' },
        { _id: '', name: '安魂' },
      ],
      type: '',
      keyword: '',
    }
  },
  async onLoad() {
    const res = await type()
    res.forEach((item, index) => {
      this.list.some(e => {
        if (e.name == item.name) {
          e._id = item._id
        }
      })
    })
  },
  methods: {
    typeChange(e) {
      console.log(e)
      this.type = this.list[e]._id
      this.getData(1, 10)
    },
    async getData(pageNo, pageSize) {
      const res = await list(pageNo, pageSize, this.keyword, this.type)
      this.$refs.paging.complete(res.data)
    },
    transImg(name) {
      let img
      if (name == '丽斯') {
        img = 'ls'
      } else if (name == '美索') {
        img = 'ms'
      } else if (name == '尼奥') {
        img = 'na'
      } else if (name == '亚希') {
        img = 'yx'
      } else if (name == '安魂') {
        img = 'ah'
      }
      return `/static/${img}.png`
    },
  },
}
</script>

<style lang="scss">
.page {
  height: 100%;
  min-height: 100vh;
}
.options {
  height: 180rpx;
  background: #fff;
  padding: 20rpx 0;
  box-shadow: 0 2rpx 10rpx 0 rgba(0, 0, 0, 0.15);
  z-index: 999;
  .search {
    padding: 0 25rpx;
  }
}
.header {
  display: flex;
  align-items: center;
  image {
    height: 35rpx;
  }
}
.content {
  margin-left: 35rpx;
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rpx;
    .money {
      display: flex;
      align-items: center;
      image {
        height: 35rpx;
        margin-bottom: 4rpx;
      }
    }
  }
}
</style>
