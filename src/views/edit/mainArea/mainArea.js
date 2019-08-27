/*
 * @Description:主区域模块
 * @Author:吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 19:58:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-26 19:48:04
 */
import QRCode from 'qrcodejs2'
import { uuid, getUrlParam } from '@/utils/index.js'
import { preview } from '@/api/edit/edit.js'
import { previewTemp } from '@/api/preview/preview.js'
//  读取配置文件
const configModulesFiles = require.context(
  '@/components/library/widgets/configs',
  false,
  /\.js$/
)
const configModules = configModulesFiles
  .keys()
  .reduce((configModules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = configModulesFiles(modulePath)
    configModules[moduleName] = value.default
    return configModules
  }, {})
//  读取控制模块
const viewModulesFiles = require.context(
  '@/components/library/widgets/views',
  false,
  /\.vue$/
)
const viewModules = viewModulesFiles
  .keys()
  .reduce((viewModules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = viewModulesFiles(modulePath)
    viewModules[moduleName] = value.default
    return viewModules
  }, {})
export default {
  name: 'mainArea',
  data () {
    return {
      list: [],
      selectId: '',
      cache: {},
      cacheWiget: {},
      id: '',
      scale3d: 'scale3d(1, 1, 1)',
      left: '177px',
      top: '14px',
      num: 100,
      selectWidget: null,
      centerDialogVisible: false
    }
  },
  components: viewModules,
  methods: {
    /**
     * @name:changeValue
     * @description:
     * @param {type}:
     * @return {type}:
     */
    changeValue (mes) {
      console.log('mian')
      // let index = this.cache[this.selectId]
      // let selectWidget = this.$refs.widget[index]
      let selectWidget = this.cacheWiget[this.selectId]
      this.selectWidget = selectWidget
      let functionName = 'set' + mes.functionName
      if (mes.isResize) {
        selectWidget[functionName](mes.value + 'px')
      } else {
        selectWidget[functionName](mes.value)
      }
    },
    /**
     * @name:setDelete
     * @description:删除选中
     * @param {type}:
     * @return {type}:
     */
    setDelete () {
      let index = this.cache[this.selectId]
      this.list.splice(index, 1)
      this.selectWidget = null
      this.selectId = ''
      this.clearAttr()
    },
    /**
     * @name:clearAttr
     * @description:删除右侧属性
     * @param {type}:
     * @return {type}:
     */
    clearAttr () {
      this.$emit('clearAttr')
    },
    /**
     * @name: add
     * @description: 系数相加
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    add () {
      if (this.num === 130) {
        return null
      } else {
        this.num += 15
        this.comput()
      }
    },
    /**
     * @name: 默认名称
     * @description: 默认描述
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    reduce () {
      if (this.num === 55) {
        return null
      } else {
        this.num -= 15
        this.comput()
      }
    },
    /**
     * @name: comput
     * @description: 默认描述
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    comput () {
      var size, size1
      var base = this.num / 100
      if (base > 1) {
        size = 1 - (this.num - 100) / 100
        this.top = '60px'
      } else if (base === 1) {
        size = 1
        this.top = '14px'
      } else {
        size = 1 + (100 - this.num) / 100
        size1 = 1 + ((100 - this.num) / 100) * 20
        this.top = 14 * size1 + 'px'
      }
      this.left = 177 * size + 'px'
      this.scale3d = 'scale3d(' + base + ',' + base + ', 1)'
    },
    getScrollTop () {
      let mainArea = this.$refs.mainArea
      return mainArea.scrollTop
    },
    getRootGroup () {
      return this.$refs.mainArea
    },
    getWidgetById (id) {
      let index = this.cache[id]
      return this.$refs.widget[index]
    },
    getHeight () {
      let mainArea = this.$refs.mainArea
      return mainArea.scrollHeight
    },
    getWidth () {
      let mainArea = this.$refs.mainArea
      return mainArea.scrollWidth
    },
    dragover (event) {
      event.preventDefault()
    },
    /**
     * @name: setDisSelect
     * @description: 不选择
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    setDisSelect () {
      if (this.$refs.widget) {
        this.$refs.widget.forEach(element => {
          element.isSelect = false
        })
      }
    },
    drop (e) {
      this.removeOtherSelect()
      let scollT = this.getScrollTop()
      let data = e.dataTransfer.getData('data')
      let top = e.pageY - 120 + scollT
      let widget = JSON.parse(data)
      this.list.push(widget)
      this.cache[widget.uuid] = this.list.length - 1
      this.selectId = widget.uuid
      // this.$emit('append', widget.widgetsType)
      this.$nextTick(() => {
        let selectWidget = this.$refs.widget[this.list.length - 1]
        this.selectWidget = selectWidget
        this.cacheWiget[widget.uuid] = selectWidget
        top = top >= 0 ? top : 0
        this.$emit('append', { widgetName: widget.widgetName, top: top })
        // selectWidget.setTop(top + 'px')
        // this.$emit('setContrl', { name: 'Top', value: top })
      })
    },
    setChildControl (mes) {
      this.$emit('setContrl', mes)
    },
    /**
     * @name: 默认名称
     * @description: 默认描述
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    getConfig (templateName) {
      var config = []
      if (this.$refs.widget) {
        this.$refs.widget.forEach(element => {
          config.push({
            widgetName: element.widgetName,
            attributes: this.getValues(element)
          })
        })
        var param = {}
        if (this.templateId) {
          param = {
            templateId: this.templateId,
            templateInfo: JSON.stringify({ list: config }),
            templateName: templateName
          }
        } else {
          param = {
            templateInfo: JSON.stringify({ list: config }),
            templateName: templateName
          }
        }
        localStorage.setItem('config', JSON.stringify(param))
        window.open('preview.html')
        preview(param)
          .then(res => {
            this.centerDialogVisible = true
            this.$nextTick(() => {
              document.getElementById('qrcode').innerHTML = ''
              let url =
                'http://10.0.0.62:9090/preview.html?templateId=' +
                res.templateId
              this.qrcode = new QRCode('qrcode', {
                width: 100,
                height: 100, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
                text: url // 二维码内容
                // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                // background: '#f0f'
                // foreground: '#ff0'
              })
            })
          })
          .catch(() => {})

        // localStorage.setItem('config', JSON.stringify(config))
        // window.open('preview.html')
      } else {
        this.$message({
          message: '请拖拽组件',
          type: 'error',
          duration: 5 * 1000
        })
      }
    },
    /**
     * @name: setContrl
     * @description: 设置控制器回读
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    getValues (widget) {
      let widgetName = widget.widgetName
      let configTabs = JSON.parse(
        JSON.stringify(configModules[widgetName]['attributes'])
      )
      configTabs.forEach(item => {
        item.values.forEach(childitem => {
          let functionName = 'get' + childitem.valueName
          let value = widget[functionName]()
          childitem['id'] = uuid(32)
          childitem.defaultValue = value
        })
      })
      return configTabs
    },
    /**
     * @name: removeOtherSelect
     * @description: 移除其他选中的样式
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    removeOtherSelect () {
      if (this.selectWidget) {
        this.selectWidget.$_removeSelectClass()
        this.selectWidget.$_removeDelete()
      }
    },
    /**
     * @name: removeOtherSelect
     * @description: 移除其他选中的样式
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    setSelect () {
      if (this.selectWidget) {
        this.selectWidget.$_setSelectClass()
        this.selectWidget.$_setDelete()
      }
    },
    /**
     * @name: setSelectValue
     * @description: 设置选中状态
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    setSelectValue (id) {
      this.removeOtherSelect()
      // let index = this.cache[id]
      this.selectId = id
      let selectWidget = this.cacheWiget[id]
      // let selectWidget = this.$refs.widget[index]
      this.selectWidget = selectWidget
      var configTabs = this.controlReady()
      this.$emit('appendSelect', configTabs)
      this.setSelect()
    },
    /**
     * @name: setContrl
     * @description: 设置控制器回读
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    controlReady () {
      let widgetName = this.selectWidget.widgetName
      let configTabs = JSON.parse(
        JSON.stringify(configModules[widgetName]['attributes'])
      )
      configTabs.forEach(item => {
        item.values.forEach(childitem => {
          let functionName = 'get' + childitem.valueName
          let value = this.selectWidget[functionName]()
          childitem['id'] = uuid(32)
          childitem.defaultValue = value
        })
      })
      return configTabs
    },
    /**
     * @name: 默认名称
     * @description: 默认描述
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    init () {
      this.templateId = getUrlParam('templateId')
      if (this.templateId) {
        var self = this
        previewTemp({ templateId: this.templateId })
          .then(res => {
            let list = JSON.parse(res.templateInfo).list
            list.map(item => {
              item['uuid'] = uuid(32)
              return item
            })
            self.list = list
            self.$nextTick(() => {
              self.$refs.widget.forEach((element, index) => {
                self.setValues(element, self.list[index]['attributes'])
                self.cacheWiget[element.id] = element
              })
            })
          })
          .catch(() => {})
      }
    },
    /**
     * @name: setContrl
     * @description: 设置控制器回读
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    setValues (widget, attributes) {
      attributes.forEach(item => {
        item.values.forEach(childitem => {
          let functionName = 'set' + childitem.valueName
          widget[functionName](childitem.defaultValue)
        })
      })
    }
  },
  created () {
    // 判断是否是编辑过
    this.init()
    // this.$emit('append', 'mainArea')
  }
  // wacth: {
  //   num () {
  //     var base = this.num / 100
  //     this.scale3d = 'scale3d(' + base + ',' + base + ', 1)'
  //   }
  // }
}
