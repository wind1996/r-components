## 组件的props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| update |  更新的函数  | function：Promise |  |
| create | 创建的函数 | function:Promise  |   |
| getFormDefaultValue | 获取表单默认信息的函数 | function:Promise  |   |
| onCancel | 点击关闭按钮的回调 | string  |   |
| btnAlign | 取消和确认按钮的对其方式 | string  |   |
| defaultValueFunc | 表单默认值 | string  |   |
| query | ================ | string  |   |
| getDefault | ====================== | string  |   |
| coverDefault | 修改时，通过getFormDefaultValue获取的值，与默认值是合并还是覆盖 | boolean  | true  |
| okText | 确认按钮的文字 | string  | “确认”  |
| cancelText | 取消按钮的文字 | string  | “取消”  |