## Input 介绍

### 使用场景
此组件需要配合`antd`的`Form`组件使用。（配合此组建的Form也可以）

### 做了什么
- 将`ant`d的`Input`组件和`TextArea`组件合成了一个组件，通过`type`字段进行区分，与传统的html类似.
- 将部分与表单有关的代码封装到了组件之中,比如 `antd`的`Form.Item`,组件的value与form的绑定
- 提供了 禁止编辑、隐藏等功能

## 组件预览