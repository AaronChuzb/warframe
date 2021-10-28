<!--
 * @Date: 2021-09-22 11:40:40
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-12 15:31:40
-->
<template>
  <uni-transition mode-class="slide-bottom" :show="true">
    <u-card :thumb="transImg(pageData.type.name)" :border="false" :foot-border-top="false" :title="pageData.name" :sub-title="getSubtitle" :sub-title-color="statusColor">
      <view slot="body">
        <uni-collapse ref="collapse">
          <uni-collapse-item :name="index" :show-animation="true" :open="open" title-border="none" :border="false" v-for="(item, index) in partList" :key="index" style="margin-bottom: 15rpx">
            <template v-slot:title>
              <view class="title">
                <image :src="item.img" mode="widthFix" style="margin-bottom: 5rpx" />
                <view :style="{ color: item.color }">{{ item.title }}</view>
              </view>
            </template>
            <view v-for="child in item.children" :key="child.name" style="height: 40rpx">
              <view class="item">
                <view class="name" :class="isHighLigh(child.name) ? 'high-light' : ''">{{ child.name }}</view>
                <view class="price" v-if="child.price != 0">
                  <view :style="{ color: item.color }">{{ child.price }}</view>
                  <image src="/static/bi.png" mode="widthFix" />
                </view>
              </view>
            </view>
          </uni-collapse-item>
        </uni-collapse>
      </view>
      <view slot="foot"><u-section :title="'贡献人：' + pageData.contribute" sub-title="查看遗物详细" @click="viewDetail(pageData._id)"></u-section></view>
    </u-card>
  </uni-transition>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
    },
    highLightName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: uni.getStorageSync('collapse'),
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
      return this.part
    },
    isHighLigh() {
      return name => {
        if (name.indexOf(this.highLightName) != -1 && this.highLightName != '') {
          return true
        }
        return false
      }
    },
		getSubtitle(){
			if(this.pageData.status == '活动出库'){
				return (this.pageData.status + '（' + this.pageData.version + '）')
			}
			return this.pageData.status
		},
		statusColor(){
			if(this.pageData.status == '已入库'){
				return '#909399'
			} else if (this.pageData.status == '永久出库'){
				return '#66db7a'
			} else if (this.pageData.status == '限时出库'){
				return '#ea5764'
			} else if (this.pageData.status == '活动出库'){
				return '#f5be45'
			} else if (this.pageData.status == '版本出库'){
				return '#3d8bee'
			}
		}
  },
  methods: {
    viewDetail(id) {
      uni.navigateTo({ url: `/pages/remain/remain?_id=${id}` })
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
  .price {
    display: flex;
  }
  image {
    margin-top: 5rpx;
    width: 30rpx;
  }
}
.high-light {
  font-weight: bold;
  color: dodgerblue;
}
</style>
