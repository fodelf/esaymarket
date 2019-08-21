<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-20 20:05:43
 -->
<template>
  <!-- <h5 ref="widget" class="widget" :id="_props.id" v-bind:style=:style="{'height':height ,'width':width,'top':top,'letf':left}">  -->
  <div ref="widget"
       class="widget"
       v-bind:style="{ height: height, width: width,top:top,left:left,padding:padding,cursor:cursor}">
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
    },
    getText () {
      return this.text
    }
  }
}
</script>

<style lang="scss">
</style>
