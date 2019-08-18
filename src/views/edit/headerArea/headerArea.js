/*
 * @Description:
 * @Author:吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-07 11:13:33
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-15 21:45:59
 */
export default {
  name: 'headerArea',
  data () {
    return {}
  },
  components: {},
  methods: {
    /**
     * @name:changeValue
     * @description:
     * @param {type}:
     */
    changeValue (mes) {
      let index = this.cache[this.selectId]
      let selectWidget = this.$refs.widget[index]
      selectWidget[mes.functionName](mes.value)
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
    drop (e) {
      let data = e.dataTransfer.getData('data')
      let widget = JSON.parse(data)
      this.list.push(widget)
      this.cache[widget.uuid] = this.list.length - 1
      this.selectId = widget.uuid
      this.$emit('append', widget)
    },
    /**
     * @name: preview
     * @description: 默认描述
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    preview () {
      this.$emit('getConfig')
    }
  }
}
