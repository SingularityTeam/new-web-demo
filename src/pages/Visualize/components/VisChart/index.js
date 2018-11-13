import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LineSeries, MarkSeries, VerticalBarSeries } from 'react-vis';
import BaseVis from './BaseVis';

const VisChart = ({ match }) => {
  // const id = match.params;
  return (
    <Fragment>
      <BaseVis VisSeries={VerticalBarSeries} />
      <BaseVis VisSeries={LineSeries} />
      <BaseVis VisSeries={MarkSeries} />
    </Fragment>
  );
};

VisChart.propTypes = {
  match: PropTypes.object.isRequired
};

export default VisChart;
