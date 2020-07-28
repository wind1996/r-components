const loaderUtils = require('loader-utils');
// 是我要那配置信息的依赖
module.exports = function (source) { // 参数是我们的需解析文件的内容
  // const loaderOptions = loaderUtils.getOptions(this) || {};// 拿到配置信息的方法
  return `export default ${JSON.stringify(source.replace(/\</g, '&lt;'))}`;// 必须要有返回
};
