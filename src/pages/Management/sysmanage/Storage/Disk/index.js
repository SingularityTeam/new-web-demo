import React, { Fragment } from 'react';
import DiskInfo from './DiskInfo';
import ServerPanel from './ServerPanel';

const Disk = () => (
  <Fragment>
    <div className="panel-wrapper">
      <ServerPanel />
    </div>
    <div className="panel-wrapper">
      <DiskInfo />
    </div>
  </Fragment>
);

export default Disk;
