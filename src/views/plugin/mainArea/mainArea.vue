<!--
 * @Description:主区域模块
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-10-15 21:28:34
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-10-15 22:30:14
 -->
<template>
  <div class="mainArea"
       ref="mainArea">
    <div class="mobile">
      <component v-for="(item,index) in list"
                 ref='widget'
                 :is="item.widgetName"
                 :key="index"></component>
    </div>
  </div>
</template>
<script>
import mianArea from './mainArea.js'
export default {
  ...mianArea
}
</script>

 <style rel="stylesheet/scss"  lang="scss" scoped>
@import "./mainArea.scss";
</style>
