/*!
* Instruction : 静态数据编辑器
*
* Author : 吴文周
*
* Date: 2017-04-08
*/
(function ($, ey) {
  'use strict'

  var ControllerStaticData = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='' style='margin-left:5px'>" +
								"<label class='ey-controllerLabel' style='position :absolute'></label>" +
								"<div  class='ey-attrStatic'>" +
								"<textarea  spellcheck ='false' class='ey-attrStaticTextArea'>" +
								'</textarea>' +
								'</div>' +
								'</div>')
  }
  // 继承组件基类
  ey.extendFun(ControllerStaticData, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerStaticData, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      this._domTemplate.find('label').text(currentObj.attribute.name)
      // 默认dom显示隐藏状态
      this._domTemplate.css({ 'display': currentObj.attribute.status })
      var content = this.formatJson(JSON.stringify(currentObj.attribute.defaultValue))
      this._domTemplate.find('textarea').val(content)
      this._domTemplate.find('textarea').on('input', function () {
        currentObj.change()
      })
    },
    // 获取值
  		getChangeValue: function () {
      try {
        return JSON.parse(this._domTemplate.find('textarea').val())
      } catch (e) {
        //				alert("数据格式不正确");
      }
  		},
   		// 设置当前对象的属性值显示
   		setCurrentValue: function (value) {
   			var jsonText = this._domTemplate
      var valueStr = JSON.stringify(value)
      var content = this.formatJson(valueStr)
      jsonText.find('textarea').val(content)
   		},
    repeat: function (s, count) {
	        return new Array(count + 1).join(s)
	    },
    // json数据格式
	    formatJson: function (json) {
	        var i = 0
	            var len = 0
	            var tab = '    '
	            var targetJson = ''
	            var indentLevel = 0
	            var inString = false
	            var currentChar = null

	        for (i = 0, len = json.length; i < len; i += 1) {
	            currentChar = json.charAt(i)

	            switch (currentChar) {
	            case '{':
	            case '[':
	                if (!inString) {
	                    targetJson += currentChar + '\n' + this.repeat(tab, indentLevel + 1)
	                    indentLevel += 1
	                } else {
	                    targetJson += currentChar
	                }
	                break
	            case '}':
	            case ']':
	                if (!inString) {
	                    indentLevel -= 1
	                    targetJson += '\n' + this.repeat(tab, indentLevel) + currentChar
	                } else {
	                    targetJson += currentChar
	                }
	                break
	            case ',':
	                if (!inString) {
	                    targetJson += ',\n' + this.repeat(tab, indentLevel)
	                } else {
	                    targetJson += currentChar
	                }
	                break
	            case ':':
	                if (!inString) {
	                    targetJson += ': '
	                } else {
	                    targetJson += currentChar
	                }
	                break
	            case ' ':
	            case '\n':
	            case '\t':
	                if (inString) {
	                    targetJson += currentChar
	                }
	                break
	            case '"':
	                if (i > 0 && json.charAt(i - 1) !== '\\') {
	                    inString = !inString
	                }
	                targetJson += currentChar
	                break
	            default:
	                targetJson += currentChar
	                break
	            }
	        }
	        return targetJson
	    },
	    // 数据源地址改变刷新数据源
    refurbish: function (refurbishValue) {
      // 当数据源为工作表和数据表时进行传参数类型切换
      if (refurbishValue == 'source_static') {
        this._domTemplate.show()
        // 隐藏数据高级属性
        this.getRootParent('attibuteArea').hideAttributeSenior()
      }
      // 静态数据隐藏次功能
      else {
        this._domTemplate.hide()
        this.getRootParent('attibuteArea').showAttributeSenior()
      }
    }
  })
  ey.widget.controllerStaticData = function (attribute) {
    	return new ControllerStaticData(attribute)
  }
})($, ey)
