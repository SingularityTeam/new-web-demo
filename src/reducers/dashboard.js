import { fromJS } from 'immutable';
import { ADD_PANEL } from '../constants/dashboard';

const defaultState = fromJS({
  panels: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PANEL:
      return state.set('panels', state.get('panels').push(action.panel));
    default:
      return state;
  }
};
