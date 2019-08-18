/*!
* Instruction : 输入框编辑器
*
* Author : 吴文周
*
* Date: 2017-04-05
*/
(function ($, ey) {
  'use strict'

  var ControllerInput = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-controllerInput ey-attributeLine'>" +
							"<label class='ey-controllerLabel'></label>" +
							"<input class='ey-controllerInputEditor ey-attributeLineInput'/>" +
							'</div>')
  }
  // 继承组件基类
  ey.extendFun(ControllerInput, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerInput, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      this._domTemplate.find('label').text(currentObj.attribute.name)
      this._domTemplate.find('input').bind('input', function () {
        currentObj.change()
      })
    },
    // 设置对象属性值
    setCurrentValue: function (value) {
      this._domTemplate.find('input').val(value)
    },
    // 获取变化值
    getChangeValue: function () {
      return this._domTemplate.find('input').val()
    }
  })
  ey.widget.controllerInput = function (attribute) {
    	return new ControllerInput(attribute)
  }
})($, ey)
