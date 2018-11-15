import React from 'react';
import PropTypes from 'prop-types';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import { series1, series2, series3 } from './data';
import { VisContainer } from '../style';
import 'react-vis/dist/style.css';

const BaseVis = ({ VisSeries }) => (
  <VisContainer>
    <XYPlot height={400} width={400}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VisSeries data={series1} color="#cd3b54" />
      <VisSeries data={series2} color="#59b953" />
      <VisSeries data={series3} color="#ba4fb9" />
    </XYPlot>
  </VisContainer>
);

BaseVis.propTypes = {
  VisSeries: PropTypes.any
};

export default BaseVis;
