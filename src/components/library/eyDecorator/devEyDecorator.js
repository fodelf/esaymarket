/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2017-05-07 11:03:32
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 15:59:49
 */
const yBase = 82

const xBase = 16
// 关闭鼠标功能
const closeFun = function (RootGroup, widget, widgetDom) {
  // RootGroup.removeEventListener('mousemove', function () {})
  // RootGroup.removeEventListener('mouseup', function () {})
  // RootGroup.removeEventListener('mouseleave', function () {})
  // widgetJqDom.removeClass('ey-zindex')
  // 关闭改变元素尺寸功能
  RootGroup.onmousemove = RootGroup.onmouseup = RootGroup.onmouseleave = null
  // 释放全局捕获
  // if (widgetDom.releaseCapture) {
  // 	widgetDom.releaseCapture()
  // }
  // 选中控件时抛出事件
  // let hideGuides = ey.eventLibrary.eventBase('hideGuides')
  // widget.triggerEvent(hideGuides)
}
// 选中方法
const selectWidget = function (widget, widgetDom) {
  // 设置选中组件
  widgetDom.addEventListener('click', function (event) {
    let e = event || window.event
    e.stopPropagation()
    let id = e.currentTarget.id
    // // 设置选中框
    // if (widgetDom.hasClass('ey-mousehover')) {
    //    	widgetDom.removeClass('ey-mousehover')
    // }
    // widget.setSelectedClass();
    // let information = { 'widgetId': id }
    // widget.$emit('selectWidget', information)
  }, false)
}
// 鼠标移入组件
const overWidget = function (widget, widgetDom) {
  // let delectIcon = $('<img class = 'ey-delectIcon' src = '../images/icon_del.png'/>')
  // let hoverIcon = $('<img class='ey-hoverIcon' src='../images/icon_hover.png' draggable='false'>')
  // 鼠标移入控件添加装饰元素
  widgetDom.addEventListener('mouseover', function (event) {
    // let e = event || window.event
    // e.stopPropagation()
    // e.preventDefault()
    // let target = e.currentTarget
    // let id = target.id
    // widgetJqDom.append(delectIcon)
    // widgetJqDom.addClass('ey-mousehover')
    // //对象解除绑定click事件
    // delectIcon.unbind('click')
    // widgetJqDom.append(hoverIcon)
    // delectIcon.bind('click', function (event) {
    // 	//元素有父容器进行以下操作
    // 	let e = e || window.event
    // 	e.stopPropagation()
    // 	let eyTooltip = ey.widget.eyTooltip({
    // 		'title': '请选择操作',
    // 		'content': $('<div class='ey-tipSmallContent'>是否确定删除此组件</div>'),
    // 		'className': 'ey-tooltipSmall',
    // 		'commit': function () {
    // 			//删除子元素事件抛出
    // 			let removeWidget = ey.eventLibrary.eventBase('removeWidget')
    // 			let information = { 'widget': id }
    // 			removeWidget.setInformation(information)
    // 			widget.triggerEvent(removeWidget)
    // 			eyTooltip.close()
    // 		},
    // 		'cancel': function () {
    // 			eyTooltip.close()
    // 		}
    // 	})
    // 	eyTooltip.awake()
    // })
  }, false)
  widgetDom.addEventListener('mouseleave', function (event) {
    // 鼠标移出控件删除 装饰元素
    //
  }, false)
}
// 设置鼠标样式
function setMouseStyle (lArea, rArea, tArea, bArea, childWidget) {
  // //左侧范围修改样式
  // if (lArea) { childWidget.setMouseStyle('w-resize') }
  // //右侧范围
  // if (rArea) { childWidget.setMouseStyle('e-resize') }
  // //上侧范围
  // if (tArea) { childWidget.setMouseStyle('n-resize') }
  // //下侧范围
  // if (bArea) { childWidget.setMouseStyle('s-resize') }
  // //左上范围
  // if (lArea && tArea) { childWidget.setMouseStyle('nw-resize') }
  // //右上范围
  // if (rArea && tArea) { childWidget.setMouseStyle('pointer') }
  // //左下范围
  // if (lArea && bArea) { childWidget.setMouseStyle('sw-resize') }
  // //右下范围
  // if (rArea && bArea) { childWidget.setMouseStyle('se-resize') }
  // //中间范围
  // if (!lArea && !rArea && !tArea && !bArea) { childWidget.setMouseStyle('move') }
}

// 鼠标在组件周围移动
const moveWidget = function (widget, widgetDom) {
  widgetDom.onmousemove = function (event) {
    let e = event || window.event
    let id = e.currentTarget.id
    let mainArea = widget.getParent()
    // let RootGroup = mainArea.getListenerChirldren()[0]
    let RootGroup = mainArea.getRootGroup()
    // let limit = parseFloat(ey.callFunction(this, 'view', 'widget', '_remToPx', 0.4, 'return'))
    let RootGroupWidth = mainArea.getWidth()
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
        // //						 width = width > (RootGroupWidth -  limit/2 - left) ? (RootGroupWidth -  limit/2 - left) : width
        // if (width > (RootGroupWidth - limit)) {
        // 	return
        // }
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
        closeFun(RootGroup, widget, widgetDom)
      }
      RootGroup.onmouseleave = function () {
        closeFun(RootGroup, widget, widgetDom)
      }
    }
  }
}
let EyDecorator = function (widget) {
  let widgetDom = widget.getDom()
  // 设置点击选中
  selectWidget(widget, widgetDom)
  // 鼠标移入组件
  overWidget(widget, widgetDom)
  // 鼠标在最组件周围移动
  moveWidget(widget, widgetDom)
}
export default EyDecorator
