import { fromJS } from 'immutable';
import { FETCH_TABLE_LIST, FETCH_TABLE_DATA, CHANGE_TABLE_LIST } from '../constants/discover';

const fetchTableList = () => ({
  type: FETCH_TABLE_LIST
});

const fetchTableData = data => ({
  type: FETCH_TABLE_DATA,
  data: fromJS(data) // 注意将数据以 Immutable 类型传递
});

const changeTableList = (pagination) => ({
  type: CHANGE_TABLE_LIST,
  pagination: fromJS(pagination)
});

export { fetchTableList, fetchTableData, changeTableList };
