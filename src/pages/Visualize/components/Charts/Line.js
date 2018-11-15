import React from 'react';
import { LineSeries } from 'react-vis';
import BaseVis from './VisChart/BaseVis';

const VisChart = () => <BaseVis VisSeries={LineSeries} />;

export default VisChart;
