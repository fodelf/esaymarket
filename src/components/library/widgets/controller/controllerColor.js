/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2017-05-07 11:03:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 15:49:00
 */
/*!
* Instruction : 颜色编辑器
*
* Author : 吴文周
*
* Date: 2017-04-12
*/
(function ($, ey) {
  'use strict'

  var ControllerColor = function (attribute) {
    // 扩展事件属性
    ey.extendProperty(this, 'controller', 'widget', [attribute])
    // dom对象
    this._domTemplate = $("<div class='ey-controllerInput ey-attributeLine'>" +
      "<label class='ey-controllerLabel'></label>" +
      "<div class='ey-controllerColor'/></div>" +
      '</div>')
    this._content = $("<div><p>常用颜色</p><ul class='clearfix'></ul><p>自定义颜色</p><ul class='clearfix'></ul><div>")
    this._commonColors = [
      { 'full': '#209c91', 'empty': 'rgba(32,156,146,.3)' },
      { 'full': '#ffd538', 'empty': 'rgba(255,213,56,.3)' },
      { 'full': '#e85355', 'empty': 'rgba(232,83,85,.3)' },
      { 'full': '#8fb601', 'empty': 'rgba(143,182,1,.3)' },
      { 'full': '#2badd1', 'empty': 'rgba(32,156,146,.3)' },
      { 'full': 'orange', 'empty': 'rgba(255,135,0,.3)' },
      { 'full': 'pink', 'empty': 'rgba(255,100,130,.3)' },
      { 'full': '#0081bb', 'empty': 'rgba(0,129,187,.3)' }
    ]
    this._selfColors = [
      { 'full': '#00384c', 'empty': 'rgba(0,56,76,.3)' }, { 'full': '#001e58', 'empty': 'rgba(0,30,88,.3)' },
      { 'full': '#10043e', 'empty': 'rgba(16,4,62,.3)' }, { 'full': '#40061e', 'empty': 'rgba(64,6,30,.3)' },
      { 'full': '#5c0600', 'empty': 'rgba(92,6,0,.3)' }, { 'full': '#583600', 'empty': 'rgba(88,54,0,.3)' },
      { 'full': '#666000', 'empty': 'rgba(102,96,0,.3)' }, { 'full': '#26400e', 'empty': 'rgba(38,64,14,.3)' },

      { 'full': '#006c8f', 'empty': 'rgba(0,108,143,.3)' }, { 'full': '#0044ab', 'empty': 'rgba(0,68,171,.3)' },
      { 'full': '#2f1b7b', 'empty': 'rgba(47,27,123,.3)' }, { 'full': '#781a40', 'empty': 'rgba(120,26,64,.3)' },
      { 'full': '#b51a00', 'empty': 'rgba(181,26,0,.3)' }, { 'full': '#a96800', 'empty': 'rgba(169,104,0,.3)' },
      { 'full': '#c5bd00', 'empty': 'rgba(197,189,0,.3)' }, { 'full': '#507a28', 'empty': 'rgba(80,122,40,.3)' },

      { 'full': '#00a3d7', 'empty': 'rgba(0,163,215,.3)' }, { 'full': '#0060ff', 'empty': 'rgba(0,96,255,.3)' },
      { 'full': '#4e22b2', 'empty': 'rgba(78,34,178,.3)' }, { 'full': '#b92f59', 'empty': 'rgba(185,47,89,.3)' },
      { 'full': '#ff4212', 'empty': 'rgba(255,66,18,.3)' }, { 'full': '#ffa90a', 'empty': 'rgba(255,169,10,.3)' },
      { 'full': '#fffd44', 'empty': 'rgba(255,253,68,.3)' }, { 'full': '#76bb44', 'empty': 'rgba(118,187,68,.3)' },

      { 'full': '#54d5fd', 'empty': 'rgba(84,213,253,.3)' }, { 'full': '#74a7ff', 'empty': 'rgba(116,167,255,.3)' },
      { 'full': '#8750ff', 'empty': 'rgba(135,80,255,.3)' }, { 'full': '#ed709f', 'empty': 'rgba(237,112,159,.3)' },
      { 'full': '#ff8d83', 'empty': 'rgba(255,141,131,.3)' }, { 'full': '#ffc67c', 'empty': 'rgba(255,198,124,.3)' },
      { 'full': '#fff995', 'empty': 'rgba(255,249,149,.3)' }, { 'full': '#b2dd8e', 'empty': 'rgba(178,221,142,.3)' },

      { 'full': '#cfebff', 'empty': 'rgba(207,235,255,.3)' }, { 'full': '#cfebff', 'empty': 'rgba(207,235,255,.3)' },
      { 'full': '#d9ccff', 'empty': 'rgba(217,204,255,.3)' }, { 'full': '#fcd7dd', 'empty': 'rgba(252,215,221,.3)' },
      { 'full': '#fcd7dd', 'empty': 'rgba(252,215,221,.3)' }, { 'full': '#ffedd4', 'empty': 'rgba(255,237,212,.3)' },
      { 'full': '#fffedf', 'empty': 'rgba(255,254,223,.3)' }, { 'full': '#e1eed5', 'empty': 'rgba(225,238,213,.3)' }
    ]
  }
  // 继承组件基类
  ey.extendFun(ControllerColor, 'controller', 'widget')
  // 扩展当前组件
  ey.expandPrototype(ControllerColor, {
    // dom对象初始化
    domInit: function () {
      var currentObj = this
      var dom = this._domTemplate
      dom.find('label').text(currentObj.attribute.name)
      dom.find('.ey-controllerColor').bind('click', function () {
        currentObj._content.find('ul').empty()
        var eyTooltip = ey.widget.eyTooltip({
          'title': '请选择颜色',
          'content': currentObj._content,
          'className': 'ey-color',
          'commit': function () {
            currentObj.color = currentObj._content.find('li.active').attr('data-color')
            currentObj.coloremp = currentObj._content.find('li.active').attr('data-coloremp')
            currentObj.colorObj = [{ 'full': currentObj.color, 'empty': currentObj.coloremp }]
            dom.find('.ey-controllerColor').css('background', currentObj.color)
            currentObj.change()
            eyTooltip.close()
          },
          'cancel': function () {
            eyTooltip.close()
          }
        })
        for (var i = 0; i < 8; i++) {
          var li = $('<li></li>')
          li.css('background-color', currentObj._commonColors[i].full)
          li.attr('data-color', currentObj._commonColors[i].full)
          li.attr('data-coloremp', currentObj._commonColors[i].empty)
          currentObj._content.find('ul').eq(0).append(li)
          li.click(function () {
            currentObj._content.find('li').removeClass('active')
            $(this).addClass('active')
          })
        }
        for (var i = 0; i < 40; i++) {
          var li = $('<li></li>')
          li.css('background-color', currentObj._selfColors[i].full)
          li.attr('data-color', currentObj._selfColors[i].full)
          li.attr('data-coloremp', currentObj._selfColors[i].empty)
          currentObj._content.find('ul').eq(1).append(li)
          li.click(function () {
            currentObj._content.find('li').removeClass('active')
            $(this).addClass('active')
          })
        }
        eyTooltip.awake()
      })
    },
    // 设置对象属性值
    setCurrentValue: function (value) {
      this._domTemplate.find('.ey-controllerColor').css('background-color', value[0].full)
    },
    // 获取变化值
    getChangeValue: function () {
      return this.colorObj
    }
  })
  ey.widget.controllerColor = function (attribute) {
    return new ControllerColor(attribute)
  }
})($, ey)
