import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
import { getLoadingOption } from './ECharts/graph_option';
import { fetchGraph } from 'Actions/visualize';
import { VisContainer } from './style';

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
      <VisContainer>
        <ReactEcharts
          option={graphOption.toJS()}
          style={{ width: '600px', height: '400px' }}
          loadingOption={getLoadingOption()}
          showLoading={isShowLoading}
        />
      </VisContainer>
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
