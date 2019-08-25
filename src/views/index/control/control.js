/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-21 15:40:46
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 17:48:55
 */
import { queryTemplateList } from '@/api/index/control.js'
export default {
  name: 'Control',
  data () {
    return {
      time: '默认排序',
      site: '全部站点',
      dialogVisible: false,
      templateList: []
    }
  },
  components: {},
  created () {
    this.init()
  },
  mounted () {},
  methods: {
    /**
     * @name: query
     * @description: 查询列表
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    init () {
      let param = {
        userId: sessionStorage.getItem('userId'),
        pageNum: 1,
        pageSize: 10
      }
      var self = this
      queryTemplateList(param).then(res => {
        self.templateList = res.list
      })
    },
    gotoEdit (id) {
      let url = 'edit.html?templateId=' + id
      window.open(url)
    }
  }
}
