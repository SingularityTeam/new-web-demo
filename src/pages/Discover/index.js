import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import DiscoverTable from './components/Table';
import TopNav from 'Components/TopNav';

const { Content } = Layout;
const { Item } = Breadcrumb;

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
  <Content className="content-wrapper">
    <Breadcrumb className="breadcrumb-wrapper">
      <Item>首页</Item>
      <Item>搜索</Item>
    </Breadcrumb>
    <div className="container-layout">
      <TopNav typeName="discover" navItem={navItem} DiscoverTable={DiscoverTable} />
      <DiscoverTable />
    </div>
  </Content>
);

export default Discover;
