<!--
 * @Date: 2022-08-16 11:43:30
 * @LastEditors: AaronChu
 * @LastEditTime: 2022-08-16 13:53:03
-->
<template>
  <view class="box">
    <view class="content">
      <view class="now">现在是: 白天</view>
    </view>
    <view class="day" :style="{opacity: isDay?1:0}"></view>
    <view class="night" :style="{opacity: isDay?0:1}"></view>
  </view>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      isDay: true
    };
  },
  created() {
    
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.box{
  position: relative;
  width: 500rpx;
  height: 700rpx;
  border-radius: 16rpx;
  overflow: hidden;
  
}
.day{
  position: absolute;
  left: 0;
  top: 0;
  width: 500rpx;
  height: 700rpx;
  border-radius: 16rpx;
  background: linear-gradient(#feb8b0, #fef9db);
  transition: all 1s;
}
.night{
  position: absolute;
  left: 0;
  top: 0;
  width: 500rpx;
  height: 700rpx;
  border-radius: 16rpx;
  background: linear-gradient(#4c3f6d, #6c62bb, #93b1ed);
  transition: all 1s;
}
.content{
  position: relative;
  z-index: 999;
  padding: 15rpx;
  .now{
    font-size: 46rpx;
    color: #fff;
  }
}
</style>
