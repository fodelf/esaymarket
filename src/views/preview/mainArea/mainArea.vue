<!--
 * @Description:主区域模块
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:28:34
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-26 20:19:25
 -->
<template>
  <div class="mainArea"
       ref="mainArea">
    <div v-if="_showInPC"
         class="pc">
      <div class="contain">
        <div class="iphone">
          <div class="content"></div>
        </div>
        <div class="edit">
          <component v-for="(item,index) in list"
                     ref='widget'
                     :is="item.widgetName"
                     :key="index"></component>
        </div>
      </div>
      <div class="m-qrcode">
        <div id="qrcode"></div>
        <div class="m-desc">请扫描上方的二维码预览</div>
      </div>

    </div>
    <div v-else
         class="mobile">
      <component v-for="(item,index) in list"
                 ref='widget'
                 :is="item.widgetName"
                 :key="index"></component>
    </div>
  </div>
</template>
<script>
import mianArea from '@/views/preview/mainArea/mainArea.js'
export default {
  ...mianArea
}
</script>

 <style rel="stylesheet/scss"  lang="scss" scoped>
@import "./mainArea.scss";
</style>
