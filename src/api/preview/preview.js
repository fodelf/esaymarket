/*
 * @Description:预览页面
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-05 17:27:29
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 17:56:50
 */
import request from '../../utils/request'

export function previewTemp (params) {
  return request({
    url: '/api/template/get/templateInfo',
    method: 'POST',
    params: params
  })
}
export function submitForm (params) {
  return request({
    url: '/api/template/submit/form',
    method: 'POST',
    params: params
  })
}
export function visit (params) {
  return request({
    url: '/api/template/visit',
    method: 'POST',
    params: params
  })
}
