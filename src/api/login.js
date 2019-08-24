/*
 * @Description:登陆模块请求
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-05 17:27:29
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-10 09:33:43
 */
import request from '../utils/request'

export function loginAction (params) {
  return request({
    url: '/compcag/SOLIDER_01',
    method: 'POST',
    params: params
  })
};
export function SOLIDER_02 (params) {
  return request({
    url: '/compcag/SOLIDER_02',
    method: 'POST',
    params: params
  })
};
export function SOLIDER_33 (params) {
  return request({
    url: '/compcag/SOLIDER_33',
    method: 'POST',
    params: params
  })
}
