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
                    落地页工具是有米云旗下的智能化营销创意工具，
                    是一个简单易用的在线广告营销页制作与数据监控分析平台。
                    除了能帮营销人员无代码快速搭建营销页外，
                    落地页工具还支持无埋点数据采集、自定义转化目标和竞品创意情报收集，
                    有效追踪用户在营销页上的访问和行为数据，帮您有理有据优化营销页，提升广告转化率。
                </div>
            </div>
            <div class="right">
                <div class='rightContent'>
                    <p class="welcomeTit">欢迎注册落地页工具！</p>
                    <el-form ref="registerForm" :model="ruleForm" :rules="rules" label-width="80px">
                        <el-form-item label="用户名" prop="userName">
                            <el-input placeholder="请输入用户名" v-model="ruleForm.userName"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input placeholder="请输入密码" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <button class='registerBtn' @click="register()">立即注册</button>
                        </el-form-item>
                    </el-form>
                    <p class="tips">已有账号<span @click="goLogin()">立即登录</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import register from "@/views/index/register/register.js"
export default {
    ...register
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./register.scss";
</style>