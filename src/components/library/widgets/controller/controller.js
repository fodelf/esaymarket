/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2017-05-07 11:03:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 15:48:39
 */
/*!
* Instruction :控制器基类
*
* Author : 吴文周
*
* Date: 2017-04-01
*/
(function ($, ey) {
  'use strict'

  var Controller = function (attribute) {
    // 扩展事件属性
    ey.extendProperty(this, 'listener', 'eventLibrary')
    // 有属性的进行属性赋值
    this.attribute = attribute
  }
  // 继承组件基类
  ey.extendFun(Controller, 'listener', 'eventLibrary')
  // 扩展当前组件
  ey.expandPrototype(Controller, {
    // 获取jq对象
    getJqDom: function () {
      return this._domTemplate
    },
    // 属性编辑器值变化时联动事件
    change: function () {
      // 传递信息
      var information = {}
      // 组件属性值改动事件抛出
      var changeValue = ey.eventLibrary.eventBase('changeValue')
      information['value'] = this.getChangeValue()
      information['attr'] = this.attribute
      changeValue.setInformation(information)
      this.triggerEvent(changeValue)
    },
    // 获取选中对象的属性值
    getWidgetValue: function (value, fun) {
      if (this._listenerParent) {
        var attibuteArea = this.getRootParent('attibuteArea')

        return attibuteArea.getWidgteAttr(value, fun)
      }
    },
    // 获取选中对象
    getWidget: function () {
      if (this._listenerParent) {
        var attibuteArea = this.getRootParent('attibuteArea')
        return attibuteArea.getWidgte()
      }
    }

  })
  ey.widget.controller = Controller
})($, ey)
