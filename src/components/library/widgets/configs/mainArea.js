/*
 * @Description:容器配置
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-08 18:47:55
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-15 08:47:23
 */

const config = {
  widgetName: 'mainArea',
  widgetZhName: '容器区域',
  attributes: [
    {
      name: '样式',
      values: [
        {
          controllerName: '布局：',
          controllerType: 'controllerSelect',
          functionName: 'setLayout',
          items: [
            {
              label: '自适应',
              value: 'self'
            },
            { label: '高保真', value: 'example' },
            { label: '原尺寸', value: 'fixed' }
          ],
          defaultValue: 'self'
        }
      ]
    }
  ]
}
export default config
