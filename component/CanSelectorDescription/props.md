## 组件的props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value |  当前数据的值  | array | string|  |
| list |  selector选择器使用的list  | array |  |
| multiple |  是否多选  | boolean | false |
| showSearch |  是否支持关键字搜索  | boolean | true |
| placeholder |  placeholder  | staring | “” |
| allowClear |  选择框是否展示清空按钮  | boolean | true |
| selectorProps |  select选择器组件的props用于覆盖此组件给出的默认值  | object | {} |
| save |  保存选择器变更的函数,必须返回Promise,Promise reslove修改成功，否则失败  | function:Promise | {} |
| allowNull |  是否允许为空  | boolean | true |
| disabled |  是否禁止编辑  | boolean | false |