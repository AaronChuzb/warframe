<!--
 * @Date: 2021-09-23 00:49:13
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-23 01:20:46
-->
<template>
  <view class="page">
    <view class="header">
      <u-subsection mode="button" :list="list" :current="0" style="width: 100%"></u-subsection>
    </view>
    <view class="textarea">
      <textarea v-model="value" placeholder="您碰到的问题或建议..."></textarea>
      <u-field v-model="contact" label="联系方式" placeholder="非必填"></u-field>
    </view>
    <view class="button">
      <u-button type="success" :loading="loading" @click="suggest">提交反馈</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      value: '',
      contact: '',
      list: [{ name: 'Bug反馈' }, { name: '意见建议' }],
    }
  },
  methods:{
    suggest(){
      this.loading = true
      setTimeout(()=>{
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
.page {
  background: #fff;
}
.header {
  display: flex;
  align-items: center;
  height: 100rpx;
}
.textarea {
  width: 710rpx;
  margin: 30rpx auto;
  textarea {
    height: 400rpx;
    background: #eff3f6;
    padding: 20rpx;
    width: 670rpx;
    border-radius: 16rpx;
  }
}
.button{
  width: 710rpx;
  margin: 100rpx auto;
}
</style>
