<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:30
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-18 16:29:02
 -->
<template>
  <div class="rightArea">
    <el-tabs type="card>"
             v-model="tabsValue"
             v-show="!isShowTips">
      <el-tab-pane :key="item.name"
                   v-for="(item,index) in configTabs"
                   :label="item.name"
                   :name="index"
                   :stretch=true>
        <el-form ref="form"
                 :model="form"
                 label-width="80px">
          <component v-for="(childItem) in item.values"
                     :key="childItem.controllerName"
                     :is="childItem.controllerType"
                     :mes="childItem"
                     @changeValue=changeValue
                     ref='widget'></component>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div class="tips"
         style=""
         v-show="isShowTips">
      <img class="tips-attr-img">
      <p class="tips-attr-p "><span class="tz">“双击”</span><br>
        或将左侧组件<br> <span class="tz">“拖拽”</span><br>
        至中间编辑区域
      </p>
    </div>
  </div>
</template>
<script>
import rightArea from '@/views/index/rightArea/rightArea.js'
export default {
  ...rightArea
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
@import "./rightArea.scss";
</style>
