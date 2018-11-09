import { fromJS } from 'immutable';
import { FETCH_GRAPH, FETCH_NPM_DEP_GRAPH } from '../constants/visualize';

const fetchGraph = () => ({
  type: FETCH_GRAPH
});

const fetchNpmDepGraph = data => ({
  type: FETCH_NPM_DEP_GRAPH,
  data: fromJS(data)
});

export { fetchGraph, fetchNpmDepGraph };
