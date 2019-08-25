/*
 * @Description:控制台
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-05 17:27:29
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 17:35:01
 */
import request from '@/utils/request'

export function queryTemplateList (params) {
  return request({
    url: '/api/template/get/templateList',
    method: 'POST',
    params: params
  })
}
export function query (params) {
  return request({
    url: '/api/template/get/templateList',
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
