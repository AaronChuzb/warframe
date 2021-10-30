/*
 * @Date: 2021-10-30 21:23:49
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-30 22:01:24
 */
import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters.js"
Vue.use(Vuex)
export default new Vuex.Store({
	// 全局属性变量
	state: {
		provider: '',
    userInfo: {
      
    }
	},
	mutations: {
		SET_USERINFO: (state, userInfo) => {
			state.userInfo = userInfo
			uni.setStorageSync('userInfo', userInfo)
		},
		SET_PROVIDER: (state, provider) => {
			state.provider = provider
		}
	},
	actions: {
		getProvider({commit}){
			uni.getProvider({
			    service: 'oauth',
			    success: function (res) {
			      console.log(res.provider)
						commit('SET_PROVIDER', res.provider[0])
			    }
			});
		},
		login(){
			uni.getUserProfile({
				desc: "用于完善用户信息",
				success: (res) => {
					uni.login({
						provider: store.getters.provider,
						success: (result) => {
							// console.log(result)
						}
					})
				},
				fail: (err) => {
					uni.showToast({
						title: err.errMsg,
						icon: 'none'
					})
				}
			})
		},
    getUserInfo({commit}){
      uni.getUserProfile({
				desc: "用于报告错误时用户名填充",
				success: (res) => {
          commit('SET_USERINFO', res.userInfo)
				},
				fail: (err) => {
					uni.showToast({
						title: err.errMsg,
						icon: 'none'
					})
				}
			})
    }
		
	},
	getters
})
