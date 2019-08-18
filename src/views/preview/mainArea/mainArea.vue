<!--
 * @Description:主区域模块
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:28:34
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-15 22:14:52
 -->
<template>
  <div class="mainArea"
       ref="mainArea">
    <component v-for="(item,index) in list"
               ref='widget'
               :is="item.widgetName"
               :key="index"></component>
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
