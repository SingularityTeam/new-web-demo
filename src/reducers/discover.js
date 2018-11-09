import { fromJS } from 'immutable';
import { FETCH_TABLE_LIST, FETCH_TABLE_DATA, CHANGE_TABLE_LIST } from '../constants/discover';

const defaultState = fromJS({
  list: [],
  result: [],
  pagination: { current: 1, total: 500, pageSize: 10 },
  loading: false
});

const defaultPagination = defaultState.get('pagination');

/**
 * 获取当页数据
 */
const loadCurrentData = (state, list, pagination = defaultPagination) => {
  const { current, pageSize } = pagination.toJS();
  const result = list.slice(pageSize * (current - 1), pageSize * current);
  return state.merge({ list, result, pagination, loading: false });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TABLE_LIST:
      return state.set('loading', true);
    case FETCH_TABLE_DATA:
      return loadCurrentData(state, action.data.get('list'));
    case CHANGE_TABLE_LIST:
      return loadCurrentData(state, state.get('list'), action.pagination);
    default:
      return state;
  }
};
