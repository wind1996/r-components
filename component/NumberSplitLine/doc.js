import React from 'react';
import Code from '../../src/component/Code';
import prop from './props.md';
import Demo1 from './demo/Demo1';
import UseTitle from '../../src/component/UseTitle';

import styleFile from '!!fileContentLoader!../NumberSplitLine/style/index.less';
import jsFile from '!!fileContentLoader!../NumberSplitLine/index.js';
import Demo1SourceCode from '!!fileContentLoader!./demo/Demo1.js';
import MDContent from '../../src/component/MDContent';
import base from './base.md';

console.log('1111111111', styleFile);

export default () => (
  <>
    <MDContent content={base} />
    <Demo1 />
    <Code html={Demo1SourceCode} title="示例源码" />
    <MDContent content={prop} />
    <UseTitle />
    <Code html={jsFile} title="js文件" />
    <Code html={styleFile} title="样式文件" />
  </>
);
