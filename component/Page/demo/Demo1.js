import React, { useCallback, useRef } from 'react';
import { Button } from 'antd';
import Page from '../index';

export default () => (
  <>
    <Page title="这是title">
      content
    </Page>
    <br />
    <Page title="这是title" extra={<Button type="primary">按钮</Button>}>
      content
    </Page>
    <br />
    <Page title="这是title" showGoBackBtn={false}>
      content
    </Page>
  </>
);
