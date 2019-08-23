<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-23 18:20:59
 -->
<template>
  <div ref="widget"
       class="widget"
       v-bind:style="{ height: height, width: width,top:top,left:left,padding:padding}">
    <van-swipe style="width:100%;height:100%"
               :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img :src="image"
             style="width:100%;height:100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import viewVue from './view.vue'
export default {
  name: 'Swipe',
  extends: viewVue,
  data () {
    return {
      widgetName: 'EmSwipe',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    setSrc (images) {
      this.images = images
    },
    getSrc () {
      return this.images
    }
  }
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
</style>
