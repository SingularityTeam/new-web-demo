import React from 'react';
import ReactEcharts from 'echarts-for-react';
import getBarChartOption from './ECharts/bar_option';
import { VisContainer } from './style';

const Echarts = () => (
  <VisContainer>
    <ReactEcharts option={getBarChartOption()} style={{ width: '600px', height: '400px' }} />
  </VisContainer>
);

export default Echarts;
