import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import DiscoverTable from './components/Table';
import TopNav from 'Components/TopNav';
import { DiscoverContainer } from './style';

const { Content } = Layout;

const navItem = [
  {
    type: 'new',
    icon: 'plus',
    name: '新建'
  },
  {
    type: 'save',
    icon: 'save',
    name: '保存'
  },
  {
    type: 'open',
    icon: 'folder-open',
    name: '打开'
  }
];

const Discover = () => (
  <Content style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>搜索</Breadcrumb.Item>
    </Breadcrumb>
    <DiscoverContainer>
      <TopNav typeName="discover" navItem={navItem} DiscoverTable={DiscoverTable} />
      <DiscoverTable />
    </DiscoverContainer>
  </Content>
);

export default Discover;
