/*
 * @Description:标题配置信息
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 22:37:50
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-23 08:49:25
 */
const config = {
  widgetName: 'Img',
  widgetZhName: '图片',
  attributes: [
    {
      name: '样式',
      values: [
        {
          controllerName: '上：',
          controllerType: 'controllerInput',
          isResize: true,
          valueName: 'Top',
          items: {},
          defaultValue: '0'
        },
        {
          controllerName: '高：',
          controllerType: 'controllerInput',
          isResize: true,
          valueName: 'Height',
          items: {},
          defaultValue: '145'
        },
        {
          controllerName: '边距：',
          controllerType: 'controllerInput',
          isResize: true,
          valueName: 'Padding',
          items: {},
          defaultValue: '10'
        }
      ]
    },
    {
      name: '内容',
      values: [
        {
          controllerName: '',
          controllerType: 'controllerUpload',
          valueName: 'Src',
          items: {},
          defaultValue: '../assets/img/default.svg'
        }
        // {
        //   controllerName: '地址：',
        //   controllerType: 'controllerInput',
        //   valueName: 'Src',
        //   items: {},
        //   defaultValue: ''
        // }
      ]
    }
  ]
}
export default config
