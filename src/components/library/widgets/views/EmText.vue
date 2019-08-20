<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-20 08:39:26
 -->
<template>
  <!-- <h5 ref="widget" class="widget" :id="_props.id" v-bind:style=:style="{'height':height ,'width':width,'top':top,'letf':left}">  -->
  <div ref="widget"
       class="widget"
       :class="{'widget_hover':ishover,'selectClass':isSelect}"
       v-bind:style="{ height: height, width: width,top:top,left:left,cursor:cursor,padding:padding}">
    {{text}}
  </div>
</template>
<script>
import viewVue from './view.vue'
export default {
  name: 'EmText',
  extends: viewVue,
  data () {
    return {
      widgetName: 'EmText',
      text: ''
    }
  },
  methods: {
    setText (text) {
      this.text = text
    }
  }
}
</script>

<style lang="scss">
</style>
