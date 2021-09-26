<!--
 * @Date: 2021-09-20 01:55:52
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-26 17:27:29
-->
<template>
  <view class="page">
    <view class="options">
      <view class="search">
        <view class="stock-choose" @click="show = true">
          <view class="label">{{stock.label}}</view>
          <u-icon name="arrow-down"></u-icon>
        </view>
        <u-select v-model="show" :list="options" @confirm="stockChange" mode="single-column"></u-select>
        <u-search style="flex: 1" placeholder="根据遗物或部件名称搜索" v-model="keyword" :clearabled="true" :show-action="true" action-text="搜索" @custom="searchList" @search="searchList" :animation="false"></u-search>
      </view>
      <view class="subsection" style="margin-top: 15rpx">
        <u-subsection :list="list" :current="0" @change="typeChange"></u-subsection>
      </view>
    </view>
    <view style="flex: 1">
      <z-paging ref="paging" :fixed="false" height="100%" v-model="dataList" @query="getData" :default-page-size="3" :auto-show-back-to-top="true" :refresher-end-bounce-enabled="true" :refresher-complete-delay="300">
        <remain :page-data="item" v-for="(item, index) in dataList" :key="index"></remain>
      </z-paging>
    </view>
  </view>
</template>

<script>
import { list, type } from '../../api/index'
import Remain from '../../components/Remain.vue'
export default {
  components: {
    Remain,
  },
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
      temp: ['', ''],
      options: [
        {
          label: '全部',
          value: '',
        },
        {
          label: '已入库',
          value: 1,
        },
        {
          label: '未入库',
          value: 2,
        }
      ],
      show: false,
      stock: {
        label: '全部',
        value: 0
      },
    }
  },
  async onLoad() {
    const res = await type()
    res.forEach((item, index) => {
      this.list.some(e => {
        if (e.name === item.name) {
          e._id = item._id
        }
      })
    })
  },
  methods: {
    typeChange(e) {
      console.log(e)
      this.type = this.list[e]._id
      // 添加延时函数解决卡顿问题
      setTimeout(() => {
        this.$refs.paging.reload()
      }, 300)
    },
    stockChange(e){
      this.stock = e[0]
      // 等待动画完成
      setTimeout(()=>{
        this.$refs.paging.reload()
      },150)
    },
    async searchList() {
      // 搜索前判断字符串改变或者类型改变，减少不必要的请求。
      // 进行对比，满足一项条件才进行请求。
      if (this.temp[0] !== this.keyword || this.temp[1] !== this.type) {
        await this.$refs.paging.reload()
        // 将当前的信息存入,第二次请求如果未变化的话直接拒绝请求
        this.temp[0] = this.keyword
        this.temp[1] = this.type
      }
    },
    async getData(pageNo, pageSize) {
      const res = await list(pageNo, pageSize, this.keyword, this.type, this.stock.value)
      this.$refs.paging.complete(res.data)
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
  // 设置page标签高度100%，并且开启flex布局
  height: 100%;
  display: flex;
  flex-direction: column;
}
.options {
  position: relative;
  height: 180rpx;
  background: #fff;
  padding: 20rpx 0;
  box-shadow: 0 2rpx 10rpx 0 rgba(0, 0, 0, 0.15);
  z-index: 999;
  .stock-choose{
    width: 150rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .label{
      margin-right: 10rpx;
    }
  }
  .search{
    display: flex;
    align-items: center;
    padding: 0 25rpx;
  }
  .subsection {
    padding: 0 25rpx;
  }
}
</style>
