/*
 * @Description:标题配置信息
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 22:37:50
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-18 12:08:29
 */
const config = {
  widgetName: 'heading',
  widgetZhName: '标题',
  attributes: [
    {
      name: '样式',
      values: [
        // {
        //   'controllerName': '字体：',
        //   'controllerType': 'controllerSelect',
        //   'functionName': 'setTitleFont',
        //   'items': [
        //     { 'label': '12点', 'value': '12px' },
        //     { 'label': '14点', 'value': '14px' },
        //     { 'label': '16点', 'value': '16px' },
        //     { 'label': '18点', 'value': '18px' }
        //   ],
        //   'defaultValue': '14px'
        // },
        // {
        //   controllerName: '左：',
        //   controllerType: 'controllerInput',
        //   functionName: 'setLeft',
        //   items: {},
        //   defaultValue: '0'
        // },
        {
          controllerName: '上：',
          controllerType: 'controllerInput',
          functionName: 'setTop',
          items: {},
          defaultValue: '0'
        },
        // {
        //   controllerName: '宽：',
        //   controllerType: 'controllerInput',
        //   functionName: 'setWidth',
        //   items: {},
        //   defaultValue: '100%'
        // },
        {
          controllerName: '高：',
          controllerType: 'controllerInput',
          name: 'Height',
          functionName: 'setHeight',
          items: {},
          defaultValue: '40'
        }
      ]
    },
    {
      name: '内容',
      values: [
        // {
        //   'controllerName': '字体：',
        //   'controllerType': 'controllerSelect',
        //   'functionName': 'setTitleFont',
        //   'items': [
        //     { 'label': '12点', 'value': '12px' },
        //     { 'label': '14点', 'value': '14px' },
        //     { 'label': '16点', 'value': '16px' },
        //     { 'label': '18点', 'value': '18px' }
        //   ],
        //   'defaultValue': '14px'
        // },
        // {
        //   controllerName: '左：',
        //   controllerType: 'controllerInput',
        //   functionName: 'setLeft',
        //   items: {},
        //   defaultValue: '0'
        // },
        {
          controllerName: '上：',
          controllerType: 'controllerInput',
          functionName: 'setTop',
          items: {},
          defaultValue: '0'
        },
        // {
        //   controllerName: '宽：',
        //   controllerType: 'controllerInput',
        //   functionName: 'setWidth',
        //   items: {},
        //   defaultValue: '100%'
        // },
        {
          controllerName: '高：',
          controllerType: 'controllerInput',
          name: 'Height',
          functionName: 'setHeight',
          items: {},
          defaultValue: '40'
        }
      ]
    }
  ]
}
export default config
