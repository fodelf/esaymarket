/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:32:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-18 16:26:27
 */

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
  '@/components/library/widgets/controller',
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
  name: 'rightArea',
  data () {
    return {
      configTabs: {},
      tabsValue: '0',
      isShowTips: true
    }
  },
  components: viewModules,
  methods: {
    changeWidgetType (mes) {
      this.configTabs = configModules[mes]['attributes']
      console.log(this.configTabs)
    },
    changeValue (message) {
      console.log('right')
      this.$emit('changeValue', message)
    }
  },
  created () {
    // this.changeWidgetType('mainArea')
  }
}
