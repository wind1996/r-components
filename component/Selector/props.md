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
| placeholder | 提示文字 | string  |  请输入+label |
| list |  selector的数组  | [{key:string,value:string}]  | [] |
| hide |  不渲染此组件  | boolean | false |
| labelText |  当label为ReactNode时，需要通过此字段来显示默认的placerholder和错误提示信息  | string |  |
| selectAll |  是否展示全选按钮,此时multiple失效  | boolean | false |
| multiple |  是否多选  | boolean | false |
| allowClear |  运允许置空  | boolean | true |
| showSearch |  可以输入文字过滤选项  | boolean | true |
| showAdd |   显示添加按钮  | boolean | false |
| addItem |   点击添加按钮的回调  | function |  |
| addRender |   用于渲染添加按钮的render函数  | function：ReactNode |  |
