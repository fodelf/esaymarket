<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-14 23:33:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-23 08:59:23
 -->
<template>
  <el-upload class="upload-demo"
             ref="upload"
             action="https://jsonplaceholder.typicode.com/posts/"
             :on-preview="handlePreview"
             :on-remove="handleRemove"
             :file-list="fileList"
             :auto-upload="false">
    <el-button slot="trigger"
               size="small"
               type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;"
               size="small"
               type="success"
               @click="submitUpload">上传到服务器</el-button>
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
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
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
    }
  }
}
</script>

<style lang="less">
</style>
