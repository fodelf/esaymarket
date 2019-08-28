<!--
 * @Description: 登录页
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-27 19:10:55
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-28 20:22:08
 -->
<template>
  <div class='login'>
    <div class='loginHead'>
      <span>易推广</span>
    </div>
    <div class="loginCon clearfix">
      <div class='leftLogin'>
        <h3>十分钟完成智能营销页搭建</h3>
        <div class='explainText'>
          易推广的落地页工具是南京小团队开发的智能化营销创意工具，
          当前是一个简单易用的，通过拖拽生成落地页制作同时实现数据监控分析的平台。
          在不久的将来可以实现，拖拽生成App与小程序。
          非常感谢各位小伙伴在技术的支持，各位朋友在情理上的帮助，各位友商支持。
          让我们开始慢慢相信通过自己的努力，看到生活不仅仅是眼前的苟且，还有诗和远方。
          <!-- 现在是一个简单易用的在线广告营销页制作与数据监控分析平台。 -->
          <!-- 除了能帮营销人员无代码快速搭建营销页外， -->
          <!-- 落地页工具还支持无埋点数据采集、自定义转化目标和竞品创意情报收集， -->
          <!-- 有效追踪用户在营销页上的访问和行为数据，帮您有理有据优化营销页，提升广告转化率。 -->
          我们的愿景是让技术走进生活，可以让更多没有相关基础的人们可以轻松实现设计，开发，测试，运维，推广，预测，客服一体化。
          除此之外，我们这个团队还接受南京本地软件项目的外包服务，电话18651892475。
        </div>
      </div>
      <div class='rightLogin'>
        <div class='rightCon'>
          <p class='bigTit'>登录</p>
          <h3 class='welcomeTit'>欢迎登录落地页工具！</h3>
          <el-form ref="loginForm"
                   :model="ruleForm"
                   :rules="rules"
                   @submit.native.prevent
                   label-width="80px">
            <el-form-item label="用户名"
                          prop="userName">
              <el-input placeholder="请输入用户名"
                        v-model="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码"
                          prop="password">
              <el-input placeholder="请输入密码"
                        v-model="ruleForm.password"
                        show-password></el-input>
            </el-form-item>
            <el-form-item>
              <button class='loginBtn'
                      @click="login()">登录</button>
            </el-form-item>
          </el-form>
          <p class="tips">还没有账号<span @click="goRegister()">立即注册</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from '@/views/index/login/login.js'
export default {
  ...login
}
</script>

<style rel="stylesheet/scss" lang='scss' scoped>
@import "./login.scss";
</style>
