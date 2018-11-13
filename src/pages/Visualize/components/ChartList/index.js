import React from 'react';
import { List, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { ListWrapper } from './style';

const data = [
  {
    id: 1,
    chartType: 'bar-chart',
    title: 'React Vis 直方图'
  },
  {
    id: 2,
    chartType: 'line-chart',
    title: 'React Vis 折线图'
  },
  {
    id: 3,
    chartType: 'dot-chart',
    title: 'React Vis 散点图'
  },
  {
    id: 4,
    chartType: 'stock',
    title: 'Echarts 柱状图'
  },
  {
    id: 5,
    chartType: 'radar-chart',
    title: 'Echarts 关系图'
  }
];

const ChartList = () => (
  <ListWrapper>
    <List
      bordered
      dataSource={data}
      renderItem={({ id, chartType, title }) => (
        <List.Item>
          <Link to={'/visualize/' + id}>
            <Icon type={chartType} />
            <span>{title}</span>
          </Link>
        </List.Item>
      )}
    />
  </ListWrapper>
);

export default ChartList;
