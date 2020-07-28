## 组件的props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form |  antd的form  | object |  |
| label | antd FormItem的label | string  |   |
| id | form.getFieldDecorator的第一个参数 | string  |   |
| initialValue | input的默认值 | string  |   |
| initialObj | 默认值，会把initialObj[id]当作默认值，如果有initialValue，这个将被忽略 | string  |   |
| disabled | 不可编辑 | boolean  |  false |
| required | 是否校验必填，（纯空格也算未填）| boolean  |  false |
| rules | form.getFieldDecorator的第二个参数的rule | []  |   |
| placeholder | 提示文字 | string  |  请输入+label |
| type | 如果为textarea，那么使用Input.TextArea,否则用Input | “textarea”、|“input”  | “”  |
| textAreaProps | Input.TextArea的props | object  |   |
| extraNode | 追加在输入框后的额外ReactDom节点 | object  |   |
| width | 输入框的宽度，style对象的width | string\|number  | 300  |