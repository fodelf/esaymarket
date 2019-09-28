/*
 * @Description:公共的模块
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-05 17:27:29
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-09-27 18:53:48
 */
import request from '@/utils/request'

export function queryAppById (params) {
  return request({
    url: '/app/queryAppById',
    method: 'POST',
    params: params
  })
}
