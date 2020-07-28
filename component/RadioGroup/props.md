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
| list |  selector的数组  | [{key:string,value:string}]  | [] |
| rules | form.getFieldDecorator的第二个参数的rule | []  |   |
| boolean |  当此项为true，list将被指定为[{ key: true, label: ' 是' }, { key: false, label: ' 否' }]  | boolean | false |
