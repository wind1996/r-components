## ModalConfirm介绍
#### 应用场景？
- 此功能点主要用在某些危险操作有关的逻辑中的二次确认，

#### 为什么会有这个
- 对于二次确认操作，一般只需要配置一下title和点击确定按钮的回调函数就可以了。
- 点击确认时，确认按钮出于loading状态，且弹窗不关闭，当回调函数成功关闭弹框，显示个提示文案。操作失败时弹窗不关闭
#### 此组件作用
1. 将okType默认置为danger。
2. 默认当操作成功时基于文案显示。
3. 目的是减少每次不必要重复配置


## modalConfirm函数参数介绍
1. 第一个参数modalConfig
    - modalConfig在`antd`的基础上增加了`successMessage`,为`boolean`
        - successMessage如果不为false，在此函数的第二个参数所返回的promise状态为为resolve()时，会展示文案。
    - modalConfig不可以设置`onOk`属性，如果需要设置onOk请直接使用antd所提供的组件
    - modalConfig.okType的默认值设置成了`danger`
    - modalConfig类型支持`string`,当类型为String时，即为弹框的title    
2. 第二个参数opsPromise
    - 第二个参数类型需要是`function`,执行参数，会返回一个promise，当所返回的Promise为resolve时，关闭弹窗，并根据第一个参数的`successMessage`属性决定是否展示，提示成功的文案。

## 其他
下面的这些是我的猜想的一些扩展方向，可以通过修改此函数的源代码实现
1. 当异步操作失败时，可以进行某些公共操作，比如上报失败日志。
2. 操作成功时除了提示文字外增加一些逻辑。
3. 修改我所设置的默认值