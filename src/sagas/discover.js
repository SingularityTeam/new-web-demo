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

function* fetchData(action) {
  try {
    const res = yield axios.get('/api/users');
    const action = fetchTableData(res.data);
    yield put(action);
  } catch (e) {
    throw new Error(e);
  }
}

function* watchTableData() {
  yield takeEvery(FETCH_TABLE_LIST, fetchData);
}

export { watchTableData };
