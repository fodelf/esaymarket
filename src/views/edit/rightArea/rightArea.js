/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:32:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-21 08:33:45
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
      activeName: 0,
      configTabs: [],
      tabsValue: '0',
      isShowTips: true
    }
  },
  components: viewModules,
  methods: {
    changeWidgetType (mes) {
      this.isShowTips = false
      this.configTabs = configModules[mes]['attributes']
      console.log(this.configTabs)
      this.$nextTick(() => {
        this.setControl()
      })
    },
    /**
     * @name: clearAttr
     * @description: 清除属性
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    clearAttr () {
      this.configTabs = []
      this.isShowTips = true
    },
    changeValue (message) {
      console.log('right')
      this.$emit('changeValue', message)
    },
    /**
     * @name: setControl
     * @description: 设置控制初始化组件
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    setControl () {
      if (this.$refs.control) {
        this.$refs.control.forEach(element => {
          element.changeValue()
        })
      }
    }
  },
  created () {
    // this.changeWidgetType('mainArea')
  }
}
