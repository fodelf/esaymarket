/*
 * @Description:主区域模块
 * @Author:吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 19:58:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-15 21:55:21
 */

import heading from '@/components/library/widgets/views/heading/heading.vue'
export default {
  name: 'mainArea',
  data () {
    return {
      list: []
    }
  },
  components: {
    heading
  },
  methods: {
    getConfig () {
      var config = []
      this.$refs.widget.forEach(element => {
        config.push({
          widgetName: element.widgetName,
          top: element.getTop()
        })
      })
      localStorage.setItem('config', JSON.stringify(config))
      window.open('preview.html')
    }
  },
  created () {
    this.list = JSON.parse(localStorage.getItem('config'))
    this.$refs.widget.forEach((element, index) => {
      element.setTop(this.list[index]['top'])
    })
  }
  // wacth: {
  //   num () {
  //     var base = this.num / 100
  //     this.scale3d = 'scale3d(' + base + ',' + base + ', 1)'
  //   }
  // }
}
