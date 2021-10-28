/*
 * @Date: 2021-09-20 20:20:55
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-26 17:24:51
 */
import request from "../utils/request";

export function type() {
  return request('/index/type', {}, 'GET')
}
export function list(page, pageSize, search, type, stock, status) {
  return request('/index/list', {
    page,
    pageSize,
    search,
    type,
    stock,
		status
  }, 'GET')
}

export function detail(_id) {
  return request(`/index/info/${_id}`, {}, 'GET')
}