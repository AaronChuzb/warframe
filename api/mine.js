/*
 * @Date: 2021-09-23 18:07:51
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-23 18:14:58
 */
import request from "../utils/request";

// 提交反馈
export function suggest(text) {
  return request('/index/type', {
    text
  }, 'POST')
}

// 鸣谢名单
export function list(page, pageSize) {
  return request('/index/list', {
    page,
    pageSize,
  }, 'GET')
}

// 数据来源富文本
export function about() {
  return request('/index/type', {}, 'GET')
}

// 更新日志
export function logs() {
  return request('/index/type', {}, 'GET')
}