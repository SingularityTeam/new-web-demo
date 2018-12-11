import { fromJS } from 'immutable';
import { SET_LOGGED_USER } from '../constants/login';

const defaultState = fromJS({
  logged: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return state.set('logged', action.logged);
    default:
      return state;
  }
};
