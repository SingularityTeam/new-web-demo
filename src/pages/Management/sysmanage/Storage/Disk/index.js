import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import DiskInfo from './DiskInfo';

const { Content } = Layout;
const { Item } = Breadcrumb;

const Disk = () => (
  <Content className="content-wrapper">
    <Breadcrumb className="breadcrumb-wrapper">
      <Item>首页</Item>
      <Item>管理</Item>
      <Item>系统管理</Item>
      <Item>存储管理</Item>
      <Item>磁盘管理</Item>
    </Breadcrumb>
    <div className="container-layout">
      <DiskInfo />
    </div>
  </Content>
);

export default Disk;
