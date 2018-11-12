import { combineReducers } from 'redux-immutable';
import HomeReducer from './home';
import DiscoverReducer from './discover';
import VisualizeReducer from './visualize';
import TopNavReducer from './topNav';

// 将所有的 reducer 合并在一起，并用 key 值区分
const rootReducer = combineReducers({
  home: HomeReducer,
  discover: DiscoverReducer,
  visualize: VisualizeReducer,
  topNav: TopNavReducer
});

export default rootReducer;
