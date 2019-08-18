/*!
* Instruction : 输入框编辑器
*
* Author : 吴文周
*
* Date: 2017-04-07
*/
(function ($, ey) {
  'use strict'

  var ControllerDataName = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-controllerInput ey-attributeLine'>" +
							"<label class='ey-controllerLabel'></label>" +
							"<input class='ey-controllerInputEditor ey-attributeLineInput ey-dataQuery' title='请点击选择数据'/>" +
							'</div>')
    // 请求分页对象参数维护
    this.pageSize = 5
    this.pageNum = 1
    // 默认数据源类型
    this.sourceType = 'source_dataTable'
    // 请求内容
    this._tableContent = $("<div class='ey-datatypeContent'>" +
							"<div class='ey-datatype' ><span>数据名称</span><input type='text' class='ey-inpSearch'>" +
							"<span class = 'dataTypeSpan'>数据类型</span><div class='ey-dataTypeSelect'><div id= 'ey-dataTypeSelect'>全部</div>" +
			 				"<div class='ey-dialogOption'>" +
			 				'<span>全部</span><span>ORACLE</span><span>MYSQL</span><span>XLS</span><span>CSV</span><span>TXT</span></div></div>' +
			 				"<div class='ey-search'>查询</div></div>" +
							"<table border='1'>" +
							"<thead><th width='35%'>数据名称</th><th width='20%'>创建人</th><th width='45%'>创建时间</th></thead>" +
							'<tbody></tbody>' +
							'</table>' +
							"<div class='ey-pageWrap'><a id='ey-prepage' href='javascript:;'>上一页</a>" +
      						"<div class='ey-pageNum'>" +
           					"<div id='ey-pageStart'><a href='javascript:;'>1</a><i>···</i></div>" +
            				"<ul id='num_list' class='clearfix'></ul>" +
            				"<div id='ey-pageEnd'><i>···</i><a href='javascript:;'></a></div></div>" +
        					"<a id='ey-nextPage' href='javascript:;'>下一页</a>" +
        					'</div>')
  }
  // 继承组件基类
  ey.extendFun(ControllerDataName, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerDataName, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      this._domTemplate.find('label').text(currentObj.attribute.name)
      this._url = currentObj.attribute.url
      this._request()
      this._domTemplate.find('input').bind('input', function () {
        currentObj.change()
      })
      currentObj._tableContent.find('.ey-dataTypeSelect').eq(0).bind('click', function () {
        currentObj._tableContent.find('.ey-dialogOption').hide()
        $(this).children('.ey-dialogOption').toggle()
        $(this).find('span').show()
      })
      currentObj._tableContent.find('.ey-dialogOption span').click(function (ev) {
        ev.stopPropagation()
        $(this).parent().siblings().text($(this).text())
        $(this).hide()
        $(this).siblings().hide()
      })
      currentObj._tableContent.find('.ey-search').eq(0).click(function () {
        currentObj._requestFun(currentObj)
      })
    },
    // 请求参数封装
    _requestFun: function (currentObj) {
      if (currentObj.sourceType == 'source_dataTable') {
        var dataOriginCodeValue = currentObj._tableContent.find('#ey-dataTypeSelect').text()
        var tableAliasValue = currentObj._tableContent.find('.ey-inpSearch').eq(0).val()
        dataOriginCodeValue = dataOriginCodeValue == '全部' ? '' : dataOriginCodeValue
        // 请求参数
        var param = {}
        var paramObj = {
          sourceType: currentObj.sourceType,
          dataOriginCode: dataOriginCodeValue,
          tableAlias: tableAliasValue,
          pageNum: currentObj.pageNum,
          pageSize: currentObj.pageSize,
          createUser: userInfo.phone
        }
        param['params'] = JSON.stringify(paramObj)
      } else if (currentObj.sourceType == 'source_workTable') {
        // 请求参数
        var param = {}
        var paramObj = {
          sourceType: currentObj.sourceType,
          pageNum: currentObj.pageNum,
          pageSize: currentObj.pageSize,
          createUser: userInfo.phone
        }
        param['params'] = JSON.stringify(paramObj)
      };

      $.ajax({
        type: 'POST',
        // 请求路径是否可配
        url: currentObj._url,
        dataType: 'json',
        data: param,
        success: function (data) {
          // 重新绘制表格内容
          currentObj._redrawTbale(data)
        }
      })
    },
    // 设置对象属性值
    setCurrentValue: function (value) {
      this._domTemplate.find('input').val(value)
    },
    // 获取变化值
    getChangeValue: function () {
      return this._domTemplate.find('input').val()
    },
    // 请求事件绑定
    _request: function () {
      // 对象赋值
      var currentObj = this
      // 解除之前的绑定事件
      this._domTemplate.find('input').unbind('click')
      // 新事件绑定
      this._domTemplate.find('input').bind('click', function () {
        var dataProces = currentObj.getWidgetValue('dataProces')
        var widget = currentObj.getWidget()
        if (currentObj.sourceType == 'source_dataTable') {
          // 请求参数
          var param = {}
          var paramObj = {
            sourceType: currentObj.sourceType,
            dataOriginCode: '',
            pageNum: currentObj.pageNum,
            pageSize: currentObj.pageSize,
            createUser: userInfo.phone
          }
          param['params'] = JSON.stringify(paramObj)
        } else if (currentObj.sourceType == 'source_workTable') {
          // 请求参数
          var param = {}
          var paramObj = {
            sourceType: currentObj.sourceType,
            pageNum: currentObj.pageNum,
            pageSize: currentObj.pageSize,
            createUser: userInfo.phone
          }
          param['params'] = JSON.stringify(paramObj)
        };
        // 请求成功与失败是否进行判断
        console.log(param)
        $.ajax({
          type: 'POST',
          // 请求路径是否可配
          url: currentObj._url,
          dataType: 'json',
          data: param,
          success: function (data) {
            // 重新绘制表格内容
            currentObj._redrawTbale(data)
            var eyTooltip = ey.widget.eyTooltip({
              'title': '请选择数据表',
              'content': currentObj._tableContent,
              'className': 'ey-dataSoure',
              'commit': function () {
                var dataConfig = {}
                dataConfig['id'] = currentObj._tableContent.find('tbody .ey-active').attr('id')
							    dataConfig['name'] = currentObj._tableContent.find('tbody .ey-active').attr('value')
                dataProces.setSourceType(currentObj.sourceType)
                // 设置数据源id
                widget.setTableId(dataConfig['id'])
                // 根据数据源id去查询量度维度，类型
                dataProces.querySourceData(
                  function () {
                    currentObj._tableContent.find('input').val('')
                    eyTooltip.close()
                    currentObj.setInputValue(dataConfig)
                    currentObj.change({})
                  },
                  function () {
                    currentObj._tableContent.find('input').val('')
                    eyTooltip.close()
                    dataProces.dataProces('')
                  }
                )

                currentObj.pageNum = 1
                eyTooltip.close()
              },
              'cancel': function () {
                eyTooltip.close()
              } })
            eyTooltip.awake()
          }
        })
      })
    },
    // 重新绘制表格
    _redrawTbale: function (result) {
      var currentObj = this
      var html = ''
      var res = result.resultEntity.resultList
	        for (var i = 0; i < res.length; i++) {
	            var datasetName = res[i].tableAlias
	            var createDate = res[i].createTime
	            var creator = res[i].createUser
	            html += "<tr id='" + res[i].tableId + "' value='" + datasetName + "'>" +
	                '<td>' + datasetName + '</td>' +
	                '<td>' + creator + '</td>' +
	                '<td>' + createDate + '</td>' +
	                +'</tr>'
	        };
	        for (var i = 0; i < currentObj.pageSize - res.length; i++) {
	            html += '<tr>'
	            for (var j = 0; j < 3; j++) { html += '<td></td>' }
	           	html += '</tr>'
	      	};
      this._tableContent.find('tbody').html(html)
      this._tableContent.find('tbody').find('tr').click(function () {
        currentObj._tableContent.find('tbody').find('tr').removeClass('ey-active')
        $(this).addClass('ey-active')
      })
      currentObj._drawPaging(result.resultEntity.totalRecord)
    },
    // 分页方法
    _drawPaging: function (cont) {
      var currentObj = this
      var start = 1
      this._tableContent.find('#num_list').text('')
 			this.len = Math.ceil(cont / this.pageSize)
      for (var i = 0; i < this.len; i++) {
        var li = $('<li></li>')
        li.text(i + 1)
        li.click(function () {
          currentObj.pageNum = $(this).text()
          currentObj.dataAjax(currentObj.pageNum)
          currentObj.pageTab()
        })
        currentObj._tableContent.find('#num_list').append(li)
      };
      this.currentPage = currentObj._tableContent.find('#num_list').find('li').eq((this.index - 1))
      // 初始化
      currentObj._tableContent.find('#page_end a').eq(0).text(this.len)
      this.currentPage.addClass('active')
      if (this.len <= 7) currentObj._tableContent.find('#page_end').hide()
      // 上一页点击事件
      this._tableContent.find('#ey-prepage').unbind('click')
      this._tableContent.find('#ey-prepage').click(function () {
        currentObj.pageNum--
        if (currentObj.pageNum <= 0) { currentObj.pageNum = 1; return }
        currentObj._pagination()
        currentObj._requestFun(currentObj)
      })
      // 下一页点击事件
      this._tableContent.find('#ey-nextPage').unbind('click')
      this._tableContent.find('#ey-nextPage').click(function () {
        currentObj.pageNum++
        if (currentObj.pageNum > currentObj.len) { currentObj.pageNum = currentObj.len; return }
        currentObj._pagination()
        currentObj._requestFun(currentObj)
      })
    },
    // 翻页逻辑
    _pagination: function () {
      var currentObj = this
      if (this.len > 7) {
        if (this.pageNum > 3 && this.pageNum < this.len - 4) {
          currentObj._content.find('#num_list').css('marginLeft', -((currentObj.pageNum - 3) * 24) + 'px')
        } else if (this.pageNum <= 3) {
          currentObj._content.find('#num_list').css('marginLeft', '0px')
        } else if (this.pageNum >= this.len - 4) {
          currentObj._content.find('#num_list').css('marginLeft', -((currentObj.len - 8) * 24) + 'px')
        }
        this.pageNum > 3 ? this._tableContent.find('#page_start').css('display', 'inline-block') : this._tableContent.find('#page_start').css('display', 'none')
        this.pageNum >= this.len - 5 ? this._tableContent.find('#page_end').css('display', 'none') : this._tableContent.find('#page_end').css('display', 'inline-block')
      }
      this._current()
    },
    // 当前状态
    _current: function () {
      this.currentPage.attr('class', '')
		    this._tableContent.find('#num_list').find('li').eq(this.index - 1).attr('class', 'active')
		    this.currentPage = this._tableContent.find('#num_list').find('li').eq(this.index)
    },
    setInputValue: function (config) {
      var name = config.name
      this._domTemplate.find('input').attr('title', name)
      if (name > 15) {
        name = name.substring(0, 15) + '...'
      }
      this._domTemplate.find('input').val(name)
    },
    // 数据源地址改变刷新数据源
    refurbish: function (refurbishValue, styleValue) {
      // 当数据源为工作表和数据表时进行传参数类型切换
      if (refurbishValue == 'source_dataTable' || refurbishValue == 'source_workTable') {
        this._domTemplate.show()
        this.sourceType = refurbishValue
        // 只有数据值刷新时才刷新数据属性
        //				if(!styleValue){
        //					this._domTemplate.find("input").val("");
        //				}
      }
      // 静态数据隐藏次功能
      else {
        this._domTemplate.hide()
      }
    }

  })
  ey.widget.controllerDataName = function (attribute) {
    	return new ControllerDataName(attribute)
  }
})($, ey)
