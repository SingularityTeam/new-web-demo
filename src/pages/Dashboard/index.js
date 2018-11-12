import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { DashBoardContent, DashBoardBreadcrumb, DashBoardContainer } from './style';

const { Content } = Layout;

const DashBoard = () => (
  <DashBoardContent>
    <Content>
      <DashBoardBreadcrumb>
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>仪表盘</Breadcrumb.Item>
        </Breadcrumb>
      </DashBoardBreadcrumb>
      <DashBoardContainer>仪表盘</DashBoardContainer>
    </Content>
  </DashBoardContent>
);

export default DashBoard;
