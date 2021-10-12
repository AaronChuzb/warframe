<!--
 * @Date: 2021-09-20 01:55:52
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-12 21:48:08
-->
<template>
  <view class="page">
    <view class="options">
      <view class="search">
        <view class="stock-choose" @click="show = true">
          <view class="label">{{ stock.text }}</view>
          <u-icon name="arrow-down"></u-icon>
        </view>
        <u-action-sheet :list="options" @click="stockChange" v-model="show"></u-action-sheet>
        <u-search style="flex: 1" placeholder="根据遗物或部件名称搜索" v-model="keyword" :clearabled="true" :show-action="true" action-text="搜索" @custom="searchList" @search="searchList" :animation="false"></u-search>
      </view>
      <view class="subsection" style="margin-top: 15rpx">
        <u-subsection :list="list" :current="0" @change="typeChange"></u-subsection>
      </view>
    </view>
    <view style="flex: 1">
      <z-paging ref="paging" :fixed="false" height="100%" v-model="dataList" @query="getData" :default-page-size="3" :auto-show-back-to-top="true" :refresher-end-bounce-enabled="true" :refresher-complete-delay="300">
        <uni-transition mode-class="slide-top" :show="showLog">
          <u-card title="最新日志" sub-title="点击关闭" @head-click="showLog = false">
            <view slot="body">
              <text>{{ log }}</text>
            </view>
            <view slot="foot"><u-section :show-line="false" sub-title="查看更多" @click="viewMoreLog"></u-section></view>
          </u-card>
        </uni-transition>
        <remain :page-data="item" v-for="item in dataList" :key="item._id" :high-light-name="realName"></remain>
      </z-paging>
    </view>
  </view>
</template>

<script>
import { list, type } from '../../api/index'
import { logs } from '../../api/mine'
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
          text: '全部',
          value: '',
        },
        {
          text: '已入库',
          value: 1,
        },
        {
          text: '未入库',
          value: 2,
        },
      ],
      show: false,
      stock: {
        text: '全部',
        value: '',
      },
      showLog: true,
      log: '',
      realName: '',
    }
  },
  async onLoad() {
    uni.showLoading({
      title: '加载中',
      mask: false,
    })
    const res = await type()
    // 将类型_id通过对比赋值
    res.forEach((item, index) => {
      this.list.some(e => {
        if (e.name === item.name) {
          e._id = item._id
        }
      })
    })
    const logData = await logs(1, 1, '')
    this.log = logData.models[0].content
  },
  methods: {
    /**
     * @description: 查看更多日志
     */
    viewMoreLog() {
      uni.navigateTo({ url: '/pages/logs/logs' })
    },
    /**
     * @description: 类型改变
     * @param {Number} e 选中的类型下标
     */
    typeChange(e) {
      this.showLog = false
      this.type = this.list[e]._id
      // 添加延时函数解决卡顿问题
      setTimeout(() => {
        this.$refs.paging.reload()
      }, 300)
    },

    /**
     * @description: 筛选类型变更
     * @param {Number} e 选择的action下标
     */
    stockChange(e) {
      this.stock = this.options[e]
      // 等待动画完成
      setTimeout(() => {
        this.$refs.paging.reload()
      }, 150)
    },

    /**
     * @description: 搜索和重新加载列表
     */
    async searchList() {
      this.showLog = false
      // 搜索前判断字符串改变或者类型改变，减少不必要的请求。
      // 进行对比，满足一项条件才进行请求。
      if (this.temp[0] !== this.keyword || this.temp[1] !== this.type) {
        await this.$refs.paging.reload()
        // 将当前的信息存入,第二次请求如果未变化的话直接拒绝请求
        this.temp[0] = this.keyword
        this.temp[1] = this.type
      }
    },

    /**
     * @description: 获取列表数据
     * @param {Number} pageNo 页码
     * @param {Number} pageSize 页大小
     */
    async getData(pageNo, pageSize) {
      const res = await list(pageNo, pageSize, this.keyword, this.type, this.stock.value)
      this.$refs.paging.complete(res.data)
      this.realName = res.realName
      uni.hideLoading()
    },
    onShareAppMessage() {},
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
  .stock-choose {
    width: 150rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .label {
      margin-right: 10rpx;
    }
  }
  .search {
    display: flex;
    align-items: center;
    padding: 0 25rpx;
  }
  .subsection {
    padding: 0 25rpx;
  }
}
</style>
