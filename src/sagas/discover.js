import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Mock from 'mockjs';
import { FETCH_TABLE_LIST } from '../constants/discover';
import { fetchTableData } from 'Actions/discover';

// 模拟用户数据
Mock.mock(/\/api\/users/, {
  'list|500': [
    {
      'id|+1': 1,
      name: '@name',
      'gender|1': true,
      'age|18-60': 100,
      email: '@EMAIL'
    }
  ]
});

/**
 * 使用 Genterator 函数进行处理异步数据
 */
function* fetchData(action) {
  try {
    const res = yield axios.get('/api/users');
    const action = fetchTableData(res.data);
    yield put(action); // 将 action 发送至 reducer
  } catch (e) {
    // 错误处理
    throw new Error(e);
  }
}

/**
 * 捕获 Action后，对副作用进行处理
 */
function* watchTableData() {
  yield takeEvery(FETCH_TABLE_LIST, fetchData);
}

export { watchTableData };
