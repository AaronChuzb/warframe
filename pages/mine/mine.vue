<!--
 * @Date: 2021-09-20 17:58:56
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-30 21:54:17
-->
<template>
	<view class="page">
		<scroll-view scroll-y style="height: 100vh">
			<view class="header">
				<view class="avatar"> <u-avatar src="/static/logo.png" size="150" @click="WXLogin"></u-avatar> </view>
			</view>
			<view class="bar">
				<view class="item">
					<u-count-to :use-easing="true" :start-val="0" :end-val="count.remain"></u-count-to>
					<view class="">遗物数</view>
				</view>
				<view class="item">
					<u-count-to :use-easing="true" :start-val="0" :end-val="count.part"></u-count-to>
					<view class="">部件数</view>
				</view>
			</view>
			<view class="content">
				<view class="card">
					<u-cell-group>
						<u-cell-item icon="list-dot" title="遗物部件默认折叠" :arrow="false"> <u-switch slot="right-icon" v-model="collapse" @change="setCollapse"></u-switch> </u-cell-item>
						<u-cell-item icon="chat" title="问题反馈" @click="navPage(0)"></u-cell-item>
						<u-cell-item icon="thumb-up" title="鸣谢名单" @click="navPage(1)"></u-cell-item>
						<u-cell-item icon="clock" title="计划日志" @click="navPage(3)"></u-cell-item>
						<u-cell-item icon="info-circle" title="关于" @click="navPage(2)"></u-cell-item>
						<!--  #ifndef MP-QQ  -->
						<u-cell-item icon="gift" title="赞赏支持" @click="$refs.popup.open()"></u-cell-item>
						<!--  #endif -->
					</u-cell-group>
				</view>
			</view>
		</scroll-view>
		<uni-popup ref="popup" type="center">
			<view class="support"> <image src="/static/mp-weixin/support.jpg" mode="widthFix" show-menu-by-longpress /> <view class="tips">小程序不支持长按识别二维码，需保存到本地才能扫码</view> </view>
		</uni-popup>
	</view>
</template>

<script>
import { index } from '../../api/mine'
export default {
	data() {
		return {
			collapse: false,
			count: {
				remain: 0,
				part: 0
			},
			navList: ['/pages/suggest/suggest', '/pages/acknowledgement/acknowledgement', '/pages/about/about', '/pages/logs/logs']
		}
	},
	async onLoad() {
		const res = await index()
		this.count = res
	},
	methods: {
		login() {
			// this.$login()
		},
		/**
		 * @description: 设置折叠面板默认显示
		 */
		setCollapse(e) {
			uni.setStorageSync('collapse', !this.collapse)
		},
		/**
		 * @description: 页面跳转通用函数
		 * @param {Number} index 点击的列表下标
		 */
		navPage(index) {
			uni.navigateTo({ url: this.navList[index] })
		},
		showSupport() {
			this.$refs.popup.open()
		},
		WXLogin() {
			uni.getUserProfile({
				desc: '用户同步数据',
				lang: 'zh_CN',
				success(res) {
					console.log('用户信息-----------', res)
					uni.login({
						provider: 'weixin',
						success: loginRes => {
							console.log('获取code-----------', loginRes)
							//调用接口传递参数
							let parames = {
								code: loginRes.code,
								encryptedData: res.encryptedData,
								iv: res.iv,
								signature: res.signature,
								rawData: res.rawData
							}
							console.log('将参数传给后端-----------', parames)
							// uni.request({ url: '', data: { parames: parames } }).then(res => {
							// 	//获取到 openid 和 session_k后，自己的逻辑
							// 	if (res.code == 1) {
							// 		console.log('授权登录成功', res.data)
							// 		console.log(res.data.openid)
							// 		console.log(res.data.session_key)
							// 	}
							// })
						},
						fail: function(err) {
							uni.showToast({
								icon: 'none',
								title: '授权失败'
							})
						}
					})
				},
				fail() {
					uni.showToast({
						icon: 'none',
						title: '授权失败'
					})
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	background-image: url('/static/0.jpg');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 442rpx;
	width: 750rpx;
	padding-top: 150rpx;
	.avatar {
		text-align: center;
		margin: 0 auto;
	}
}
.bar {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	background: #fff;
	height: 130rpx;
	align-items: center;
	box-shadow: 0 2rpx 10rpx 0 rgba(0, 0, 0, 0.15);
	.item {
		text-align: center;
	}
}
.content {
	.card {
		width: 710rpx;
		margin: 32rpx auto 0;
		border-radius: 16rpx;
		background: #fff;
		overflow: hidden;
	}
}
.support {
	width: 680rpx;
	margin: 0 auto;
	background: #fff;
	border-radius: 16rpx;
	text-align: center;
	padding: 16rpx;
	.tips {
		font-size: 24rpx;
		margin: 16rpx 0;
	}
}
</style>
