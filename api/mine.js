/*
 * @Date: 2021-09-23 18:07:51
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-30 22:53:15
 */
import request from "../utils/request";

// 设置关于页面数据
export function index() {
  return request('/mine/count', {}, 'GET')
}

// 提交反馈
export function suggest(data) {
  return request('/mine/suggest', data, 'POST')
}

// 提交内容反馈
export function feedback(data) {
  return request('/mine/feedback', data, 'POST')
}
// 鸣谢名单
export function list(page, pageSize, search) {
  return request('/mine/people', {
    page,
    pageSize,
    search
  }, 'GET')
}

// 数据来源富文本
export function about() {
  return request('/mine/about', {}, 'GET')
}

// 更新日志
export function logs(page, pageSize, search) {
  return request('/mine/logs', {
    page,
    pageSize,
    search
  }, 'GET')
}