<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-23 18:34:33
 -->
<template>
  <div ref="widget"
       class="widget"
       v-bind:style="{ height: height, width: width,top:top,left:left,padding:padding}">
    <div style="position: absolute;width:100%;height:100%;z-index:10"
         v-if="isShow"></div>
    <van-cell-group>
      <van-field v-model="username"
                 label="用户名"
                 placeholder="请输入用户名"
                 required />
      <van-field v-model="phone"
                 label="手机号"
                 placeholder="请输入手机号"
                 required />
    </van-cell-group>
    <van-button type="warning">点击提交</van-button>
  </div>
</template>
<script>
import viewVue from './view.vue'
export default {
  name: 'Swipe',
  extends: viewVue,
  data () {
    return {
      widgetName: 'EmForm'
    }
  }
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
</style>
