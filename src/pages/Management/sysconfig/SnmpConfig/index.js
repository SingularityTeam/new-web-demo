import React from 'react';
import { Breadcrumb } from 'antd';
import SnmpServeConfig from './SnmpServeConfig';
import SnmpServeTest from './SnmpServeTest';
import '../../style.less';

const SnmpConfig = () => {
  const { Item } = Breadcrumb;
  return (
    <div className="content-wrapper">
      <Breadcrumb className="breadcrumb-wrapper">
        <Item>首页</Item>
        <Item>管理</Item>
        <Item>系统管理</Item>
        <Item>存储管理</Item>
        <Item>磁盘管理</Item>
      </Breadcrumb>
      <div className="snmp">
        <SnmpServeConfig />
        <SnmpServeTest />
      </div>
    </div>
  );
};

export default SnmpConfig;
