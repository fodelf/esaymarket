/*
 * @Description:主区域模块
 * @Author:吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 19:58:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-10-15 22:34:47
 */
const viewModulesFiles = require.context(
  '../../../components/library/widgets/views',
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
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {}
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
          if (childitem.isResize) {
            let value = (childitem.defaultValue / 375) * 100
            widget[functionName](value + 'vw')
          } else {
            widget[functionName](childitem.defaultValue)
          }
        })
      })
    }
  },
  mounted () {
    this.$refs.widget.forEach((element, index) => {
      this.setValues(element, this.list[index]['attributes'])
    })
  }
}
