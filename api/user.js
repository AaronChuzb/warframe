
import request from "../utils/request";

// 设置关于页面数据
export function login(data) {
  return request('/user/login', data, 'post')
}
