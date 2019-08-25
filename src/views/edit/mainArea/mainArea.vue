<!--
 * @Description:主区域模块
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:28:34
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-25 22:25:22
 -->
<template>
  <div class="mainArea"
       ref="mainArea">
    <div class="stage">
      <div class="contain"
           v-bind:style="{'transform':scale3d,'left':left,'top': top}">
        <div class="iphone">
          <div class="content"></div>
        </div>
        <div class="edit"
             @dragover="dragover($event)"
             @drop="drop($event)">
          <component v-for="(item) in list"
                     :key="item.uuid"
                     :is="item.widgetName"
                     :id="item.uuid"
                     @setDelete='setDelete'
                     @setDisSelect='setDisSelect'
                     @removeOtherSelect='removeOtherSelect'
                     @setSelectValue='setSelectValue'
                     @setChildControl='setChildControl'
                     ref='widget'></component>
        </div>
      </div>
      <div class="toolbar"
           style="left: 574px; top: 14px;">
        <div class="btn-none icon-F_Redo">
          <p>撤销</p>
        </div>
        <div class="btn-none icon-F_Cancle ban">
          <p>重做</p>
        </div>
        <div class="btn-none icon-F_save">
          <p>保存</p>
        </div>
        <div class="zoom-tool flex-column">
          <div><a class="zoom-item zoom-in"
               @click="add"><i class="icon-Enlarge">+</i></a>
            <span class="zoom-item label no-select"
                  style='margin-top:10px'>{{num}}%</span>
            <a class="zoom-item zoom-put"
               @click="reduce"><i class="icon-Narrow">-</i></a></div>
        </div>
      </div>
    </div>
    <el-dialog title="扫描二维码预览"
               :visible="centerDialogVisible"
               width="30%"
               :show-close='false'
               center>
      <div id="qrcode"></div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="centerDialogVisible = false">关 闭</el-button>
        <!-- <el-button type="primary"
                   @click="centerDialogVisible = false">确 定</el-button> -->
      </span>
    </el-dialog>

  </div>
</template>
<script>
import mianArea from '@/views/edit/mainArea/mainArea.js'
export default {
  ...mianArea
}
</script>

 <style rel="stylesheet/scss"  lang="scss" scoped>
@import "./mainArea.scss";
</style>
