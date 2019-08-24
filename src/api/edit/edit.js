/*
 * @Description:登陆模块请求
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-05 17:27:29
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 09:30:47
 */
import request from '../../utils/request'

export function preview (params) {
  return request({
    url: '/api/template/save/userTemplate',
    method: 'POST',
    params: params
  })
}
