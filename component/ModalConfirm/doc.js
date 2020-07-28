import React from 'react';
import Demo1 from './demo/Demo1';
import Code from '../../src/component/Code';
import MDContent from '../../src/component/MDContent';
import Demo1SourceCode from '!!fileContentLoader!./demo/Demo1';
import jsSource from '!!fileContentLoader!./index.js';
import base from './base.md';

export default () => (
  <>
    <MDContent content={base} />
    <h2>组件预览</h2>
    <Demo1 />
    <Code html={Demo1SourceCode} title="示例源码" showCopy={false} />
    <h2>开始使用</h2>
    <Code html={jsSource} title="JS源码" />
  </>
);
