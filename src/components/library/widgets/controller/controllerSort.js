/*!
* Instruction : 排序属性编辑器
*
* Author : 吴文周
*
* Date: 2017-04-14
*/
(function ($, ey) {
  'use strict'

  var ControllerSort = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-attrSort'>" +
							"<div class='ey-attributeLine ey-attrTitleAdd'>" +
							"<label class='ey-dataLabel'></label>" +
							"<span class='ey-attributeAdd'></span>" +
							'</div>' +
							"<div class='ey-attSortContent'>" +
							"<div class='ey-attrMeasureFooter' title='请选择添加排序方式'>" +
							'</div>' +
							"<div class='ey-attSortPullDown'>" +
							"<div class = 'ey-attSortPullDownTitle'></div>" +
							"<div class = 'ey-attSortPullDownContent'>" +
							"<div class = 'ey-attrPDT'><span class='ey-attrPDTTitle'>维度</span><span class='ey-PullClose'>关闭</span></div>" +
							"<div class = 'ey-attrPDDimContent'></div>" +
							"<div class = 'ey-attrPDT'><span class='ey-attrPDTTitle'>量度</span></div>" +
							"<div class = 'ey-attrPDMeaContent'></div>" +
							'</div>' +
							"<p class='ey-attrButtonLine'><button class='ey-commitBtn ey-btn'>确定</button></p>" +
							'</div>' +
							'</div>' +
							'</div>')
    this._content = $("<div class='ey-attrSortTooltip'>" +
						"<span class='ey-attrSortTooltipSpan'>排  序：</span>" +
						"<input type='radio'name = 'attrSort' value='DEF' checked='checked'/><label>默认</label>" +
						"<input type='radio'name = 'attrSort' value='ASC' /><label>升序</label>" +
						"<input type='radio' name = 'attrSort' value='DESC' class='ey-sortAttrThirdInput'/><label>降序</label></div>")
    this.data = { 'dim': [], 'mes': [] }
  }
  // 继承组件基类
  ey.extendFun(ControllerSort, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerSort, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      this._domTemplate.find('label').text(currentObj.attribute.name)
      //			this.refurbishData();
    },
    // 设置事件初始化
    _initEvent: function () {
      var currentObj = this
      var dom = this._domTemplate
      // 设置事件初始化
      // 关闭事件
      dom.find('.ey-PullClose').unbind('click')
      dom.find('.ey-PullClose').bind('click', function () {
        dom.find('.ey-attSortPullDown').hide()
        dom.find('.ey-attrMeasureFooter').show()
      })
      // 显示下拉框事件
      dom.find('.ey-attributeAdd').unbind('click')
      dom.find('.ey-attributeAdd').bind('click', function () {
        dom.find('.ey-attrAddDom').remove()
        var hidePullDown = ey.eventLibrary.eventBase('hidePullDown')
        currentObj.triggerEvent(hidePullDown)
        dom.find('.ey-attSortPullDown').show()
      })
      // 点击确定事件
      dom.find('.ey-commitBtn').unbind('click')
      dom.find('.ey-commitBtn').bind('click', function () {
        dom.find('.ey-attrAddDom').remove()
        currentObj._addDom()
        dom.find('.ey-attSortPullDown').hide()
        dom.find('.ey-attributeDelect').unbind('click')
        dom.find('.ey-attributeDelect').each(function () {
          $(this).bind('click', function () {
            $(this).parent().parent().remove()
            currentObj._value = ''
            currentObj.change()
            if (dom.find('.ey-controllerInputEditor').length == 0) {
              dom.find('.ey-attrMeasureFooter').show()
            };
          })
        })
      })
    },
    // 新建dom 对象
    _addDom: function () {
      var sapnDom = this._domTemplate.find('input:checked').next()
      var trargetDom = this._domTemplate
      trargetDom.find('.ey-attrAddDom').remove()
      var dom = $("<div class='ey-attrAddDom'>" +
						"<span class='ey-controllerInputEditor ey-attributeLineInput ey-addDomSpan' ></span>" +
						"<span class='ey-attrAddDomRight'>" +
						"<span class='ey-attributeSetting'></span>" +
						"<span class='ey-attributeDelect'></span>" +
						'</span>' +
						'<div>')
      if (sapnDom.text()) {
        var textValue = sapnDom.text()
        var textId = sapnDom.attr('value')
        dom.find('.ey-controllerInputEditor').text(textValue)
        dom.find('.ey-controllerInputEditor').attr('value', textId)
        trargetDom.find('.ey-attSortContent').append(dom)
        var currentObj = this
        trargetDom.find('.ey-attributeSetting').each(function () {
          $(this).bind('click', function () {
            var eyTooltip = ey.widget.eyTooltip({
              'title': '请选择排序',
              'content': currentObj._content,
              'className': 'ey-tooltipSmall',
              'commit': function () {
							 var value = {}
							 value['colId'] = trargetDom.find('.ey-controllerInputEditor').attr('value')
							 value['orderType'] = currentObj._content.find('input:checked').val()
							 value['colAlias'] = textValue
							 currentObj._value = value
							 currentObj.change()
                eyTooltip.close()
              },
              'cancel': function () {
                eyTooltip.close()
              } })
            eyTooltip.awake()
          })
        })
        trargetDom.find('.ey-attrMeasureFooter').hide()
      } else {
        trargetDom.find('.ey-attrMeasureFooter').show()
      }
    },
    // 设置对象属性值
    setCurrentValue: function (value) {
      this.refurbishData('selsect', value)
      if (value) {
        this.refurbishData('selsect', value)
        var dom = this._domTemplate
        var trargetDom = dom.find('.ey-attSortContent')
        dom.find('.ey-attrMeasureFooter').hide()
        var dom = $("<div class='ey-attrAddDom'>" +
						"<span class='ey-controllerInputEditor ey-attributeLineInput ey-addDomSpan' ></span>" +
						"<span class='ey-attrAddDomRight'>" +
						"<span class='ey-attributeSetting'></span>" +
						"<span class='ey-attributeDelect'></span>" +
						'</span>' +
						'<div>')
        dom.find('.ey-controllerInputEditor').text(value.colAlias)
        dom.find('.ey-controllerInputEditor').attr('value', value.colId)
        dom.find('.ey-controllerInputEditor').attr('type', value.colTypeCode)
        trargetDom.append(dom)
        this._bindEvent(dom)
        this._setInitEvent()
      }
    },
    _setInitEvent: function () {
      var dom = this._domTemplate
      dom.find('.ey-attributeDelect').unbind('click')
      dom.find('.ey-attributeDelect').each(function () {
        $(this).bind('click', function () {
          $(this).parent().parent().remove()
          currentObj._value = ''
          currentObj.change()
        })
      })
    },
    // 绑定事件
    _bindEvent: function (dom) {
      var dataProces = this.getWidgetValue('dataProces')
      var currentObj = this
      dom.find('.ey-controllerInputEditor').bind('click', function () {
        var eyTooltip = ey.widget.eyTooltip({
          'title': '请选择排序',
          'content': currentObj._content,
          'className': 'ey-tooltipSmall',
          'commit': function () {
							 var value = {}
							 value['colId'] = trargetDom.find('.ey-controllerInputEditor').attr('value')
							 value['orderType'] = currentObj._content.find('input:checked').val()
							 value['colAlias'] = textValue
							 currentObj._value = value
							 currentObj.change()
            eyTooltip.close()
          },
          'cancel': function () {
            eyTooltip.close()
          } })
        eyTooltip.awake()
      })
    },
    // 获取变化值
    getChangeValue: function () {
      return this._value
    },
    // 刷新数据属性
    refurbishData: function (selsect) {
      // 切换数据时
      if (!selsect) {
        this._domTemplate.find('.ey-attrAddDom').remove()
      };
      this.data['dim'] = this.getWidgetValue('getDim', 'fun')
      this.data['measure'] = this.getWidgetValue('getMeasure', 'fun')
      this._refurbishDom()
    },
    // 刷新dom
    _refurbishDom: function () {
      this._domTemplate.find('.ey-attrPDDimContent').html('')
      this._domTemplate.find('.ey-attrPDMeaContent').html('')
      var dimContent = this._domTemplate.find('.ey-attrPDDimContent')
      var mesContent = this._domTemplate.find('.ey-attrPDMeaContent')
      var data = this.data
      var dimData = data.dim
      var mesData = data.measure
      if (!dimData && !mesData) {
        return
      };
      if (dimData) {
        for (var i = 0, len = dimData.length; i < len; i++) {
          var temp = $("<div class='ey-attrCheakLine'><input type='radio' name='sort' /></div>")
          var span = $('<span></span>')
          span.text(dimData[i].colAlias)
          span.attr(
            {
              'value': dimData[i].colId
            })
          temp.append(span)
          dimContent.append(temp)
        };
      };
      for (var i = 0, len = mesData.length; i < len; i++) {
        var temp = $("<div class='ey-attrCheakLine'><input type='radio' name='sort' /></div>")
        var span = $('<span></span>')
        span.text(mesData[i].colAlias)
        span.attr(
          {
            'value': mesData[i].colId
          })
        temp.append(span)
        mesContent.append(temp)
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
    },
    // 隐藏下拉框方法
    hidePullDown: function () {
      this._domTemplate.find('.ey-attSortPullDown').hide()
    }
  })
  ey.widget.controllerSort = function (attribute) {
    	return new ControllerSort(attribute)
  }
})($, ey)
