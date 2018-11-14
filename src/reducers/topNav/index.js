import { combineReducers } from 'redux-immutable';
import SaveReducer from './save';
import OpenReducer from './open';
import AddPanelReducer from './addPanel';

const TopNavReducer = combineReducers({
  save: SaveReducer,
  addPanel: AddPanelReducer,
  open: OpenReducer
});

export default TopNavReducer;
