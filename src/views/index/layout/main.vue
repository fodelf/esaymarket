<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-11 18:59:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-18 17:47:38
 -->
<template>
  <el-container style="height:100%"
                id='contentMain'>
    <el-header class="headTit">
      <span>产品</span>
      <span>解决方案（暂未开放）</span>
      <span>研究院（暂未开放）</span>
      <span>控制台</span>
    </el-header>
    <el-main style="padding:0px"
             ref='main'>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {

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
@import "./main.scss";
</style>
