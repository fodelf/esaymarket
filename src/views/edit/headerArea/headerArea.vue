<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:25
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-26 18:57:45
 -->
<template>
  <div class="headerArea">
    <div class="logo-bar flex-row">
      <span class="logo"
            @click="goTo">易推广</span>
      <a class="btn-back el-dropdown-link  cursor-pointer no-select"
         @click="goToIndex">
        <i class="el-icon-arrow-left fz16">
        </i>我的站点
      </a>
      <!-- <span class="set el-tooltip item"
            aria-describedby="el-tooltip-1644"
            tabindex="0"><i class="icon-shezhi fz32 "></i> <span>站点设置</span></span> -->
    </div>
    <div class="nav flex-row">
      <input type="text"
             placeholder="网站标题"
             v-model="temName"
             class="temName">
      <!-- <div class="edit-title flex-row">
        <div class="label ">

        </div> <a href="javascript:;"><i data-v-0697d84e=""
             class="icon-Edit fz32"></i></a>
      </div> -->
    </div>
    <!-- <div id="qrcode">二维码生成的位置</div> -->
    <div class="pubulish-bar flex-row publish-bar">
      <a class="btnStyle iconBtn cursor-pointer"
         @click="save"><i class="fz32 icon-Save"></i><span>保存未</span></a>
      <a class="btnStyle iconBtn cursor-pointer"><i class="fz32 icon-Yulan"
           @click="preview"></i>
        <span @click="preview">预览</span>
      </a>
      <!-- <button type="button"
              class="el-button btnStyle publish el-button--default is-round"
              primary="">
        <span><i class="icon-fabu"></i> <span>发布</span> <i class="el-icon-loading"
             style="display: none;"></i> <span style="margin-left: -2px; display: none;">发布中</span></span></button> -->
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'headerArea',

  data () {
    return {
      height: '',
      width: '',
      left: '',
      top: '',
      temName: '易推广'
    }
  },
  methods: {
    /**
     * @name: goToIndex
     * @description: 跳转到首页
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    goToIndex () {
      window.location.href = 'index.html#/control'
    },
    goTo () {
      window.location.href = 'index.html'
    },
    /**
     * 改变组件高度
     * @param
     * @method changeTop
     */
    changeTop () {
      this._changeValue('setTop', this.top)
    },
    changeleft () {
      this._changeValue('setLeft', this.left)
    },
    changeHeight () {
      this._changeValue('setHeight', this.height)
    },
    changeWidth () {
      this._changeValue('setWidth', this.width)
    },
    // 设置高度
    _changeValue: function (functionName, value) {
      let message = {
        value: value,
        functionName: functionName
      }
      this.$emit('changeValue', message)
    },
    // 获取高度
    getHeight: function (unit) {
      return parseFloat(this.height)
    },
    // 设置组件宽度
    setWidth: function (width) {
      // this._setChange("_width", width);
      this.width = width + 'px'
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
      this.left = left + 'px'
      // this._setChange("_left", left);
    },
    // 设置顶部距离
    setTop: function (top) {
      this.top = top + 'px'
      // this._setChange("_top", top);
    },
    // 获取组件的高度值
    getTop: function (unit) {
      return parseFloat(this.top)
      // return this._getChange("_top", unit);
    },
    /**
     * @name: preview
     * @description: 默认描述
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    preview () {
      this.$emit('getConfig', this.temName)
    },
    /**
     * @name: 默认名称
     * @description: 默认描述
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    save () {
      document.getElementById('qrcode').innerHTML = ''
      this.qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
        text: 'https://www.baidu.com/' // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      })
    }
  },
  mounted () { }
}
</script>
<style rel="stylesheet/scss"  lang="scss" scoped>
@import "./headerArea.scss";
</style>
