<!--
 * @Description:主页
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-11 18:59:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-27 22:04:32
 -->
<template>
  <div class='dashboard clearfix'>
    <div class='leftSide'>
      <p class='siteDataTit'>站点数据</p>
      <ul class='jumpList'>
        <li>概况</li>
        <li>转化明细</li>
        <li>转化</li>
        <li>访问趋势</li>
        <li>渠道占比</li>
        <li>流失率</li>
      </ul>
    </div>
    <div class="rightContent">
      <div class='topFix'>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>数据洞察</el-breadcrumb-item>
          <el-breadcrumb-item>数据DEMO</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
          <el-form-item>
            <el-input placeholder="站点名称"
                      v-model="siteName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="value"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div class='floorList'>
        <div class="confiditions">
          <p>概况</p>
        </div>
        <div class='changeDetail'>
          <p>转化明细</p>
        </div>
        <div class='changeList'>
          <p>转化</p>
        </div>
        <div class='accessTrend'>
          <p>访问趋势</p>
        </div>
        <div class='channelPro'>
          <p>渠道占比</p>
        </div>
        <div class='runPercent'>
          <p>流失率</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      siteNme: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value: ''
    }
  },
  components: {
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./dashboard.scss";
</style>
