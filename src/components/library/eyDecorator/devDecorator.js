/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-03 23:27:45
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 14:19:53
 */
export default {
  data () {
    return {
      // $_widgetDom: this.refs.widget
    }
  },
  mounted () {
    this.$_initDecorator()
  },
  methods: {
    $_initDecorator () {
      this.$_mousemove()
    },
    $_mousemove () {
      let widgetDom = this.$refs.widget
      let widget = this
      widgetDom.onmousemove = function (event) {
        let e = event || window.event
        let id = e.currentTarget.id
        let mainArea = widget.getParent()
        // let RootGroup = mainArea.getListenerChirldren()[0]
        let RootGroup = mainArea.getRootGroup()
        // let limit = parseFloat(ey.callFunction(this, 'view', 'widget', '_remToPx', 0.4, 'return'))
        // let RootGroupWidth = mainArea.getWidth()
        let childWidget = mainArea.getWidgetById(id)
        let childAbsoluteX = childWidget.getLeft('px') + 300
        let childAbsoluteY = childWidget.getTop('px') + 60
        let childWidth = childWidget.getWidth('px')
        let childHeight = childWidget.getHeight('px')
        let childAbsoluteRight = childAbsoluteX + childWidth
        let childAbsoluteBottom = childAbsoluteY + childHeight
        let childTop = childWidget.getTop('px')
        let childLeft = childWidget.getLeft('px')
        let scollT = mainArea.getScrollTop()
        // 鼠标感应区域设置
        let mousePesponse = 10
        if (childWidth > 200 && childHeight > 200) {
          mousePesponse = 20
        }
        let lArea = (e.pageX - childAbsoluteX) < mousePesponse
        let rArea = (childAbsoluteRight - e.pageX) < mousePesponse
        let tArea = (e.pageY - childAbsoluteY + scollT) < mousePesponse
        let bArea = (childAbsoluteBottom - e.pageY - scollT) < mousePesponse
        // setMouseStyle(lArea, rArea, tArea, bArea, childWidget)
        // 鼠标按下拖拽设置
        widgetDom.onmousedown = function (event) {
          // 鼠标按下时取出虚线
          // widgetDom.addClass('ey-zindex')
          let e = event || window.event
          e.stopPropagation()
          // 记录鼠标按下时的宽高及鼠标pageY值
          let top = childTop
          let left = childLeft
          let width = childWidth
          let height = childHeight
          let eX = e.pageX
          let eY = e.pageY
          RootGroup.onmousemove = function (event) {
            // 这么设置是否合理
            // widgetJqDom.removeClass('ey-mousehover')
            // $('.ey-selected').removeClass('ey-selected')
            // widgetJqDom.removeClass('ey-selected')
            let e = event || window.event
            e.stopPropagation()
            let changeType = ''
            // 处于左侧范围
            if (lArea) {
              left = childLeft - (eX - e.pageX)
              width = childWidth + eX - e.pageX
              changeType = 'left'
            }
            // 处于右侧范围
            if (rArea) {
              width = childWidth + e.pageX - eX
              changeType = 'right'
            }
            // 处于上侧范围
            if (tArea) {
              top = childTop - (eY - e.pageY)
              height = childHeight + eY - e.pageY
              changeType = changeType + 'top'
            }
            // 处于下侧范围
            if (bArea) {
              height = childHeight + e.pageY - eY
              changeType = changeType + 'buttom'
            }
            // 处于中间位置设置可拖拽
            if (!lArea && !rArea && !tArea && !bArea) {
              // 设置元素可拖动
              left = childLeft - (eX - e.pageX)

              top = childTop - (eY - e.pageY)

              changeType = 'move'
            }
            // //高度限制
            // top = top < limit ? limit : top
            // //左边距限制
            // left = left < limit / 2 ? limit / 2 : left

            // left = left > (RootGroupWidth - limit / 2 - width) ? (RootGroupWidth - limit / 2 - width) : left
            // //宽度限制 是否设置？
            // width = width > (RootGroupWidth -  limit/2 - left) ? (RootGroupWidth -  limit/2 - left) : width
            // if (width > (RootGroupWidth - limit)) {
            // return
            // }
            console.log(changeType)
            childWidget.setWidth(width)
            childWidget.setHeight(height)
            childWidget.setLeft(left)
            childWidget.setTop(top)
            // 改变控件时抛出事件
            // let changeWidget = ey.eventLibrary.eventBase('changeWidget')

            // let changeWidgetInformation = { 'widgetId': id, 'top': top, 'left': left, 'height': height, 'width': width, 'changeType': changeType }

            // changeWidget.setInformation(changeWidgetInformation)

            // widget.triggerEvent(changeWidget)
          }
          // 关闭鼠标功能
          RootGroup.onmouseup = function (event) {
            widget._closeFun(RootGroup, widget, widgetDom)
          }
          RootGroup.onmouseleave = function () {
            widget._closeFun(RootGroup, widget, widgetDom)
          }
        }
      }
    }
  }
}
