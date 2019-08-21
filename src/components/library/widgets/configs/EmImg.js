/*
 * @Description:标题配置信息
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 22:37:50
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-20 20:08:02
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
          valueName: 'Top',
          items: {},
          defaultValue: '0'
        },
        {
          controllerName: '高：',
          controllerType: 'controllerInput',
          valueName: 'Height',
          items: {},
          defaultValue: '145'
        }
      ]
    },
    {
      name: '内容',
      values: [
        {
          controllerName: '：',
          controllerType: 'controllerUpload',
          valueName: 'Src',
          items: {},
          defaultValue: ''
        },
        {
          controllerName: '地址：',
          controllerType: 'controllerInput',
          valueName: 'Src',
          items: {},
          defaultValue: ''
        }
      ]
    }
  ]
}
export default config
