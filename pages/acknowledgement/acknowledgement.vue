<!--
 * @Date: 2021-09-23 14:49:32
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-24 21:57:32
-->
<template>
  <view class="page">
    <z-paging ref="paging" v-model="dataList" @query="getData" :default-page-size="10" :auto-show-back-to-top="true" :refresher-end-bounce-enabled="true" :refresher-complete-delay="300">
      <view class="options" slot="top">
        <view class="search">
          <u-search placeholder="根据名称搜索" v-model="keyword" :clearabled="true" :show-action="true" action-text="搜索" @custom="searchList" @search="searchList" :animation="false"></u-search>
        </view>
      </view>
      <people :page-data="item" v-for="(item, index) in dataList" :key="index"></people>
    </z-paging>
  </view>
</template>

<script>
import { list } from '../../api/mine'
import People from '../../components/People.vue'
export default {
  components: {
    People,
  },
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
      const res = await list(pageNo, pageSize, this.keyword)
      this.$refs.paging.complete(res.models)
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
  height: 100rpx;
  background: #fff;
  padding: 20rpx 0;
  box-shadow: 0 2rpx 10rpx 0 rgba(0, 0, 0, 0.15);
  .search {
    padding: 0 25rpx;
  }
}
</style>
