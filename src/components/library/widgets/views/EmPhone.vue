<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-19 08:23:16
 -->
<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images"
                    :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import viewVue from './view.vue'
export default {
  name: 'Swipe',
  extends: viewVue,
  data () {
    return {
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
