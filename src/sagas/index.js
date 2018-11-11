import { fork, all } from 'redux-saga/effects';
import { watchTableData } from './discover';
import { watchNpmDepGraph } from './visualize';

// 引入所有的 saga，并使用 redux-saga 的 all 方法和 fork 方法执行所有的 saga
function* rootSaga() {
  yield all([fork(watchTableData), fork(watchNpmDepGraph)]);
}

export default rootSaga;
