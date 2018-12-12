import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import TopNav from 'Components/TopNav';
import Panel from './components/Panel';

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
  },
  {
    type: 'addPanel',
    icon: 'file-add',
    name: '添加可视化'
  }
];

const DashBoard = () => (
  <Content className="content-wrapper">
    <Breadcrumb className="breadcrumb-wrapper">
      <Item>首页</Item>
      <Item>仪表盘</Item>
    </Breadcrumb>
    <div className="container-layout">
      <TopNav typeName="dashboard" navItem={navItem} />
    </div>
    <Panel />
  </Content>
);

export default DashBoard;
