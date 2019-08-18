/*!
* Instruction : 维度编辑器
*
* Author : 吴文周
*
* Date: 2017-04-12
*/
(function ($, ey) {
  'use strict'

  var ControllerDim = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $('<div>' +
							'<div>' +
							"<label class='ey-dataLabel'></label>" +
							"<span class='ey-attributeAdd'></span>" +
							'</div>' +
							"<div class='ey-attrDimContent'>" +
    //							+"<input class='ey-controllerInputEditor ey-attributeLineInput'/>"
    //							+"<span>"
    //							+"<span class='ey-attributeSetting'></span>"
    //							+"<span class='ey-attributeDelect'></span>"
    //							+"</span>"
    //							+"</div>"
    //							+"<div>"
    //							+"<input class='ey-controllerInputEditor ey-attributeLineInput'/>"
    //							+"<span>"
    //							+"<span class='ey-attributeSetting'></span>"
    //							+"<span class='ey-attributeDelect'></span>"
    //							+"</span>"
    //							+"</div>"
    //							+"<div>"
    //							+"<input class='ey-controllerInputEditor ey-attributeLineInput'/>"
    //							+"<span>"
    //							+"<span class='ey-attributeSetting'></span>"
    //							+"<span class='ey-attributeDelect'></span>"
    //							+"</span>"
						"<div class='ey-attrDimPullDown' style='display: none'>" +
						"<div class = 'ey-attrPullDownTitle'></div>" +
						"<div class = 'ey-attrPullDownContent'>" +
						"<div class = 'ey-attrPDT'>维度</div>" +
						"<div class = 'ey-attrPDTContent'></div>" +
						"<p id='ey-tooltipButtonLine'><button class='ey-commitBtn ey-btn'>确定</button></p>" +
						'</div>' +
						'</div>' +
						'</div>' +
						'</div>')
    this._content = $('<div>' +
						"<div><span>显示数目：</span> <input type='radio' name='dimNum'/><label>显示全部</label><input type='radio'name='dimNum'/><label>显示前</label><input type='number'/></div>" +
						"<div><span>排  序：</span> <input type='radio' name = 'dimSort'/><label>默认</label><input type='radio'name = 'dimSort' /><label>升序</label><input type='radio' name = 'dimSort'/><label>降序</label></div>" +
						'</div>')
    this._pullDown = $("<div class='ey-attrDimPullDown'>" +
						"<div class = 'ey-attrPullDownTitle'></div>" +
						"<div class = 'ey-attrPullDownContent'>" +
						"<div class = 'ey-attrPDT'>维度</div>" +
						"<div class = 'ey-attrPDTContent'></div>" +
						"<p id='ey-tooltipButtonLine'><button class='ey-commitBtn ey-btn'>确定</button></p>" +
						'</div>' +
						'</div>')
  }
  // 继承组件基类
  ey.extendFun(ControllerDim, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerDim, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      this._domTemplate.find('label').text(currentObj.attribute.name)
    },
    // 设置事件初始化
    _initEvent: function () {
      var currentObj = this
      var dom = this._domTemplate
      dom.find('.ey-attrAddDom').remove()
      dom.find('.ey-attributeAdd').unbind('click')
      dom.find('.ey-attributeAdd').bind('click', function () {
        dom.find('.ey-attrAddDom').remove()
        dom.find('.ey-attrDimPullDown').show()
      })
      dom.find('.ey-commitBtn').unbind('click')
      dom.find('.ey-commitBtn').bind('click', function () {
        dom.find('.ey-attrAddDom').remove()
        currentObj._addDom()
        currentObj.change()
        dom.find('.ey-attrDimPullDown').hide()
        dom.find('.ey-attributeDelect').unbind('click')
        dom.find('.ey-attributeDelect').bind('click', function () {
          dom.find('.ey-attrAddDom').remove()
        })
      })
    },
    // 新建dom 对象
    _addDom: function () {
      var sapnDom = this._domTemplate.find('input:checked').next()
      var trargetDom = this._domTemplate
      trargetDom.find('.ey-attrAddDom').remove()
      var dom = $("<div class='ey-attrAddDom'>" +
						"<span class='ey-controllerInputEditor ey-attributeLineInput' ></span>" +
						"<span class='ey-attributeDelect'></span>" +
						'<div>')
      if (sapnDom.text()) {
        var textValue = sapnDom.text()
        var textId = sapnDom.attr('value')
        dom.find('.ey-controllerInputEditor').text(textValue)
        dom.find('.ey-controllerInputEditor').attr('value', textId)
        trargetDom.find('.ey-attrDimContent').append(dom)
      };
    },
    // 设置对象属性值
    setCurrentValue: function (value) {
      this._domTemplate.find('input').val(value)
    },
    // 获取变化值
    getChangeValue: function () {
      var Arry = []
      var dom = this._domTemplate
      dom.find('.ey-controllerInputEditor').each(function () {
        var valueObj = {}
        valueObj['colAlias'] = $(this).text()
        valueObj['colId'] = $(this).attr('value')
        Arry.push(valueObj)
      })
      return Arry
    },
    // 刷新数据属性
    refurbishData: function () {
      this.data = this.getWidgetValue('getDimResult', 'fun')
      console.log(this.data)
      this._refurbishDom()
    },
    // 刷新dom
    _refurbishDom: function () {
      this._domTemplate.find('.ey-attrPDTContent').html('')
      var content = this._domTemplate.find('.ey-attrPDTContent')
      var data = this.data
      for (var i = 0, len = data.length; i < len; i++) {
        var temp = $("<div><input type='radio' name='dim' /></div>")
        var span = $('<span></span>')
        span.text(data[i].colAlias)
        span.attr(
          {
            'value': data[i].colId
          })
        temp.append(span)
        content.append(temp)
      }
      this._initEvent()
    },
    // 数据源地址改变刷新数据源
    refurbish: function (refurbishValue) {
      // 当数据源为工作表和数据表时进行传参数类型切换
      if (refurbishValue == 'source_dataTable' || refurbishValue == 'source_workTable') {
        this._domTemplate.show()
        this.sourceType = refurbishValue
      }
      // 静态数据隐藏次功能
      else {
        this._domTemplate.hide()
      }
    }
  })
  ey.widget.controllerDim = function (attribute) {
    	return new ControllerDim(attribute)
  }
})($, ey)
