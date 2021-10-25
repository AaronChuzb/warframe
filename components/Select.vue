<!--
 * @Date: 2021-10-25 11:54:01
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-25 15:16:53
-->
<template>
	<view class="select-box">
		<view class="title">实际控制人手机号码</view> <view class="content"> <input type="text" v-model="input" placeholder-class="input-placeholder" @focus="focus" @blur="blur" @input="bindInput()" />
			<image src="../static/pulldown.png" mode="widthFix" />
		</view>
		<view class="item-box" :style="{ height: getHeight }">
			<view class="triangle"></view>
			<view class="list">
				<view class="item" 
				:style="{color: getColor(item._id)}" 
				v-for="(item, index) in searchList" 
				:key="item._id" 
				@click="chooseOne(index)"
				hover-class="button-hover"
				> 
					{{ item._id }} 
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'Select',
	data() {
		return {
			input: '',
			searchList: [],
			isChoose: false,
			showChooseList: false
		}
	},
	computed: {
		getHeight() {
			if (this.showChooseList) {
				return (this.searchList.length * 90 + 16) + 'rpx'
			} else {
				return '0rpx'
			}
		},
		getColor(){
			return (_id)=>{
				if(_id == this.input && this.isChoose){
					return '#409eff'
				} else {
					return '#000'
				}
			}
		}
	},
	methods: {
		bindInput() {
			this.$emit('input', this.input)
			// 如果用户输入不为空
			if (this.input != '') {
				this.querySearch(this.input)
			} else if (!this.isChoose) {
				this.searchList = []
			} else {
				this.showChooseList = false
			}
		},
		querySearch(e) {
			if (e != '') {
				this.searchList = [{ name: '', _id: '1' }, { name: '', _id: '2' }, { name: '', _id: '3' },{ name: '', _id: '1' }, { name: '', _id: '2' }, { name: '', _id: '3' }]
				this.showChooseList = true
			} else {
				this.showChooseList = false
			}
		},
		focus() {
			if (this.searchList.length != 0) {
				this.showChooseList = true
			}
		},
		blur() {
			if (this.input == '') {
				this.showChooseList = false
			}
		},
		chooseOne(index) {
			this.isChoose = true
			this.input = this.searchList[index]._id
			this.$emit('input', this.input)
			this.showChooseList = false
		}
	}
}
</script>

<style lang="scss">
.select-box {
	position: relative;
	.title{
		font-size: 32rpx;
		font-weight: 500;
		line-height: 32rpx;
		color: #222222;
		margin-bottom: 15rpx;
	}
	.content {
		width: 100%;
		height: 70rpx;
		background: #f8f8f8;
		border-radius: 16rpx;
		padding: 0 26rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32rpx;
		font-weight: 500;
	}
	input {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 32rpx;
		font-weight: 500;
		width: 100%;
	}
	image {
		width: 28rpx;
		height: 28rpx;
	}
	.input-placeholder {
		line-height: 90rpx;
		font-size: 32rpx;
		font-weight: 500;
		color: #999999;
	}
	.item-box {
		overflow: hidden;
		transition: all 0.3s;
		position: absolute;
		transform: translate(0, 0);
		border-radius: 16rpx;
		top: 150rpx;
		width: 100%;
		height: 0;
		z-index: 999;
		.triangle {
			width: 0;
			height: 0;
			border-left: 10rpx solid transparent;
			border-right: 10rpx solid transparent;
			border-bottom: 16rpx solid #f8f8f8;
      margin-left: 30rpx;
			margin-bottom: -2rpx;
		}
		.list{
			background: #f8f8f8;
			border-radius: 16rpx;
			box-shadow: 0rpx 10rpx 10rpx rgba(0, 0, 0, 0.1);
			padding-top: 10rpx;
			.item{
				height: 70rpx;
				padding: 0 24rpx;
				margin-bottom: 10rpx;
				line-height: 70rpx;
				font-size: 32rpx;
				font-weight: 500;
			}
		}
	}
}
</style>
