<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:23
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-25 21:50:15
 -->
<template>
  <div class="leftArea">
    <el-tabs v-model="activeName"
             :stretch=true>
      <el-tab-pane name="Base">
        <span slot="label"
              class="tab-content">基础信息</span>
        <el-collapse accordion
                     class="wigetContent">
          <el-collapse-item>
            <template slot="title">
              <span>内容</span>
            </template>
            <div class="wigetContentLsit">
              <div v-for="(item,index) in widgets"
                   :key="index"
                   span="8"
                   class="drag-holder"
                   draggable="true"
                   @dragstart="dragstart($event,item)">
                <span class="text">{{item.name}}</span>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <span>高级组件</span>
            </template>
            <div class="wigetContentLsit">
              <div v-for="(item,index) in widgestHeigh"
                   :key="index"
                   span="8"
                   class="drag-holder"
                   draggable="true"
                   @dragstart="dragstart($event,item)">
                <span class="text">{{item.name}}</span>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane name="Two">
        <span slot="label"
              class="tab-content">组件管理（未）</span>
        <LifeStatus :form='form'
                    :allSelectInfo='allSelectInfo'></LifeStatus>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import leftArea from '@/views/edit/leftArea/leftArea.js'
export default {
  ...leftArea
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
@import "./leftArea.scss";
</style>
