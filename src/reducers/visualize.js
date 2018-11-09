import { fromJS } from 'immutable';
import { FETCH_NPM_DEP_GRAPH } from '../constants/visualize';
import { getGraphChartOption } from '../pages/Visualize/components/ECharts/graph_option';

const defaultState = fromJS({
  isShowLoading: true,
  graphOption: getGraphChartOption()
});

const mergeGraphOption = (state, res) => {
  const newState = state.toJS();
  let { data, edges } = newState.graphOption.series[0];
  res.nodes.forEach(({ x, y, id, label: name, size: symbolSize, color }) =>
    data.push({ x, y, id, name, symbolSize, itemStyle: { normal: { color } } })
  );
  res.edges.forEach(({ sourceID: source, targetID: target }) => edges.push({ source, target }));
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
