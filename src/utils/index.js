/*
 * @Description:js工具类汇总
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-07 17:00:45
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 10:55:14
 */

/**
 * @name:uuid
 * @description:生成uuid
 * @param {type}:
 * @return {type}:
 */
export function uuid (len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid = []; var i
  // eslint-disable-next-line no-undef
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    // rfc4122, version 4 form
    var r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data. At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        // eslint-disable-next-line eqeqeq
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }

  return uuid.join('')
}
