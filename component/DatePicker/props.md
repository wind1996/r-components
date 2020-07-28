## 组件的props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form |  antd的form  | object |  |
| label | antd FormItem的label | string  |   |
| id | form.getFieldDecorator的第一个参数 | string  |   |
| initialValue | input的默认值 | string  |   |
| placeholder | 提示文字 | string  |  请输入+label |
| required | 是否校验必填，（纯空格也算未填）| boolean  |  false |
| hide |  不渲染此组件  | boolean | false |
| width | 输入框的宽度，style对象的width | string\|number  | 300  |