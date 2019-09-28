/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-21 15:40:46
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-09-23 20:54:42
 */
import { queryTemplateList, createApp } from '@/api/index/control.js'
export default {
  name: 'Control',
  data () {
    return {
      time: '默认排序',
      site: '全部站点',
      dialogVisible: false,
      templateList: [
        // {
        //   templateName: '111',
        //   templateUrl: 'https://www.ilanx0.net/TSD602qc',
        //   templateId: '222',
        //   viewCount: 33,
        //   registerCount: 100
        // },
        // {
        //   templateName: '111',
        //   templateUrl: 'https://www.ilanx0.net/TSD602qc',
        //   templateId: '222',
        //   viewCount: 33,
        //   registerCount: 100
        // },
        // {
        //   templateName: '111',
        //   templateUrl: 'https://www.ilanx0.net/TSD602qc',
        //   templateId: '222',
        //   viewCount: 33,
        //   registerCount: 100
        // }
      ]
    }
  },
  components: {},
  created () {
    this.init()
  },
  mounted () {},
  methods: {
    /**
     * @name: createApp
     * @description: 默认描述
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    createAppFn (url) {
      this.$message({
        message:
          '友情提示：当前只能创建安卓内嵌版网页的app,ios版本以及native或者原生（无所谓是什么）在下面的版中陆续开放！',
        type: 'warning',
        duration: 5 * 1000
      })
      let param = {
        userId: localStorage.getItem('userId') * 1,
        url: url
      }
      // var self = this
      createApp(param).then(res => {
        this.$message({
          message: '生成app的任务已经开始，请稍后再消息中心下载！',
          type: 'success',
          duration: 5 * 1000
        })
        // self.templateList = res.list
      })
    },
    /**
     * @name: init
     * @description: 查询列表
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    init () {
      let param = {
        userId: localStorage.getItem('userId') * 1,
        isPreview: false,
        pageNum: 1,
        pageSize: 10
      }
      var self = this
      queryTemplateList(param).then(res => {
        self.templateList = res.list
      })
    },
    /**
     * @name: gotoEdit
     * @description: 编辑站点
     * @param {type}: String
     * @return {type}: 默认类型
     */
    gotoEdit (id) {
      let url = 'edit.html?templateId=' + id
      window.open(url)
    },
    /**
     * @name: gotoData
     * @description: 查看数据
     * @param {type}: String
     * @return {type}: 默认类型
     */
    gotoData (item) {
      this.$router.push({
        path: '/dashBoard',
        query: {
          temId: item.templateId,
          temName: item.templateName
        }
      })
    },
    /**
     * @name: deleteTem
     * @description: 删除站点
     * @param {type}: String
     * @return {type}: 默认类型
     */
    deleteTem (id) {},
    /**
     * @name: onCopy
     * @description: 复制链接成功
     */
    onCopy () {
      this.$message({
        message: '站点链接复制成功！',
        type: 'success'
      })
    },
    /**
     * @name: onCopy
     * @description: 复制链接失败
     */
    onError () {
      this.$message({
        message: '站点链接复制失败！',
        type: 'error'
      })
    },
    /**
     * @name: open
     * @description: 新增到编辑
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    open () {
      window.open('edit.html')
    }
  }
}
