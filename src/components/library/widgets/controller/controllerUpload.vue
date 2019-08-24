<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-14 23:33:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 15:10:46
 -->
<template>
  <el-upload class="upload-demo"
             drag
             action="/api/upload/img"
             :on-success="handleRecentUploadSucc"
             :file-list="fileList"
             style="width:100%;"
             :on-remove="handleRemove">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip"
         slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>
<script>
import controller from '@/components/library/widgets/controller/controller.vue'
export default {
  name: 'controller',
  extends: controller,
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    changeValue () {
      console.log('sssss')
      let message = {
        'value': this.value,
        'functionName': this.functionName
      }
      this.$emit('changeValue', message)
    },
    handleRecentUploadSucc (response, file, fileList) {
      console.log(fileList)
      this.value = response.data.serverPath
      this.changeValue()
    },
    handleRemove (file, fileList) {
      this.value = ''
      this.changeValue()
    }
  }
}
</script>

<style lang="less">
</style>
