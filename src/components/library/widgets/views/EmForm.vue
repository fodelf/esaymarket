<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-19 19:34:20
 -->
<template>
  <div ref="widget"
       class="widget"
       v-bind:style="{ height: height, width: width,top:top,left:left,cursor:cursor}">
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
      isShow: true,
      height: '120px',
      width: '100%',
      top: '0px',
      left: '0px',
      cursor: 'pointer',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
</style>
