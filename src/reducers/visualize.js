import { fromJS } from 'immutable';
import { FETCH_NPM_DEP_GRAPH } from '../constants/visualize';
import { getGraphChartOption } from '../pages/Visualize/components/ECharts/graph_option';

const defaultState = fromJS({
  isShowLoading: true,
  graphOption: getGraphChartOption()
});

/**
 * 获取到关系图数据并合并到 state
 */
const mergeGraphOption = (state, res) => {
  const newState = state.toJS(); // 先拷贝一份 state 数据并转化为 JS 对象，然后进行修改
  // let { data, edges } = newState.graphOption.series[0];

  // 先将 series 中数据清空，以免数据重复添加
  newState.graphOption.series[0].data = [];
  newState.graphOption.series[0].edges = [];

  res.nodes.forEach(({ x, y, id, label: name, size: symbolSize, color }) =>
    newState.graphOption.series[0].data.push({ x, y, id, name, symbolSize, itemStyle: { normal: { color } } })
  );
  res.edges.forEach(({ sourceID: source, targetID: target }) =>
    newState.graphOption.series[0].edges.push({ source, target })
  );
  
  return state.merge({ isShowLoading: false, graphOption: fromJS(newState.graphOption) });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_NPM_DEP_GRAPH:
      return mergeGraphOption(state, action.data.toJS());
    default:
      return state;
  }
};
