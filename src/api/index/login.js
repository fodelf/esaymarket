/*
 * @Description:登陆模块请求
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-05 17:27:29
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-26 19:23:58
 */
import request from '@/utils/request'

export function login (params) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    params: params
  })
}
export function register (params) {
  return request({
    url: '/api/user/register',
    method: 'POST',
    params: params
  })
}
export function SOLIDER_33 (params) {
  return request({
    url: '/compcag/SOLIDER_33',
    method: 'POST',
    params: params
  })
}
