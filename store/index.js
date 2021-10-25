import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters.js"
Vue.use(Vuex)
export default new Vuex.Store({
	// 全局属性变量
	state: {
		provider: ''
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
		
	},
	getters
})
