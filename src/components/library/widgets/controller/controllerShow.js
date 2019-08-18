/*!
* Instruction : 显示属性编辑器
*
* Author : 吴文周
*
* Date: 2017-04-05
*/
(function ($, ey) {
  'use strict'

  var ControllerShow = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-controllerShow'><input type='checkbox'/><label class='ey-controllerShowLabel'></label></div>")
    // 是否为显示标题属性编辑器
    this.isShowTitle = true
  }
  // 继承组件基类
  ey.extendFun(ControllerShow, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerShow, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      this._domTemplate.find('label').text(currentObj.attribute.name)
      this._domTemplate.find('input').bind('click', function () {
    			currentObj.change()
    		})
    },
    // 显示隐藏属性
  		getChangeValue: function () {
      // 根据选择状态去设置显示隐藏
  			if (this._domTemplate.find('input:checkbox:checked').length) {
  				return true
  			} else {
  				return false
  			}
  		},
   		// 设置当前对象的属性值显示
   		setCurrentValue: function (value) {
   			this._domTemplate.find('input:checkbox').attr('checked', value)
   		}
  })
  ey.widget.controllerShow = function (attribute) {
    	return new ControllerShow(attribute)
  }
})($, ey)
