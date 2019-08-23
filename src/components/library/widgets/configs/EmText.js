/*
 * @Description:标题配置信息
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 22:37:50
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-22 23:22:51
 */
const config = {
  widgetName: 'Text',
  widgetZhName: '文本',
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
          defaultValue: '40'
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
          controllerName: '文本',
          controllerType: 'controllerTextArea',
          valueName: 'Text',
          items: {},
          defaultValue: '在右编辑文本'
        }
      ]
    }
  ]
}
export default config
