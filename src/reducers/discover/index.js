import { combineReducers } from 'redux-immutable';
import TableReducer from './table';
const DiscoverReducer = combineReducers({
  table: TableReducer
});

export default DiscoverReducer;
