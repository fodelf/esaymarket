<!--
 * @Description:主页
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-11 18:59:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-27 22:49:10
 -->
<template>
  <div class="production">
    <div class='topPro clearfix'>
      <!-- <el-button type="primary"
                 class='addSiteBtn'
                 icon="el-icon-plus"
                 @click="dialogVisible=true">新增站点</el-button> -->
      <el-button type="primary"
                 class='addSiteBtn'
                 icon="el-icon-plus"
                 @click="open">新增站点</el-button>
      <el-form ref="form"
               :model="form">
        <el-form-item>
          <el-select v-model="time">
            <el-option label="默认排序"
                       value="默认排序"></el-option>
            <el-option label="最后创建时间"
                       value="最后创建时间"></el-option>
            <el-option label="最后修改时间"
                       value="最后修改时间"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="site">
            <el-option label="全部站点"
                       value="全部站点"></el-option>
            <el-option label="已发布"
                       value="已发布"></el-option>
            <el-option label="已下线"
                       value="已下线"></el-option>
            <el-option label="未发布"
                       value="未发布"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="keyWords"
                    placeholder="请输入页面标题关键字"><em slot="suffix">|</em><i slot="suffix"
               class="el-icon-search"></i></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="bottomDiv">
      <div class='addSite'>
        <div class='noSiteBg'></div>
        <p>当前暂无站点哦~</p>
        <!-- <el-button type="primary"
                   class='addSiteBtn'
                   icon="el-icon-plus"
                   @click="dialogVisible=true">新增第一个站点</el-button> -->
        <el-button type="primary"
                   class='addSiteBtn'
                   icon="el-icon-plus"
                   @click="open">新增第一个站点</el-button>
      </div>
      <ul>
        <li v-for="(item,index) in templateList"
            :key="index">
          <span>名字:{{item.templateName}}</span>
          <span @click="gotoEdit(item.templateId)">编辑</span>
          <span @click="delet(item.templateId)">删除</span>
          <span>访问量:{{item.viewCount}}</span>
          <span>注册:{{item.registerCount}}</span></li>
      </ul>
    </div>
    <!-- <el-dialog title="新建站点"
               class="clearfix"
               center
               :visible.sync="dialogVisible">
      <div class="createBox createBlank">
        <span>创建空白页</span>
      </div>
      <div class="createBox createTem">
        <span>使用模板创建</span>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
import control from '@/views/index/control/control.js'
export default {
  ...control
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./control.scss";
</style>
