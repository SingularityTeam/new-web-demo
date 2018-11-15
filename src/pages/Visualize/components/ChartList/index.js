import React from 'react';
import { List, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { ListWrapper } from './style';

const data = [
  {
    id: 1,
    title: 'React Vis 直方图',
    chartType: 'bar-chart'
  },
  {
    id: 2,
    title: 'React Vis 折线图',
    chartType: 'line-chart'
  },
  {
    id: 3,
    title: 'React Vis 散点图',
    chartType: 'dot-chart'
  },
  {
    id: 4,
    title: 'Echarts 柱状图',
    chartType: 'stock'
  },
  {
    id: 5,
    title: 'Echarts 关系图',
    chartType: 'radar-chart'
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
