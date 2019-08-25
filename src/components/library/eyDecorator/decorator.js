/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-03 23:27:45
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-25 22:59:41
 */

export default {
  data () {
    return {
      // $_widgetDom: this.refs.widget
    }
  },
  mounted () {
    if (this._GLOBAL['Message']['module'] === 'develop') {
      this.$_initDecorator()
      this.$_setSelectClass()
      this.$_setDelete()
    }
  },
  methods: {
    $_initDecorator () {
      this.$_mousemove()
    },
    $_mousemove () {
      let widgetDom = this.$refs.widget
      let widget = this
      widgetDom.onclick = function (event) {
        if (!widget.$refs.widget.classList.contains('selectClass')) {
          widget.setSelectValue()
        }
      }
      widgetDom.onmouseleave = function (event) {
        widget.$_romoveHoverClass()
      }
      widgetDom.onmousemove = function (event) {
        widget.$_setHoverClass()
        widget.$_setMousePointer()
        let e = event || window.event
        let mainArea = widget.getParent()
        // let RootGroup = mainArea.getListenerChirldren()[0]
        let RootGroup = mainArea.getRootGroup()
        // let limit = parseFloat(ey.callFunction(this, 'view', 'widget', '_remToPx', 0.4, 'return'))
        // let RootGroupWidth = mainArea.getWidth()
        let childWidget = widget
        let childAbsoluteX = 490
        // let childAbsoluteY = childWidget.getTop('px') + 120
        let childAbsoluteY = childWidget.getTop('px') + 70
        // let childWidth = childWidget.getWidth('px')
        let childWidth = 375
        let childHeight = childWidget.getHeight('px')
        let childAbsoluteRight = childAbsoluteX + childWidth
        let childAbsoluteBottom = childAbsoluteY + childHeight
        let childTop = childWidget.getTop('px')
        let childLeft = childWidget.getLeft('px')
        let scollT = mainArea.getScrollTop()
        // 鼠标感应区域设置
        let mousePesponse = 0
        // if (childWidth > 200 && childHeight > 200) {
        //   mousePesponse = 20
        // }
        let lArea = e.pageX - childAbsoluteX < mousePesponse
        let rArea = childAbsoluteRight - e.pageX < mousePesponse
        let tArea = e.pageY - childAbsoluteY + scollT < mousePesponse
        let bArea = childAbsoluteBottom - e.pageY - scollT < mousePesponse
        // widget.$_setMouseStyle(lArea, rArea, tArea, bArea, childWidget)
        // 鼠标按下拖拽设置
        widgetDom.onmousedown = function (event) {
          if (!widget.$refs.widget.classList.contains('selectClass')) {
            widget.setSelectValue()
          }
          widget.setMouseStyle('move')
          widget.$emit('setDisSelect')
          widget.isSelect = true
          widget.ishover = false
          // 鼠标按下时取出虚线
          // widgetDom.addClass('ey-zindex')
          let e = event || window.event
          e.stopPropagation()
          // 记录鼠标按下时的宽高及鼠标pageY值
          let top = childTop
          var left = childLeft
          var width = childWidth
          let height = childHeight
          let eX = e.pageX
          let eY = e.pageY
          RootGroup.onmousemove = function (event) {
            widget.ishover = false
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
              childWidget.setMouseStyle('move')
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
            // widget.$_setMouseStyle(lArea, rArea, tArea, bArea, childWidget)
            console.log(changeType)
            // childWidget.setWidth(width)
            // childWidget.setHeight(height)
            // childWidget.setLeft(left)
            if (top >= 0) {
              childWidget.setTop(top + 'px')
              childWidget.$emit('setChildControl', { name: 'Top', value: top })
            }
            // 改变控件时抛出事件
            // let changeWidget = ey.eventLibrary.eventBase('changeWidget')

            // let changeWidgetInformation = { 'widgetId': id, 'top': top, 'left': left, 'height': height, 'width': width, 'changeType': changeType }

            // changeWidget.setInformation(changeWidgetInformation)

            // widget.triggerEvent(changeWidget)
          }
          // 关闭鼠标功能
          RootGroup.onmouseup = function (event) {
            // widget.ishover = false
            widget.setMouseStyle('pointer')
            // widget.$_setMouseMove()
            // widget.isSelsect = false
            RootGroup.onmousemove = RootGroup.onmouseup = RootGroup.onmouseleave = null
          }
          RootGroup.onmouseleave = function () {
            // widget.$_setMouseMove()
            // widget.ishover = false
            widget.setMouseStyle('pointer')
            // widget.isSelsect = false
            RootGroup.onmousemove = RootGroup.onmouseup = RootGroup.onmouseleave = null
          }
        }
      }
    },
    $_setMouseStyle (lArea, rArea, tArea, bArea, childWidget) {
      // 左侧范围修改样式
      // if (lArea) {
      //   childWidget.setMouseStyle('w-resize')
      // }
      // // 右侧范围
      // if (rArea) {
      //   childWidget.setMouseStyle('e-resize')
      // }
      // 上侧范围
      // if (tArea) {
      //   childWidget.setMouseStyle('n-resize')
      // }
      // 下侧范围
      // if (bArea) {
      //   childWidget.setMouseStyle('s-resize')
      // }
      // // 左上范围
      // if (lArea && tArea) {
      //   childWidget.setMouseStyle('nw-resize')
      // }
      // // 右上范围
      // if (rArea && tArea) {
      //   childWidget.setMouseStyle('pointer')
      // }
      // // 左下范围
      // if (lArea && bArea) {
      //   childWidget.setMouseStyle('sw-resize')
      // }
      // // 右下范围
      // if (rArea && bArea) {
      //   childWidget.setMouseStyle('se-resize')
      // }
      // 中间范围
      if (!lArea && !rArea && !tArea && !bArea) {
        childWidget.setMouseStyle('move')
      }
    },
    setMouseStyle (cursor) {
      this.$refs.widget.style.cursor = cursor
    },
    setSelectValue () {
      this.$emit('setSelectValue', this.id)
    },
    removeOtherSelect () {
      this.$emit('removeOtherSelect')
    },
    $_setMousePointer () {
      // this.$refs.widget.classList.add('mousePointer')
    },
    $_removeMousePointer () {
      // this.$refs.widget.classList.remove('mousePointer')
    },
    $_setMouseMove () {
      this.$refs.widget.classList.add('mouseMove')
    },
    $_removeMouseMove () {
      this.$refs.widget.classList.remove('mouseMove')
    },
    $_setHoverClass () {
      this.$refs.widget.classList.add('widget_hover')
    },
    $_romoveHoverClass () {
      this.$refs.widget.classList.remove('widget_hover')
    },
    $_setSelectClass () {
      this.$refs.widget.classList.add('selectClass')
      this.setMouseStyle('pointer')
    },
    $_removeSelectClass () {
      this.$refs.widget.classList.remove('selectClass')
    },
    $_setDelete () {
      var span = document.createElement('span')
      span.innerHTML = 'x'
      span.classList.add('delete-icon')
      var selef = this
      span.addEventListener('click', function (event) {
        event.stopPropagation()
        selef.$emit('setDelete', selef.id)
      })
      this.$refs.widget.appendChild(span)
    },
    $_removeDelete () {
      this.$refs.widget.removeChild(this.$refs.widget.lastChild)
    }
  }
}
