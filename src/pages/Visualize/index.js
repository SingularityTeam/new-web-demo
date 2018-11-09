import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import VisChart from './components/VisChart';
import Echarts from './components/ECharts';
import { VisualizeContainer } from './style';

const { Content } = Layout;

const Visualize = () => (
  <Content style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>可视化</Breadcrumb.Item>
    </Breadcrumb>
    <VisualizeContainer>
      <VisChart />
      <Echarts />
    </VisualizeContainer>
  </Content>
);

export default Visualize;
