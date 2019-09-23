<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 17:53:57
 -->
<template>
  <!-- <h5 ref="widget" class="widget" :id="_props.id" v-bind:style=:style="{'height':height ,'width':width,'top':top,'letf':left}">  -->
  <h5 ref="widget"
      class="widget"
      v-bind:style="{ height: height, width: width,top:top,left:left,cursor:cursor}">
    zheshibiaoti
    {{text}}
  </h5>
</template>
<script>
import viewVue from '../view.vue'
export default {
  name: 'heading',
  // mixins: [devEyDecorator],
  extends: viewVue,
  data () {
    return {
      text: '',
      height: '100px',
      width: '100px',
      top: '0px',
      left: '0px',
      cursor: ''
    }
  }
}
</script>

<style lang="scss">
</style>
