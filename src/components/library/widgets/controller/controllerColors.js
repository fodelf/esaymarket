/*!
* Instruction : 颜色编辑器
*
* Author : 吴文周
*
* Date: 2017-04-12
*/
(function ($, ey) {
  'use strict'

  var ControllerColors = function (attribute) {
    	// 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-controllerInput ey-attributeLine'>" +
							"<label class='ey-controllerLabel'></label>" +
							"<div class='ey-controllerColors'/></div>" +
							'</div>')
    this._content = $("<ul class='clearfix'></ul>")
    this._colorArray = ['#209c91', '#ffd538', '#e85355', '#8fb601', '#2badd1', 'orange', 'pink', '#0081bb', 'lightblue', 'darkgray', 'palegreen', 'black']
    this._colorsArray = [
      [	{ 'full': '#209c91', 'empty': 'rgba(32,156,145,.3)' }, { 'full': '#ffd538', 'empty': 'rgba(255,213,56,.3)' },
        { 'full': '#e85355', 'empty': 'rgba(232,83,85,.3)' }, { 'full': '#8fb601', 'empty': 'rgba(143,182,1,.3)' },
        { 'full': '#2badd1', 'empty': 'rgba(43,173,209,.3)' }, { 'full': 'orange', 'empty': 'rgba(255,135,0,.3)' },
        { 'full': 'pink', 'empty': 'rgba(255,100,130,.3)' }, { 'full': '#0081bb', 'empty': 'rgba(0,129,187,.3)' },
        { 'full': 'lightblue', 'empty': 'rgba(20,200,230,.3)' }, { 'full': '#d95f78', 'empty': 'rgba(217,95,120,.3)' }
      ],
      [	{ 'full': 'orange', 'empty': 'rgba(255,135,0,.3)' }, { 'full': 'pink', 'empty': 'rgba(255,100,130,.3)' },
        { 'full': '#0081bb', 'empty': 'rgba(0,129,187,.3)' }, { 'full': 'lightblue', 'empty': 'rgba(20,200,230,.3)' },
        { 'full': '#d95f78', 'empty': 'rgba(217,95,120,.3)' }, { 'full': '#209c91', 'empty': 'rgba(32,156,145,.3)' },
        { 'full': '#ffd538', 'empty': 'rgba(255,213,56,.3)' }, { 'full': '#e85355', 'empty': 'rgba(232,83,85,.3)' },
        { 'full': '#8fb601', 'empty': 'rgba(143,182,1,.3)' }, { 'full': '#2badd1', 'empty': 'rgba(43,173,209,.3)' }
      ],
      [	{ 'full': '#209c91', 'empty': 'rgba(32,156,145,.3)' }, { 'full': '#ffd538', 'empty': 'rgba(255,213,56,.3)' },
        { 'full': '#e85355', 'empty': 'rgba(232,83,85,.3)' }, { 'full': '#8fb601', 'empty': 'rgba(143,182,1,.3)' },
        { 'full': '#2badd1', 'empty': 'rgba(43,173,209,.3)' }, { 'full': 'orange', 'empty': 'rgba(255,135,0,.3)' },
        { 'full': 'pink', 'empty': 'rgba(255,100,130,.3)' }, { 'full': 'purple', 'empty': 'rgba(160,0,100,.3)' },
        { 'full': 'lightblue', 'empty': 'rgba(20,200,230,.3)' }, { 'full': 'purple', 'empty': 'rgba(170,20,230,.3)' }
      ],
      [	{ 'full': 'orange', 'empty': 'rgba(255,135,0,.3)' }, { 'full': 'pink', 'empty': 'rgba(255,100,130,.3)' },
        { 'full': '#0081bb', 'empty': 'rgba(0,129,187,.3)' }, { 'full': 'lightblue', 'empty': 'rgba(20,200,230,.3)' },
        { 'full': '#d95f78', 'empty': 'rgba(217,95,120,.3)' }, { 'full': '#209c91', 'empty': 'rgba(32,156,145,.3)' },
        { 'full': '#ffd538', 'empty': 'rgba(255,213,56,.3)' }, { 'full': '#e85355', 'empty': 'rgba(232,83,85,.3)' },
        { 'full': '#8fb601', 'empty': 'rgba(143,182,1,.3)' }, { 'full': '#2badd1', 'empty': 'rgba(43,173,209,.3)' }
      ],
      [	{ 'full': '#209c91', 'empty': 'rgba(32,156,145,.3)' }, { 'full': '#ffd538', 'empty': 'rgba(255,213,56,.3)' },
        { 'full': '#e85355', 'empty': 'rgba(232,83,85,.3)' }, { 'full': '#8fb601', 'empty': 'rgba(143,182,1,.3)' },
        { 'full': '#2badd1', 'empty': 'rgba(43,173,209,.3)' }, { 'full': 'orange', 'empty': 'rgba(255,135,0,.3)' },
        { 'full': 'pink', 'empty': 'rgba(255,100,130,.3)' }, { 'full': 'purple', 'empty': 'rgba(160,0,100,.3)' },
        { 'full': 'lightblue', 'empty': 'rgba(20,200,230,.3)' }, { 'full': 'purple', 'empty': 'rgba(170,20,230,.3)' }
      ],
      [	{ 'full': 'orange', 'empty': 'rgba(255,135,0,.3)' }, { 'full': 'pink', 'empty': 'rgba(255,100,130,.3)' },
        { 'full': '#0081bb', 'empty': 'rgba(0,129,187,.3)' }, { 'full': 'lightblue', 'empty': 'rgba(20,200,230,.3)' },
        { 'full': '#d95f78', 'empty': 'rgba(217,95,120,.3)' }, { 'full': '#209c91', 'empty': 'rgba(32,156,145,.3)' },
        { 'full': '#ffd538', 'empty': 'rgba(255,213,56,.3)' }, { 'full': '#e85355', 'empty': 'rgba(232,83,85,.3)' },
        { 'full': '#8fb601', 'empty': 'rgba(143,182,1,.3)' }, { 'full': '#2badd1', 'empty': 'rgba(43,173,209,.3)' }
      ]
    ]
    this._liLabel = ['系统默认', '配色方案1', '配色方案2', '配色方案3', '配色方案4', '配色方案5']
  }
  // 继承组件基类
  ey.extendFun(ControllerColors, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerColors, {
    	// dom对象初始化
    domInit: function () {
      var currentObj = this
      var dom = this._domTemplate
      dom.find('label').text(currentObj.attribute.name)
      dom.find('.ey-controllerColors').bind('click', function () {
        currentObj._content.empty()
        var eyTooltip = ey.widget.eyTooltip({
          'title': '请选择颜色',
          'content': currentObj._content,
          'className': 'ey-colors',
          'commit': function () {
            currentObj.color = currentObj._content.find('input:checked').siblings('span')
            currentObj.array = []
            currentObj.color.each(function () {
              currentObj.array.push({ 'full': $(this).attr('data-color'), 'empty': $(this).attr('data-coloremp') })
            })
            console.log(currentObj)
            currentObj.change()
            eyTooltip.close()
          },
          'cancel': function () {
            eyTooltip.close()
          }
        })
        for (var i = 0; i < 6; i++) {
          var li = $('<li></li>')
          currentObj._content.append(li)
          var label = $('<label></label>')
          label.text(currentObj._liLabel[i])
          li.append(label)
          li.append($("<input type='radio' name='color'>"))
          for (var j = 0; j < 10; j++) {
            var span = $('<span></span>')
            span.css('background-color', currentObj._colorsArray[i][j].full)
            span.attr('data-color', currentObj._colorsArray[i][j].full)
            span.attr('data-coloremp', currentObj._colorsArray[i][j].empty)
            li.append(span)
          }
        }
        eyTooltip.awake()
      })
    },
    // 设置对象属性值
    setCurrentValue: function (value) {
      this._domTemplate.find('.ey-controllerColor').css('background-color', value)
    },
    // 获取变化值
    getChangeValue: function () {
      return this.array
    }
  })
  ey.widget.controllerColors = function (attribute) {
    	return new ControllerColors(attribute)
  }
})($, ey)
