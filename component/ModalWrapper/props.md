## 组件的props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title |  标题  | Function(showModalParams):ReactNode \| any  | "" |
| footer | 弹窗的footer，用于控制是否展示确认/取消按钮 | string  |   |
| modalConfig | antd Modal的props，可以覆盖此组件追加的部分props | object  |   |
| hideCloseBtn | 隐藏取消按钮 | boolean  | false  |
| cancelType | 取消按钮的type，同Button组件的type | string  |   |
| cancelText | 取消按钮的文字，同Button组件的type | string  |   |
| confirmType | 确认按钮的类型 | string  | primary  |
| confirmText | 确认按钮的文字 | string  | 确认  |