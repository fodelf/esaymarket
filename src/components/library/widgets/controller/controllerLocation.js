/*!
* Instruction : 位置选择编辑器
*
* Author : 吴文周
*
* Date: 2017-04-05
*/
(function ($, ey) {
  'use strict'

  var ControllerLocation = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-controllerLocation ey-attributeLine'>" +
							"<div class='ey-controllerLabel'></div>" +
							"<div class='ey-controllerFunContent'>" +
							'</div>' +
							'</div>')

    this.locations = {
      'left': './../images/attribute/left.png',
      'right': './../images/attribute/right.png',
      'center': './../images/attribute/center.png',
      'up': './../images/attribute/up.png',
      'down': './../images/attribute/down.png',
      'mid': './../images/attribute/mid.png'
    }
  }
  // 继承组件基类
  ey.extendFun(ControllerLocation, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerLocation, {
    	// dom元素初始化
    	domInit: function () {
    		var currentObj = this
    		var locationDom = this._domTemplate
    		locationDom.find('.ey-controllerLabel').text(currentObj.attribute.name)
    		this._setValue()
      locationDom.find('.ey-controllerItems').each(function () {
        $(this).bind('click', function () {
          currentObj._value = $(this).attr('value')
          currentObj.change()
          $(this).addClass('ey-attributeChecked').removeClass('ey-attributeUnChecked')
          $(this).siblings().removeClass('ey-attributeChecked').addClass('ey-attributeUnChecked')
        })
      })
    	},
    	// 获取元素值
    getChangeValue: function () {
      return this._value
    },
    // 设置对象属性值
    setCurrentValue: function (value) {
      this._domTemplate.find('.ey-controllerItems').each(function () {
        if ($(this).attr('value') == value) {
          $(this).addClass('ey-attributeChecked').removeClass('ey-attributeUnChecked')
          $(this).siblings().removeClass('ey-attributeChecked').addClass('ey-attributeUnChecked')
        }
      })
    },
    _setValue: function () {
      var items = this.attribute.items
      var content = this._domTemplate.find('.ey-controllerFunContent')
      for (var i = 0, len = items.length; i < len; i++) {
        var item = $("<div class='ey-controllerItems ey-attributeUnChecked'></div>")
        var value = items[i]['value']
        var label = items[i]['label']
        item.attr({
          'value': value,
          'title': label
        })
        var src = this.locations[value]
        var img = $('<img />').attr({
          'src': src
        })
        item.append(img)
        content.append(item)
      }
    }

  })
  ey.widget.controllerLocation = function (attribute) {
    	return new ControllerLocation(attribute)
  }
})($, ey)
