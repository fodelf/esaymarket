/*
 * @Description:主区域模块
 * @Author:吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 19:58:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-22 08:38:57
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
      list: []
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
          widget[functionName](childitem.defaultValue)
        })
      })
    }
  },
  created () {
    this.list = JSON.parse(localStorage.getItem('config'))
    this.$nextTick(() => {
      this.$refs.widget.forEach((element, index) => {
        this.setValues(element, this.list[index]['attributes'])
      })
    })
  }
  // wacth: {
  //   num () {
  //     var base = this.num / 100
  //     this.scale3d = 'scale3d(' + base + ',' + base + ', 1)'
  //   }
  // }
}
