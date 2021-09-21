/*
 * @Date: 2021-09-20 20:20:55
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-20 20:53:38
 */
import request from "../utils/request";

export function type() {
  return request('/index/type', {}, 'GET')
}
export function list(page, pageSize, search, type) {
  return request('/index/list', {
    page,
    pageSize,
    search,
    type
  }, 'GET')
}