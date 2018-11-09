import { combineReducers } from 'redux-immutable';
import HomeReducer from './home';
import DiscoverReducer from './discover';
import VisualizeReducer from './visualize';

const rootReducer = combineReducers({
  home: HomeReducer,
  discover: DiscoverReducer,
  visualize: VisualizeReducer
});

export default rootReducer;
