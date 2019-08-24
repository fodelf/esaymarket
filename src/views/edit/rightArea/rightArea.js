/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:32:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 11:50:39
 */
import { uuid } from '@/utils/index.js'
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
      isShowTips: true,
      cashContrls: {},
      uuid: uuid
    }
  },
  components: viewModules,
  methods: {
    changeWidgetType (mes) {
      this.isShowTips = false
      this.cashContrls = {}
      let configTabs = JSON.parse(
        JSON.stringify(configModules[mes.widgetsType]['attributes'])
      )
      configTabs.forEach(item => {
        item.values.forEach(childitem => {
          childitem['id'] = uuid(32)
        })
      })
      this.configTabs = configTabs
      this.$nextTick(() => {
        this.setControl()
        this.$refs.control.forEach(item => {
          this.cashContrls[item.functionName] = item
        })
        if (this.cashContrls['Top']) {
          this.setContrl({ name: 'Top', value: mes.top })
          this.cashContrls['Top'].changeValue()
        }
      })
    },
    /**
     * @name: appendSelect
     * @description: 选中
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    appendSelect (configTabs) {
      this.isShowTips = false
      this.cashContrls = {}
      this.configTabs = configTabs
      this.$nextTick(() => {
        this.$refs.control.forEach(item => {
          this.cashContrls[item.functionName] = item
        })
        // this.$emit('controlReady')
      })
    },
    /**
     * @name: clearAttr
     * @description: 清除属性
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    setContrl (mes) {
      this.cashContrls[mes.name].setValue(mes.value)
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
