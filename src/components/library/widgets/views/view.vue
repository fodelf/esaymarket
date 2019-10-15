<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:26:29
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-10-15 22:43:01
 -->
<template>
  <div class="widget"
       ref="widget"></div>
</template>
<script>
import { debounce } from 'lodash'
import decorator from '../../../../components/library/eyDecorator/decorator.js'
export default {
  name: 'view',
  props: ['id'],
  // 应对多种场景的装饰行为用数组比较合适
  mixins: [decorator],
  data () {
    return {
      height: '0px',
      width: '100%',
      left: '0px',
      top: '0px',
      // cursor: 'pointer',
      padding: '10px',
      isSelect: true,
      ishover: false
    }
  },
  methods: {
    getParent () {
      console.log('this')
      return this.$parent
    },
    // 应用状态初始化
    applicationInit: function () { },
    delvelopmentInit: function () { },
    previewApp: function () { },
    repaint: function () { },
    setSelectedClass: function () {
      // $('.ey-selected').removeClass('ey-selected')
      // this._Template.addClass('ey-selected')
    },
    // 获取jq对象
    getDom: function () {
      return this.$refs.widget
    },
    // 设置边距
    setPadding: function (padding) {
      this.padding = padding
    },
    // 获取边距
    getPadding: function (unit) {
      return parseFloat(this.padding)
    },
    // 设置高度
    setHeight: function (height) {
      this.height = height
    },
    // 获取高度
    getHeight: function (unit) {
      return parseFloat(this.height)
    },
    // 设置组件宽度
    setWidth: function (width) {
      // this._setChange("_width", width);
      this.width = width
    },
    // 获取组件宽度
    getWidth: function (unit) {
      return parseFloat(this.width)
      // return this._getChange("_width", unit);
    },
    // 获取组件的左边距
    getLeft: function (unit) {
      return parseFloat(this.left)
      // return this._getChange("_left", unit);
    },
    // 设置左边距
    setLeft: function (left) {
      this.left = left
      // this._setChange("_left", left);
    },
    // 设置顶部距离
    setTop: function (top) {
      this.top = top
      // this._setChange("_top", top);
    },
    // 获取组件的高度值
    getTop: function (unit) {
      return parseFloat(this.top)
      // return this._getChange("_top", unit);
    },
    // 设置鼠标样式
    // setMouseStyle: function (mouseStyle) {
    //   this.cursor = mouseStyle
    //   // .this._Template.css('cursor', mouseStyle)
    // },
    // px值转rem
    _pxToRem: function (val) {
      var base = parseFloat(document.documentElement.style.fontSize)

      return parseFloat(val) / base + 'rem'
    },
    // rem值转px
    _remToPx: function (val) {
      var base = parseFloat(document.documentElement.style.fontSize)

      return parseFloat(val) * base
    },
    // 限制宽高
    _limit: function (val) {
      if (val <= 20) {
        return 20
      }
    },
    // 设置变化
    _setChange: function (type, val) {
      if (!this[type]) {
        this[type] = val
      } else {
        var attrVal = this[type]
      }
      // 如果值相同不执行
      if (val === attrVal) {
        return
      }
      var value
      var valStr = val + ''
      if (valStr.substr(-3) === 'rem') {
        this[type] = val
        value = val
      } else {
        value = this._pxToRem(val)
        this[type] = value
      }
      var attrName = type.substring(1)

      this._Template.css(attrName, value)
    },
    // 获取变化的属性值
    _getChange: function (type, unit) {
      // 默认为px像素值
      if (unit === 'px') {
        return parseFloat(this._remToPx(this[type]))
      } else {
        return this[type]
      }
    }
  },
  mounted () {
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.__resizeHandler)
  },
  create () {
    // console.log('v')
  }
}
</script>
<style lang="scss" >
.widget {
  position: absolute;
  box-sizing: border-box;
}
// .widget:hover {
//   // border: 1px solid rbg(225, 122, 146);
//   border: 1px solid red;
//   cursor: pointer;
// }
</style>
