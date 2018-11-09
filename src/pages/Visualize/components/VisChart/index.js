import React, { Fragment } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LineSeries,
  MarkSeries
} from 'react-vis';
import 'react-vis/dist/style.css';
import { series1, series2, series3 } from './data';
import { VisContainer } from './style';

const VisChart = () => (
  <Fragment>
    <VisContainer>
      <XYPlot height={400} width={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={series1} color="#cd3b54" />
        <VerticalBarSeries data={series2} color="#59b953" />
        <VerticalBarSeries data={series3} color="#ba4fb9" />
      </XYPlot>
    </VisContainer>
    <VisContainer>
      <XYPlot height={400} width={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={series1} color="#cd3b54" />
        <LineSeries data={series2} color="#59b953" />
        <LineSeries data={series3} color="#ba4fb9" />
      </XYPlot>
    </VisContainer>
    <VisContainer>
      <XYPlot height={400} width={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries data={series1} xDomain={[9, 0]} color="#cd3b54" />
        <MarkSeries data={series2} xDomain={[9, 0]} color="#59b953" />
        <MarkSeries data={series3} xDomain={[9, 0]} color="#ba4fb9" />
      </XYPlot>
    </VisContainer>
  </Fragment>
);

export default VisChart;
