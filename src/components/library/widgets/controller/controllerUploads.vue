<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-14 23:33:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 16:00:27
 -->
<template>
  <el-upload class="upload-demo"
             ref="upload"
             action="/api/upload/img"
             :on-success="handleRecentUploadSucc"
             :on-preview="handlePreview"
             :on-remove="handleRemove"
             :file-list="fileList"
             multiple>
    <el-button slot="trigger"
               size="small"
               type="primary">选取文件</el-button>
    <!-- <el-button style="margin-left: 10px;"
               size="small"
               type="success"
               @click="submitUpload">上传到服务器</el-button> -->
    <div slot="tip"
         class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
    changeValue (value) {
      console.log('sssss')
      let message = {
        'value': this.value,
        'functionName': this.functionName
      }
      this.$emit('changeValue', message)
    },
    handleRecentUploadSucc (response, file, fileList) {
      console.log(fileList)
      this.handFiels(fileList)
      this.changeValue()
    },
    handleRemove (file, fileList) {
      this.handFiels(fileList)
    },
    handFiels (fileList) {
      this.value = []
      fileList.forEach((element) => {
        var path = element.response ? element.response.data.serverPath : ''
        if (path) {
          this.value.push(element.response.data.serverPath)
        }
      })
      this.changeValue()
    }
  }
}
</script>

<style lang="less">
</style>
