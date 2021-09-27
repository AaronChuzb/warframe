<!--
 * @Date: 2021-09-23 18:25:06
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-27 10:40:25
-->
<template>
  <view class="page">
    <scroll-view scroll-y style="height: 100vh">
      <view class="container" v-if="pageData.name !== ''">
        <view style="height: 40rpx"></view>
        <u-row gutter="16">
          <u-col span="4">
            <Title name="遗物名称"></Title>
            <view class="content">{{ pageData.name }}</view>
          </u-col>
          <u-col span="4">
            <Title name="遗物类型"></Title>
            <view class="content">{{ pageData.type.name }}</view>
          </u-col>
          <u-col span="4">
            <Title name="出入库状态"></Title>
            <view class="content" :style="{ color: getColor }">{{ pageData.stock ? '已入库' : '未入库' }}</view>
          </u-col>
        </u-row>
        <Title name="遗物部件"></Title>
        <view class="part content">
          <view v-for="item in partList" :key="item.title" style="margin-bottom: 15rpx">
            <view class="title">
              <image :src="item.img" mode="widthFix" style="margin-bottom: 5rpx" />
              <view :style="{ color: item.color }">{{ item.title }}</view>
            </view>
            <view v-for="child in item.children" :key="child.name">
              <view class="item">
                <view class="name">{{ child.name }}</view>
                <view class="price" v-if="child.price != 0">
                  <view :style="{ color: item.color }">{{ child.price }}</view>
                  <image src="/static/bi.png" mode="widthFix" />
                </view>
              </view>
            </view>
          </view>
        </view>
        <Title name="获取地点"></Title>
        <view class="content">
          <text v-if="pageData.stock">{{ pageData.getways }}</text>
          <view v-else>
            <u-table v-for="item in handleText" :key="item.title" style="margin-bottom: 15rpx">
              <u-tr>
                <u-th>{{ item.title }}</u-th>
              </u-tr>
              <u-tr v-for="(line, index) in item.content" :key="index">
                <u-td v-for="colume in line" :key="colume">{{ colume }}</u-td>
              </u-tr>
            </u-table>
          </view>
        </view>
        <Title name="词条贡献人"></Title>
        <view class="content">
          {{ pageData.contribute }}
        </view>
        <u-row :gutter="16">
          <u-col :span="6">
            <Title name="创建时间"></Title>
            <view class="content">
              {{ $u.timeFormat(pageData.createdAt, 'yyyy-mm-dd hh:MM') }}
            </view>
          </u-col>
          <u-col :span="6">
            <Title name="最后更新时间"></Title>
            <view class="content">
              {{ $u.timeFormat(pageData.updatedAt, 'yyyy-mm-dd hh:MM') }}
            </view>
          </u-col>
        </u-row>
        <view style="height: 40rpx"></view>
      </view>
      <u-empty text="暂无数据" mode="data" v-if="pageData.name === ''"></u-empty>
    </scroll-view>
  </view>
</template>

<script>
import { detail } from '../../api/index'
import Title from '../../components/Title'
export default {
  components: {
    Title,
  },
  data() {
    return {
      pageData: {
        name: '',
        type: {
          name: '',
        },
        copper_1: { name: '' },
        copper_2: { name: '' },
        copper_3: { name: '' },
        silver_1: { name: '' },
        silver_2: { name: '' },
        gold: { name: '' },
        stock: false,
        getways: '',
        contribute: '',
        createdAt: '',
        updatedAt: '',
      },
      part: [
        { title: '普通', color: '#846251', img: '/static/copper.png', children: [] },
        { title: '精良', color: '#cdcbcd', img: '/static/silver.png', children: [] },
        { title: '稀有', color: '#dbbd6a', img: '/static/gold.png', children: [] },
      ],
    }
  },
  computed: {
    /**
     * @description: 部件列表结构变更
     * @return {Array} this.part
     */
    partList() {
      this.part[0].children[0] = this.pageData.copper_1
      this.part[0].children[1] = this.pageData.copper_2
      this.part[0].children[2] = this.pageData.copper_3
      this.part[1].children[0] = this.pageData.silver_1
      this.part[1].children[1] = this.pageData.silver_2
      this.part[2].children[0] = this.pageData.gold
      return this.part
    },
    /**
     * @description: 判断字体颜色
     * @return {String} 字体颜色
     */
    getColor() {
      if (this.pageData.stock) {
        return '#e06c75'
      } else {
        return '#383838'
      }
    },
    /** 
     * @description: 将指定字符串格式转换成表格识别的格式
     * @return {Array} 表格识别数据 [{ title: '', content:[['','',''],['','','']] }]常见数据格式
     */
    handleText() {
      var textList = []
      if (!this.pageData.stock) {
        let text = this.pageData.getways
        // 后端需要格式化一下数据
        let arr = text.split('\n')
        // 删除最后一条空数据
        if (arr[arr.length - 1] === '') {
          arr.splice(arr.length - 1, 1)
        }
        // 数据遍历分割成对象
        arr.forEach(item => {
          let temp = item.split('：')
          if (temp.length < 2) {
            textList.push({
              title: temp[0],
              content: [],
            })
          } else {
            textList.push({
              title: temp[0],
              content: this.group(temp[1]),
            })
          }
        })
      }
      return textList
    },
  },
  async onLoad(options) {
    const res = await detail(options._id)
    this.pageData = res
  },
  methods: {
    /**
     * @description: 将字符串分割成3个3个一组的数组
     * @param {String} str 指定格式的字符串使用中文"、"分隔
     * @return {Array} 二维数组: [[],[]]
     */
    group(str) {
      let res = []
      let arr = str.split('、')
      for (let i = 0, len = arr.length; i < len; i += 3) {
        res.push(arr.slice(i, i + 3))
      }
      return res
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
}
.container {
  padding: 0 20rpx;
}
.content {
  margin-left: 15rpx;
  margin-bottom: 36rpx;
}
.star {
  display: flex;
  flex-wrap: wrap;
  .position {
    font-weight: 500;
  }
}
.title {
  display: flex;
  align-items: center;
  image {
    width: 40rpx;
  }
}
.part {
  margin-bottom: 36rpx;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 40rpx;
  margin-top: 5rpx;
  .price {
    display: flex;
    margin-right: 40rpx;
  }
  image {
    margin-top: 5rpx;
    width: 30rpx;
  }
}
</style>
