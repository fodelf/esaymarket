<!--
 * @Description:表单组件
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 12:31:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-26 08:27:30
 -->
<template>
  <div ref="widget"
       class="widget"
       v-bind:style="{ height: height, width: width,top:top,left:left,padding:padding}">
    <div style="position: absolute;width:100%;height:100%;z-index:10"
         v-if="isShow"></div>
    <van-cell-group>
      <van-field v-model="username"
                 label="用户名"
                 placeholder="请输入用户名"
                 required />
      <van-field v-model="phone"
                 label="手机号"
                 placeholder="请输入手机号"
                 required />
    </van-cell-group>
    <div class="buttonContent">
      <van-button type="warning"
                  @click="submit"
                  class="submit">点击报名</van-button>
    </div>
  </div>
</template>
<script>
import viewVue from './view.vue'
import { getUrlParam } from '@/utils/index.js'
import { submitForm } from '@/api/preview/preview.js'
import { debounce } from 'lodash'
export default {
  name: 'Swipe',
  extends: viewVue,
  data () {
    return {
      widgetName: 'EmForm',
      username: '',
      phone: '',
      isShow: true
    }
  },
  methods: {
    /**
     * @name: submit
     * @description: 表单提交
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     */
    submit: debounce(function () {
      let templateId = getUrlParam('templateId')
        ? getUrlParam('templateId')
        : 'defaut'
      let source = getUrlParam('source')
        ? getUrlParam('source')
        : 'defaut'
      submitForm({ 'templateId': templateId, 'username': this.username, 'phone': this.phone, 'sourceIP': '', 'comeSite': source }).then((res) => {
        console.log(res)
        this.$dialog.alert({
          title: '提示',
          message: '报名成功'
        })
      }).catch(() => {
        this.$dialog.alert({
          title: '提示',
          message: '报名失败,请重新填写'
        })
      })
    }, 5000)
  },
  created () {
    this.isShow = this._GLOBAL['Message']['module'] === 'develop'
  }
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
.buttonContent {
  display: flex;
  justify-content: center;
  .submit {
    margin-top: 14px;
  }
}
</style>
