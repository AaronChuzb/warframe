import store from "../store/index.js"
export function login(){
	uni.getUserProfile({
		desc: "用于完善用户信息",
		success: (res) => {
			console.log(res)
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
}