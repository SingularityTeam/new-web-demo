import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { DashBoardContainer } from './style';

const { Content } = Layout;

const DashBoard = () => (
  <Content style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>仪表盘</Breadcrumb.Item>
    </Breadcrumb>
    <DashBoardContainer>仪表盘</DashBoardContainer>
  </Content>
);

export default DashBoard;
