<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-14 23:33:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-22 23:33:11
 -->
<template>
  <div ref="controller"></div>
</template>
<script>
export default {
  name: 'controller',
  data () {
    return {
      value: '',
      functionName: this.mes.valueName,
      isResize: this.mes.isResize
    }
  },
  props: {
    mes: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    changeValue () {
      console.log('sssss')
      let message = {
        'value': this.value,
        'functionName': this.functionName,
        'isResize': this.isResize
      }
      this.$emit('changeValue', message)
    },
    setValue (value) {
      this.value = value
    }
  },
  mounted () {

  },
  watch: {
    // value () {
    //   this.changeValue()
    // }
  },
  created () {
    this.value = this.mes.defaultValue
  }
}
</script>

<style lang="less">
</style>
