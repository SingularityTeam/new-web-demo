import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import DiscoverTable from './components/Table';
import TopNav from 'Components/TopNav';
import { DiscoverContainer } from './style';

const { Content } = Layout;

const Discover = () => (
  <Content style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>搜索</Breadcrumb.Item>
    </Breadcrumb>
    <DiscoverContainer>
      <TopNav />
      <DiscoverTable />
    </DiscoverContainer>
  </Content>
);

export default Discover;
