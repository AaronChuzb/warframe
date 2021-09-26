<!--
 * @Date: 2021-09-23 00:49:13
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-24 21:40:46
-->
<template>
  <view class="page">
    <u-top-tips ref="uTips"></u-top-tips>
    <u-toast ref="uToast" />
    <view class="header">
      <u-subsection mode="button" :list="list" :current="0" style="width: 100%" @change="typeChange"></u-subsection>
    </view>
    <view class="textarea">
      <textarea v-model="text" placeholder="您碰到的问题或建议..."></textarea>
      <u-field v-model="contact" label="联系方式" placeholder="非必填"></u-field>
    </view>
    <view class="button">
      <u-button type="success" :loading="loading" @click="submit">提交反馈</u-button>
    </view>
    <view class="tips">您反馈的问题如果处理过后将会在计划日志中进行说明。</view>
  </view>
</template>

<script>
import { suggest } from '../../api/mine'
export default {
  data() {
    return {
      loading: false,
      text: '',
      contact: '',
      type: 'Bug反馈',
      list: [{ name: 'Bug反馈' }, { name: '意见建议' }],
    }
  },
  methods:{
    typeChange(e){
      console.log(e)
      this.type = this,list[e].name
    },
    async submit(){
      if(this.text == ''){
        this.$refs.uToast.show({
					title: '请填写内容',
					type: 'error',
          position: 'top'
				})
        return
      }
      this.loading = true
      const res = await suggest({
        type: this.type,
        text: this.text,
        contact: this.contact,
        handle: 0
      })
      this.loading = false
      this.$refs.uTips.show({
				title: res.message,
				type: 'success',
				duration: '2300'
			})
      setTimeout(()=>{
        uni.navigateBack({ delta: 1 })
      }, 2300)
      
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
  width: 710rpx;
  margin: 0 auto;
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
.tips{
  font-size: 22rpx;
  text-align: center;
  color: #999;
}
</style>
