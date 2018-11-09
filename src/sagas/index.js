import { fork, all } from 'redux-saga/effects';
import { watchTableData } from './discover';
import { watchNpmDepGraph } from './visualize';

function* rootSaga() {
  yield all([fork(watchTableData), fork(watchNpmDepGraph)]);
}

export default rootSaga;
