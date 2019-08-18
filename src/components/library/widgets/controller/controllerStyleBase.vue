<template>
  <div ref="controller" >
    <div style=" float:left;">
      <label>上</label>
      <input v-model="top" @change="changeTop()">
    </div>
    <div style=" float:left;">
      <label>左</label>
      <input v-model="left" @change="changeleft()">
    </div>
    <div style=" float:left;">
      <label>高</label>
      <input v-model="height" @change="changeHeight()">
    </div>
    <div style=" float:left;">
      <label>宽</label>
      <input v-model="width" @change="changeWidth()">
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
      this._changeValue('setTop', this.top)
    },
    changeleft () {
      this._changeValue('setLeft', this.left)
    },
    changeHeight () {
      this._changeValue('setHeight', this.height)
    },
    changeWidth () {
      this._changeValue('setWidth', this.width)
    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
</style>
