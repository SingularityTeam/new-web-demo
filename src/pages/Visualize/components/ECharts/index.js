import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
import getBarChartOption from './bar_option';
import { getLoadingOption } from './graph_option';
import { fetchGraph } from 'Actions/visualize';
import { EchartsContainer } from './style';

class Echarts extends PureComponent {
  static propTypes = {
    isShowLoading: PropTypes.bool.isRequired,
    graphOption: PropTypes.object.isRequired,
    fetchGraphData: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchGraphData } = this.props;
    fetchGraphData();
  }

  render() {
    const { isShowLoading, graphOption } = this.props;
    return (
      <Fragment>
        <EchartsContainer>
          <ReactEcharts option={getBarChartOption()} style={{ width: '600px', height: '400px' }} />
        </EchartsContainer>
        <EchartsContainer>
          <ReactEcharts
            option={graphOption.toJS()}
            style={{ width: '600px', height: '400px' }}
            loadingOption={getLoadingOption()}
            showLoading={isShowLoading}
          />
        </EchartsContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isShowLoading: state.getIn(['visualize', 'isShowLoading']),
  graphOption: state.getIn(['visualize', 'graphOption'])
});

const mapDispatchToProps = dispatch => ({
  fetchGraphData: () => dispatch(fetchGraph())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Echarts);
