/*
 * @Date: 2021-10-11 22:18:39
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-11 22:18:39
 */
import request from "../utils/request";

export function list() {
  return request('/rotation/list', {}, 'GET')
}