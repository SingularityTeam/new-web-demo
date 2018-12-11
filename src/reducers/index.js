import { combineReducers } from 'redux-immutable';
import DiscoverReducer from './discover';
import VisualizeReducer from './visualize';
import DashboardReducer from './dashboard';
import TopNavReducer from './topNav';
import LoginReducer from './login';

// 将所有的 reducer 合并在一起，并用 key 值区分
const rootReducer = combineReducers({
  discover: DiscoverReducer,
  visualize: VisualizeReducer,
  dashboard: DashboardReducer,
  topNav: TopNavReducer,
  login: LoginReducer
});

export default rootReducer;
