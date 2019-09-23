<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-14 08:36:11
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-19 22:02:34
 -->
<template>
  <div ref="controller">
    <div style=" float:left;">
      <label>上</label>
      <input v-model="top"
             @change="changeTop()">
    </div>
    <div style=" float:left;">
      <label>左</label>
      <input v-model="left"
             @change="changeleft()">
    </div>
    <div style=" float:left;">
      <label>高</label>
      <input v-model="height"
             @change="changeHeight()">
    </div>
    <div style=" float:left;">
      <label>宽</label>
      <input v-model="width"
             @change="changeWidth()">
    </div>
  </div>
</template>
<script>
import controller from './controller.vue'
export default {
  name: 'controller',
  extends: controller,
  data () {
    return {
      value: '',
      functionName: ''
    }
  },
  methods: {
    changeValue (value) {
      let message = {
        'value': value,
        'functionName': this.functionName
      }
      this.$emit('changeValue', message)
    },
    changeTop () {
      this._changeValue('Top', this.top)
    },
    changeleft () {
      this._changeValue('Left', this.left)
    },
    changeHeight () {
      this._changeValue('Height', this.height)
    },
    changeWidth () {
      this._changeValue('Width', this.width)
    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
</style>
