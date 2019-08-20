<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-19 19:42:19
 -->
<template>
  <div ref="widget"
       v-bind:style="{ height: height, width: width,top:top,left:left,cursor:cursor}">
    <img src="src"
         v-show="ishow" />
    <div v-show="!ishow">
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
import viewVue from './view.vue'
export default {
  name: 'Img',
  extends: viewVue,
  data () {
    return {
      ishow: false,
      height: '100px',
      width: '100%',
      top: '0px',
      left: '0px',
      cursor: 'pointer',
      src: 'https://static-sc.ilanx.net/1908/16/80/6b20b3e68f9cd610.jpg?x-oss-process=image%2Fquality%2Cq_75',
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
