import React, { Fragment } from 'react';
import { Button } from 'antd';
import RollInfo from './RollInfo';

const Roll = () => (
  <Fragment>
    <Button type="primary" icon="plus">
      创建卷
    </Button>
    <div className="panel-wrapper">
      <RollInfo />
    </div>
  </Fragment>
);

export default Roll;
