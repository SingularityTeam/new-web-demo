import { fromJS } from 'immutable';
import { CHANGE_KEYPATH } from '../constants/home';

const defaultState = fromJS({
  keyPath: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_KEYPATH:
      return state.set('keyPath', action.keyPath);
    default:
      return state;
  }
};
