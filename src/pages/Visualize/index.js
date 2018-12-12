import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import TopNav from 'Components/TopNav';
import ChartList from './components/ChartList';
import VerticalBar from './components/Charts/VerticalBar';
import Line from './components/Charts/Line';
import Mark from './components/Charts/Mark';
import Bar from './components/Charts/Bar';
import Graph from './components/Charts/Graph';

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

const components = [
  {
    id: 1,
    Component: VerticalBar
  },
  {
    id: 2,
    Component: Line
  },
  {
    id: 3,
    Component: Mark
  },
  {
    id: 4,
    Component: Bar
  },
  {
    id: 5,
    Component: Graph
  }
];

const VisComponent = ({ match }) => {
  return components.map(({ id, Component }) => {
    if (String(id) === match.params.id) {
      return <Component key={id} />;
    }
  });
};

const Visualize = ({ match }) => (
  <Router>
    <Content className="content-wrapper">
      <Breadcrumb className="breadcrumb-wrapper">
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>可视化</Breadcrumb.Item>
      </Breadcrumb>
      <div className="container-layout">
        <TopNav typeName="visualize" navItem={navItem} />
        <ChartList />
        <Route path="/visualize/:id" component={VisComponent} />
      </div>
    </Content>
  </Router>
);

Visualize.propTypes = {
  match: PropTypes.object
};

export default Visualize;
