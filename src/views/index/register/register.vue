<!--
 * @Description: 注册页
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-27 19:10:55
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-29 19:19:03
 -->
<template>
  <div class="register">
    <div class='registerHead'>
      <span>易推广</span>
    </div>
    <div class="registerCon clearfix">
      <div class='left'>
        <!-- <p class='leftTit'>落地页工具</p> -->
        <h3>十分钟完成智能营销页搭建</h3>
        <div class='explainText'>
          易推广的落地页工具是南京小团队开发的智能化营销创意工具，
          当前是一个简单易用的，通过拖拽生成落地页制作同时实现数据监控分析的平台。
          在不久的将来可以实现，拖拽生成App与小程序。
          非常感谢各位小伙伴在技术的支持，各位朋友在情理上的帮助，各位友商支持。
          让我们开始慢慢相信通过自己的努力，看到生活不仅仅是眼前的苟且，还有诗和远方。
          我们的愿景是让技术走进生活，可以让更多没有相关基础的人们可以轻松实现设计，开发，测试，运维，推广，预测，客服一体化。
          除此之外，我们这个团队还接受南京本地软件项目的外包服务，电话18651892475。
        </div>
      </div>
      <div class="right">
        <div class='rightContent'>
          <p class="welcomeTit">欢迎注册落地页工具！</p>
          <el-form ref="registerForm"
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
              <button class='registerBtn'
                      @click="register()">立即注册</button>
            </el-form-item>
          </el-form>
          <p class="tips">已有账号<span @click="goLogin()">立即登录</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import register from '@/views/index/register/register.js'
export default {
  ...register
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./register.scss";
</style>
