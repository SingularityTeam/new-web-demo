import { fromJS } from 'immutable';
import { CHANGE_COLLAPSED, CHANGE_KEYPATH } from '../constants/home';

const defaultState = fromJS({
  isCollapsed: false,
  keyPath: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_COLLAPSED:
      return state.set('isCollapsed', !state.get('isCollapsed'));
    case CHANGE_KEYPATH:
      return state.set('keyPath', action.keyPath);
    default:
      return state;
  }
};
