import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import TopNav from 'Components/TopNav';
import Panel from './components/Panel';
import { DashBoardContent, DashBoardBreadcrumb, DashBoardContainer } from './style';

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
  },
  {
    type: 'addPanel',
    icon: 'file-add',
    name: '添加可视化'
  }
];

const DashBoard = () => (
  <DashBoardContent>
    <Content>
      <DashBoardBreadcrumb>
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>仪表盘</Breadcrumb.Item>
        </Breadcrumb>
      </DashBoardBreadcrumb>
      <DashBoardContainer>
        <TopNav typeName="dashboard" navItem={navItem} />
        <Panel />
      </DashBoardContainer>
    </Content>
  </DashBoardContent>
);

export default DashBoard;
