import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import { VisualizeContainer } from './style';
import TopNav from 'Components/TopNav';
import ChartList from './components/ChartList';
import VisChart from './components/VisChart';

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

const Visualize = () => (
  <Router>
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>可视化</Breadcrumb.Item>
      </Breadcrumb>
      <VisualizeContainer>
        <TopNav typeName="visualize" navItem={navItem} />
        <ChartList />
        <Route path="/visualize/:id" component={VisChart} />
      </VisualizeContainer>
    </Content>
  </Router>
);

export default Visualize;
