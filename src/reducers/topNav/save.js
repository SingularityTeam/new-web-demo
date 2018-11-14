import { fromJS } from 'immutable';
import { SET_SAVE_MODAL_VISIBLE, SAVE_DISCOVER, SAVE_VISUALIZE, SAVE_DASHBOARD } from '../../constants/topNav';

const defaultState = fromJS({
  modalVisible: false,
  saveDiscoverMeta: [],
  saveVisualizeMeta: [],
  saveDashboardMeta: []
});

const saveMeta = (state, meta, saveType) => state.set(saveType, state.get(saveType).push(meta));

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SAVE_MODAL_VISIBLE:
      return state.set('modalVisible', action.isVisible);
    case SAVE_DISCOVER:
      return saveMeta(state, action.meta, 'saveDiscoverMeta');
    case SAVE_VISUALIZE:
      return saveMeta(state, action.meta, 'saveVisualizeMeta');
    case SAVE_DASHBOARD:
      return saveMeta(state, action.meta, 'saveDashboardMeta');
    default:
      return state;
  }
};
