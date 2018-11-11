import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import DiscoverTable from './components/Table';

const { Content } = Layout;

const Discover = () => (
  <Content style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>搜索</Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
      <DiscoverTable />
    </div>
  </Content>
);

export default Discover;
