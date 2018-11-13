import { combineReducers } from 'redux-immutable';
import SaveReducer from './save';
import AddPanelReducer from './addPanel';

const TopNavReducer = combineReducers({
  save: SaveReducer,
  addPanel: AddPanelReducer
});

export default TopNavReducer;
