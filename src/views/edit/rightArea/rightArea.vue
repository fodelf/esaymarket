<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:30
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-21 22:04:24
 -->
<template>
  <div class="rightArea">
    <!-- <el-tabs v-show="!isShowTips"
             v-model="activeName"
             :stretch=true>
      <el-tab-pane name="Style">
        <span slot="label"
              class="tab-content">样式</span>
        <component v-for="(childItem) in configTabs[0].values"
                   :key="childItem.controllerName"
                   :is="childItem.controllerType"
                   :mes="childItem"
                   @changeValue=changeValue
                   ref='widget'></component>
      </el-tab-pane>
      <el-tab-pane name="Conent">
        <span slot="label"
              class="tab-content">内容</span>

      </el-tab-pane>
    </el-tabs> -->
    <el-tabs v-show="!isShowTips"
             v-model="activeName"
             :stretch=true>
      <el-tab-pane :key="item.name"
                   v-for="(item,index) in configTabs"
                   :name="index"
                   class="wigetContent">
        <span slot="label"
              class="tab-content">{{item.name}}</span>
        <el-form ref="form"
                 :model="form"
                 label-width="60px">
          <component v-for="childItem in item.values"
                     :key="childItem.id"
                     :is="childItem.controllerType"
                     :mes="childItem"
                     @changeValue=changeValue
                     ref='control'></component>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div class="tips"
         style=""
         v-show="isShowTips">
      <img class="tips-attr-img">
      <p class="tips-attr-p ">
        <span class="tz">“双击”</span>
        <br>
        或将左侧组件
        <br>
        <span class="tz">“拖拽”</span>
        <br>
        至中间编辑区域
        <br>
        <span class="tz">“选中”</span>
        <br>
        你想要编辑的组件
        <br>
      </p>
    </div>
  </div>
</template>
<script>
import rightArea from '@/views/edit/rightArea/rightArea.js'
export default {
  ...rightArea
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
@import "./rightArea.scss";
</style>
