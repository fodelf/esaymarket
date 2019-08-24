/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-21 15:40:46
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 09:36:31
 */
import { queryTemplateList } from '@/api/index/control.js'
export default {
  name: 'Control',
  data () {
    return {
      time: '默认排序',
      site: '全部站点',
      dialogVisible: false
    }
  },
  components: {},
  created () {
    this.query()
  },
  mounted () {},
  methods: {
    /**
     * @name: query
     * @description: 查询列表
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    query () {
      queryTemplateList()
    }
  }
}
