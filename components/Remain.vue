<!--
 * @Date: 2021-09-22 11:40:40
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-22 14:33:47
-->
<template>
  <uni-transition mode-class="slide-bottom" :show="true">
    <u-card :thumb="transImg(pageData.type.name)" :border="false" :foot-border-top="false" :title="pageData.name" :sub-title="pageData.stock ? '已入库' : ''">
      <view slot="body">
        <uni-collapse ref="collapse">
          <uni-collapse-item :name="index" :show-animation="true" :open="true" title-border="none" :border="false" v-for="(item, index) in partList" :key="index" style="margin-bottom: 15rpx;">
            <template v-slot:title>
              <view class="title">
                <image :src="item.img" mode="widthFix" style="margin-bottom: 5rpx" />
                <view :style="{color: item.color}">{{ item.title }}</view>
              </view>
            </template>
            <view v-for="(child) in item.children" :key="child.name">
              <view class="item">
                <view class="name">{{ child.name }}</view>
                <view class="price" v-if="child.price != 0">
                  <view :style="{color: item.color}">{{ child.price }}</view>
                  <image src="/static/bi.png" mode="widthFix" />
                </view>
              </view>
            </view>
          </uni-collapse-item>
        </uni-collapse>
      </view>
    </u-card>
  </uni-transition>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
    },
  },
  data() {
    return {
      part: [
        { title: '普通', color: '#846251', img: '/static/copper.png', children: [] },
        { title: '精良', color: '#cdcbcd', img: '/static/silver.png', children: [] },
        { title: '稀有', color: '#dbbd6a', img: '/static/gold.png', children: [] },
      ],
    }
  },
  computed: {
    partList() {
      this.part[0].children[0] = this.pageData.copper_1
      this.part[0].children[1] = this.pageData.copper_2
      this.part[0].children[2] = this.pageData.copper_3
      this.part[1].children[0] = this.pageData.silver_1
      this.part[1].children[1] = this.pageData.silver_2
      this.part[2].children[0] = this.pageData.gold
      this.$nextTick(() => {
          this.$refs.collapse.resize()
      })
      return this.part
    },
  },
  methods: {
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

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  image {
    width: 40rpx;
  }
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 40rpx;
  margin-top: 5rpx;
  .price{
    display: flex;
  }
  image{
    margin-top: 5rpx;
    width: 30rpx;
  }
}
</style>
