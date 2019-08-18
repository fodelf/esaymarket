/*!
* Instruction : 数据测试属性编辑器
*
* Author : 吴文周
*
* Date: 2017-04-08
*/
(function ($, ey) {
  'use strict'

  var ControllerTestData = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-controllerTestData'><button class='ey-controllerTestDataButton'></button></div>")
  }
  // 继承组件基类
  ey.extendFun(ControllerTestData, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerTestData, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      var buttonDom = this._domTemplate.find('button')
      buttonDom.text(currentObj.attribute.name)
      // 触发查询数据事件
      buttonDom.bind('click', function () {
        currentObj.testEvent()
      })
      buttonDom.bind('mousedown', function () {
        $(this).addClass('ey-controllerTestDataButtonDown')
      })
      buttonDom.bind('mouseup', function () {
        $(this).removeClass('ey-controllerTestDataButtonDown')
      })
      buttonDom.bind('mouseleave', function () {
        $(this).removeClass('ey-controllerTestDataButtonDown')
      })
    },
    // 数据测试
    testEvent: function () {
      var dataTest = ey.eventLibrary.eventBase('dataTest')
      this.triggerEvent(dataTest)
    }

  })
  ey.widget.controllerTestData = function (attribute) {
    	return new ControllerTestData(attribute)
  }
})($, ey)
