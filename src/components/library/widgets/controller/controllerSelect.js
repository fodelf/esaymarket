/*!
* Instruction : 输入框编辑器
*
* Author : 吴文周
*
* Date: 2017-04-07
*/
(function ($, ey) {
  'use strict'

  var ControllerSelect = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-controllerInput ey-attributeLine'>" +
							"<label class='ey-controllerLabel'></label>" +
							"<select class='ey-controllerSelect ey-attributeLineInput'></select>" +
							'</div>')
    // 下拉框选项
    this._items = attribute.items
  }
  // 继承组件基类
  ey.extendFun(ControllerSelect, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerSelect, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      this._domTemplate.find('label').text(currentObj.attribute.name)

      this._setValue()
      if (currentObj.attribute.selectType == 'dataSource') {
        this._domTemplate.find('select').on('change', function () {
          currentObj._stylechange()
        })
      } else {
        this._domTemplate.find('select').on('change', function () {
          currentObj.change()
        })
      }
    },
    // 设置对象属性值
    setCurrentValue: function (value) {
      this._domTemplate.find('select').val(value)
    },
    // 获取变化值
    getChangeValue: function () {
      return this._domTemplate.find('select').val()
    },
    // 设置下拉框内容
    _setValue: function () {
      var selectDom = this._domTemplate.find('select')
      var list = this._items
      for (var i = 0, len = list.length; i < len; i++) {
        var optionDom = $("<option value='" + list[i]['value'] + "'>" +
							list[i]['label'] + '</option>')
        selectDom.append(optionDom)
      }
    },
    // 样式变化
    _stylechange: function () {
      // 传递信息
   			var information = {}
   			// 组件属性值改动事件抛出
      var changeValue = ey.eventLibrary.eventBase('changeValue')
      information['value'] = this.getChangeValue()
      information['attr'] = this.attribute
      information['type'] = 'style'
      changeValue.setInformation(information)
      this.triggerEvent(changeValue)
    }
  })
  ey.widget.controllerSelect = function (attribute) {
    	return new ControllerSelect(attribute)
  }
})($, ey)
