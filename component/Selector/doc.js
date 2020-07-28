import React from 'react';
import Code from '../../src/component/Code';
import prop from './props.md';
import Demo1 from './demo/Demo1';
import UseTitle from '../../src/component/UseTitle';

import jsFile from '!!fileContentLoader!../Selector/index.js';
import lessFile from '!!fileContentLoader!../Selector/style/index.less';

import Demo1SourceCode from '!!fileContentLoader!./demo/Demo1.js';
import base from './base.md';
import MDContent from '../../src/component/MDContent';

export default () => (
  <>
    <MDContent content={base} />
    <Demo1 />
    <br />
    <Code html={Demo1SourceCode} title="示例源码" />
    <MDContent content={prop} />
    <UseTitle />
    <Code html={jsFile} title="js文件" />
    <Code html={lessFile} title="less文件" />
  </>
);
