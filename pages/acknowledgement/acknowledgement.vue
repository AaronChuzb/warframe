<!--
 * @Date: 2021-09-23 14:49:32
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-23 15:45:33
-->
<template>
  <view class="page">
    <z-paging ref="paging" v-model="dataList" @query="getData" :default-page-size="3" :auto-show-back-to-top="true" :refresher-end-bounce-enabled="true" :refresher-complete-delay="300">
      <view style="height: 32rpx"></view>
      <people v-for="(item, index) in 10" :key="index"></people>
    </z-paging>
  </view>
</template>

<script>
import People from '../../components/People'
export default {
  components:{
    People
  },
  data(){
    return {
      dataList: []
    }
  },
  methods:{
    async getData(pageNo, pageSize){
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>