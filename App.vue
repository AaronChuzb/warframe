<!--
 * @Date: 2021-09-20 01:55:52
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-20 23:35:28
-->

<script>
import { type } from './api/index'
export default {
  onLaunch: async function () {
    console.log('App Launch')
    // 获取分类数据
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
/*每个页面公共css */
@import 'uview-ui/index.scss';
.page {
  height: 100vh;
  background: #f2f2f2;
}
</style>
