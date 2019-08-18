<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-14 23:33:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-09 10:35:13
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
      functionName: this.mes.functionName
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
    changeValue (value) {
      console.log('sssss')
      let message = {
        'value': this.value,
        'functionName': this.functionName
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
    value () {
      this.changeValue()
    }
  },
  created () {
    this.value = this.mes.defaultValue
  }
}
</script>

<style lang="less">
</style>
