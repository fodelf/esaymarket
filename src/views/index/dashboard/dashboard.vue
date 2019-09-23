<!--
 * @Description:主页
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-11 18:59:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-09-01 18:29:26
 -->
<template>
  <div class='dashboard clearfix'>
    <div class='leftSide'>
      <p class='siteDataTit'>站点数据</p>
      <ul class='jumpList'>
        <li v-for="(item,index) in jumpList"
            :key="index"
            :class="item.className"
            @click="jump(item,$event)">
          <span><i class='iconfont'
               :class="item.iconName"></i>{{item.value}}</span>
        </li>
      </ul>
    </div>
    <div class="rightContent">
      <div class='topFix'>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>数据洞察（未此模块功能缺失）</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.query.temName}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
          <el-form-item>
            <el-input placeholder="站点名称"
                      v-model="siteName"
                      suffix-icon="el-icon-search"></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="value"
                            type="daterange"
                            align="left"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format='timestamp'
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
          <el-button type="primary"
                     size="mini"
                     @click="query()">查询</el-button>
        </el-form>
      </div>
      <div class='floorList clearfix'>
        <!--概况-->
        <div class="confiditions">
          <p class='title'>概况</p>
          <ul class="confiditionList clearfix">
            <li class='singleDetail'
                v-for="(item,index) in confiditionList"
                :key="index">
              <p>{{item.name}}<em class="iconfont icon-bangzhu"
                    :title="item.tip"></em></p>
              <div class='detailValue'>{{item.value}}</div>
            </li>
          </ul>
        </div>
        <!--转化明细-->
        <div class='changeDetail'>
          <p class='title'>转化明细<em class="iconfont icon-bangzhu"
                title="了解您的网站详细的转化数据"></em></p>
          <div class='changeContent'>
            <div class='showRows'>
              <el-form inline="true">
                <el-form-item label="显示行数">
                  <el-select>

                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <div class='tableBox'>
              <el-table :data="detailList"
                        border>
                <el-table-column prop="username"
                                 label="姓名"
                                 sortable
                                 width="180">
                </el-table-column>
                <el-table-column prop="phone"
                                 label="姓名"
                                 sortable
                                 width="180">
                </el-table-column>
                <el-table-column prop="registerTime"
                                 label="报名时间"
                                 :formatter="formatter">
                </el-table-column>
                <el-table-column label="操作">
                  <p>智能客服（未）</p>
                </el-table-column>
                <!-- <el-table-column v-for="(item,index) in headerList"
                                 :key="index"
                                 align="center">
                  <template slot="header">
                    <p>{{item.name}}</p>
                  </template>
                  <template slot-scope="scope">
                    <p>{{scope.row[item.code]}}</p>
                  </template>
                </el-table-column> -->
              </el-table>
            </div>
          </div>

        </div>
        <!--转化-->
        <div class='changeList halfBox'>
          <p class='title'>转化<em class="iconfont icon-bangzhu"
                title="了解您的网站的转化效果"></em></p>
          <div class="transform halfContent">
            <div class='changeTarget'>
              <el-form inline="true">
                <el-form-item label="转化目标">
                  <el-select>

                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <div class='transformChart'
                 ref="transform">

            </div>
          </div>
        </div>
        <!--访问趋势-->
        <div class='accessTrend halfBox'>
          <p class='title'>访问趋势</p>
          <div class='trendChart halfContent'
               ref="trend">

          </div>
        </div>
        <!--渠道占比-->
        <div class='channelPro halfBox'>
          <p class='title'>渠道占比</p>
          <div class='channelProChart halfContent'
               ref="channel">

          </div>
        </div>
        <!--流失率-->
        <div class='runPercent halfBox'>
          <p class='title'>流失率</p>
          <div class='runPercentChart halfContent'
               ref="runPercent">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashBoard from '@/views/index/dashboard/dashboard.js'
export default {
  ...dashBoard
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./dashboard.scss";
</style>
