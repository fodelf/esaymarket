/*
 * @Description:主区域模块
 * @Author:吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 19:58:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-09-01 09:46:50
 */
// import { uuid } from '@/utils/index.js'
// //  读取配置文件
// const configModulesFiles = require.context(
//   '@/components/library/widgets/configs',
//   false,
//   /\.js$/
// )
// const configModules = configModulesFiles
//   .keys()
//   .reduce((configModules, modulePath) => {
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = configModulesFiles(modulePath)
//     configModules[moduleName] = value.default
//     return configModules
//   }, {})
//  读取控制模块
import QRCode from 'qrcodejs2'
import { previewTemp, visit } from '@/api/preview/preview.js'
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
      _showInPC: false
    }
  },
  components: viewModules,
  methods: {
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
          if (!this._showInPC) {
            if (childitem.isResize) {
              let value = (childitem.defaultValue / 375) * 100
              widget[functionName](value + 'vw')
            } else {
              widget[functionName](childitem.defaultValue)
            }
          } else {
            if (childitem.isResize) {
              widget[functionName](childitem.defaultValue + 'px')
            } else {
              widget[functionName](childitem.defaultValue)
            }
          }
        })
      })
    }
  },
  created () {
    function getUrlParam (key) {
      // 获取参数
      var url = window.location.search
      // 正则筛选地址栏
      var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
      // 匹配目标参数
      var result = url.substr(1).match(reg)
      // 返回参数值
      return result ? decodeURIComponent(result[2]) : null
    }
    let templateId = getUrlParam('templateId')
      ? getUrlParam('templateId')
      : 'defaut'
    var slef = this
    var _limitedWidth = 1000
    var deviceWidth = document.documentElement.clientWidth
    if (deviceWidth > _limitedWidth) {
      this._showInPC = true
      this.$nextTick(() => {
        document.getElementById('qrcode').innerHTML = ''
        let url = window.location.href
        this.qrcode = new QRCode('qrcode', {
          width: 120,
          height: 120, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
          text: url // 二维码内容
          // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
          // background: '#f0f'
          // foreground: '#ff0'
        })
      })
    } else {
      this._showInPC = false
    }
    // this.list = JSON.parse(
    //   JSON.parse(localStorage.getItem('config')).templateInfo
    // ).list
    // this.$nextTick(() => {
    //   this.$refs.widget.forEach((element, index) => {
    //     this.setValues(element, slef.list[index]['attributes'])
    //   })
    // })
    previewTemp({ templateId: templateId })
      .then(res => {
        document.getElementsByTagName('title')[0].innerText = res.templateName
        slef.list = JSON.parse(res.templateInfo).list
        slef.$nextTick(() => {
          slef.$refs.widget.forEach((element, index) => {
            slef.setValues(element, slef.list[index]['attributes'])
          })
        })
      })
      .catch(() => {})
    let source = getUrlParam('source') ? getUrlParam('source') : 'defaut'
    visit({ templateId: templateId, comeSite: source })
      .then(() => {})
      .catch(() => {})
  }
  // wacth: {
  //   num () {
  //     var base = this.num / 100
  //     this.scale3d = 'scale3d(' + base + ',' + base + ', 1)'
  //   }
  // }
}
