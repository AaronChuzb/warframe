<!--
 * @Date: 2021-09-20 01:55:52
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-22 17:54:03
-->
<template>
  <view class="page">
    <z-paging ref="paging" v-model="dataList" @query="getData" :default-page-size="5" :auto-show-back-to-top="true" :refresher-end-bounce-enabled="true" :refresher-complete-delay="300">
      <view class="options" slot="top">
        <view class="search">
          <u-search placeholder="根据遗物或部件名称搜索" v-model="keyword" :clearabled="true" :show-action="true" action-text="搜索" @custom="searchList" @search="searchList" :animation="false"></u-search>
        </view>
        <view class="search" style="margin-top: 15rpx">
          <u-subsection :list="list" :current="0" @change="typeChange"></u-subsection>
        </view>
      </view>
      <remain :page-data="item" v-for="(item, index) in dataList" :key="index"></remain>
    </z-paging>
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
      temp: ['','']
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
      // 添加延时函数解决卡顿问题
      setTimeout(()=>{
        this.$refs.paging.reload()
      }, 300)
    },
    async searchList(){
      // 搜索前判断字符串改变或者类型改变，减少不必要的请求。
      // 进行对比，满足一项条件才进行请求。
      if(this.temp[0] != this.keyword || this.temp[1] != this.type){
        await this.$refs.paging.reload()
        // 将当前的信息存入,第二次请求如果未变化的话直接拒绝请求
        this.temp[0] = this.keyword
        this.temp[1] = this.type
      }
    },
    async getData(pageNo, pageSize) {
      console.log(pageNo, pageSize)
      const res = await list(pageNo, pageSize, this.keyword, this.type)
      this.$refs.paging.complete(res.data)
    },
  },
}
</script>

<style lang="scss" scoped>
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
</style>
