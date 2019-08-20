<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-06 08:54:53
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-20 08:50:20
 -->
<template>
  <div id='app'
       class="full">
    <el-container class="full">
      <el-header height='56'
                 style="padding:0px">
        <headerArea ref='headerArea'
                    @getConfig='getConfig'></headerArea>
      </el-header>
      <el-container>
        <el-aside v-show='isShowLeft'
                  width='328px'>
          <leftArea ref='leftArea'
                    :widgetType=widgetType></leftArea>
        </el-aside>
        <el-main style="padding:0px">
          <mainArea ref='mainArea'
                    @append='append'></mainArea>
        </el-main>
        <el-aside v-show='isShowRight'
                  style="width:328px">
          <rightArea ref='rightArea'
                     @changeValue='changeValue'
                     :widgetType=widgetType
                     :widgetPorperties=widgetPorperties></rightArea>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import leftArea from '@/views/edit/leftArea/leftArea.vue'
import mainArea from '@/views/edit/mainArea/mainArea.vue'
import rightArea from '@/views/edit/rightArea/rightArea.vue'
import headerArea from '@/views/edit/headerArea/headerArea.vue'
export default {
  name: 'app',
  components: {
    leftArea,
    mainArea,
    headerArea,
    rightArea
  },
  data () {
    return {
      widgetType: '',
      cache: {},
      isShowLeft: true,
      isShowRight: true
    }
  },
  methods: {
    append (mes) {
      this.$refs.rightArea.changeWidgetType(mes)
    },
    changeValue (mes) {
      console.log(mes)
      this.$refs.mainArea.changeValue(mes)
    },
    getConfig () {
      this.$refs.mainArea.getConfig()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../assets/css/base.css";
</style>
