import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_GRAPH } from '../constants/visualize';
import { fetchNpmDepGraph } from 'Actions/visualize';

function* fetchNpmDepData() {
  try {
    const res = yield axios.get('/api/npmdepgraph.min.json');
    const action = fetchNpmDepGraph(res.data);
    yield put(action);
  } catch (e) {
    throw new Error(e);
  }
}

function* watchNpmDepGraph() {
  yield takeEvery(FETCH_GRAPH, fetchNpmDepData);
}

export { watchNpmDepGraph };
