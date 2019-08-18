/*!
* Instruction :控制器容器
*
* Author : 吴文周
*
* Date: 2017-04-01
*/
(function ($, ey) {
  'use strict'

  var ControllerGroup = function (arg) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget')
    // dom对象
    this._domTemplate = $("<div class='ey-controllerGroup'>" +
							"<div class='ey-controllerHeader'>" +
							"<div class='ey-controllerGrounpLabel'></div>" +
							'</div>' +
							"<div class='ey-controllerContent'></div>" +
							'</div>')
    this.name = arg
  }
  // 继承组件基类
  ey.extendFun(ControllerGroup, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerGroup, {
    	// 对象初始化
    	domInit: function () {
    		// 设置文本初始化
    		var label = this.name
    		var currentObj = this
    		this._domTemplate.find('.ey-controllerGrounpLabel').text(label)
    	},
  		// 获取jq对象
    	getJqDom: function () {
   			return this._domTemplate
   		},
  		addChild: function (child) {
  			// 对象本身是否有获取dom方法如果没有调用视图的方法
  			if (child) {
  				var childDom = child.getJqDom()
  				// 判断子属性是否为显示标题属性
        var parentDom = child.isShowTitle ? this._domTemplate.find('.ey-controllerHeader') : this._domTemplate.find('.ey-controllerContent')
        if (parentDom && childDom) {
          this.addListenerChild(child)
          parentDom.append(childDom)
        }
  			}
  		}

  })
  ey.widget.controllerGroup = function (arg) {
    	return new ControllerGroup(arg)
  }
})($, ey)
