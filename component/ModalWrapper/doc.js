import React from 'react';
import base from './base.md';
import Code from '../../src/component/Code';
import prop from './props.md';
import Demo1 from './demo/Demo1';
import UseTitle from '../../src/component/UseTitle';

import jsFile from '!!fileContentLoader!../ModalWrapper/index.js';
import Demo1SourceCode from '!!fileContentLoader!./demo/Demo1.js';
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
  </>
);
