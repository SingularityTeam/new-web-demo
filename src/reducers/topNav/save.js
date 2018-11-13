import { fromJS } from 'immutable';
import { SET_MODAL_VISIBLE, SAVE_DISCOVER } from '../../constants/topNav';

const defaultState = fromJS({
  modalVisible: false,
  saveMeta: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBLE:
      return state.set('modalVisible', action.isVisible);
    case SAVE_DISCOVER:
      return state.set('saveMeta', action.meta);
    default:
      return state;
  }
};