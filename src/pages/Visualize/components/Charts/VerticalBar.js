import React from 'react';
import { VerticalBarSeries } from 'react-vis';
import BaseVis from './VisChart/BaseVis';

const VisChart = () => <BaseVis VisSeries={VerticalBarSeries} />;

export default VisChart;
