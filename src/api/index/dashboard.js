/*
 * @Description:控制台
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-05 17:27:29
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-09-01 10:05:17
 */
import request from '@/utils/request'
export function query (params) {
  return request({
    url: '/api/dashboard/getVisitDetail',
    method: 'POST',
    params: params
  })
}
