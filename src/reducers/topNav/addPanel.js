import { fromJS } from 'immutable';
import { SET_ADD_PANEL_MODAL_VISIBLE } from '../../constants/topNav';

const defaultState = fromJS({
  modalVisible: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ADD_PANEL_MODAL_VISIBLE:
      return state.set('modalVisible', action.isVisible);
    default:
      return state;
  }
};
