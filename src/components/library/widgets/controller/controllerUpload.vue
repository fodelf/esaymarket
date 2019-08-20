<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-14 23:33:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-19 20:20:20
 -->
<template>
  <el-upload class="upload-demo"
             drag
             action=""
             multiple
             style="width:100%;">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip"
         slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
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
