<!--
 * @Date: 2021-09-20 01:55:52
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-28 11:10:59
-->

<script>
import { type } from './api/index'
export default {
  onLaunch: async function () {
    uni.setStorageSync('collapse', true)
    const updateManager = uni.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function (res) {
      uni.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        },
      })
    })
    updateManager.onUpdateFailed(function (res) {
      // 新的版本下载失败
      console.log('download error')
      uni.showModal({
        title: '提示',
        content: '新版小程序下载失败\n请自行退出程序，手动删除本程序，再次搜寻',
        confirmText: '知道了',
      })
    })
  },
  onShow: function () {
		// 获取服务提供商
		this.$store.dispatch('getProvider')
	},
  onHide: function () {},
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
