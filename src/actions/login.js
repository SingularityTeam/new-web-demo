import { fromJS } from 'immutable';
import { SET_LOGGED_USER } from '../constants/login';

const setLoggedUser = logged => ({
  type: SET_LOGGED_USER,
  logged: fromJS(logged)
});

export { setLoggedUser };
