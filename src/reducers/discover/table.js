import { fromJS } from 'immutable';
import { FETCH_TABLE_LIST, FETCH_TABLE_DATA, CHANGE_TABLE_LIST } from '../../constants/discover';

// 将数 state 转为 Immutable 类型的数据，以保证数据不可突变
const defaultState = fromJS({
  list: [], // 存放获取到的所有数据，用于加载其他页的数据
  result: [], // 当前页数据
  pagination: { current: 1, total: 500, pageSize: 10 },
  loading: false
});

// 默认加载分页配置信息
const defaultPagination = defaultState.get('pagination');

/**
 * 获取当前页数据
 */

const loadCurrentData = (state, list, pagination = defaultPagination) => {
  const { current, pageSize } = pagination.toJS();
  const result = list.slice(pageSize * (current - 1), pageSize * current);

  // 使用 merge 方法合并多个数据
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
