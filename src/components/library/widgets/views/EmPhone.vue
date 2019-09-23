<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-25 23:01:14
 -->
<template>
  <div ref="widget"
       class="widget"
       v-bind:style="{ height: height, width: width,top:top,left:left,padding:padding}">
    <div class="hide"
         v-if="flag"></div>
    <a :href="phone">
      <div class="content">
        <span class="phone phone2"></span>
        <span class="text">立即拨打</span></div>
    </a>
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
      phone: 'tel:13913340918',
      flag: false
    }
  },
  methods: {
    setPhone (phone) {
      this.phone = 'tel:' + phone
    },
    getPhone () {
      return this.phone.substring(4)
    }
  },
  created () {
    // eslint-disable-next-line vue/no-parsing-error
    this.flag = this._GLOBAL['Message']['module'] === 'develop'
  }

}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  background: rgba(245, 69, 69, 0.88);
  justify-content: center;
  border-radius: 5px;
  height: 100%;
  // overflow: auto;
  .phone {
    display: inline-block;
    background: url("../../../../assets/img/emPhone.svg") center center
      no-repeat;
    width: 20px;
    height: 20px;
  }
  .text {
    color: white;
  }
}
.hide {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}
</style>
