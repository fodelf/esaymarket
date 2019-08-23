<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-23 18:33:14
 -->
<template>
  <div ref="widget"
       class="widget"
       v-bind:style="{ height: height, width: width,top:top,left:left,padding:padding}">
    <a :href="phone">ss</a>
  </div>
</template>
<script>
import viewVue from './view.vue'
export default {
  name: 'Swipe',
  extends: viewVue,
  data () {
    return {
      widgetName: 'EmPhone',
      phone: 'tel:13913340918'
    }
  },
  methods: {
    setPhone (phone) {
      this.phone = 'tel:' + phone
    },
    getPhone () {
      return this.phone.substring(4)
    }
  }
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
</style>
